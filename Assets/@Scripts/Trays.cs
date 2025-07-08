using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Trays : MonoBehaviour
{
    private Camera mainCam;
    private bool wasVisibleLastFrame = false;

    public TrayStatus status;

    [SerializeField] private List<GameObject> displayItems;

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

        status.itemCount = 0;
        status.interactable = false;
        status.trayType = GameManager.Instance.TrayTypeChange();

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

        status.itemCount++;
        if (status.itemCount == 3) status.interactable = false;
    }
}
