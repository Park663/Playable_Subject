using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;



public class Items : MonoBehaviour
{   
    [SerializeField] private List<MeshMap> meshes;
    [SerializeField] public ObjectType objType;

    public MeshFilter meshFilter;
    public Renderer rendererMaterial;


    private void Awake()
    {
        meshFilter = GetComponent<MeshFilter>();
        rendererMaterial = GetComponent<Renderer>();
    }

    private void OnEnable()
    {
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

        if (transform.position.y >= GameManager.Instance.itemEndPos.position.y)
        {
            ItemObjectPool.Instance.itemPool.Release(gameObject);
            return;
        }
        transform.Translate(Vector2.up * GameManager.Instance.itemSpeed * Time.deltaTime);
    }

    public void OnClicked(bool b)
    {
        if (b)
        {
            ItemObjectPool.Instance.itemPool.Release(gameObject);
        }
    }

    private void OnMouseDown()
    {
        GameManager.Instance.AccuracyCheck(this);
    }
}

