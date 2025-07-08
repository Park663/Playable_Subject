using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }


    public bool isPlaying = false;
    public float itemSpeed = 10f;
    public float spawnInterval = 1f;
    public float spawnCoolTime = 0;

    public Transform itemEndPos;
    public List<Transform> itemSpawnPos = new List<Transform>();

    public float traySpeed = 10f;
    public List<Transform> trayPos = new List<Transform>();

    public List<Trays> trays = new List<Trays>();

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

    public void GameOver()
    {
        isPlaying = false;
    }

    public ObjectType TrayTypeChange()
    {
        bool b = true;

        int n = -1; 
        do
        {
            b = true;
            n = UnityEngine.Random.Range(0, (int)ObjectType.Count);

            foreach(var v in trays)
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
