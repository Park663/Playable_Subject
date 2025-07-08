using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class Items : MonoBehaviour
{
	[SerializeField]
	[Tooltip("아이템 종류, 메쉬, 머티리얼")]
	private List<MeshMap> meshes;

	[Tooltip("아이템의 종류")]
	public ObjectType objType;

	public bool preSet;

	[HideInInspector]
	public MeshFilter meshFilter;

	[HideInInspector]
	public Renderer rendererMaterial;

	private void Awake()
	{
		meshFilter = GetComponent<MeshFilter>();
		rendererMaterial = GetComponent<Renderer>();
	}

	private void OnEnable()
	{
		if (!preSet)
		{
			RandomMesh();
		}
	}

	private void RandomMesh()
	{
		int i = (int)(objType = (ObjectType)Random.Range(0, 5));
		meshFilter.mesh = meshes[i].mesh;
		rendererMaterial.material = meshes[i].material;
	}

	private void Update()
	{
		if (GameManager.Instance.isPlaying)
		{
			Move();
		}
	}

	public void Move()
	{
		if (base.transform.position.y >= GameManager.Instance.itemEndPos.position.y)
		{
			ItemObjectPool.Instance.Release(base.gameObject);
		}
		else
		{
			base.transform.Translate(Vector2.up * GameManager.Instance.itemSpeed * Time.deltaTime);
		}
	}

	public void OnClicked(bool moveToTray)
	{
		if (moveToTray)
		{
			SoundManager.Instance.SFXControll(0);
			ItemObjectPool.Instance.Release(base.gameObject);
			return;
		}
		SoundManager.Instance.SFXControll(1);
		Vector3 originalPos = base.transform.localPosition;
		base.transform.DOLocalMoveX(originalPos.x + 0.3f, 0.1f).SetLoops(4, LoopType.Yoyo).SetEase(Ease.InOutSine)
			.OnComplete(delegate
			{
				base.transform.localPosition = new Vector3(originalPos.x, base.transform.localPosition.y, originalPos.z);
			});
	}

	private void OnMouseDown()
	{
		GameManager.Instance.GameStart();
		GameManager.Instance.AccuracyCheck(this);
	}

	private void OnDisable()
	{
		preSet = false;
	}
}
