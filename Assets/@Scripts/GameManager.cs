using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

    [Tooltip("게임 진행 상황")] public bool isPlaying;
    [Tooltip("튜토리얼")] public GameObject tutorial;
    [Tooltip("게임 오버")] public GameObject gameOver;

    [Header("-----아이템 파라미터-----")]
    [Tooltip("아이템 이동 속도"), Range(0,10f)] public float itemSpeed;
    [SerializeField, Range(0, 10f), Tooltip("아이템 생성 간격")] private float spawnInterval;
    [SerializeField, Range(0, 10f), Tooltip("아이템 생성까지 남은 시간")] private float spawnCoolTime;
    [SerializeField, Tooltip("아이템 생성 위치")] List<Transform> itemSpawnPos = new List<Transform>();
    [Tooltip("아이템 소멸 위치")] public Transform itemEndPos;

    [Header("-----트레이 파라미터-----")]
    [Tooltip("트레이 이동 속도"), Range(0, 10f)] public float traySpeed;
    [Tooltip("트레이 생성 및 소멸 위치")] public List<Transform> trayPos = new List<Transform>();
    [SerializeField, Tooltip("트레이")] private List<Trays> trays = new List<Trays>();

    void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    private void Update()
    {
        if (!isPlaying) return;

        SpawnItem();
    }

    /// <summary>
    /// 일정 속도로 아이템 스폰
    /// </summary>
    private void SpawnItem()
    {
        if (spawnCoolTime >= spawnInterval)
        {
            spawnCoolTime = 0;

            foreach (var v in itemSpawnPos)
            {
                ItemObjectPool.Instance.itemPool.Get().transform.position = v.position;
            }
        }
        else
        {
            spawnCoolTime += Time.deltaTime;
        }
    }

    /// <summary>
    /// 클릭한 아이템이 트레이에 들어갈 수 있는지 확인
    /// </summary>
    /// <param name="item">클릭한 아이템</param>
    public void AccuracyCheck(Items item)
    {
        foreach (var tray in trays)
        {
            var status = tray.status;

            if (!status.interactable || status.trayType != item.objType)
                continue;


            item.OnClicked(true);
            tray.AddItem(item);
            return;
        }
        item.OnClicked(false);
    }

    /// <summary>
    /// 게임 시작
    /// </summary>
    public void GameStart()
    {
        if (!isPlaying && tutorial.activeSelf)
        {
            isPlaying = true;
            tutorial.SetActive(false);
        }
    }
    
    /// <summary>
    /// 게임 오버
    /// </summary>
    public void GameOver()
    {
        isPlaying = false;
        gameOver.SetActive(true);
    }

    /// <summary>
    /// 트레이 최하단 도달 시 아이템 종류 변경
    /// </summary>
    /// <returns>아이템 종류 반환</returns>
    public ObjectType TrayTypeChange()
    {
        bool b = true;
        int n = -1;

        do // 이미 존재하는 3개의 트레이 종류와 겹치기 않도록
        {
            b = true;
            n = UnityEngine.Random.Range(0, (int)ObjectType.Count);

            foreach (var v in trays)
            {
                if (n == (int)v.status.trayType)
                {
                    b = false; break;
                }
            }

        } while (!b);

        return (ObjectType)n;
    }
}
