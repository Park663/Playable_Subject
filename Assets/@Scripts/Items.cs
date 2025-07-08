using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public struct MeshMap
{
    public ObejectType type;
    public Mesh mesh;
    public Material material;
}
public enum ObejectType
{
    Coke = 0,
    Juice,
    Pringles,
    Bars,
    Yoplait,
    Count
}

public class Items : MonoBehaviour
{   
    [SerializeField] private List<MeshMap> meshes;
    [SerializeField] private ObejectType objType;

    private MeshFilter meshFilter;
    private Renderer rendererMaterial;

    private float moveSpeed = 1f;

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
        int n = UnityEngine.Random.Range(0, (int)ObejectType.Count);
        objType = (ObejectType)n;   
        meshFilter.mesh = meshes[n].mesh;
        rendererMaterial.material = meshes[n].material;
    }
    private void Update()
    {
        if (!GameManager.Instance.isPlaying) return;

        if(transform.position.y >= GameManager.Instance.endPos.position.y) ItemObjectPool.Instance.itemPool.Release(gameObject);
        transform.Translate(Vector2.up * GameManager.Instance.itemSpeed * Time.deltaTime);
    }
}

