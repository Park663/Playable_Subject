using System;
using UnityEngine;

[Serializable]

public struct TrayStatus
{
    public int trayNo;
    public ObjectType trayType;
    public bool interactable;
    public int itemCount;
}

[Serializable]
public struct MeshMap
{
    public ObjectType type;
    public Mesh mesh;
    public Material material;
}
public enum ObjectType
{
    Coke = 0,
    Juice,
    Pringles,
    Bars,
    Yoplait,
    Count
}