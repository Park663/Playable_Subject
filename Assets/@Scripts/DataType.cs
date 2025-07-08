using System;
using UnityEngine;

[Serializable]

public struct TrayStatus // Ʈ���� ����
{
    public int trayNo; // Ʈ���� ��ȣ
    public ObjectType trayType; // �����۰� ������ ����
    public bool interactable; // ��ȣ�ۿ� ���� (ȭ�� ��, 3�� ���� �Ϸ� ��)
    public int itemCount; // ����� ������ ����
}

[Serializable]
public struct MeshMap // ������ ����
{
    public ObjectType type; // ������ ����
    public Mesh mesh; // ������ �� �𵨸�
    public Material material; // ������ �� ��Ƽ����
}

public enum ObjectType // ������ ����
{
    Coke = 0,
    Juice,
    Pringles,
    Bars,
    Yoplait,
    Count // ������ ���� Ȯ�� ��
}