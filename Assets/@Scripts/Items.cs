using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;


public class Items : MonoBehaviour
{   
    [SerializeField, Tooltip("아이템 종류, 메쉬, 머티리얼")] private List<MeshMap> meshes;
    [Tooltip("아이템의 종류")] public ObjectType objType;

    public bool preSet; // 미리 생성된 아이템은 랜덤을 적용하지 않음

    // 메쉬와 머티리얼 자가 참조용
    [HideInInspector] public MeshFilter meshFilter;
    [HideInInspector] public Renderer rendererMaterial;


    private void Awake()
    {
        meshFilter = GetComponent<MeshFilter>();
        rendererMaterial = GetComponent<Renderer>();
    }

    private void OnEnable()
    {
        if (preSet) return;
        RandomMesh();
    }

    private void RandomMesh()
    {
        int n = UnityEngine.Random.Range(0, (int)ObjectType.Count);
        objType = (ObjectType)n;   
        meshFilter.mesh = meshes[n].mesh;
        rendererMaterial.material = meshes[n].material;
    }

    private void Update()
    {
        if (!GameManager.Instance.isPlaying) return;

        Move();
    }

    /// <summary>
    /// 아이템 이동
    /// </summary>
    public void Move()
    {
        if (transform.position.y >= GameManager.Instance.itemEndPos.position.y)
        {
            ItemObjectPool.Instance.Release(gameObject);
            return;
        }
        transform.Translate(Vector2.up * GameManager.Instance.itemSpeed * Time.deltaTime);
    }

    /// <summary>
    /// 아이템 클릭 시 동작
    /// </summary>
    /// <param name="moveToTray">트레이에 들어가는 여부</param>
    public void OnClicked(bool moveToTray)
    {
        if (moveToTray)
        {
            SoundManager.Instance.SFXControll(0);
            ItemObjectPool.Instance.Release(gameObject);
        }
        else
        {
            SoundManager.Instance.SFXControll(1);
            Vector3 originalPos = transform.localPosition;

            // 좌우 2번 반복 (총 4번 움직임: 좌→우→좌→우→원위치)
            transform.DOLocalMoveX(originalPos.x + 0.3f, 0.1f)
                .SetLoops(4, LoopType.Yoyo)
                .SetEase(Ease.InOutSine)
                .OnComplete(() => transform.localPosition = new Vector3(originalPos.x, transform.localPosition.y,originalPos.z)); // 정확한 위치 복원

        }
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

