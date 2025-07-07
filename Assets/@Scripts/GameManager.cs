using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public bool isPlaying = false;


    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            ItemObjectPool.Instance.itemPool.Get();
        }
    }
}
