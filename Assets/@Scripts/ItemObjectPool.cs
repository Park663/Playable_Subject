using System.Collections.Generic;
using UnityEngine;

public class ItemObjectPool : MonoBehaviour
{
    public static ItemObjectPool Instance { get; private set; }

    public Queue<GameObject> itemPool = new Queue<GameObject>();
    private int defaultCapacity = 21;
    private int maxSize = 50;

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

        // 초기 생성
        for (int i = 0; i < defaultCapacity; i++)
        {
            var obj = CreateItem();
            obj.SetActive(false);
            itemPool.Enqueue(obj);
        }
    }

    private GameObject CreateItem()
    {
        GameObject obj = Instantiate(itemPrefab, itemParent);
        return obj;
    }

    public GameObject Get()
    {
        GameObject obj;
        if (itemPool.Count > 0)
        {
            obj = itemPool.Dequeue();
        }
        else
        {
            obj = CreateItem();
        }
        obj.SetActive(true);
        return obj;
    }

    public void Release(GameObject item)
    {
        if (itemPool.Count >= maxSize)
        {
            Destroy(item);
            return;
        }

        item.SetActive(false);
        itemPool.Enqueue(item);
    }
}
