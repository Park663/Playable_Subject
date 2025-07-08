using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Pool;

public class ItemObjectPool : MonoBehaviour
{
    public static ItemObjectPool Instance { get; private set; }
    // ������Ʈ Ǯ ����
    private int defaultCapacity = 21;
    private int maxSize = 50;
    public IObjectPool<GameObject> itemPool;

    [SerializeField, Tooltip("������ ������")] private GameObject itemPrefab;
    [SerializeField, Tooltip("������ ������ �θ� ������Ʈ")] private Transform itemParent;

    void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);

        itemPool = new ObjectPool<GameObject>(CreateItem, EnableItem, DisableItem, DestroyItem, true, defaultCapacity, maxSize);
    }
    private GameObject CreateItem()
    {
        GameObject obj = Instantiate(itemPrefab, itemParent);
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
