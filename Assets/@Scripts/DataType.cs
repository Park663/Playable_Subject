using System;
using UnityEngine;

public struct TrayStatus
{
    public ObejectType trayType;
    public bool interactable;
    public int itemCount;
}

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