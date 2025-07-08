using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class Trays : MonoBehaviour
{
    private Camera mainCam;
    private bool wasVisibleLastFrame = false;

    public TrayStatus status;

    [SerializeField] private List<GameObject> displayItems;
    [SerializeField] private List<Sprite> labelImages;

    [SerializeField] private RectTransform label;
    public Image itemLabel;
    public TextMeshProUGUI labelText;

    public Transform labelPos;

    private void Awake()
    {
        mainCam = Camera.main;
    }

    private void Update()
    {
        if (!GameManager.Instance.isPlaying) return;
        VisibilityCheck();
        Move();

    }

    private void Move()
    {
        if (transform.position.y <= GameManager.Instance.trayPos[1].position.y)
        {
            ResetTray();
            transform.position = GameManager.Instance.trayPos[0].position;
            return;
        }

        transform.Translate(Vector2.down * GameManager.Instance.traySpeed * Time.deltaTime);
        label.position = labelPos.position;

    }

    private void VisibilityCheck()
    {
        Vector3 viewPos = mainCam.WorldToViewportPoint(transform.position);
        bool isVisibleNow = viewPos.x >= 0f && viewPos.x <= 1f &&
                            viewPos.y >= 0f && viewPos.y <= 1f &&
                            viewPos.z > 0f;

        if (!wasVisibleLastFrame && isVisibleNow)
        {
            OnEnterScreen();
        }
        else if (wasVisibleLastFrame && !isVisibleNow)
        {
            OnExitScreen();
        }

        wasVisibleLastFrame = isVisibleNow;
    }

    private void OnEnterScreen()
    {
        status.interactable = true;
        label.gameObject.SetActive(true);
    }

    private void OnExitScreen()
    {
        if (CheckTray())
        {

        }
        else
        {
            GameManager.Instance.GameOver();
        }
    }

    private void ResetTray()
    {
        foreach (var v in displayItems)
        {
            v.SetActive(false);
        }
        label.gameObject.SetActive(false);
        status.itemCount = 0;
        status.interactable = false;

        ObjectType type = GameManager.Instance.TrayTypeChange();
        status.trayType = type;

        itemLabel.sprite = labelImages[(int)type];
        labelText.text = "/ 3";
    }

    private bool CheckTray()
    {
        return status.itemCount == 3;
    }

    public void AddItem(Items item)
    {
        displayItems[status.itemCount].SetActive(true);
        displayItems[status.itemCount].GetComponent<MeshFilter>().mesh = item.meshFilter.mesh;
        displayItems[status.itemCount].GetComponent<Renderer>().material = item.rendererMaterial.material;
        labelText.text = " / " + (2 - status.itemCount);

        status.itemCount++;

        if (status.itemCount == 3)
        {
            status.interactable = false;
            labelText.text = "";

        }
    }
}
