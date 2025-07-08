using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Pool;

public class ItemObjectPool : MonoBehaviour
{
    public static ItemObjectPool Instance { get; private set; }
    // 오브젝트 풀 설정
    private int defaultCapacity = 21;
    private int maxSize = 50;
    public IObjectPool<GameObject> itemPool;

    [SerializeField, Tooltip("아이템 프리팹")] private GameObject itemPrefab;
    [SerializeField, Tooltip("아이템 생성할 부모 오브젝트")] private Transform itemParent;

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
