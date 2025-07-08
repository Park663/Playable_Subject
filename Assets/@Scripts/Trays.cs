using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Trays : MonoBehaviour
{
    private void Update()
    {
        if (!GameManager.Instance.isPlaying) return;

        if (transform.position.y <= GameManager.Instance.trayPos[1].position.y)
        {
            transform.position = GameManager.Instance.trayPos[0].position;
            return;
        }

        transform.Translate(Vector2.down * GameManager.Instance.traySpeed * Time.deltaTime);
    }

    private void OnBecameInvisible()
    {
        Debug.Log("IN");
    }

    private void OnBecameVisible()
    {
        Debug.Log("VI");

    }
}
