using System;
using UnityEngine;

[Serializable]

public struct TrayStatus // 트레이 종류
{
    public int trayNo; // 트레이 번호
    public ObjectType trayType; // 아이템과 동일한 종류
    public bool interactable; // 상호작용 여부 (화면 밖, 3개 적재 완료 등)
    public int itemCount; // 적재된 아이템 개수
}

[Serializable]
public struct MeshMap // 아이템 종류
{
    public ObjectType type; // 아이템 종류
    public Mesh mesh; // 아이템 별 모델링
    public Material material; // 아이템 별 머티리얼
}

public enum ObjectType // 아이템 종류
{
    Coke = 0,
    Juice,
    Pringles,
    Bars,
    Yoplait,
    Count // 아이템 개수 확인 용
}