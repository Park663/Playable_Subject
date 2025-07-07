using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Pool;

public class ItemObjectPool : MonoBehaviour
{
    public static ItemObjectPool Instance { get; private set; }

    [SerializeField] private GameObject itemPrefab;
    [Range(0, 50)] public int defaultCapacity = 10;
    [Range(0, 50)] public int maxSize = 30;

    public IObjectPool<GameObject> itemPool;

    void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);

        itemPool = new ObjectPool<GameObject>(CreateItem, EnableItem, DisableItem, DestroyItem,true, defaultCapacity, maxSize);
    }
    private GameObject CreateItem()
    {
        GameObject obj = Instantiate(itemPrefab);
        return obj;
    }
    private void EnableItem(GameObject item)
    {
        item.SetActive(true);
    }
    private void DisableItem(GameObject item)
    {
        item.SetActive(false);
    }
    private void DestroyItem(GameObject item)
    {
        Destroy(item);
    }

}
