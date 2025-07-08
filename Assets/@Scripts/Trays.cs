using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class Trays : MonoBehaviour
{
    private Camera mainCam; // 메인 카메라
    private bool wasVisibleLastFrame = false; // 화면 출입 시 콜백 용

    public TrayStatus status;

    [SerializeField, Tooltip("아이템 획득 시 표시될 오브젝트")] private List<GameObject> displayItems;

    [Header("-----UI 파라미터-----")]
    [SerializeField, Tooltip("UI 부착 위치")] private Transform labelPos;
    [SerializeField, Tooltip("아이템 이미지 리스트")] private List<Sprite> labelImages;
    [SerializeField, Tooltip("UI 캔버스 내 위치")] private RectTransform label;
    [SerializeField, Tooltip("아이템 이미지")] private Image itemLabel;
    [SerializeField, Tooltip("아이템 개수 텍스트")] private TextMeshProUGUI labelText;
    [SerializeField, Tooltip("성공 후 이미지")] private GameObject starImage;

    public bool tutorial = true;

    private void Awake()
    {
        mainCam = Camera.main;
        label.position = labelPos.position;
    }

    private void Update()
    {
        if (!GameManager.Instance.isPlaying) return;
        VisibilityCheck();
        Move();
    }

    /// <summary>
    /// 트레이와 UI 이동
    /// </summary>
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

    /// <summary>
    /// 트레이가 화면을 출입할 때 콜백 
    /// </summary>
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

    /// <summary>
    /// 트레이가 화면 안으로 들어올 때 동작
    /// </summary>
    private void OnEnterScreen()
    {
        if (tutorial) return;
   
        status.interactable = true; // 화면 안으로 들어온 순간부터 아이템 적재 가능
        label.gameObject.SetActive(true);
    }

    /// <summary>
    /// 트레이가 화면 밖으로 나갈 때 동작
    /// </summary>
    private void OnExitScreen()
    {
        if (!CheckTray()) // 다 못채우면 게임 오버
        {
            GameManager.Instance.GameOver();
        }
    }

    /// <summary>
    /// 트레이 정보 초기화
    /// </summary>
    private void ResetTray()
    {
        tutorial = false;
        foreach (var v in displayItems) // 전시용 오브젝트 끄기
        {
            v.SetActive(false);
        }

        status.itemCount = 0;
        status.interactable = false;

        
        ObjectType type = GameManager.Instance.TrayTypeChange(); // 아이템 종류 랜덤 변경
        status.trayType = type;

        // UI 초기화
        label.gameObject.SetActive(false);
        itemLabel.sprite = labelImages[(int)type];
        labelText.text = "/ 3";
        starImage.SetActive(false);
    }

    /// <summary>
    /// 아이템 적재 여부 확인
    /// </summary>
    /// <returns>성공, 실패 여부 반환</returns>
    private bool CheckTray()
    {
        return status.itemCount == 3;
    }

    /// <summary>
    /// 아이템 클릭 시 트레이 확인
    /// </summary>
    /// <param name="item">클릭한 아이템</param>
    public void AddItem(Items item)
    {
        displayItems[status.itemCount].SetActive(true);
        displayItems[status.itemCount].GetComponent<MeshFilter>().mesh = item.meshFilter.mesh;
        displayItems[status.itemCount].GetComponent<Renderer>().material = item.rendererMaterial.material;
        labelText.text = " / " + (2 - status.itemCount);

        status.itemCount++;

        if (status.itemCount == 3) // 3개 모두 적재 시 비활성화
        {
            status.interactable = false;
            labelText.text = "";
            starImage.SetActive(true);
        }
    }
}
