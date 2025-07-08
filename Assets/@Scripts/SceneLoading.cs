using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneLoading : MonoBehaviour
{
    public void Start()
    {
        StartCoroutine(LoadSceneAsyncExample());
    }
    IEnumerator LoadSceneAsyncExample()
    {
        AsyncOperation operation = SceneManager.LoadSceneAsync("01_Main");

        while (!operation.isDone)
        {
            float progress = Mathf.Clamp01(operation.progress / 0.9f);
            Debug.Log("Loading... " + (progress * 100) + "%");
            yield return null;
        }
    }
}
