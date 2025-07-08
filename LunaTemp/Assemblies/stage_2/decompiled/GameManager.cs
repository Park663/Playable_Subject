using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
	[Tooltip("게임 진행 상황")]
	public bool isPlaying;

	[Tooltip("튜토리얼")]
	public GameObject tutorial;

	[Tooltip("게임 오버")]
	public GameObject gameOver;

	[Header("-----아이템 파라미터-----")]
	[Tooltip("아이템 이동 속도")]
	[Range(0f, 10f)]
	public float itemSpeed;

	[SerializeField]
	[Range(0f, 10f)]
	[Tooltip("아이템 생성 간격")]
	private float spawnInterval;

	[SerializeField]
	[Range(0f, 10f)]
	[Tooltip("아이템 생성까지 남은 시간")]
	private float spawnCoolTime;

	[SerializeField]
	[Tooltip("아이템 생성 위치")]
	private List<Transform> itemSpawnPos = new List<Transform>();

	[Tooltip("아이템 소멸 위치")]
	public Transform itemEndPos;

	[Header("-----트레이 파라미터-----")]
	[Tooltip("트레이 이동 속도")]
	[Range(0f, 10f)]
	public float traySpeed;

	[Tooltip("트레이 생성 및 소멸 위치")]
	public List<Transform> trayPos = new List<Transform>();

	[SerializeField]
	[Tooltip("트레이")]
	private List<Trays> trays = new List<Trays>();

	public static GameManager Instance { get; private set; }

	private void Awake()
	{
		if (Instance != null && Instance != this)
		{
			Object.Destroy(base.gameObject);
			return;
		}
		Instance = this;
		Object.DontDestroyOnLoad(base.gameObject);
	}

	private void Update()
	{
		if (isPlaying)
		{
			SpawnItem();
		}
	}

	private void SpawnItem()
	{
		if (spawnCoolTime >= spawnInterval)
		{
			spawnCoolTime = 0f;
			{
				foreach (Transform v in itemSpawnPos)
				{
					ItemObjectPool.Instance.Get().transform.position = v.position;
				}
				return;
			}
		}
		spawnCoolTime += Time.deltaTime;
	}

	public void AccuracyCheck(Items item)
	{
		foreach (Trays tray in trays)
		{
			TrayStatus status = tray.status;
			if (!status.interactable || status.trayType != item.objType)
			{
				continue;
			}
			item.OnClicked(true);
			tray.AddItem(item);
			return;
		}
		item.OnClicked(false);
	}

	public void GameStart()
	{
		if (!isPlaying && tutorial.activeSelf)
		{
			SoundManager.Instance.BgmControll(true);
			isPlaying = true;
			tutorial.SetActive(false);
		}
	}

	public void GameOver()
	{
		SoundManager.Instance.BgmControll(false);
		isPlaying = false;
		gameOver.SetActive(true);
	}

	public ObjectType TrayTypeChange()
	{
		bool b = true;
		int i = -1;
		do
		{
			b = true;
			i = Random.Range(0, 5);
			foreach (Trays v in trays)
			{
				if (i == (int)v.status.trayType)
				{
					b = false;
					break;
				}
			}
		}
		while (!b);
		return (ObjectType)i;
	}
}
