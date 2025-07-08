using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Trays : MonoBehaviour
{
    private Camera mainCam;
    private bool wasVisibleLastFrame = false;

    public TrayStatus status;

    private void Awake()
    {
        mainCam = Camera.main;
        StatusUpdate();
    }

    private void Update()
    {
        if (!GameManager.Instance.isPlaying) return;
        VisibilityCheck();
        if (transform.position.y <= GameManager.Instance.trayPos[1].position.y)
        {
            transform.position = GameManager.Instance.trayPos[0].position;
            return;
        }

        transform.Translate(Vector2.down * GameManager.Instance.traySpeed * Time.deltaTime);
    }


    private void VisibilityCheck()
    {
        Vector3 viewPos = mainCam.WorldToViewportPoint(transform.position);
        bool isVisibleNow = viewPos.x >= 0f && viewPos.x <= 1f &&
                            viewPos.y >= 0f && viewPos.y <= 1f &&
                            viewPos.z > 0f;

        if (!wasVisibleLastFrame && isVisibleNow)
        {
            OnEnterScreen();
        }
        else if (wasVisibleLastFrame && !isVisibleNow)
        {
            OnExitScreen();
        }

        wasVisibleLastFrame = isVisibleNow;
    }

    private void OnEnterScreen()
    {
        Debug.Log("Enter");
    }

    private void OnExitScreen()
    {
        if (CheckTray())
        {

        }
        else
        {
            GameManager.Instance.GameOver();
        }
    }

    private void ResetTray()
    {

    }

    private bool CheckTray()
    {
        return status.itemCount == 3;
    }

    private void StatusUpdate()
    {
        GameManager.Instance.trayStatus[status.trayNo] = status;
    }

    public void AddItem()
    {
        Debug.Log("OK");
    }
}
