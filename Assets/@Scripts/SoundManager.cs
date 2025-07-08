using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    public static SoundManager Instance { get; private set; }

    [SerializeField] private List<AudioClip> audios;
    [SerializeField] private AudioSource bgm;
    [SerializeField] private AudioSource sfx;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        DontDestroyOnLoad(gameObject);
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
