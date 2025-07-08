var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointSpring' )
  var i677 = data
  i676.spring = i677[0]
  i676.damper = i677[1]
  i676.targetPosition = i677[2]
  return i676
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointMotor' )
  var i679 = data
  i678.m_TargetVelocity = i679[0]
  i678.m_Force = i679[1]
  i678.m_FreeSpin = i679[2]
  return i678
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointLimits' )
  var i681 = data
  i680.m_Min = i681[0]
  i680.m_Max = i681[1]
  i680.m_Bounciness = i681[2]
  i680.m_BounceMinVelocity = i681[3]
  i680.m_ContactDistance = i681[4]
  i680.minBounce = i681[5]
  i680.maxBounce = i681[6]
  return i680
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointDrive' )
  var i683 = data
  i682.m_PositionSpring = i683[0]
  i682.m_PositionDamper = i683[1]
  i682.m_MaximumForce = i683[2]
  i682.m_UseAcceleration = i683[3]
  return i682
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i685 = data
  i684.m_Spring = i685[0]
  i684.m_Damper = i685[1]
  return i684
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i687 = data
  i686.m_Limit = i687[0]
  i686.m_Bounciness = i687[1]
  i686.m_ContactDistance = i687[2]
  return i686
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i689 = data
  i688.m_ExtremumSlip = i689[0]
  i688.m_ExtremumValue = i689[1]
  i688.m_AsymptoteSlip = i689[2]
  i688.m_AsymptoteValue = i689[3]
  i688.m_Stiffness = i689[4]
  return i688
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i691 = data
  i690.m_LowerAngle = i691[0]
  i690.m_UpperAngle = i691[1]
  return i690
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i693 = data
  i692.m_MotorSpeed = i693[0]
  i692.m_MaximumMotorTorque = i693[1]
  return i692
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i695 = data
  i694.m_DampingRatio = i695[0]
  i694.m_Frequency = i695[1]
  i694.m_Angle = i695[2]
  return i694
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i697 = data
  i696.m_LowerTranslation = i697[0]
  i696.m_UpperTranslation = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i699 = data
  i698.name = i699[0]
  i698.width = i699[1]
  i698.height = i699[2]
  i698.mipmapCount = i699[3]
  i698.anisoLevel = i699[4]
  i698.filterMode = i699[5]
  i698.hdr = !!i699[6]
  i698.format = i699[7]
  i698.wrapMode = i699[8]
  i698.alphaIsTransparency = !!i699[9]
  i698.alphaSource = i699[10]
  i698.graphicsFormat = i699[11]
  i698.sRGBTexture = !!i699[12]
  i698.desiredColorSpace = i699[13]
  i698.wrapU = i699[14]
  i698.wrapV = i699[15]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i700 = root || new pc.UnityMaterial()
  var i701 = data
  i700.name = i701[0]
  request.r(i701[1], i701[2], 0, i700, 'shader')
  i700.renderQueue = i701[3]
  i700.enableInstancing = !!i701[4]
  var i703 = i701[5]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i703[i + 0]) );
  }
  i700.floatParameters = i702
  var i705 = i701[6]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i705[i + 0]) );
  }
  i700.colorParameters = i704
  var i707 = i701[7]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i707[i + 0]) );
  }
  i700.vectorParameters = i706
  var i709 = i701[8]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i709[i + 0]) );
  }
  i700.textureParameters = i708
  var i711 = i701[9]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i711[i + 0]) );
  }
  i700.materialFlags = i710
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i715 = data
  i714.name = i715[0]
  i714.value = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i719 = data
  i718.name = i719[0]
  i718.value = new pc.Color(i719[1], i719[2], i719[3], i719[4])
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i723 = data
  i722.name = i723[0]
  i722.value = new pc.Vec4( i723[1], i723[2], i723[3], i723[4] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i727 = data
  i726.name = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'value')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i731 = data
  i730.name = i731[0]
  i730.enabled = !!i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i733 = data
  i732.name = i733[0]
  i732.atlasId = i733[1]
  i732.mipmapCount = i733[2]
  i732.hdr = !!i733[3]
  i732.size = i733[4]
  i732.anisoLevel = i733[5]
  i732.filterMode = i733[6]
  var i735 = i733[7]
  var i734 = []
  for(var i = 0; i < i735.length; i += 4) {
    i734.push( UnityEngine.Rect.MinMaxRect(i735[i + 0], i735[i + 1], i735[i + 2], i735[i + 3]) );
  }
  i732.rects = i734
  i732.wrapU = i733[8]
  i732.wrapV = i733[9]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i739 = data
  i738.name = i739[0]
  i738.index = i739[1]
  i738.startup = !!i739[2]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i741 = data
  i740.position = new pc.Vec3( i741[0], i741[1], i741[2] )
  i740.scale = new pc.Vec3( i741[3], i741[4], i741[5] )
  i740.rotation = new pc.Quat(i741[6], i741[7], i741[8], i741[9])
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i743 = data
  i742.enabled = !!i743[0]
  i742.aspect = i743[1]
  i742.orthographic = !!i743[2]
  i742.orthographicSize = i743[3]
  i742.backgroundColor = new pc.Color(i743[4], i743[5], i743[6], i743[7])
  i742.nearClipPlane = i743[8]
  i742.farClipPlane = i743[9]
  i742.fieldOfView = i743[10]
  i742.depth = i743[11]
  i742.clearFlags = i743[12]
  i742.cullingMask = i743[13]
  i742.rect = i743[14]
  request.r(i743[15], i743[16], 0, i742, 'targetTexture')
  i742.usePhysicalProperties = !!i743[17]
  i742.focalLength = i743[18]
  i742.sensorSize = new pc.Vec2( i743[19], i743[20] )
  i742.lensShift = new pc.Vec2( i743[21], i743[22] )
  i742.gateFit = i743[23]
  i742.commandBufferCount = i743[24]
  i742.cameraType = i743[25]
  return i742
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i745 = data
  i744.m_RenderShadows = !!i745[0]
  i744.m_RequiresDepthTextureOption = i745[1]
  i744.m_RequiresOpaqueTextureOption = i745[2]
  i744.m_CameraType = i745[3]
  var i747 = i745[4]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 1, i746, '')
  }
  i744.m_Cameras = i746
  i744.m_RendererIndex = i745[5]
  i744.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i745[6] )
  request.r(i745[7], i745[8], 0, i744, 'm_VolumeTrigger')
  i744.m_VolumeFrameworkUpdateModeOption = i745[9]
  i744.m_RenderPostProcessing = !!i745[10]
  i744.m_Antialiasing = i745[11]
  i744.m_AntialiasingQuality = i745[12]
  i744.m_StopNaN = !!i745[13]
  i744.m_Dithering = !!i745[14]
  i744.m_ClearDepth = !!i745[15]
  i744.m_AllowXRRendering = !!i745[16]
  i744.m_AllowHDROutput = !!i745[17]
  i744.m_UseScreenCoordOverride = !!i745[18]
  i744.m_ScreenSizeOverride = new pc.Vec4( i745[19], i745[20], i745[21], i745[22] )
  i744.m_ScreenCoordScaleBias = new pc.Vec4( i745[23], i745[24], i745[25], i745[26] )
  i744.m_RequiresDepthTexture = !!i745[27]
  i744.m_RequiresColorTexture = !!i745[28]
  i744.m_Version = i745[29]
  i744.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i745[30], i744.m_TaaSettings)
  return i744
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i751 = data
  i750.m_Quality = i751[0]
  i750.m_FrameInfluence = i751[1]
  i750.m_JitterScale = i751[2]
  i750.m_MipBias = i751[3]
  i750.m_VarianceClampScale = i751[4]
  i750.m_ContrastAdaptiveSharpening = i751[5]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i753 = data
  i752.name = i753[0]
  i752.tagId = i753[1]
  i752.enabled = !!i753[2]
  i752.isStatic = !!i753[3]
  i752.layer = i753[4]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i755 = data
  i754.enabled = !!i755[0]
  i754.type = i755[1]
  i754.color = new pc.Color(i755[2], i755[3], i755[4], i755[5])
  i754.cullingMask = i755[6]
  i754.intensity = i755[7]
  i754.range = i755[8]
  i754.spotAngle = i755[9]
  i754.shadows = i755[10]
  i754.shadowNormalBias = i755[11]
  i754.shadowBias = i755[12]
  i754.shadowStrength = i755[13]
  i754.shadowResolution = i755[14]
  i754.lightmapBakeType = i755[15]
  i754.renderMode = i755[16]
  request.r(i755[17], i755[18], 0, i754, 'cookie')
  i754.cookieSize = i755[19]
  return i754
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i757 = data
  i756.m_Version = i757[0]
  i756.m_UsePipelineSettings = !!i757[1]
  i756.m_AdditionalLightsShadowResolutionTier = i757[2]
  i756.m_LightLayerMask = i757[3]
  i756.m_RenderingLayers = i757[4]
  i756.m_CustomShadowLayers = !!i757[5]
  i756.m_ShadowLayerMask = i757[6]
  i756.m_ShadowRenderingLayers = i757[7]
  i756.m_LightCookieSize = new pc.Vec2( i757[8], i757[9] )
  i756.m_LightCookieOffset = new pc.Vec2( i757[10], i757[11] )
  i756.m_SoftShadowQuality = i757[12]
  return i756
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i759 = data
  i758.priority = i759[0]
  i758.blendDistance = i759[1]
  i758.weight = i759[2]
  request.r(i759[3], i759[4], 0, i758, 'sharedProfile')
  i758.m_IsGlobal = !!i759[5]
  return i758
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_FirstSelected')
  i760.m_sendNavigationEvents = !!i761[2]
  i760.m_DragThreshold = i761[3]
  return i760
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i763 = data
  i762.m_HorizontalAxis = i763[0]
  i762.m_VerticalAxis = i763[1]
  i762.m_SubmitButton = i763[2]
  i762.m_CancelButton = i763[3]
  i762.m_InputActionsPerSecond = i763[4]
  i762.m_RepeatDelay = i763[5]
  i762.m_ForceModuleActive = !!i763[6]
  i762.m_SendPointerHoverToParent = !!i763[7]
  return i762
}

Deserializers["SceneLoading"] = function (request, data, root) {
  var i764 = root || request.c( 'SceneLoading' )
  var i765 = data
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i767 = data
  i766.pivot = new pc.Vec2( i767[0], i767[1] )
  i766.anchorMin = new pc.Vec2( i767[2], i767[3] )
  i766.anchorMax = new pc.Vec2( i767[4], i767[5] )
  i766.sizeDelta = new pc.Vec2( i767[6], i767[7] )
  i766.anchoredPosition3D = new pc.Vec3( i767[8], i767[9], i767[10] )
  i766.rotation = new pc.Quat(i767[11], i767[12], i767[13], i767[14])
  i766.scale = new pc.Vec3( i767[15], i767[16], i767[17] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i769 = data
  i768.enabled = !!i769[0]
  i768.planeDistance = i769[1]
  i768.referencePixelsPerUnit = i769[2]
  i768.isFallbackOverlay = !!i769[3]
  i768.renderMode = i769[4]
  i768.renderOrder = i769[5]
  i768.sortingLayerName = i769[6]
  i768.sortingOrder = i769[7]
  i768.scaleFactor = i769[8]
  request.r(i769[9], i769[10], 0, i768, 'worldCamera')
  i768.overrideSorting = !!i769[11]
  i768.pixelPerfect = !!i769[12]
  i768.targetDisplay = i769[13]
  i768.overridePixelPerfect = !!i769[14]
  return i768
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i771 = data
  i770.m_UiScaleMode = i771[0]
  i770.m_ReferencePixelsPerUnit = i771[1]
  i770.m_ScaleFactor = i771[2]
  i770.m_ReferenceResolution = new pc.Vec2( i771[3], i771[4] )
  i770.m_ScreenMatchMode = i771[5]
  i770.m_MatchWidthOrHeight = i771[6]
  i770.m_PhysicalUnit = i771[7]
  i770.m_FallbackScreenDPI = i771[8]
  i770.m_DefaultSpriteDPI = i771[9]
  i770.m_DynamicPixelsPerUnit = i771[10]
  i770.m_PresetInfoIsWorld = !!i771[11]
  return i770
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i773 = data
  i772.m_IgnoreReversedGraphics = !!i773[0]
  i772.m_BlockingObjects = i773[1]
  i772.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i773[2] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i775 = data
  i774.cullTransparentMesh = !!i775[0]
  return i774
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.Image' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_Sprite')
  i776.m_Type = i777[2]
  i776.m_PreserveAspect = !!i777[3]
  i776.m_FillCenter = !!i777[4]
  i776.m_FillMethod = i777[5]
  i776.m_FillAmount = i777[6]
  i776.m_FillClockwise = !!i777[7]
  i776.m_FillOrigin = i777[8]
  i776.m_UseSpriteMesh = !!i777[9]
  i776.m_PixelsPerUnitMultiplier = i777[10]
  request.r(i777[11], i777[12], 0, i776, 'm_Material')
  i776.m_Maskable = !!i777[13]
  i776.m_Color = new pc.Color(i777[14], i777[15], i777[16], i777[17])
  i776.m_RaycastTarget = !!i777[18]
  i776.m_RaycastPadding = new pc.Vec4( i777[19], i777[20], i777[21], i777[22] )
  return i776
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i779 = data
  i778.m_hasFontAssetChanged = !!i779[0]
  request.r(i779[1], i779[2], 0, i778, 'm_baseMaterial')
  i778.m_maskOffset = new pc.Vec4( i779[3], i779[4], i779[5], i779[6] )
  i778.m_text = i779[7]
  i778.m_isRightToLeft = !!i779[8]
  request.r(i779[9], i779[10], 0, i778, 'm_fontAsset')
  request.r(i779[11], i779[12], 0, i778, 'm_sharedMaterial')
  var i781 = i779[13]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.m_fontSharedMaterials = i780
  request.r(i779[14], i779[15], 0, i778, 'm_fontMaterial')
  var i783 = i779[16]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i778.m_fontMaterials = i782
  i778.m_fontColor32 = UnityEngine.Color32.ConstructColor(i779[17], i779[18], i779[19], i779[20])
  i778.m_fontColor = new pc.Color(i779[21], i779[22], i779[23], i779[24])
  i778.m_enableVertexGradient = !!i779[25]
  i778.m_colorMode = i779[26]
  i778.m_fontColorGradient = request.d('TMPro.VertexGradient', i779[27], i778.m_fontColorGradient)
  request.r(i779[28], i779[29], 0, i778, 'm_fontColorGradientPreset')
  request.r(i779[30], i779[31], 0, i778, 'm_spriteAsset')
  i778.m_tintAllSprites = !!i779[32]
  request.r(i779[33], i779[34], 0, i778, 'm_StyleSheet')
  i778.m_TextStyleHashCode = i779[35]
  i778.m_overrideHtmlColors = !!i779[36]
  i778.m_faceColor = UnityEngine.Color32.ConstructColor(i779[37], i779[38], i779[39], i779[40])
  i778.m_fontSize = i779[41]
  i778.m_fontSizeBase = i779[42]
  i778.m_fontWeight = i779[43]
  i778.m_enableAutoSizing = !!i779[44]
  i778.m_fontSizeMin = i779[45]
  i778.m_fontSizeMax = i779[46]
  i778.m_fontStyle = i779[47]
  i778.m_HorizontalAlignment = i779[48]
  i778.m_VerticalAlignment = i779[49]
  i778.m_textAlignment = i779[50]
  i778.m_characterSpacing = i779[51]
  i778.m_wordSpacing = i779[52]
  i778.m_lineSpacing = i779[53]
  i778.m_lineSpacingMax = i779[54]
  i778.m_paragraphSpacing = i779[55]
  i778.m_charWidthMaxAdj = i779[56]
  i778.m_enableWordWrapping = !!i779[57]
  i778.m_wordWrappingRatios = i779[58]
  i778.m_overflowMode = i779[59]
  request.r(i779[60], i779[61], 0, i778, 'm_linkedTextComponent')
  request.r(i779[62], i779[63], 0, i778, 'parentLinkedComponent')
  i778.m_enableKerning = !!i779[64]
  i778.m_enableExtraPadding = !!i779[65]
  i778.checkPaddingRequired = !!i779[66]
  i778.m_isRichText = !!i779[67]
  i778.m_parseCtrlCharacters = !!i779[68]
  i778.m_isOrthographic = !!i779[69]
  i778.m_isCullingEnabled = !!i779[70]
  i778.m_horizontalMapping = i779[71]
  i778.m_verticalMapping = i779[72]
  i778.m_uvLineOffset = i779[73]
  i778.m_geometrySortingOrder = i779[74]
  i778.m_IsTextObjectScaleStatic = !!i779[75]
  i778.m_VertexBufferAutoSizeReduction = !!i779[76]
  i778.m_useMaxVisibleDescender = !!i779[77]
  i778.m_pageToDisplay = i779[78]
  i778.m_margin = new pc.Vec4( i779[79], i779[80], i779[81], i779[82] )
  i778.m_isUsingLegacyAnimationComponent = !!i779[83]
  i778.m_isVolumetricText = !!i779[84]
  request.r(i779[85], i779[86], 0, i778, 'm_Material')
  i778.m_Maskable = !!i779[87]
  i778.m_Color = new pc.Color(i779[88], i779[89], i779[90], i779[91])
  i778.m_RaycastTarget = !!i779[92]
  i778.m_RaycastPadding = new pc.Vec4( i779[93], i779[94], i779[95], i779[96] )
  return i778
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.VertexGradient' )
  var i787 = data
  i786.topLeft = new pc.Color(i787[0], i787[1], i787[2], i787[3])
  i786.topRight = new pc.Color(i787[4], i787[5], i787[6], i787[7])
  i786.bottomLeft = new pc.Color(i787[8], i787[9], i787[10], i787[11])
  i786.bottomRight = new pc.Color(i787[12], i787[13], i787[14], i787[15])
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i789 = data
  i788.playAutomatically = !!i789[0]
  request.r(i789[1], i789[2], 0, i788, 'clip')
  var i791 = i789[3]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.clips = i790
  i788.wrapMode = i789[4]
  i788.enabled = !!i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i795 = data
  i794.ambientIntensity = i795[0]
  i794.reflectionIntensity = i795[1]
  i794.ambientMode = i795[2]
  i794.ambientLight = new pc.Color(i795[3], i795[4], i795[5], i795[6])
  i794.ambientSkyColor = new pc.Color(i795[7], i795[8], i795[9], i795[10])
  i794.ambientGroundColor = new pc.Color(i795[11], i795[12], i795[13], i795[14])
  i794.ambientEquatorColor = new pc.Color(i795[15], i795[16], i795[17], i795[18])
  i794.fogColor = new pc.Color(i795[19], i795[20], i795[21], i795[22])
  i794.fogEndDistance = i795[23]
  i794.fogStartDistance = i795[24]
  i794.fogDensity = i795[25]
  i794.fog = !!i795[26]
  request.r(i795[27], i795[28], 0, i794, 'skybox')
  i794.fogMode = i795[29]
  var i797 = i795[30]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i797[i + 0]) );
  }
  i794.lightmaps = i796
  i794.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i795[31], i794.lightProbes)
  i794.lightmapsMode = i795[32]
  i794.mixedBakeMode = i795[33]
  i794.environmentLightingMode = i795[34]
  i794.ambientProbe = new pc.SphericalHarmonicsL2(i795[35])
  i794.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i795[36])
  i794.useReferenceAmbientProbe = !!i795[37]
  request.r(i795[38], i795[39], 0, i794, 'customReflection')
  request.r(i795[40], i795[41], 0, i794, 'defaultReflection')
  i794.defaultReflectionMode = i795[42]
  i794.defaultReflectionResolution = i795[43]
  i794.sunLightObjectId = i795[44]
  i794.pixelLightCount = i795[45]
  i794.defaultReflectionHDR = !!i795[46]
  i794.hasLightDataAsset = !!i795[47]
  i794.hasManualGenerate = !!i795[48]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'lightmapColor')
  request.r(i801[2], i801[3], 0, i800, 'lightmapDirection')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i802 = root || new UnityEngine.LightProbes()
  var i803 = data
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i811 = data
  i810.name = i811[0]
  i810.halfPrecision = !!i811[1]
  i810.useUInt32IndexFormat = !!i811[2]
  i810.vertexCount = i811[3]
  i810.aabb = i811[4]
  var i813 = i811[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( !!i813[i + 0] );
  }
  i810.streams = i812
  i810.vertices = i811[6]
  var i815 = i811[7]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i815[i + 0]) );
  }
  i810.subMeshes = i814
  var i817 = i811[8]
  var i816 = []
  for(var i = 0; i < i817.length; i += 16) {
    i816.push( new pc.Mat4().setData(i817[i + 0], i817[i + 1], i817[i + 2], i817[i + 3],  i817[i + 4], i817[i + 5], i817[i + 6], i817[i + 7],  i817[i + 8], i817[i + 9], i817[i + 10], i817[i + 11],  i817[i + 12], i817[i + 13], i817[i + 14], i817[i + 15]) );
  }
  i810.bindposes = i816
  var i819 = i811[9]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i819[i + 0]) );
  }
  i810.blendShapes = i818
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i825 = data
  i824.triangles = i825[0]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i831 = data
  i830.name = i831[0]
  var i833 = i831[1]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i833[i + 0]) );
  }
  i830.frames = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'sharedMesh')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'additionalVertexStreams')
  i836.enabled = !!i837[2]
  request.r(i837[3], i837[4], 0, i836, 'sharedMaterial')
  var i839 = i837[5]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.sharedMaterials = i838
  i836.receiveShadows = !!i837[6]
  i836.shadowCastingMode = i837[7]
  i836.sortingLayerID = i837[8]
  i836.sortingOrder = i837[9]
  i836.lightmapIndex = i837[10]
  i836.lightmapSceneIndex = i837[11]
  i836.lightmapScaleOffset = new pc.Vec4( i837[12], i837[13], i837[14], i837[15] )
  i836.lightProbeUsage = i837[16]
  i836.reflectionProbeUsage = i837[17]
  return i836
}

Deserializers["Items"] = function (request, data, root) {
  var i840 = root || request.c( 'Items' )
  var i841 = data
  i840.objType = i841[0]
  i840.preSet = !!i841[1]
  request.r(i841[2], i841[3], 0, i840, 'meshFilter')
  request.r(i841[4], i841[5], 0, i840, 'rendererMaterial')
  var i843 = i841[6]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('MeshMap')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('MeshMap', i843[i + 0]));
  }
  i840.meshes = i842
  return i840
}

Deserializers["MeshMap"] = function (request, data, root) {
  var i846 = root || request.c( 'MeshMap' )
  var i847 = data
  i846.type = i847[0]
  request.r(i847[1], i847[2], 0, i846, 'mesh')
  request.r(i847[3], i847[4], 0, i846, 'material')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i849 = data
  i848.center = new pc.Vec3( i849[0], i849[1], i849[2] )
  i848.radius = i849[3]
  i848.height = i849[4]
  i848.direction = i849[5]
  i848.enabled = !!i849[6]
  i848.isTrigger = !!i849[7]
  request.r(i849[8], i849[9], 0, i848, 'material')
  return i848
}

Deserializers["GameManager"] = function (request, data, root) {
  var i850 = root || request.c( 'GameManager' )
  var i851 = data
  i850.isPlaying = !!i851[0]
  request.r(i851[1], i851[2], 0, i850, 'tutorial')
  request.r(i851[3], i851[4], 0, i850, 'gameOver')
  i850.itemSpeed = i851[5]
  request.r(i851[6], i851[7], 0, i850, 'itemEndPos')
  i850.traySpeed = i851[8]
  var i853 = i851[9]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 1, i852, '')
  }
  i850.trayPos = i852
  i850.spawnInterval = i851[10]
  i850.spawnCoolTime = i851[11]
  var i855 = i851[12]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 1, i854, '')
  }
  i850.itemSpawnPos = i854
  var i857 = i851[13]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('Trays')))
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 1, i856, '')
  }
  i850.trays = i856
  return i850
}

Deserializers["ItemObjectPool"] = function (request, data, root) {
  var i862 = root || request.c( 'ItemObjectPool' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'itemPrefab')
  request.r(i863[2], i863[3], 0, i862, 'itemParent')
  return i862
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i864 = root || request.c( 'SoundManager' )
  var i865 = data
  var i867 = i865[0]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 1, i866, '')
  }
  i864.audios = i866
  request.r(i865[1], i865[2], 0, i864, 'bgm')
  request.r(i865[3], i865[4], 0, i864, 'sfx')
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'clip')
  request.r(i871[2], i871[3], 0, i870, 'outputAudioMixerGroup')
  i870.playOnAwake = !!i871[4]
  i870.loop = !!i871[5]
  i870.time = i871[6]
  i870.volume = i871[7]
  i870.pitch = i871[8]
  i870.enabled = !!i871[9]
  return i870
}

Deserializers["Trays"] = function (request, data, root) {
  var i872 = root || request.c( 'Trays' )
  var i873 = data
  i872.status = request.d('TrayStatus', i873[0], i872.status)
  i872.tutorial = !!i873[1]
  var i875 = i873[2]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 1, i874, '')
  }
  i872.displayItems = i874
  request.r(i873[3], i873[4], 0, i872, 'labelPos')
  var i877 = i873[5]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 1, i876, '')
  }
  i872.labelImages = i876
  request.r(i873[6], i873[7], 0, i872, 'label')
  request.r(i873[8], i873[9], 0, i872, 'itemLabel')
  request.r(i873[10], i873[11], 0, i872, 'labelText')
  request.r(i873[12], i873[13], 0, i872, 'starImage')
  return i872
}

Deserializers["TrayStatus"] = function (request, data, root) {
  var i878 = root || request.c( 'TrayStatus' )
  var i879 = data
  i878.trayNo = i879[0]
  i878.trayType = i879[1]
  i878.interactable = !!i879[2]
  i878.itemCount = i879[3]
  return i878
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'panelPrefab')
  var i887 = i885[2]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i887[i + 0]));
  }
  i884.prefabs = i886
  return i884
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i891 = data
  i890.type = i891[0]
  request.r(i891[1], i891[2], 0, i890, 'prefab')
  return i890
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i893 = data
  i892.m_Spacing = i893[0]
  i892.m_ChildForceExpandWidth = !!i893[1]
  i892.m_ChildForceExpandHeight = !!i893[2]
  i892.m_ChildControlWidth = !!i893[3]
  i892.m_ChildControlHeight = !!i893[4]
  i892.m_ChildScaleWidth = !!i893[5]
  i892.m_ChildScaleHeight = !!i893[6]
  i892.m_ReverseArrangement = !!i893[7]
  i892.m_Padding = UnityEngine.RectOffset.FromPaddings(i893[8], i893[9], i893[10], i893[11])
  i892.m_ChildAlignment = i893[12]
  return i892
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i895 = data
  i894.m_HorizontalFit = i895[0]
  i894.m_VerticalFit = i895[1]
  return i894
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'contentHolder')
  return i896
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'nameLabel')
  request.r(i899[2], i899[3], 0, i898, 'scrollRect')
  request.r(i899[4], i899[5], 0, i898, 'viewport')
  request.r(i899[6], i899[7], 0, i898, 'Canvas')
  return i898
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i901 = data
  i900.m_IgnoreLayout = !!i901[0]
  i900.m_MinWidth = i901[1]
  i900.m_MinHeight = i901[2]
  i900.m_PreferredWidth = i901[3]
  i900.m_PreferredHeight = i901[4]
  i900.m_FlexibleWidth = i901[5]
  i900.m_FlexibleHeight = i901[6]
  i900.m_LayoutPriority = i901[7]
  return i900
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.Button' )
  var i903 = data
  i902.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i903[0], i902.m_OnClick)
  i902.m_Navigation = request.d('UnityEngine.UI.Navigation', i903[1], i902.m_Navigation)
  i902.m_Transition = i903[2]
  i902.m_Colors = request.d('UnityEngine.UI.ColorBlock', i903[3], i902.m_Colors)
  i902.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i903[4], i902.m_SpriteState)
  i902.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i903[5], i902.m_AnimationTriggers)
  i902.m_Interactable = !!i903[6]
  request.r(i903[7], i903[8], 0, i902, 'm_TargetGraphic')
  return i902
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i905 = data
  i904.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i905[0], i904.m_PersistentCalls)
  return i904
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i907 = data
  var i909 = i907[0]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('UnityEngine.Events.PersistentCall', i909[i + 0]));
  }
  i906.m_Calls = i908
  return i906
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'm_Target')
  i912.m_TargetAssemblyTypeName = i913[2]
  i912.m_MethodName = i913[3]
  i912.m_Mode = i913[4]
  i912.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i913[5], i912.m_Arguments)
  i912.m_CallState = i913[6]
  return i912
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_ObjectArgument')
  i914.m_ObjectArgumentAssemblyTypeName = i915[2]
  i914.m_IntArgument = i915[3]
  i914.m_FloatArgument = i915[4]
  i914.m_StringArgument = i915[5]
  i914.m_BoolArgument = !!i915[6]
  return i914
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i917 = data
  i916.m_Mode = i917[0]
  i916.m_WrapAround = !!i917[1]
  request.r(i917[2], i917[3], 0, i916, 'm_SelectOnUp')
  request.r(i917[4], i917[5], 0, i916, 'm_SelectOnDown')
  request.r(i917[6], i917[7], 0, i916, 'm_SelectOnLeft')
  request.r(i917[8], i917[9], 0, i916, 'm_SelectOnRight')
  return i916
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i919 = data
  i918.m_NormalColor = new pc.Color(i919[0], i919[1], i919[2], i919[3])
  i918.m_HighlightedColor = new pc.Color(i919[4], i919[5], i919[6], i919[7])
  i918.m_PressedColor = new pc.Color(i919[8], i919[9], i919[10], i919[11])
  i918.m_SelectedColor = new pc.Color(i919[12], i919[13], i919[14], i919[15])
  i918.m_DisabledColor = new pc.Color(i919[16], i919[17], i919[18], i919[19])
  i918.m_ColorMultiplier = i919[20]
  i918.m_FadeDuration = i919[21]
  return i918
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_HighlightedSprite')
  request.r(i921[2], i921[3], 0, i920, 'm_PressedSprite')
  request.r(i921[4], i921[5], 0, i920, 'm_SelectedSprite')
  request.r(i921[6], i921[7], 0, i920, 'm_DisabledSprite')
  return i920
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i923 = data
  i922.m_NormalTrigger = i923[0]
  i922.m_HighlightedTrigger = i923[1]
  i922.m_PressedTrigger = i923[2]
  i922.m_SelectedTrigger = i923[3]
  i922.m_DisabledTrigger = i923[4]
  return i922
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.Text' )
  var i925 = data
  i924.m_FontData = request.d('UnityEngine.UI.FontData', i925[0], i924.m_FontData)
  i924.m_Text = i925[1]
  request.r(i925[2], i925[3], 0, i924, 'm_Material')
  i924.m_Maskable = !!i925[4]
  i924.m_Color = new pc.Color(i925[5], i925[6], i925[7], i925[8])
  i924.m_RaycastTarget = !!i925[9]
  i924.m_RaycastPadding = new pc.Vec4( i925[10], i925[11], i925[12], i925[13] )
  return i924
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.FontData' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'm_Font')
  i926.m_FontSize = i927[2]
  i926.m_FontStyle = i927[3]
  i926.m_BestFit = !!i927[4]
  i926.m_MinSize = i927[5]
  i926.m_MaxSize = i927[6]
  i926.m_Alignment = i927[7]
  i926.m_AlignByGeometry = !!i927[8]
  i926.m_RichText = !!i927[9]
  i926.m_HorizontalOverflow = i927[10]
  i926.m_VerticalOverflow = i927[11]
  i926.m_LineSpacing = i927[12]
  return i926
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'm_Content')
  i928.m_Horizontal = !!i929[2]
  i928.m_Vertical = !!i929[3]
  i928.m_MovementType = i929[4]
  i928.m_Elasticity = i929[5]
  i928.m_Inertia = !!i929[6]
  i928.m_DecelerationRate = i929[7]
  i928.m_ScrollSensitivity = i929[8]
  request.r(i929[9], i929[10], 0, i928, 'm_Viewport')
  request.r(i929[11], i929[12], 0, i928, 'm_HorizontalScrollbar')
  request.r(i929[13], i929[14], 0, i928, 'm_VerticalScrollbar')
  i928.m_HorizontalScrollbarVisibility = i929[15]
  i928.m_VerticalScrollbarVisibility = i929[16]
  i928.m_HorizontalScrollbarSpacing = i929[17]
  i928.m_VerticalScrollbarSpacing = i929[18]
  i928.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i929[19], i928.m_OnValueChanged)
  return i928
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i931 = data
  i930.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i931[0], i930.m_PersistentCalls)
  return i930
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.Mask' )
  var i933 = data
  i932.m_ShowMaskGraphic = !!i933[0]
  return i932
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'm_HandleRect')
  i934.m_Direction = i935[2]
  i934.m_Value = i935[3]
  i934.m_Size = i935[4]
  i934.m_NumberOfSteps = i935[5]
  i934.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i935[6], i934.m_OnValueChanged)
  i934.m_Navigation = request.d('UnityEngine.UI.Navigation', i935[7], i934.m_Navigation)
  i934.m_Transition = i935[8]
  i934.m_Colors = request.d('UnityEngine.UI.ColorBlock', i935[9], i934.m_Colors)
  i934.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i935[10], i934.m_SpriteState)
  i934.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i935[11], i934.m_AnimationTriggers)
  i934.m_Interactable = !!i935[12]
  request.r(i935[13], i935[14], 0, i934, 'm_TargetGraphic')
  return i934
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i937 = data
  i936.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i937[0], i936.m_PersistentCalls)
  return i936
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i939 = data
  var i941 = i939[0]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i941[i + 0]));
  }
  i938.m_Delegates = i940
  return i938
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i945 = data
  i944.eventID = i945[0]
  i944.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i945[1], i944.callback)
  return i944
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i947 = data
  i946.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i947[0], i946.m_PersistentCalls)
  return i946
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'nameLabel')
  request.r(i949[2], i949[3], 0, i948, 'valueLabel')
  i948.colorDefault = new pc.Color(i949[4], i949[5], i949[6], i949[7])
  i948.colorSelected = new pc.Color(i949[8], i949[9], i949[10], i949[11])
  return i948
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'nameLabel')
  request.r(i951[2], i951[3], 0, i950, 'valueToggle')
  request.r(i951[4], i951[5], 0, i950, 'checkmarkImage')
  i950.colorDefault = new pc.Color(i951[6], i951[7], i951[8], i951[9])
  i950.colorSelected = new pc.Color(i951[10], i951[11], i951[12], i951[13])
  return i950
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i953 = data
  i952.toggleTransition = i953[0]
  request.r(i953[1], i953[2], 0, i952, 'graphic')
  i952.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i953[3], i952.onValueChanged)
  request.r(i953[4], i953[5], 0, i952, 'm_Group')
  i952.m_IsOn = !!i953[6]
  i952.m_Navigation = request.d('UnityEngine.UI.Navigation', i953[7], i952.m_Navigation)
  i952.m_Transition = i953[8]
  i952.m_Colors = request.d('UnityEngine.UI.ColorBlock', i953[9], i952.m_Colors)
  i952.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i953[10], i952.m_SpriteState)
  i952.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i953[11], i952.m_AnimationTriggers)
  i952.m_Interactable = !!i953[12]
  request.r(i953[13], i953[14], 0, i952, 'm_TargetGraphic')
  return i952
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i955 = data
  i954.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i955[0], i954.m_PersistentCalls)
  return i954
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'nameLabel')
  request.r(i957[2], i957[3], 0, i956, 'valueLabel')
  i956.colorDefault = new pc.Color(i957[4], i957[5], i957[6], i957[7])
  i956.colorSelected = new pc.Color(i957[8], i957[9], i957[10], i957[11])
  return i956
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'nameLabel')
  request.r(i959[2], i959[3], 0, i958, 'valueLabel')
  i958.colorDefault = new pc.Color(i959[4], i959[5], i959[6], i959[7])
  i958.colorSelected = new pc.Color(i959[8], i959[9], i959[10], i959[11])
  return i958
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'nameLabel')
  request.r(i961[2], i961[3], 0, i960, 'valueLabel')
  i960.colorDefault = new pc.Color(i961[4], i961[5], i961[6], i961[7])
  i960.colorSelected = new pc.Color(i961[8], i961[9], i961[10], i961[11])
  return i960
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'nextButtonText')
  request.r(i963[2], i963[3], 0, i962, 'previousButtonText')
  request.r(i963[4], i963[5], 0, i962, 'nameLabel')
  request.r(i963[6], i963[7], 0, i962, 'valueLabel')
  i962.colorDefault = new pc.Color(i963[8], i963[9], i963[10], i963[11])
  i962.colorSelected = new pc.Color(i963[12], i963[13], i963[14], i963[15])
  return i962
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'nameLabel')
  i964.colorDefault = new pc.Color(i965[2], i965[3], i965[4], i965[5])
  i964.colorSelected = new pc.Color(i965[6], i965[7], i965[8], i965[9])
  return i964
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'nameLabel')
  request.r(i967[2], i967[3], 0, i966, 'valueToggle')
  i966.colorDefault = new pc.Color(i967[4], i967[5], i967[6], i967[7])
  i966.colorSelected = new pc.Color(i967[8], i967[9], i967[10], i967[11])
  return i966
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i969 = data
  i968.toggleTransition = i969[0]
  request.r(i969[1], i969[2], 0, i968, 'graphic')
  i968.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i969[3], i968.onValueChanged)
  request.r(i969[4], i969[5], 0, i968, 'content')
  request.r(i969[6], i969[7], 0, i968, 'arrowOpened')
  request.r(i969[8], i969[9], 0, i968, 'arrowClosed')
  request.r(i969[10], i969[11], 0, i968, 'm_Group')
  i968.m_IsOn = !!i969[12]
  i968.m_Navigation = request.d('UnityEngine.UI.Navigation', i969[13], i968.m_Navigation)
  i968.m_Transition = i969[14]
  i968.m_Colors = request.d('UnityEngine.UI.ColorBlock', i969[15], i968.m_Colors)
  i968.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i969[16], i968.m_SpriteState)
  i968.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i969[17], i968.m_AnimationTriggers)
  i968.m_Interactable = !!i969[18]
  request.r(i969[19], i969[20], 0, i968, 'm_TargetGraphic')
  return i968
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'nameLabel')
  request.r(i971[2], i971[3], 0, i970, 'valueToggle')
  request.r(i971[4], i971[5], 0, i970, 'colorImage')
  request.r(i971[6], i971[7], 0, i970, 'fieldR')
  request.r(i971[8], i971[9], 0, i970, 'fieldG')
  request.r(i971[10], i971[11], 0, i970, 'fieldB')
  request.r(i971[12], i971[13], 0, i970, 'fieldA')
  i970.colorDefault = new pc.Color(i971[14], i971[15], i971[16], i971[17])
  i970.colorSelected = new pc.Color(i971[18], i971[19], i971[20], i971[21])
  return i970
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'nameLabel')
  request.r(i973[2], i973[3], 0, i972, 'valueLabel')
  i972.colorDefault = new pc.Color(i973[4], i973[5], i973[6], i973[7])
  i972.colorSelected = new pc.Color(i973[8], i973[9], i973[10], i973[11])
  return i972
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'nameLabel')
  request.r(i975[2], i975[3], 0, i974, 'valueToggle')
  request.r(i975[4], i975[5], 0, i974, 'fieldX')
  request.r(i975[6], i975[7], 0, i974, 'fieldY')
  i974.colorDefault = new pc.Color(i975[8], i975[9], i975[10], i975[11])
  i974.colorSelected = new pc.Color(i975[12], i975[13], i975[14], i975[15])
  return i974
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'nameLabel')
  request.r(i977[2], i977[3], 0, i976, 'valueToggle')
  request.r(i977[4], i977[5], 0, i976, 'fieldX')
  request.r(i977[6], i977[7], 0, i976, 'fieldY')
  request.r(i977[8], i977[9], 0, i976, 'fieldZ')
  i976.colorDefault = new pc.Color(i977[10], i977[11], i977[12], i977[13])
  i976.colorSelected = new pc.Color(i977[14], i977[15], i977[16], i977[17])
  return i976
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'nameLabel')
  request.r(i979[2], i979[3], 0, i978, 'valueToggle')
  request.r(i979[4], i979[5], 0, i978, 'fieldX')
  request.r(i979[6], i979[7], 0, i978, 'fieldY')
  request.r(i979[8], i979[9], 0, i978, 'fieldZ')
  request.r(i979[10], i979[11], 0, i978, 'fieldW')
  i978.colorDefault = new pc.Color(i979[12], i979[13], i979[14], i979[15])
  i978.colorSelected = new pc.Color(i979[16], i979[17], i979[18], i979[19])
  return i978
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i981 = data
  i980.colorDefault = new pc.Color(i981[0], i981[1], i981[2], i981[3])
  i980.colorSelected = new pc.Color(i981[4], i981[5], i981[6], i981[7])
  return i980
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i983 = data
  i982.m_Spacing = i983[0]
  i982.m_ChildForceExpandWidth = !!i983[1]
  i982.m_ChildForceExpandHeight = !!i983[2]
  i982.m_ChildControlWidth = !!i983[3]
  i982.m_ChildControlHeight = !!i983[4]
  i982.m_ChildScaleWidth = !!i983[5]
  i982.m_ChildScaleHeight = !!i983[6]
  i982.m_ReverseArrangement = !!i983[7]
  i982.m_Padding = UnityEngine.RectOffset.FromPaddings(i983[8], i983[9], i983[10], i983[11])
  i982.m_ChildAlignment = i983[12]
  return i982
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i985 = data
  i984.colorDefault = new pc.Color(i985[0], i985[1], i985[2], i985[3])
  i984.colorSelected = new pc.Color(i985[4], i985[5], i985[6], i985[7])
  return i984
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'nameLabel')
  request.r(i987[2], i987[3], 0, i986, 'header')
  i986.colorDefault = new pc.Color(i987[4], i987[5], i987[6], i987[7])
  i986.colorSelected = new pc.Color(i987[8], i987[9], i987[10], i987[11])
  return i986
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'nameLabel')
  request.r(i989[2], i989[3], 0, i988, 'valueToggle')
  var i991 = i989[4]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i988.toggles = i990
  i988.colorDefault = new pc.Color(i989[5], i989[6], i989[7], i989[8])
  i988.colorSelected = new pc.Color(i989[9], i989[10], i989[11], i989[12])
  return i988
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'nameLabel')
  request.r(i995[2], i995[3], 0, i994, 'valueToggle')
  request.r(i995[4], i995[5], 0, i994, 'checkmarkImage')
  i994.colorDefault = new pc.Color(i995[6], i995[7], i995[8], i995[9])
  i994.colorSelected = new pc.Color(i995[10], i995[11], i995[12], i995[13])
  return i994
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'nameLabel')
  request.r(i997[2], i997[3], 0, i996, 'valueToggle')
  request.r(i997[4], i997[5], 0, i996, 'checkmarkImage')
  i996.colorDefault = new pc.Color(i997[6], i997[7], i997[8], i997[9])
  i996.colorSelected = new pc.Color(i997[10], i997[11], i997[12], i997[13])
  return i996
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'nextButtonText')
  request.r(i999[2], i999[3], 0, i998, 'previousButtonText')
  request.r(i999[4], i999[5], 0, i998, 'nameLabel')
  request.r(i999[6], i999[7], 0, i998, 'valueLabel')
  i998.colorDefault = new pc.Color(i999[8], i999[9], i999[10], i999[11])
  i998.colorSelected = new pc.Color(i999[12], i999[13], i999[14], i999[15])
  return i998
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'nameLabel')
  request.r(i1001[2], i1001[3], 0, i1000, 'valueToggle')
  i1000.colorDefault = new pc.Color(i1001[4], i1001[5], i1001[6], i1001[7])
  i1000.colorSelected = new pc.Color(i1001[8], i1001[9], i1001[10], i1001[11])
  return i1000
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'nameLabel')
  i1002.colorDefault = new pc.Color(i1003[2], i1003[3], i1003[4], i1003[5])
  i1002.colorSelected = new pc.Color(i1003[6], i1003[7], i1003[8], i1003[9])
  return i1002
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'nameLabel')
  request.r(i1005[2], i1005[3], 0, i1004, 'valueLabel')
  request.r(i1005[4], i1005[5], 0, i1004, 'progressBarRect')
  i1004.colorDefault = new pc.Color(i1005[6], i1005[7], i1005[8], i1005[9])
  i1004.colorSelected = new pc.Color(i1005[10], i1005[11], i1005[12], i1005[13])
  return i1004
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'nameLabel')
  request.r(i1007[2], i1007[3], 0, i1006, 'valueLabel')
  i1006.colorDefault = new pc.Color(i1007[4], i1007[5], i1007[6], i1007[7])
  i1006.colorSelected = new pc.Color(i1007[8], i1007[9], i1007[10], i1007[11])
  return i1006
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'nameLabel')
  request.r(i1009[2], i1009[3], 0, i1008, 'valueLabel')
  i1008.colorDefault = new pc.Color(i1009[4], i1009[5], i1009[6], i1009[7])
  i1008.colorSelected = new pc.Color(i1009[8], i1009[9], i1009[10], i1009[11])
  return i1008
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'nextButtonText')
  request.r(i1011[2], i1011[3], 0, i1010, 'previousButtonText')
  request.r(i1011[4], i1011[5], 0, i1010, 'nameLabel')
  request.r(i1011[6], i1011[7], 0, i1010, 'valueLabel')
  i1010.colorDefault = new pc.Color(i1011[8], i1011[9], i1011[10], i1011[11])
  i1010.colorSelected = new pc.Color(i1011[12], i1011[13], i1011[14], i1011[15])
  return i1010
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'nextButtonText')
  request.r(i1013[2], i1013[3], 0, i1012, 'previousButtonText')
  request.r(i1013[4], i1013[5], 0, i1012, 'nameLabel')
  request.r(i1013[6], i1013[7], 0, i1012, 'valueLabel')
  i1012.colorDefault = new pc.Color(i1013[8], i1013[9], i1013[10], i1013[11])
  i1012.colorSelected = new pc.Color(i1013[12], i1013[13], i1013[14], i1013[15])
  return i1012
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'panel')
  request.r(i1015[2], i1015[3], 0, i1014, 'valuePrefab')
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1017 = data
  i1016.AdditionalLightsPerObjectLimit = i1017[0]
  i1016.AdditionalLightsRenderingMode = i1017[1]
  i1016.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1017[2], i1016.LightRenderingMode)
  i1016.ColorGradingLutSize = i1017[3]
  i1016.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1017[4], i1016.ColorGradingMode)
  i1016.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1017[5], i1016.MainLightRenderingMode)
  i1016.MainLightRenderingModeValue = i1017[6]
  i1016.SupportsMainLightShadows = !!i1017[7]
  i1016.MixedLightingSupported = !!i1017[8]
  i1016.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1017[9], i1016.MsaaQuality)
  i1016.MSAA = i1017[10]
  i1016.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1017[11], i1016.OpaqueDownsampling)
  i1016.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1017[12], i1016.MainLightShadowmapResolution)
  i1016.MainLightShadowmapResolutionValue = i1017[13]
  i1016.SupportsSoftShadows = !!i1017[14]
  i1016.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1017[15], i1016.SoftShadowQuality)
  i1016.SoftShadowQualityValue = i1017[16]
  i1016.ShadowDistance = i1017[17]
  i1016.ShadowCascadeCount = i1017[18]
  i1016.Cascade2Split = i1017[19]
  i1016.Cascade3Split = new pc.Vec2( i1017[20], i1017[21] )
  i1016.Cascade4Split = new pc.Vec3( i1017[22], i1017[23], i1017[24] )
  i1016.CascadeBorder = i1017[25]
  i1016.ShadowDepthBias = i1017[26]
  i1016.ShadowNormalBias = i1017[27]
  i1016.RenderScale = i1017[28]
  i1016.RequireDepthTexture = !!i1017[29]
  i1016.RequireOpaqueTexture = !!i1017[30]
  i1016.SupportsHDR = !!i1017[31]
  i1016.SupportsTerrainHoles = !!i1017[32]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1019 = data
  i1018.Disabled = i1019[0]
  i1018.PerVertex = i1019[1]
  i1018.PerPixel = i1019[2]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1021 = data
  i1020.LowDynamicRange = i1021[0]
  i1020.HighDynamicRange = i1021[1]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1023 = data
  i1022.Disabled = i1023[0]
  i1022._2x = i1023[1]
  i1022._4x = i1023[2]
  i1022._8x = i1023[3]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1025 = data
  i1024.None = i1025[0]
  i1024._2xBilinear = i1025[1]
  i1024._4xBox = i1025[2]
  i1024._4xBilinear = i1025[3]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1027 = data
  i1026._256 = i1027[0]
  i1026._512 = i1027[1]
  i1026._1024 = i1027[2]
  i1026._2048 = i1027[3]
  i1026._4096 = i1027[4]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1029 = data
  i1028.UsePipelineSettings = i1029[0]
  i1028.Low = i1029[1]
  i1028.Medium = i1029[2]
  i1028.High = i1029[3]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1033[i + 0]));
  }
  i1030.ShaderCompilationErrors = i1032
  i1030.name = i1031[1]
  i1030.guid = i1031[2]
  var i1035 = i1031[3]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.shaderDefinedKeywords = i1034
  var i1037 = i1031[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1037[i + 0]) );
  }
  i1030.passes = i1036
  var i1039 = i1031[5]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1039[i + 0]) );
  }
  i1030.usePasses = i1038
  var i1041 = i1031[6]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1041[i + 0]) );
  }
  i1030.defaultParameterValues = i1040
  request.r(i1031[7], i1031[8], 0, i1030, 'unityFallbackShader')
  i1030.readDepth = !!i1031[9]
  i1030.isCreatedByShaderGraph = !!i1031[10]
  i1030.compiled = !!i1031[11]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1045 = data
  i1044.shaderName = i1045[0]
  i1044.errorMessage = i1045[1]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1050 = root || new pc.UnityShaderPass()
  var i1051 = data
  i1050.id = i1051[0]
  i1050.subShaderIndex = i1051[1]
  i1050.name = i1051[2]
  i1050.passType = i1051[3]
  i1050.grabPassTextureName = i1051[4]
  i1050.usePass = !!i1051[5]
  i1050.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[6], i1050.zTest)
  i1050.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[7], i1050.zWrite)
  i1050.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[8], i1050.culling)
  i1050.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1051[9], i1050.blending)
  i1050.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1051[10], i1050.alphaBlending)
  i1050.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[11], i1050.colorWriteMask)
  i1050.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[12], i1050.offsetUnits)
  i1050.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[13], i1050.offsetFactor)
  i1050.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[14], i1050.stencilRef)
  i1050.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[15], i1050.stencilReadMask)
  i1050.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[16], i1050.stencilWriteMask)
  i1050.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1051[17], i1050.stencilOp)
  i1050.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1051[18], i1050.stencilOpFront)
  i1050.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1051[19], i1050.stencilOpBack)
  var i1053 = i1051[20]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1053[i + 0]) );
  }
  i1050.tags = i1052
  var i1055 = i1051[21]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1050.passDefinedKeywords = i1054
  var i1057 = i1051[22]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1057[i + 0]) );
  }
  i1050.passDefinedKeywordGroups = i1056
  var i1059 = i1051[23]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1059[i + 0]) );
  }
  i1050.variants = i1058
  var i1061 = i1051[24]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1061[i + 0]) );
  }
  i1050.excludedVariants = i1060
  i1050.hasDepthReader = !!i1051[25]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1063 = data
  i1062.val = i1063[0]
  i1062.name = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1065 = data
  i1064.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[0], i1064.src)
  i1064.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[1], i1064.dst)
  i1064.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[2], i1064.op)
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1067 = data
  i1066.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[0], i1066.pass)
  i1066.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[1], i1066.fail)
  i1066.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[2], i1066.zFail)
  i1066.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[3], i1066.comp)
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.value = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( i1077[i + 0] );
  }
  i1074.keywords = i1076
  i1074.hasDiscard = !!i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1081 = data
  i1080.passId = i1081[0]
  i1080.subShaderIndex = i1081[1]
  var i1083 = i1081[2]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1080.keywords = i1082
  i1080.vertexProgram = i1081[3]
  i1080.fragmentProgram = i1081[4]
  i1080.exportedForWebGl2 = !!i1081[5]
  i1080.readDepth = !!i1081[6]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'shader')
  i1086.pass = i1087[2]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1091 = data
  i1090.name = i1091[0]
  i1090.type = i1091[1]
  i1090.value = new pc.Vec4( i1091[2], i1091[3], i1091[4], i1091[5] )
  i1090.textureValue = i1091[6]
  i1090.shaderPropertyFlag = i1091[7]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1093 = data
  i1092.name = i1093[0]
  request.r(i1093[1], i1093[2], 0, i1092, 'texture')
  i1092.aabb = i1093[3]
  i1092.vertices = i1093[4]
  i1092.triangles = i1093[5]
  i1092.textureRect = UnityEngine.Rect.MinMaxRect(i1093[6], i1093[7], i1093[8], i1093[9])
  i1092.packedRect = UnityEngine.Rect.MinMaxRect(i1093[10], i1093[11], i1093[12], i1093[13])
  i1092.border = new pc.Vec4( i1093[14], i1093[15], i1093[16], i1093[17] )
  i1092.transparency = i1093[18]
  i1092.bounds = i1093[19]
  i1092.pixelsPerUnit = i1093[20]
  i1092.textureWidth = i1093[21]
  i1092.textureHeight = i1093[22]
  i1092.nativeSize = new pc.Vec2( i1093[23], i1093[24] )
  i1092.pivot = new pc.Vec2( i1093[25], i1093[26] )
  i1092.textureRectOffset = new pc.Vec2( i1093[27], i1093[28] )
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1095 = data
  i1094.name = i1095[0]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1097 = data
  i1096.name = i1097[0]
  i1096.wrapMode = i1097[1]
  i1096.isLooping = !!i1097[2]
  i1096.length = i1097[3]
  var i1099 = i1097[4]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1099[i + 0]) );
  }
  i1096.curves = i1098
  var i1101 = i1097[5]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1101[i + 0]) );
  }
  i1096.events = i1100
  i1096.halfPrecision = !!i1097[6]
  i1096._frameRate = i1097[7]
  i1096.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1097[8], i1096.localBounds)
  i1096.hasMuscleCurves = !!i1097[9]
  var i1103 = i1097[10]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1096.clipMuscleConstant = i1102
  i1096.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1097[11], i1096.clipBindingConstant)
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1107 = data
  i1106.path = i1107[0]
  i1106.hash = i1107[1]
  i1106.componentType = i1107[2]
  i1106.property = i1107[3]
  i1106.keys = i1107[4]
  var i1109 = i1107[5]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1109[i + 0]) );
  }
  i1106.objectReferenceKeys = i1108
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1113 = data
  i1112.time = i1113[0]
  request.r(i1113[1], i1113[2], 0, i1112, 'value')
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1117 = data
  i1116.functionName = i1117[0]
  i1116.floatParameter = i1117[1]
  i1116.intParameter = i1117[2]
  i1116.stringParameter = i1117[3]
  request.r(i1117[4], i1117[5], 0, i1116, 'objectReferenceParameter')
  i1116.time = i1117[6]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1119 = data
  i1118.center = new pc.Vec3( i1119[0], i1119[1], i1119[2] )
  i1118.extends = new pc.Vec3( i1119[3], i1119[4], i1119[5] )
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( i1125[i + 0] );
  }
  i1122.genericBindings = i1124
  var i1127 = i1123[1]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1122.pptrCurveMapping = i1126
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.ascent = i1129[1]
  i1128.originalLineHeight = i1129[2]
  i1128.fontSize = i1129[3]
  var i1131 = i1129[4]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1131[i + 0]) );
  }
  i1128.characterInfo = i1130
  request.r(i1129[5], i1129[6], 0, i1128, 'texture')
  i1128.originalFontSize = i1129[7]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1135 = data
  i1134.index = i1135[0]
  i1134.advance = i1135[1]
  i1134.bearing = i1135[2]
  i1134.glyphWidth = i1135[3]
  i1134.glyphHeight = i1135[4]
  i1134.minX = i1135[5]
  i1134.maxX = i1135[6]
  i1134.minY = i1135[7]
  i1134.maxY = i1135[8]
  i1134.uvBottomLeftX = i1135[9]
  i1134.uvBottomLeftY = i1135[10]
  i1134.uvBottomRightX = i1135[11]
  i1134.uvBottomRightY = i1135[12]
  i1134.uvTopLeftX = i1135[13]
  i1134.uvTopLeftY = i1135[14]
  i1134.uvTopRightX = i1135[15]
  i1134.uvTopRightY = i1135[16]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.bytes64 = i1137[1]
  i1136.data = i1137[2]
  return i1136
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 1, i1140, '')
  }
  i1138.components = i1140
  return i1138
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1145 = data
  i1144.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1145[0], i1144.mode)
  i1144.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1145[1], i1144.neutralHDRRangeReductionMode)
  i1144.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1145[2], i1144.acesPreset)
  i1144.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1145[3], i1144.hueShiftAmount)
  i1144.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1145[4], i1144.detectPaperWhite)
  i1144.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1145[5], i1144.paperWhite)
  i1144.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1145[6], i1144.detectBrightnessLimits)
  i1144.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1145[7], i1144.minNits)
  i1144.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1145[8], i1144.maxNits)
  i1144.active = !!i1145[9]
  return i1144
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1147 = data
  i1146.m_Value = i1147[0]
  i1146.m_OverrideState = !!i1147[1]
  return i1146
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1149 = data
  i1148.m_Value = i1149[0]
  i1148.m_OverrideState = !!i1149[1]
  return i1148
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1151 = data
  i1150.m_Value = i1151[0]
  i1150.m_OverrideState = !!i1151[1]
  return i1150
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1153 = data
  i1152.m_Value = i1153[0]
  i1152.m_OverrideState = !!i1153[1]
  return i1152
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1155 = data
  i1154.m_Value = !!i1155[0]
  i1154.m_OverrideState = !!i1155[1]
  return i1154
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1157 = data
  i1156.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1157[0], i1156.skipIterations)
  i1156.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1157[1], i1156.threshold)
  i1156.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1157[2], i1156.intensity)
  i1156.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1157[3], i1156.scatter)
  i1156.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1157[4], i1156.clamp)
  i1156.tint = request.d('UnityEngine.Rendering.ColorParameter', i1157[5], i1156.tint)
  i1156.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1157[6], i1156.highQualityFiltering)
  i1156.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1157[7], i1156.downscale)
  i1156.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1157[8], i1156.maxIterations)
  i1156.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1157[9], i1156.dirtTexture)
  i1156.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1157[10], i1156.dirtIntensity)
  i1156.active = !!i1157[11]
  return i1156
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1159 = data
  i1158.m_Value = i1159[0]
  i1158.m_OverrideState = !!i1159[1]
  return i1158
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1161 = data
  i1160.m_Value = i1161[0]
  i1160.m_OverrideState = !!i1161[1]
  return i1160
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1163 = data
  i1162.m_Value = new pc.Color(i1163[0], i1163[1], i1163[2], i1163[3])
  i1162.m_OverrideState = !!i1163[4]
  return i1162
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1165 = data
  i1164.m_Value = i1165[0]
  i1164.m_OverrideState = !!i1165[1]
  return i1164
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1167 = data
  i1166.dimension = i1167[0]
  request.r(i1167[1], i1167[2], 0, i1166, 'm_Value')
  i1166.m_OverrideState = !!i1167[3]
  return i1166
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1169 = data
  i1168.color = request.d('UnityEngine.Rendering.ColorParameter', i1169[0], i1168.color)
  i1168.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1169[1], i1168.center)
  i1168.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1169[2], i1168.intensity)
  i1168.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1169[3], i1168.smoothness)
  i1168.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1169[4], i1168.rounded)
  i1168.active = !!i1169[5]
  return i1168
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1171 = data
  i1170.m_Value = new pc.Vec2( i1171[0], i1171[1] )
  i1170.m_OverrideState = !!i1171[2]
  return i1170
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1173 = data
  i1172.hashCode = i1173[0]
  request.r(i1173[1], i1173[2], 0, i1172, 'material')
  i1172.materialHashCode = i1173[3]
  request.r(i1173[4], i1173[5], 0, i1172, 'atlas')
  i1172.normalStyle = i1173[6]
  i1172.normalSpacingOffset = i1173[7]
  i1172.boldStyle = i1173[8]
  i1172.boldSpacing = i1173[9]
  i1172.italicStyle = i1173[10]
  i1172.tabSize = i1173[11]
  i1172.m_Version = i1173[12]
  i1172.m_SourceFontFileGUID = i1173[13]
  request.r(i1173[14], i1173[15], 0, i1172, 'm_SourceFontFile_EditorRef')
  request.r(i1173[16], i1173[17], 0, i1172, 'm_SourceFontFile')
  i1172.m_AtlasPopulationMode = i1173[18]
  i1172.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1173[19], i1172.m_FaceInfo)
  var i1175 = i1173[20]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('UnityEngine.TextCore.Glyph', i1175[i + 0]));
  }
  i1172.m_GlyphTable = i1174
  var i1177 = i1173[21]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('TMPro.TMP_Character', i1177[i + 0]));
  }
  i1172.m_CharacterTable = i1176
  var i1179 = i1173[22]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 2) {
  request.r(i1179[i + 0], i1179[i + 1], 2, i1178, '')
  }
  i1172.m_AtlasTextures = i1178
  i1172.m_AtlasTextureIndex = i1173[23]
  i1172.m_IsMultiAtlasTexturesEnabled = !!i1173[24]
  i1172.m_ClearDynamicDataOnBuild = !!i1173[25]
  var i1181 = i1173[26]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('UnityEngine.TextCore.GlyphRect', i1181[i + 0]));
  }
  i1172.m_UsedGlyphRects = i1180
  var i1183 = i1173[27]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('UnityEngine.TextCore.GlyphRect', i1183[i + 0]));
  }
  i1172.m_FreeGlyphRects = i1182
  i1172.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1173[28], i1172.m_fontInfo)
  i1172.m_AtlasWidth = i1173[29]
  i1172.m_AtlasHeight = i1173[30]
  i1172.m_AtlasPadding = i1173[31]
  i1172.m_AtlasRenderMode = i1173[32]
  var i1185 = i1173[33]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.TMP_Glyph', i1185[i + 0]));
  }
  i1172.m_glyphInfoList = i1184
  i1172.m_KerningTable = request.d('TMPro.KerningTable', i1173[34], i1172.m_KerningTable)
  i1172.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1173[35], i1172.m_FontFeatureTable)
  var i1187 = i1173[36]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 1, i1186, '')
  }
  i1172.fallbackFontAssets = i1186
  var i1189 = i1173[37]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 1, i1188, '')
  }
  i1172.m_FallbackFontAssetTable = i1188
  i1172.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1173[38], i1172.m_CreationSettings)
  var i1191 = i1173[39]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('TMPro.TMP_FontWeightPair', i1191[i + 0]) );
  }
  i1172.m_FontWeightTable = i1190
  var i1193 = i1173[40]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('TMPro.TMP_FontWeightPair', i1193[i + 0]) );
  }
  i1172.fontWeights = i1192
  return i1172
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1195 = data
  i1194.m_FaceIndex = i1195[0]
  i1194.m_FamilyName = i1195[1]
  i1194.m_StyleName = i1195[2]
  i1194.m_PointSize = i1195[3]
  i1194.m_Scale = i1195[4]
  i1194.m_UnitsPerEM = i1195[5]
  i1194.m_LineHeight = i1195[6]
  i1194.m_AscentLine = i1195[7]
  i1194.m_CapLine = i1195[8]
  i1194.m_MeanLine = i1195[9]
  i1194.m_Baseline = i1195[10]
  i1194.m_DescentLine = i1195[11]
  i1194.m_SuperscriptOffset = i1195[12]
  i1194.m_SuperscriptSize = i1195[13]
  i1194.m_SubscriptOffset = i1195[14]
  i1194.m_SubscriptSize = i1195[15]
  i1194.m_UnderlineOffset = i1195[16]
  i1194.m_UnderlineThickness = i1195[17]
  i1194.m_StrikethroughOffset = i1195[18]
  i1194.m_StrikethroughThickness = i1195[19]
  i1194.m_TabWidth = i1195[20]
  return i1194
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1199 = data
  i1198.m_Index = i1199[0]
  i1198.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1199[1], i1198.m_Metrics)
  i1198.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1199[2], i1198.m_GlyphRect)
  i1198.m_Scale = i1199[3]
  i1198.m_AtlasIndex = i1199[4]
  i1198.m_ClassDefinitionType = i1199[5]
  return i1198
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1201 = data
  i1200.m_Width = i1201[0]
  i1200.m_Height = i1201[1]
  i1200.m_HorizontalBearingX = i1201[2]
  i1200.m_HorizontalBearingY = i1201[3]
  i1200.m_HorizontalAdvance = i1201[4]
  return i1200
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1203 = data
  i1202.m_X = i1203[0]
  i1202.m_Y = i1203[1]
  i1202.m_Width = i1203[2]
  i1202.m_Height = i1203[3]
  return i1202
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_Character' )
  var i1207 = data
  i1206.m_ElementType = i1207[0]
  i1206.m_Unicode = i1207[1]
  i1206.m_GlyphIndex = i1207[2]
  i1206.m_Scale = i1207[3]
  return i1206
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1213 = data
  i1212.Name = i1213[0]
  i1212.PointSize = i1213[1]
  i1212.Scale = i1213[2]
  i1212.CharacterCount = i1213[3]
  i1212.LineHeight = i1213[4]
  i1212.Baseline = i1213[5]
  i1212.Ascender = i1213[6]
  i1212.CapHeight = i1213[7]
  i1212.Descender = i1213[8]
  i1212.CenterLine = i1213[9]
  i1212.SuperscriptOffset = i1213[10]
  i1212.SubscriptOffset = i1213[11]
  i1212.SubSize = i1213[12]
  i1212.Underline = i1213[13]
  i1212.UnderlineThickness = i1213[14]
  i1212.strikethrough = i1213[15]
  i1212.strikethroughThickness = i1213[16]
  i1212.TabWidth = i1213[17]
  i1212.Padding = i1213[18]
  i1212.AtlasWidth = i1213[19]
  i1212.AtlasHeight = i1213[20]
  return i1212
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1217 = data
  i1216.id = i1217[0]
  i1216.x = i1217[1]
  i1216.y = i1217[2]
  i1216.width = i1217[3]
  i1216.height = i1217[4]
  i1216.xOffset = i1217[5]
  i1216.yOffset = i1217[6]
  i1216.xAdvance = i1217[7]
  i1216.scale = i1217[8]
  return i1216
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.KerningTable' )
  var i1219 = data
  var i1221 = i1219[0]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('TMPro.KerningPair', i1221[i + 0]));
  }
  i1218.kerningPairs = i1220
  return i1218
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.KerningPair' )
  var i1225 = data
  i1224.xOffset = i1225[0]
  i1224.m_FirstGlyph = i1225[1]
  i1224.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1225[2], i1224.m_FirstGlyphAdjustments)
  i1224.m_SecondGlyph = i1225[3]
  i1224.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1225[4], i1224.m_SecondGlyphAdjustments)
  i1224.m_IgnoreSpacingAdjustments = !!i1225[5]
  return i1224
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1227 = data
  var i1229 = i1227[0]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1229[i + 0]));
  }
  i1226.m_GlyphPairAdjustmentRecords = i1228
  return i1226
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1233 = data
  i1232.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1233[0], i1232.m_FirstAdjustmentRecord)
  i1232.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1233[1], i1232.m_SecondAdjustmentRecord)
  i1232.m_FeatureLookupFlags = i1233[2]
  return i1232
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1235 = data
  i1234.m_GlyphIndex = i1235[0]
  i1234.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1235[1], i1234.m_GlyphValueRecord)
  return i1234
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1237 = data
  i1236.m_XPlacement = i1237[0]
  i1236.m_YPlacement = i1237[1]
  i1236.m_XAdvance = i1237[2]
  i1236.m_YAdvance = i1237[3]
  return i1236
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1241 = data
  i1240.sourceFontFileName = i1241[0]
  i1240.sourceFontFileGUID = i1241[1]
  i1240.pointSizeSamplingMode = i1241[2]
  i1240.pointSize = i1241[3]
  i1240.padding = i1241[4]
  i1240.packingMode = i1241[5]
  i1240.atlasWidth = i1241[6]
  i1240.atlasHeight = i1241[7]
  i1240.characterSetSelectionMode = i1241[8]
  i1240.characterSequence = i1241[9]
  i1240.referencedFontAssetGUID = i1241[10]
  i1240.referencedTextAssetGUID = i1241[11]
  i1240.fontStyle = i1241[12]
  i1240.fontStyleModifier = i1241[13]
  i1240.renderMode = i1241[14]
  i1240.includeFontFeatures = !!i1241[15]
  return i1240
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1245 = data
  request.r(i1245[0], i1245[1], 0, i1244, 'regularTypeface')
  request.r(i1245[2], i1245[3], 0, i1244, 'italicTypeface')
  return i1244
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1246 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1247 = data
  i1246.useSafeMode = !!i1247[0]
  i1246.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1247[1], i1246.safeModeOptions)
  i1246.timeScale = i1247[2]
  i1246.unscaledTimeScale = i1247[3]
  i1246.useSmoothDeltaTime = !!i1247[4]
  i1246.maxSmoothUnscaledTime = i1247[5]
  i1246.rewindCallbackMode = i1247[6]
  i1246.showUnityEditorReport = !!i1247[7]
  i1246.logBehaviour = i1247[8]
  i1246.drawGizmos = !!i1247[9]
  i1246.defaultRecyclable = !!i1247[10]
  i1246.defaultAutoPlay = i1247[11]
  i1246.defaultUpdateType = i1247[12]
  i1246.defaultTimeScaleIndependent = !!i1247[13]
  i1246.defaultEaseType = i1247[14]
  i1246.defaultEaseOvershootOrAmplitude = i1247[15]
  i1246.defaultEasePeriod = i1247[16]
  i1246.defaultAutoKill = !!i1247[17]
  i1246.defaultLoopType = i1247[18]
  i1246.debugMode = !!i1247[19]
  i1246.debugStoreTargetId = !!i1247[20]
  i1246.showPreviewPanel = !!i1247[21]
  i1246.storeSettingsLocation = i1247[22]
  i1246.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1247[23], i1246.modules)
  i1246.createASMDEF = !!i1247[24]
  i1246.showPlayingTweens = !!i1247[25]
  i1246.showPausedTweens = !!i1247[26]
  return i1246
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1248 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1249 = data
  i1248.logBehaviour = i1249[0]
  i1248.nestedTweenFailureBehaviour = i1249[1]
  return i1248
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1250 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1251 = data
  i1250.showPanel = !!i1251[0]
  i1250.audioEnabled = !!i1251[1]
  i1250.physicsEnabled = !!i1251[2]
  i1250.physics2DEnabled = !!i1251[3]
  i1250.spriteEnabled = !!i1251[4]
  i1250.uiEnabled = !!i1251[5]
  i1250.textMeshProEnabled = !!i1251[6]
  i1250.tk2DEnabled = !!i1251[7]
  i1250.deAudioEnabled = !!i1251[8]
  i1250.deUnityExtendedEnabled = !!i1251[9]
  i1250.epoOutlineEnabled = !!i1251[10]
  return i1250
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_Settings' )
  var i1253 = data
  i1252.m_enableWordWrapping = !!i1253[0]
  i1252.m_enableKerning = !!i1253[1]
  i1252.m_enableExtraPadding = !!i1253[2]
  i1252.m_enableTintAllSprites = !!i1253[3]
  i1252.m_enableParseEscapeCharacters = !!i1253[4]
  i1252.m_EnableRaycastTarget = !!i1253[5]
  i1252.m_GetFontFeaturesAtRuntime = !!i1253[6]
  i1252.m_missingGlyphCharacter = i1253[7]
  i1252.m_warningsDisabled = !!i1253[8]
  request.r(i1253[9], i1253[10], 0, i1252, 'm_defaultFontAsset')
  i1252.m_defaultFontAssetPath = i1253[11]
  i1252.m_defaultFontSize = i1253[12]
  i1252.m_defaultAutoSizeMinRatio = i1253[13]
  i1252.m_defaultAutoSizeMaxRatio = i1253[14]
  i1252.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1253[15], i1253[16] )
  i1252.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1253[17], i1253[18] )
  i1252.m_autoSizeTextContainer = !!i1253[19]
  i1252.m_IsTextObjectScaleStatic = !!i1253[20]
  var i1255 = i1253[21]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 1, i1254, '')
  }
  i1252.m_fallbackFontAssets = i1254
  i1252.m_matchMaterialPreset = !!i1253[22]
  request.r(i1253[23], i1253[24], 0, i1252, 'm_defaultSpriteAsset')
  i1252.m_defaultSpriteAssetPath = i1253[25]
  i1252.m_enableEmojiSupport = !!i1253[26]
  i1252.m_MissingCharacterSpriteUnicode = i1253[27]
  i1252.m_defaultColorGradientPresetsPath = i1253[28]
  request.r(i1253[29], i1253[30], 0, i1252, 'm_defaultStyleSheet')
  i1252.m_StyleSheetsResourcePath = i1253[31]
  request.r(i1253[32], i1253[33], 0, i1252, 'm_leadingCharacters')
  request.r(i1253[34], i1253[35], 0, i1252, 'm_followingCharacters')
  i1252.m_UseModernHangulLineBreakingRules = !!i1253[36]
  return i1252
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1257 = data
  i1256.hashCode = i1257[0]
  request.r(i1257[1], i1257[2], 0, i1256, 'material')
  i1256.materialHashCode = i1257[3]
  request.r(i1257[4], i1257[5], 0, i1256, 'spriteSheet')
  var i1259 = i1257[6]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.TMP_Sprite', i1259[i + 0]));
  }
  i1256.spriteInfoList = i1258
  var i1261 = i1257[7]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 1, i1260, '')
  }
  i1256.fallbackSpriteAssets = i1260
  i1256.m_Version = i1257[8]
  i1256.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1257[9], i1256.m_FaceInfo)
  var i1263 = i1257[10]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.TMP_SpriteCharacter', i1263[i + 0]));
  }
  i1256.m_SpriteCharacterTable = i1262
  var i1265 = i1257[11]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('TMPro.TMP_SpriteGlyph', i1265[i + 0]));
  }
  i1256.m_SpriteGlyphTable = i1264
  return i1256
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1269 = data
  i1268.name = i1269[0]
  i1268.hashCode = i1269[1]
  i1268.unicode = i1269[2]
  i1268.pivot = new pc.Vec2( i1269[3], i1269[4] )
  request.r(i1269[5], i1269[6], 0, i1268, 'sprite')
  i1268.id = i1269[7]
  i1268.x = i1269[8]
  i1268.y = i1269[9]
  i1268.width = i1269[10]
  i1268.height = i1269[11]
  i1268.xOffset = i1269[12]
  i1268.yOffset = i1269[13]
  i1268.xAdvance = i1269[14]
  i1268.scale = i1269[15]
  return i1268
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1275 = data
  i1274.m_Name = i1275[0]
  i1274.m_HashCode = i1275[1]
  i1274.m_ElementType = i1275[2]
  i1274.m_Unicode = i1275[3]
  i1274.m_GlyphIndex = i1275[4]
  i1274.m_Scale = i1275[5]
  return i1274
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'sprite')
  i1278.m_Index = i1279[2]
  i1278.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1279[3], i1278.m_Metrics)
  i1278.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1279[4], i1278.m_GlyphRect)
  i1278.m_Scale = i1279[5]
  i1278.m_AtlasIndex = i1279[6]
  i1278.m_ClassDefinitionType = i1279[7]
  return i1278
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1281 = data
  var i1283 = i1281[0]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.TMP_Style', i1283[i + 0]));
  }
  i1280.m_StyleList = i1282
  return i1280
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_Style' )
  var i1287 = data
  i1286.m_Name = i1287[0]
  i1286.m_HashCode = i1287[1]
  i1286.m_OpeningDefinition = i1287[2]
  i1286.m_ClosingDefinition = i1287[3]
  i1286.m_OpeningTagArray = i1287[4]
  i1286.m_ClosingTagArray = i1287[5]
  i1286.m_OpeningTagUnicodeArray = i1287[6]
  i1286.m_ClosingTagUnicodeArray = i1287[7]
  return i1286
}

Deserializers["TMPro.TMP_ColorGradient"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_ColorGradient' )
  var i1289 = data
  i1288.colorMode = i1289[0]
  i1288.topLeft = new pc.Color(i1289[1], i1289[2], i1289[3], i1289[4])
  i1288.topRight = new pc.Color(i1289[5], i1289[6], i1289[7], i1289[8])
  i1288.bottomLeft = new pc.Color(i1289[9], i1289[10], i1289[11], i1289[12])
  i1288.bottomRight = new pc.Color(i1289[13], i1289[14], i1289[15], i1289[16])
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1293[i + 0]) );
  }
  i1290.files = i1292
  i1290.componentToPrefabIds = i1291[1]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1297 = data
  i1296.path = i1297[0]
  request.r(i1297[1], i1297[2], 0, i1296, 'unityObject')
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1301[i + 0]) );
  }
  i1298.scriptsExecutionOrder = i1300
  var i1303 = i1299[1]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1303[i + 0]) );
  }
  i1298.sortingLayers = i1302
  var i1305 = i1299[2]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1305[i + 0]) );
  }
  i1298.cullingLayers = i1304
  i1298.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1299[3], i1298.timeSettings)
  i1298.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1299[4], i1298.physicsSettings)
  i1298.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1299[5], i1298.physics2DSettings)
  i1298.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1299[6], i1298.qualitySettings)
  i1298.enableRealtimeShadows = !!i1299[7]
  i1298.enableAutoInstancing = !!i1299[8]
  i1298.enableDynamicBatching = !!i1299[9]
  i1298.lightmapEncodingQuality = i1299[10]
  i1298.desiredColorSpace = i1299[11]
  var i1307 = i1299[12]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( i1307[i + 0] );
  }
  i1298.allTags = i1306
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1311 = data
  i1310.name = i1311[0]
  i1310.value = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.name = i1315[1]
  i1314.value = i1315[2]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1319 = data
  i1318.id = i1319[0]
  i1318.name = i1319[1]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1321 = data
  i1320.fixedDeltaTime = i1321[0]
  i1320.maximumDeltaTime = i1321[1]
  i1320.timeScale = i1321[2]
  i1320.maximumParticleTimestep = i1321[3]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1323 = data
  i1322.gravity = new pc.Vec3( i1323[0], i1323[1], i1323[2] )
  i1322.defaultSolverIterations = i1323[3]
  i1322.bounceThreshold = i1323[4]
  i1322.autoSyncTransforms = !!i1323[5]
  i1322.autoSimulation = !!i1323[6]
  var i1325 = i1323[7]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1325[i + 0]) );
  }
  i1322.collisionMatrix = i1324
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1329 = data
  i1328.enabled = !!i1329[0]
  i1328.layerId = i1329[1]
  i1328.otherLayerId = i1329[2]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'material')
  i1330.gravity = new pc.Vec2( i1331[2], i1331[3] )
  i1330.positionIterations = i1331[4]
  i1330.velocityIterations = i1331[5]
  i1330.velocityThreshold = i1331[6]
  i1330.maxLinearCorrection = i1331[7]
  i1330.maxAngularCorrection = i1331[8]
  i1330.maxTranslationSpeed = i1331[9]
  i1330.maxRotationSpeed = i1331[10]
  i1330.baumgarteScale = i1331[11]
  i1330.baumgarteTOIScale = i1331[12]
  i1330.timeToSleep = i1331[13]
  i1330.linearSleepTolerance = i1331[14]
  i1330.angularSleepTolerance = i1331[15]
  i1330.defaultContactOffset = i1331[16]
  i1330.autoSimulation = !!i1331[17]
  i1330.queriesHitTriggers = !!i1331[18]
  i1330.queriesStartInColliders = !!i1331[19]
  i1330.callbacksOnDisable = !!i1331[20]
  i1330.reuseCollisionCallbacks = !!i1331[21]
  i1330.autoSyncTransforms = !!i1331[22]
  var i1333 = i1331[23]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1333[i + 0]) );
  }
  i1330.collisionMatrix = i1332
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1337 = data
  i1336.enabled = !!i1337[0]
  i1336.layerId = i1337[1]
  i1336.otherLayerId = i1337[2]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1341[i + 0]) );
  }
  i1338.qualityLevels = i1340
  var i1343 = i1339[1]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( i1343[i + 0] );
  }
  i1338.names = i1342
  i1338.shadows = i1339[2]
  i1338.anisotropicFiltering = i1339[3]
  i1338.antiAliasing = i1339[4]
  i1338.lodBias = i1339[5]
  i1338.shadowCascades = i1339[6]
  i1338.shadowDistance = i1339[7]
  i1338.shadowmaskMode = i1339[8]
  i1338.shadowProjection = i1339[9]
  i1338.shadowResolution = i1339[10]
  i1338.softParticles = !!i1339[11]
  i1338.softVegetation = !!i1339[12]
  i1338.activeColorSpace = i1339[13]
  i1338.desiredColorSpace = i1339[14]
  i1338.masterTextureLimit = i1339[15]
  i1338.maxQueuedFrames = i1339[16]
  i1338.particleRaycastBudget = i1339[17]
  i1338.pixelLightCount = i1339[18]
  i1338.realtimeReflectionProbes = !!i1339[19]
  i1338.shadowCascade2Split = i1339[20]
  i1338.shadowCascade4Split = new pc.Vec3( i1339[21], i1339[22], i1339[23] )
  i1338.streamingMipmapsActive = !!i1339[24]
  i1338.vSyncCount = i1339[25]
  i1338.asyncUploadBufferSize = i1339[26]
  i1338.asyncUploadTimeSlice = i1339[27]
  i1338.billboardsFaceCameraPosition = !!i1339[28]
  i1338.shadowNearPlaneOffset = i1339[29]
  i1338.streamingMipmapsMemoryBudget = i1339[30]
  i1338.maximumLODLevel = i1339[31]
  i1338.streamingMipmapsAddAllCameras = !!i1339[32]
  i1338.streamingMipmapsMaxLevelReduction = i1339[33]
  i1338.streamingMipmapsRenderersPerFrame = i1339[34]
  i1338.resolutionScalingFixedDPIFactor = i1339[35]
  i1338.streamingMipmapsMaxFileIORequests = i1339[36]
  i1338.currentQualityLevel = i1339[37]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1349 = data
  i1348.weight = i1349[0]
  i1348.vertices = i1349[1]
  i1348.normals = i1349[2]
  i1348.tangents = i1349[3]
  return i1348
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1351 = data
  i1350.xPlacement = i1351[0]
  i1350.yPlacement = i1351[1]
  i1350.xAdvance = i1351[2]
  i1350.yAdvance = i1351[3]
  return i1350
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"93":[94],"95":[94],"96":[94],"97":[94],"98":[94],"99":[94],"100":[101],"102":[3],"103":[104],"105":[104],"106":[104],"107":[104],"108":[104],"109":[104],"110":[104],"111":[112],"113":[112],"114":[112],"115":[112],"116":[112],"117":[112],"118":[112],"119":[112],"120":[112],"121":[112],"122":[112],"123":[112],"124":[112],"125":[3],"126":[28],"127":[128],"129":[128],"16":[15],"130":[19,131,15],"62":[15],"132":[3],"6":[3],"8":[7],"133":[134],"135":[15],"136":[15],"18":[16],"20":[19,15],"137":[15],"17":[16],"42":[15],"138":[15],"69":[15],"139":[15],"47":[15],"140":[15],"41":[15],"51":[15],"141":[15],"142":[19,15],"143":[15],"50":[15],"46":[15],"144":[15],"45":[19,15],"55":[15],"145":[12],"146":[12],"13":[12],"147":[12],"148":[3],"149":[3],"150":[134],"151":[15],"152":[28,15],"22":[15,19],"153":[15],"154":[19,15],"155":[28],"156":[19,15],"157":[15],"158":[134]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","SceneLoading","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Animation","UnityEngine.Cubemap","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Items","UnityEngine.Mesh","UnityEngine.CapsuleCollider","GameManager","UnityEngine.GameObject","Trays","ItemObjectPool","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.AnimationClip","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","TMPro.TMP_ColorGradient","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 07:34:56";

Deserializers.lunaDaysRunning = "1.7";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "parkdj663-gmail-com";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1756";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4413";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "207db850-d778-4e45-9f2a-ff9d26648f69";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

