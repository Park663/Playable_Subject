using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class Trays : MonoBehaviour
{
	private Camera mainCam;

	private bool wasVisibleLastFrame = false;

	public TrayStatus status;

	[SerializeField]
	[Tooltip("아이템 획득 시 표시될 오브젝트")]
	private List<GameObject> displayItems;

	[Header("-----UI 파라미터-----")]
	[SerializeField]
	[Tooltip("UI 부착 위치")]
	private Transform labelPos;

	[SerializeField]
	[Tooltip("아이템 이미지 리스트")]
	private List<Sprite> labelImages;

	[SerializeField]
	[Tooltip("UI 캔버스 내 위치")]
	private RectTransform label;

	[SerializeField]
	[Tooltip("아이템 이미지")]
	private Image itemLabel;

	[SerializeField]
	[Tooltip("아이템 개수 텍스트")]
	private TextMeshProUGUI labelText;

	[SerializeField]
	[Tooltip("성공 후 이미지")]
	private GameObject starImage;

	public bool tutorial = true;

	private void Awake()
	{
		mainCam = Camera.main;
		label.position = labelPos.position;
	}

	private void Update()
	{
		if (GameManager.Instance.isPlaying)
		{
			VisibilityCheck();
			Move();
		}
	}

	private void Move()
	{
		if (base.transform.position.y <= GameManager.Instance.trayPos[1].position.y)
		{
			ResetTray();
			base.transform.position = GameManager.Instance.trayPos[0].position;
		}
		else
		{
			base.transform.Translate(Vector2.down * GameManager.Instance.traySpeed * Time.deltaTime);
			label.position = labelPos.position;
		}
	}

	private void VisibilityCheck()
	{
		Vector3 viewPos = mainCam.WorldToViewportPoint(base.transform.position);
		bool isVisibleNow = viewPos.x >= 0f && viewPos.x <= 1f && viewPos.y >= 0f && viewPos.y <= 1f && viewPos.z > 0f;
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
		if (!tutorial)
		{
			status.interactable = true;
			label.gameObject.SetActive(true);
		}
	}

	private void OnExitScreen()
	{
		if (!CheckTray())
		{
			GameManager.Instance.GameOver();
		}
	}

	private void ResetTray()
	{
		tutorial = false;
		foreach (GameObject v in displayItems)
		{
			v.SetActive(false);
		}
		status.itemCount = 0;
		status.interactable = false;
		ObjectType type = GameManager.Instance.TrayTypeChange();
		status.trayType = type;
		label.gameObject.SetActive(false);
		itemLabel.sprite = labelImages[(int)type];
		labelText.text = "/ 3";
		starImage.SetActive(false);
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
			starImage.SetActive(true);
		}
	}
}
