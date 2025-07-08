using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
	[SerializeField]
	private List<AudioClip> audios;

	[SerializeField]
	private AudioSource bgm;

	[SerializeField]
	private AudioSource sfx;

	public static SoundManager Instance { get; private set; }

	private void Awake()
	{
		if (Instance != null && Instance != this)
		{
			Object.Destroy(base.gameObject);
			return;
		}
		Instance = this;
		Object.DontDestroyOnLoad(base.gameObject);
	}

	public void BgmControll(bool play)
	{
		if (play)
		{
			bgm.Play();
		}
		else
		{
			bgm.Stop();
		}
	}

	public void SFXControll(int no)
	{
		sfx.clip = audios[no];
		sfx.Play();
	}
}
