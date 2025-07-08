using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }


    public bool isPlaying = false;
    public List<Items> items;
    public List<Transform> itemTransform;
    public float itemSpeed = 10f;
    public float spawnInterval = 1f;

    public Transform endPos;

    public float spawnCount = 0;
    public List<Transform> spawnPos = new List<Transform>();
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
        if (spawnCount >= spawnInterval)
        {
            spawnCount = 0;
            
            foreach (var v in spawnPos)
            {
                ItemObjectPool.Instance.itemPool.Get().transform.position = v.position;

            }

        }
        else
        {
            spawnCount += Time.deltaTime;
        }
    }


}
