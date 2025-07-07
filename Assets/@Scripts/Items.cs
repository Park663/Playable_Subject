using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public struct MeshMap
{
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

    private MeshFilter meshFilter;
    private Renderer rendererMaterial;

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
        meshFilter.mesh = meshes[n].mesh;
        rendererMaterial.material = meshes[n].material;
    }
}

