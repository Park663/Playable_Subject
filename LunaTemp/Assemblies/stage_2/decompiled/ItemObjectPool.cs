using System.Collections.Generic;
using UnityEngine;

public class ItemObjectPool : MonoBehaviour
{
	public Queue<GameObject> itemPool = new Queue<GameObject>();

	private int defaultCapacity = 21;

	private int maxSize = 50;

	[SerializeField]
	[Tooltip("아이템 프리팹")]
	private GameObject itemPrefab;

	[SerializeField]
	[Tooltip("아이템 생성할 부모 오브젝트")]
	private Transform itemParent;

	public static ItemObjectPool Instance { get; private set; }

	private void Awake()
	{
		if (Instance != null && Instance != this)
		{
			Object.Destroy(base.gameObject);
			return;
		}
		Instance = this;
		Object.DontDestroyOnLoad(base.gameObject);
		for (int i = 0; i < defaultCapacity; i++)
		{
			GameObject obj = CreateItem();
			obj.SetActive(false);
			itemPool.Enqueue(obj);
		}
	}

	private GameObject CreateItem()
	{
		return Object.Instantiate(itemPrefab, itemParent);
	}

	public GameObject Get()
	{
		GameObject obj = ((itemPool.Count <= 0) ? CreateItem() : itemPool.Dequeue());
		obj.SetActive(true);
		return obj;
	}

	public void Release(GameObject item)
	{
		if (itemPool.Count >= maxSize)
		{
			Object.Destroy(item);
			return;
		}
		item.SetActive(false);
		itemPool.Enqueue(item);
	}
}
