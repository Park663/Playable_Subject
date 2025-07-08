using System;

[Serializable]
public struct TrayStatus
{
	public int trayNo;

	public ObjectType trayType;

	public bool interactable;

	public int itemCount;
}
