var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3380 = root || request.c( 'UnityEngine.JointSpring' )
  var i3381 = data
  i3380.spring = i3381[0]
  i3380.damper = i3381[1]
  i3380.targetPosition = i3381[2]
  return i3380
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3382 = root || request.c( 'UnityEngine.JointMotor' )
  var i3383 = data
  i3382.m_TargetVelocity = i3383[0]
  i3382.m_Force = i3383[1]
  i3382.m_FreeSpin = i3383[2]
  return i3382
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3384 = root || request.c( 'UnityEngine.JointLimits' )
  var i3385 = data
  i3384.m_Min = i3385[0]
  i3384.m_Max = i3385[1]
  i3384.m_Bounciness = i3385[2]
  i3384.m_BounceMinVelocity = i3385[3]
  i3384.m_ContactDistance = i3385[4]
  i3384.minBounce = i3385[5]
  i3384.maxBounce = i3385[6]
  return i3384
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3386 = root || request.c( 'UnityEngine.JointDrive' )
  var i3387 = data
  i3386.m_PositionSpring = i3387[0]
  i3386.m_PositionDamper = i3387[1]
  i3386.m_MaximumForce = i3387[2]
  i3386.m_UseAcceleration = i3387[3]
  return i3386
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3388 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3389 = data
  i3388.m_Spring = i3389[0]
  i3388.m_Damper = i3389[1]
  return i3388
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3390 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3391 = data
  i3390.m_Limit = i3391[0]
  i3390.m_Bounciness = i3391[1]
  i3390.m_ContactDistance = i3391[2]
  return i3390
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3392 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3393 = data
  i3392.m_ExtremumSlip = i3393[0]
  i3392.m_ExtremumValue = i3393[1]
  i3392.m_AsymptoteSlip = i3393[2]
  i3392.m_AsymptoteValue = i3393[3]
  i3392.m_Stiffness = i3393[4]
  return i3392
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3394 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3395 = data
  i3394.m_LowerAngle = i3395[0]
  i3394.m_UpperAngle = i3395[1]
  return i3394
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3396 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3397 = data
  i3396.m_MotorSpeed = i3397[0]
  i3396.m_MaximumMotorTorque = i3397[1]
  return i3396
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3398 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3399 = data
  i3398.m_DampingRatio = i3399[0]
  i3398.m_Frequency = i3399[1]
  i3398.m_Angle = i3399[2]
  return i3398
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3400 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3401 = data
  i3400.m_LowerTranslation = i3401[0]
  i3400.m_UpperTranslation = i3401[1]
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3403 = data
  i3402.name = i3403[0]
  i3402.width = i3403[1]
  i3402.height = i3403[2]
  i3402.mipmapCount = i3403[3]
  i3402.anisoLevel = i3403[4]
  i3402.filterMode = i3403[5]
  i3402.hdr = !!i3403[6]
  i3402.format = i3403[7]
  i3402.wrapMode = i3403[8]
  i3402.alphaIsTransparency = !!i3403[9]
  i3402.alphaSource = i3403[10]
  i3402.graphicsFormat = i3403[11]
  i3402.sRGBTexture = !!i3403[12]
  i3402.desiredColorSpace = i3403[13]
  i3402.wrapU = i3403[14]
  i3402.wrapV = i3403[15]
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3404 = root || new pc.UnityMaterial()
  var i3405 = data
  i3404.name = i3405[0]
  request.r(i3405[1], i3405[2], 0, i3404, 'shader')
  i3404.renderQueue = i3405[3]
  i3404.enableInstancing = !!i3405[4]
  var i3407 = i3405[5]
  var i3406 = []
  for(var i = 0; i < i3407.length; i += 1) {
    i3406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3407[i + 0]) );
  }
  i3404.floatParameters = i3406
  var i3409 = i3405[6]
  var i3408 = []
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3409[i + 0]) );
  }
  i3404.colorParameters = i3408
  var i3411 = i3405[7]
  var i3410 = []
  for(var i = 0; i < i3411.length; i += 1) {
    i3410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3411[i + 0]) );
  }
  i3404.vectorParameters = i3410
  var i3413 = i3405[8]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3413[i + 0]) );
  }
  i3404.textureParameters = i3412
  var i3415 = i3405[9]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3415[i + 0]) );
  }
  i3404.materialFlags = i3414
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3419 = data
  i3418.name = i3419[0]
  i3418.value = i3419[1]
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3423 = data
  i3422.name = i3423[0]
  i3422.value = new pc.Color(i3423[1], i3423[2], i3423[3], i3423[4])
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3427 = data
  i3426.name = i3427[0]
  i3426.value = new pc.Vec4( i3427[1], i3427[2], i3427[3], i3427[4] )
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3431 = data
  i3430.name = i3431[0]
  request.r(i3431[1], i3431[2], 0, i3430, 'value')
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3435 = data
  i3434.name = i3435[0]
  i3434.enabled = !!i3435[1]
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3437 = data
  i3436.name = i3437[0]
  i3436.atlasId = i3437[1]
  i3436.mipmapCount = i3437[2]
  i3436.hdr = !!i3437[3]
  i3436.size = i3437[4]
  i3436.anisoLevel = i3437[5]
  i3436.filterMode = i3437[6]
  var i3439 = i3437[7]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 4) {
    i3438.push( UnityEngine.Rect.MinMaxRect(i3439[i + 0], i3439[i + 1], i3439[i + 2], i3439[i + 3]) );
  }
  i3436.rects = i3438
  i3436.wrapU = i3437[8]
  i3436.wrapV = i3437[9]
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3443 = data
  i3442.name = i3443[0]
  i3442.index = i3443[1]
  i3442.startup = !!i3443[2]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3445 = data
  i3444.position = new pc.Vec3( i3445[0], i3445[1], i3445[2] )
  i3444.scale = new pc.Vec3( i3445[3], i3445[4], i3445[5] )
  i3444.rotation = new pc.Quat(i3445[6], i3445[7], i3445[8], i3445[9])
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3447 = data
  i3446.enabled = !!i3447[0]
  i3446.aspect = i3447[1]
  i3446.orthographic = !!i3447[2]
  i3446.orthographicSize = i3447[3]
  i3446.backgroundColor = new pc.Color(i3447[4], i3447[5], i3447[6], i3447[7])
  i3446.nearClipPlane = i3447[8]
  i3446.farClipPlane = i3447[9]
  i3446.fieldOfView = i3447[10]
  i3446.depth = i3447[11]
  i3446.clearFlags = i3447[12]
  i3446.cullingMask = i3447[13]
  i3446.rect = i3447[14]
  request.r(i3447[15], i3447[16], 0, i3446, 'targetTexture')
  i3446.usePhysicalProperties = !!i3447[17]
  i3446.focalLength = i3447[18]
  i3446.sensorSize = new pc.Vec2( i3447[19], i3447[20] )
  i3446.lensShift = new pc.Vec2( i3447[21], i3447[22] )
  i3446.gateFit = i3447[23]
  i3446.commandBufferCount = i3447[24]
  i3446.cameraType = i3447[25]
  return i3446
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i3449 = data
  i3448.m_RenderShadows = !!i3449[0]
  i3448.m_RequiresDepthTextureOption = i3449[1]
  i3448.m_RequiresOpaqueTextureOption = i3449[2]
  i3448.m_CameraType = i3449[3]
  var i3451 = i3449[4]
  var i3450 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i3451.length; i += 2) {
  request.r(i3451[i + 0], i3451[i + 1], 1, i3450, '')
  }
  i3448.m_Cameras = i3450
  i3448.m_RendererIndex = i3449[5]
  i3448.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3449[6] )
  request.r(i3449[7], i3449[8], 0, i3448, 'm_VolumeTrigger')
  i3448.m_VolumeFrameworkUpdateModeOption = i3449[9]
  i3448.m_RenderPostProcessing = !!i3449[10]
  i3448.m_Antialiasing = i3449[11]
  i3448.m_AntialiasingQuality = i3449[12]
  i3448.m_StopNaN = !!i3449[13]
  i3448.m_Dithering = !!i3449[14]
  i3448.m_ClearDepth = !!i3449[15]
  i3448.m_AllowXRRendering = !!i3449[16]
  i3448.m_AllowHDROutput = !!i3449[17]
  i3448.m_UseScreenCoordOverride = !!i3449[18]
  i3448.m_ScreenSizeOverride = new pc.Vec4( i3449[19], i3449[20], i3449[21], i3449[22] )
  i3448.m_ScreenCoordScaleBias = new pc.Vec4( i3449[23], i3449[24], i3449[25], i3449[26] )
  i3448.m_RequiresDepthTexture = !!i3449[27]
  i3448.m_RequiresColorTexture = !!i3449[28]
  i3448.m_Version = i3449[29]
  i3448.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i3449[30], i3448.m_TaaSettings)
  return i3448
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i3454 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i3455 = data
  i3454.m_Quality = i3455[0]
  i3454.m_FrameInfluence = i3455[1]
  i3454.m_JitterScale = i3455[2]
  i3454.m_MipBias = i3455[3]
  i3454.m_VarianceClampScale = i3455[4]
  i3454.m_ContrastAdaptiveSharpening = i3455[5]
  return i3454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3457 = data
  i3456.name = i3457[0]
  i3456.tagId = i3457[1]
  i3456.enabled = !!i3457[2]
  i3456.isStatic = !!i3457[3]
  i3456.layer = i3457[4]
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3459 = data
  i3458.enabled = !!i3459[0]
  i3458.type = i3459[1]
  i3458.color = new pc.Color(i3459[2], i3459[3], i3459[4], i3459[5])
  i3458.cullingMask = i3459[6]
  i3458.intensity = i3459[7]
  i3458.range = i3459[8]
  i3458.spotAngle = i3459[9]
  i3458.shadows = i3459[10]
  i3458.shadowNormalBias = i3459[11]
  i3458.shadowBias = i3459[12]
  i3458.shadowStrength = i3459[13]
  i3458.shadowResolution = i3459[14]
  i3458.lightmapBakeType = i3459[15]
  i3458.renderMode = i3459[16]
  request.r(i3459[17], i3459[18], 0, i3458, 'cookie')
  i3458.cookieSize = i3459[19]
  return i3458
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i3460 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i3461 = data
  i3460.m_Version = i3461[0]
  i3460.m_UsePipelineSettings = !!i3461[1]
  i3460.m_AdditionalLightsShadowResolutionTier = i3461[2]
  i3460.m_LightLayerMask = i3461[3]
  i3460.m_RenderingLayers = i3461[4]
  i3460.m_CustomShadowLayers = !!i3461[5]
  i3460.m_ShadowLayerMask = i3461[6]
  i3460.m_ShadowRenderingLayers = i3461[7]
  i3460.m_LightCookieSize = new pc.Vec2( i3461[8], i3461[9] )
  i3460.m_LightCookieOffset = new pc.Vec2( i3461[10], i3461[11] )
  i3460.m_SoftShadowQuality = i3461[12]
  return i3460
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i3462 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i3463 = data
  i3462.priority = i3463[0]
  i3462.blendDistance = i3463[1]
  i3462.weight = i3463[2]
  request.r(i3463[3], i3463[4], 0, i3462, 'sharedProfile')
  i3462.m_IsGlobal = !!i3463[5]
  return i3462
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3465 = data
  request.r(i3465[0], i3465[1], 0, i3464, 'm_FirstSelected')
  i3464.m_sendNavigationEvents = !!i3465[2]
  i3464.m_DragThreshold = i3465[3]
  return i3464
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3466 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3467 = data
  i3466.m_HorizontalAxis = i3467[0]
  i3466.m_VerticalAxis = i3467[1]
  i3466.m_SubmitButton = i3467[2]
  i3466.m_CancelButton = i3467[3]
  i3466.m_InputActionsPerSecond = i3467[4]
  i3466.m_RepeatDelay = i3467[5]
  i3466.m_ForceModuleActive = !!i3467[6]
  i3466.m_SendPointerHoverToParent = !!i3467[7]
  return i3466
}

Deserializers["SceneLoading"] = function (request, data, root) {
  var i3468 = root || request.c( 'SceneLoading' )
  var i3469 = data
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3471 = data
  i3470.pivot = new pc.Vec2( i3471[0], i3471[1] )
  i3470.anchorMin = new pc.Vec2( i3471[2], i3471[3] )
  i3470.anchorMax = new pc.Vec2( i3471[4], i3471[5] )
  i3470.sizeDelta = new pc.Vec2( i3471[6], i3471[7] )
  i3470.anchoredPosition3D = new pc.Vec3( i3471[8], i3471[9], i3471[10] )
  i3470.rotation = new pc.Quat(i3471[11], i3471[12], i3471[13], i3471[14])
  i3470.scale = new pc.Vec3( i3471[15], i3471[16], i3471[17] )
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3473 = data
  i3472.enabled = !!i3473[0]
  i3472.planeDistance = i3473[1]
  i3472.referencePixelsPerUnit = i3473[2]
  i3472.isFallbackOverlay = !!i3473[3]
  i3472.renderMode = i3473[4]
  i3472.renderOrder = i3473[5]
  i3472.sortingLayerName = i3473[6]
  i3472.sortingOrder = i3473[7]
  i3472.scaleFactor = i3473[8]
  request.r(i3473[9], i3473[10], 0, i3472, 'worldCamera')
  i3472.overrideSorting = !!i3473[11]
  i3472.pixelPerfect = !!i3473[12]
  i3472.targetDisplay = i3473[13]
  i3472.overridePixelPerfect = !!i3473[14]
  return i3472
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3474 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3475 = data
  i3474.m_UiScaleMode = i3475[0]
  i3474.m_ReferencePixelsPerUnit = i3475[1]
  i3474.m_ScaleFactor = i3475[2]
  i3474.m_ReferenceResolution = new pc.Vec2( i3475[3], i3475[4] )
  i3474.m_ScreenMatchMode = i3475[5]
  i3474.m_MatchWidthOrHeight = i3475[6]
  i3474.m_PhysicalUnit = i3475[7]
  i3474.m_FallbackScreenDPI = i3475[8]
  i3474.m_DefaultSpriteDPI = i3475[9]
  i3474.m_DynamicPixelsPerUnit = i3475[10]
  i3474.m_PresetInfoIsWorld = !!i3475[11]
  return i3474
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3476 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3477 = data
  i3476.m_IgnoreReversedGraphics = !!i3477[0]
  i3476.m_BlockingObjects = i3477[1]
  i3476.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3477[2] )
  return i3476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3479 = data
  i3478.cullTransparentMesh = !!i3479[0]
  return i3478
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3480 = root || request.c( 'UnityEngine.UI.Image' )
  var i3481 = data
  request.r(i3481[0], i3481[1], 0, i3480, 'm_Sprite')
  i3480.m_Type = i3481[2]
  i3480.m_PreserveAspect = !!i3481[3]
  i3480.m_FillCenter = !!i3481[4]
  i3480.m_FillMethod = i3481[5]
  i3480.m_FillAmount = i3481[6]
  i3480.m_FillClockwise = !!i3481[7]
  i3480.m_FillOrigin = i3481[8]
  i3480.m_UseSpriteMesh = !!i3481[9]
  i3480.m_PixelsPerUnitMultiplier = i3481[10]
  request.r(i3481[11], i3481[12], 0, i3480, 'm_Material')
  i3480.m_Maskable = !!i3481[13]
  i3480.m_Color = new pc.Color(i3481[14], i3481[15], i3481[16], i3481[17])
  i3480.m_RaycastTarget = !!i3481[18]
  i3480.m_RaycastPadding = new pc.Vec4( i3481[19], i3481[20], i3481[21], i3481[22] )
  return i3480
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3482 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3483 = data
  i3482.m_hasFontAssetChanged = !!i3483[0]
  request.r(i3483[1], i3483[2], 0, i3482, 'm_baseMaterial')
  i3482.m_maskOffset = new pc.Vec4( i3483[3], i3483[4], i3483[5], i3483[6] )
  i3482.m_text = i3483[7]
  i3482.m_isRightToLeft = !!i3483[8]
  request.r(i3483[9], i3483[10], 0, i3482, 'm_fontAsset')
  request.r(i3483[11], i3483[12], 0, i3482, 'm_sharedMaterial')
  var i3485 = i3483[13]
  var i3484 = []
  for(var i = 0; i < i3485.length; i += 2) {
  request.r(i3485[i + 0], i3485[i + 1], 2, i3484, '')
  }
  i3482.m_fontSharedMaterials = i3484
  request.r(i3483[14], i3483[15], 0, i3482, 'm_fontMaterial')
  var i3487 = i3483[16]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 2) {
  request.r(i3487[i + 0], i3487[i + 1], 2, i3486, '')
  }
  i3482.m_fontMaterials = i3486
  i3482.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3483[17], i3483[18], i3483[19], i3483[20])
  i3482.m_fontColor = new pc.Color(i3483[21], i3483[22], i3483[23], i3483[24])
  i3482.m_enableVertexGradient = !!i3483[25]
  i3482.m_colorMode = i3483[26]
  i3482.m_fontColorGradient = request.d('TMPro.VertexGradient', i3483[27], i3482.m_fontColorGradient)
  request.r(i3483[28], i3483[29], 0, i3482, 'm_fontColorGradientPreset')
  request.r(i3483[30], i3483[31], 0, i3482, 'm_spriteAsset')
  i3482.m_tintAllSprites = !!i3483[32]
  request.r(i3483[33], i3483[34], 0, i3482, 'm_StyleSheet')
  i3482.m_TextStyleHashCode = i3483[35]
  i3482.m_overrideHtmlColors = !!i3483[36]
  i3482.m_faceColor = UnityEngine.Color32.ConstructColor(i3483[37], i3483[38], i3483[39], i3483[40])
  i3482.m_fontSize = i3483[41]
  i3482.m_fontSizeBase = i3483[42]
  i3482.m_fontWeight = i3483[43]
  i3482.m_enableAutoSizing = !!i3483[44]
  i3482.m_fontSizeMin = i3483[45]
  i3482.m_fontSizeMax = i3483[46]
  i3482.m_fontStyle = i3483[47]
  i3482.m_HorizontalAlignment = i3483[48]
  i3482.m_VerticalAlignment = i3483[49]
  i3482.m_textAlignment = i3483[50]
  i3482.m_characterSpacing = i3483[51]
  i3482.m_wordSpacing = i3483[52]
  i3482.m_lineSpacing = i3483[53]
  i3482.m_lineSpacingMax = i3483[54]
  i3482.m_paragraphSpacing = i3483[55]
  i3482.m_charWidthMaxAdj = i3483[56]
  i3482.m_enableWordWrapping = !!i3483[57]
  i3482.m_wordWrappingRatios = i3483[58]
  i3482.m_overflowMode = i3483[59]
  request.r(i3483[60], i3483[61], 0, i3482, 'm_linkedTextComponent')
  request.r(i3483[62], i3483[63], 0, i3482, 'parentLinkedComponent')
  i3482.m_enableKerning = !!i3483[64]
  i3482.m_enableExtraPadding = !!i3483[65]
  i3482.checkPaddingRequired = !!i3483[66]
  i3482.m_isRichText = !!i3483[67]
  i3482.m_parseCtrlCharacters = !!i3483[68]
  i3482.m_isOrthographic = !!i3483[69]
  i3482.m_isCullingEnabled = !!i3483[70]
  i3482.m_horizontalMapping = i3483[71]
  i3482.m_verticalMapping = i3483[72]
  i3482.m_uvLineOffset = i3483[73]
  i3482.m_geometrySortingOrder = i3483[74]
  i3482.m_IsTextObjectScaleStatic = !!i3483[75]
  i3482.m_VertexBufferAutoSizeReduction = !!i3483[76]
  i3482.m_useMaxVisibleDescender = !!i3483[77]
  i3482.m_pageToDisplay = i3483[78]
  i3482.m_margin = new pc.Vec4( i3483[79], i3483[80], i3483[81], i3483[82] )
  i3482.m_isUsingLegacyAnimationComponent = !!i3483[83]
  i3482.m_isVolumetricText = !!i3483[84]
  request.r(i3483[85], i3483[86], 0, i3482, 'm_Material')
  i3482.m_Maskable = !!i3483[87]
  i3482.m_Color = new pc.Color(i3483[88], i3483[89], i3483[90], i3483[91])
  i3482.m_RaycastTarget = !!i3483[92]
  i3482.m_RaycastPadding = new pc.Vec4( i3483[93], i3483[94], i3483[95], i3483[96] )
  return i3482
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3490 = root || request.c( 'TMPro.VertexGradient' )
  var i3491 = data
  i3490.topLeft = new pc.Color(i3491[0], i3491[1], i3491[2], i3491[3])
  i3490.topRight = new pc.Color(i3491[4], i3491[5], i3491[6], i3491[7])
  i3490.bottomLeft = new pc.Color(i3491[8], i3491[9], i3491[10], i3491[11])
  i3490.bottomRight = new pc.Color(i3491[12], i3491[13], i3491[14], i3491[15])
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i3492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i3493 = data
  i3492.playAutomatically = !!i3493[0]
  request.r(i3493[1], i3493[2], 0, i3492, 'clip')
  var i3495 = i3493[3]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 2) {
  request.r(i3495[i + 0], i3495[i + 1], 2, i3494, '')
  }
  i3492.clips = i3494
  i3492.wrapMode = i3493[4]
  i3492.enabled = !!i3493[5]
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3499 = data
  i3498.ambientIntensity = i3499[0]
  i3498.reflectionIntensity = i3499[1]
  i3498.ambientMode = i3499[2]
  i3498.ambientLight = new pc.Color(i3499[3], i3499[4], i3499[5], i3499[6])
  i3498.ambientSkyColor = new pc.Color(i3499[7], i3499[8], i3499[9], i3499[10])
  i3498.ambientGroundColor = new pc.Color(i3499[11], i3499[12], i3499[13], i3499[14])
  i3498.ambientEquatorColor = new pc.Color(i3499[15], i3499[16], i3499[17], i3499[18])
  i3498.fogColor = new pc.Color(i3499[19], i3499[20], i3499[21], i3499[22])
  i3498.fogEndDistance = i3499[23]
  i3498.fogStartDistance = i3499[24]
  i3498.fogDensity = i3499[25]
  i3498.fog = !!i3499[26]
  request.r(i3499[27], i3499[28], 0, i3498, 'skybox')
  i3498.fogMode = i3499[29]
  var i3501 = i3499[30]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3501[i + 0]) );
  }
  i3498.lightmaps = i3500
  i3498.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3499[31], i3498.lightProbes)
  i3498.lightmapsMode = i3499[32]
  i3498.mixedBakeMode = i3499[33]
  i3498.environmentLightingMode = i3499[34]
  i3498.ambientProbe = new pc.SphericalHarmonicsL2(i3499[35])
  i3498.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3499[36])
  i3498.useReferenceAmbientProbe = !!i3499[37]
  request.r(i3499[38], i3499[39], 0, i3498, 'customReflection')
  request.r(i3499[40], i3499[41], 0, i3498, 'defaultReflection')
  i3498.defaultReflectionMode = i3499[42]
  i3498.defaultReflectionResolution = i3499[43]
  i3498.sunLightObjectId = i3499[44]
  i3498.pixelLightCount = i3499[45]
  i3498.defaultReflectionHDR = !!i3499[46]
  i3498.hasLightDataAsset = !!i3499[47]
  i3498.hasManualGenerate = !!i3499[48]
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3505 = data
  request.r(i3505[0], i3505[1], 0, i3504, 'lightmapColor')
  request.r(i3505[2], i3505[3], 0, i3504, 'lightmapDirection')
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3506 = root || new UnityEngine.LightProbes()
  var i3507 = data
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3515 = data
  i3514.name = i3515[0]
  i3514.halfPrecision = !!i3515[1]
  i3514.useUInt32IndexFormat = !!i3515[2]
  i3514.vertexCount = i3515[3]
  i3514.aabb = i3515[4]
  var i3517 = i3515[5]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.push( !!i3517[i + 0] );
  }
  i3514.streams = i3516
  i3514.vertices = i3515[6]
  var i3519 = i3515[7]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3519[i + 0]) );
  }
  i3514.subMeshes = i3518
  var i3521 = i3515[8]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 16) {
    i3520.push( new pc.Mat4().setData(i3521[i + 0], i3521[i + 1], i3521[i + 2], i3521[i + 3],  i3521[i + 4], i3521[i + 5], i3521[i + 6], i3521[i + 7],  i3521[i + 8], i3521[i + 9], i3521[i + 10], i3521[i + 11],  i3521[i + 12], i3521[i + 13], i3521[i + 14], i3521[i + 15]) );
  }
  i3514.bindposes = i3520
  var i3523 = i3515[9]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3523[i + 0]) );
  }
  i3514.blendShapes = i3522
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3529 = data
  i3528.triangles = i3529[0]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3535 = data
  i3534.name = i3535[0]
  var i3537 = i3535[1]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3537[i + 0]) );
  }
  i3534.frames = i3536
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3539 = data
  request.r(i3539[0], i3539[1], 0, i3538, 'sharedMesh')
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3541 = data
  request.r(i3541[0], i3541[1], 0, i3540, 'additionalVertexStreams')
  i3540.enabled = !!i3541[2]
  request.r(i3541[3], i3541[4], 0, i3540, 'sharedMaterial')
  var i3543 = i3541[5]
  var i3542 = []
  for(var i = 0; i < i3543.length; i += 2) {
  request.r(i3543[i + 0], i3543[i + 1], 2, i3542, '')
  }
  i3540.sharedMaterials = i3542
  i3540.receiveShadows = !!i3541[6]
  i3540.shadowCastingMode = i3541[7]
  i3540.sortingLayerID = i3541[8]
  i3540.sortingOrder = i3541[9]
  i3540.lightmapIndex = i3541[10]
  i3540.lightmapSceneIndex = i3541[11]
  i3540.lightmapScaleOffset = new pc.Vec4( i3541[12], i3541[13], i3541[14], i3541[15] )
  i3540.lightProbeUsage = i3541[16]
  i3540.reflectionProbeUsage = i3541[17]
  return i3540
}

Deserializers["Items"] = function (request, data, root) {
  var i3544 = root || request.c( 'Items' )
  var i3545 = data
  i3544.objType = i3545[0]
  i3544.preSet = !!i3545[1]
  request.r(i3545[2], i3545[3], 0, i3544, 'meshFilter')
  request.r(i3545[4], i3545[5], 0, i3544, 'rendererMaterial')
  var i3547 = i3545[6]
  var i3546 = new (System.Collections.Generic.List$1(Bridge.ns('MeshMap')))
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.add(request.d('MeshMap', i3547[i + 0]));
  }
  i3544.meshes = i3546
  return i3544
}

Deserializers["MeshMap"] = function (request, data, root) {
  var i3550 = root || request.c( 'MeshMap' )
  var i3551 = data
  i3550.type = i3551[0]
  request.r(i3551[1], i3551[2], 0, i3550, 'mesh')
  request.r(i3551[3], i3551[4], 0, i3550, 'material')
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i3553 = data
  i3552.center = new pc.Vec3( i3553[0], i3553[1], i3553[2] )
  i3552.radius = i3553[3]
  i3552.height = i3553[4]
  i3552.direction = i3553[5]
  i3552.enabled = !!i3553[6]
  i3552.isTrigger = !!i3553[7]
  request.r(i3553[8], i3553[9], 0, i3552, 'material')
  return i3552
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3554 = root || request.c( 'GameManager' )
  var i3555 = data
  i3554.isPlaying = !!i3555[0]
  request.r(i3555[1], i3555[2], 0, i3554, 'tutorial')
  request.r(i3555[3], i3555[4], 0, i3554, 'gameOver')
  i3554.itemSpeed = i3555[5]
  request.r(i3555[6], i3555[7], 0, i3554, 'itemEndPos')
  i3554.traySpeed = i3555[8]
  var i3557 = i3555[9]
  var i3556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3557.length; i += 2) {
  request.r(i3557[i + 0], i3557[i + 1], 1, i3556, '')
  }
  i3554.trayPos = i3556
  i3554.spawnInterval = i3555[10]
  i3554.spawnCoolTime = i3555[11]
  var i3559 = i3555[12]
  var i3558 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3559.length; i += 2) {
  request.r(i3559[i + 0], i3559[i + 1], 1, i3558, '')
  }
  i3554.itemSpawnPos = i3558
  var i3561 = i3555[13]
  var i3560 = new (System.Collections.Generic.List$1(Bridge.ns('Trays')))
  for(var i = 0; i < i3561.length; i += 2) {
  request.r(i3561[i + 0], i3561[i + 1], 1, i3560, '')
  }
  i3554.trays = i3560
  return i3554
}

Deserializers["ItemObjectPool"] = function (request, data, root) {
  var i3566 = root || request.c( 'ItemObjectPool' )
  var i3567 = data
  request.r(i3567[0], i3567[1], 0, i3566, 'itemPrefab')
  request.r(i3567[2], i3567[3], 0, i3566, 'itemParent')
  return i3566
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i3568 = root || request.c( 'SoundManager' )
  var i3569 = data
  var i3571 = i3569[0]
  var i3570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i3571.length; i += 2) {
  request.r(i3571[i + 0], i3571[i + 1], 1, i3570, '')
  }
  i3568.audios = i3570
  request.r(i3569[1], i3569[2], 0, i3568, 'bgm')
  request.r(i3569[3], i3569[4], 0, i3568, 'sfx')
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3575 = data
  request.r(i3575[0], i3575[1], 0, i3574, 'clip')
  request.r(i3575[2], i3575[3], 0, i3574, 'outputAudioMixerGroup')
  i3574.playOnAwake = !!i3575[4]
  i3574.loop = !!i3575[5]
  i3574.time = i3575[6]
  i3574.volume = i3575[7]
  i3574.pitch = i3575[8]
  i3574.enabled = !!i3575[9]
  return i3574
}

Deserializers["Trays"] = function (request, data, root) {
  var i3576 = root || request.c( 'Trays' )
  var i3577 = data
  i3576.status = request.d('TrayStatus', i3577[0], i3576.status)
  i3576.tutorial = !!i3577[1]
  var i3579 = i3577[2]
  var i3578 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3579.length; i += 2) {
  request.r(i3579[i + 0], i3579[i + 1], 1, i3578, '')
  }
  i3576.displayItems = i3578
  request.r(i3577[3], i3577[4], 0, i3576, 'labelPos')
  var i3581 = i3577[5]
  var i3580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3581.length; i += 2) {
  request.r(i3581[i + 0], i3581[i + 1], 1, i3580, '')
  }
  i3576.labelImages = i3580
  request.r(i3577[6], i3577[7], 0, i3576, 'label')
  request.r(i3577[8], i3577[9], 0, i3576, 'itemLabel')
  request.r(i3577[10], i3577[11], 0, i3576, 'labelText')
  request.r(i3577[12], i3577[13], 0, i3576, 'starImage')
  return i3576
}

Deserializers["TrayStatus"] = function (request, data, root) {
  var i3582 = root || request.c( 'TrayStatus' )
  var i3583 = data
  i3582.trayNo = i3583[0]
  i3582.trayType = i3583[1]
  i3582.interactable = !!i3583[2]
  i3582.itemCount = i3583[3]
  return i3582
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i3588 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i3589 = data
  request.r(i3589[0], i3589[1], 0, i3588, 'panelPrefab')
  var i3591 = i3589[2]
  var i3590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i3591[i + 0]));
  }
  i3588.prefabs = i3590
  return i3588
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i3594 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i3595 = data
  i3594.type = i3595[0]
  request.r(i3595[1], i3595[2], 0, i3594, 'prefab')
  return i3594
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i3596 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i3597 = data
  i3596.m_Spacing = i3597[0]
  i3596.m_ChildForceExpandWidth = !!i3597[1]
  i3596.m_ChildForceExpandHeight = !!i3597[2]
  i3596.m_ChildControlWidth = !!i3597[3]
  i3596.m_ChildControlHeight = !!i3597[4]
  i3596.m_ChildScaleWidth = !!i3597[5]
  i3596.m_ChildScaleHeight = !!i3597[6]
  i3596.m_ReverseArrangement = !!i3597[7]
  i3596.m_Padding = UnityEngine.RectOffset.FromPaddings(i3597[8], i3597[9], i3597[10], i3597[11])
  i3596.m_ChildAlignment = i3597[12]
  return i3596
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i3598 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i3599 = data
  i3598.m_HorizontalFit = i3599[0]
  i3598.m_VerticalFit = i3599[1]
  return i3598
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i3600 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i3601 = data
  request.r(i3601[0], i3601[1], 0, i3600, 'contentHolder')
  return i3600
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i3602 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i3603 = data
  request.r(i3603[0], i3603[1], 0, i3602, 'nameLabel')
  request.r(i3603[2], i3603[3], 0, i3602, 'scrollRect')
  request.r(i3603[4], i3603[5], 0, i3602, 'viewport')
  request.r(i3603[6], i3603[7], 0, i3602, 'Canvas')
  return i3602
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i3604 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i3605 = data
  i3604.m_IgnoreLayout = !!i3605[0]
  i3604.m_MinWidth = i3605[1]
  i3604.m_MinHeight = i3605[2]
  i3604.m_PreferredWidth = i3605[3]
  i3604.m_PreferredHeight = i3605[4]
  i3604.m_FlexibleWidth = i3605[5]
  i3604.m_FlexibleHeight = i3605[6]
  i3604.m_LayoutPriority = i3605[7]
  return i3604
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3606 = root || request.c( 'UnityEngine.UI.Button' )
  var i3607 = data
  i3606.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3607[0], i3606.m_OnClick)
  i3606.m_Navigation = request.d('UnityEngine.UI.Navigation', i3607[1], i3606.m_Navigation)
  i3606.m_Transition = i3607[2]
  i3606.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3607[3], i3606.m_Colors)
  i3606.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3607[4], i3606.m_SpriteState)
  i3606.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3607[5], i3606.m_AnimationTriggers)
  i3606.m_Interactable = !!i3607[6]
  request.r(i3607[7], i3607[8], 0, i3606, 'm_TargetGraphic')
  return i3606
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3608 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3609 = data
  i3608.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3609[0], i3608.m_PersistentCalls)
  return i3608
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3610 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3611 = data
  var i3613 = i3611[0]
  var i3612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.add(request.d('UnityEngine.Events.PersistentCall', i3613[i + 0]));
  }
  i3610.m_Calls = i3612
  return i3610
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3616 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3617 = data
  request.r(i3617[0], i3617[1], 0, i3616, 'm_Target')
  i3616.m_TargetAssemblyTypeName = i3617[2]
  i3616.m_MethodName = i3617[3]
  i3616.m_Mode = i3617[4]
  i3616.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3617[5], i3616.m_Arguments)
  i3616.m_CallState = i3617[6]
  return i3616
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3619 = data
  request.r(i3619[0], i3619[1], 0, i3618, 'm_ObjectArgument')
  i3618.m_ObjectArgumentAssemblyTypeName = i3619[2]
  i3618.m_IntArgument = i3619[3]
  i3618.m_FloatArgument = i3619[4]
  i3618.m_StringArgument = i3619[5]
  i3618.m_BoolArgument = !!i3619[6]
  return i3618
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3621 = data
  i3620.m_Mode = i3621[0]
  i3620.m_WrapAround = !!i3621[1]
  request.r(i3621[2], i3621[3], 0, i3620, 'm_SelectOnUp')
  request.r(i3621[4], i3621[5], 0, i3620, 'm_SelectOnDown')
  request.r(i3621[6], i3621[7], 0, i3620, 'm_SelectOnLeft')
  request.r(i3621[8], i3621[9], 0, i3620, 'm_SelectOnRight')
  return i3620
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3623 = data
  i3622.m_NormalColor = new pc.Color(i3623[0], i3623[1], i3623[2], i3623[3])
  i3622.m_HighlightedColor = new pc.Color(i3623[4], i3623[5], i3623[6], i3623[7])
  i3622.m_PressedColor = new pc.Color(i3623[8], i3623[9], i3623[10], i3623[11])
  i3622.m_SelectedColor = new pc.Color(i3623[12], i3623[13], i3623[14], i3623[15])
  i3622.m_DisabledColor = new pc.Color(i3623[16], i3623[17], i3623[18], i3623[19])
  i3622.m_ColorMultiplier = i3623[20]
  i3622.m_FadeDuration = i3623[21]
  return i3622
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3625 = data
  request.r(i3625[0], i3625[1], 0, i3624, 'm_HighlightedSprite')
  request.r(i3625[2], i3625[3], 0, i3624, 'm_PressedSprite')
  request.r(i3625[4], i3625[5], 0, i3624, 'm_SelectedSprite')
  request.r(i3625[6], i3625[7], 0, i3624, 'm_DisabledSprite')
  return i3624
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3626 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3627 = data
  i3626.m_NormalTrigger = i3627[0]
  i3626.m_HighlightedTrigger = i3627[1]
  i3626.m_PressedTrigger = i3627[2]
  i3626.m_SelectedTrigger = i3627[3]
  i3626.m_DisabledTrigger = i3627[4]
  return i3626
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3628 = root || request.c( 'UnityEngine.UI.Text' )
  var i3629 = data
  i3628.m_FontData = request.d('UnityEngine.UI.FontData', i3629[0], i3628.m_FontData)
  i3628.m_Text = i3629[1]
  request.r(i3629[2], i3629[3], 0, i3628, 'm_Material')
  i3628.m_Maskable = !!i3629[4]
  i3628.m_Color = new pc.Color(i3629[5], i3629[6], i3629[7], i3629[8])
  i3628.m_RaycastTarget = !!i3629[9]
  i3628.m_RaycastPadding = new pc.Vec4( i3629[10], i3629[11], i3629[12], i3629[13] )
  return i3628
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3630 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3631 = data
  request.r(i3631[0], i3631[1], 0, i3630, 'm_Font')
  i3630.m_FontSize = i3631[2]
  i3630.m_FontStyle = i3631[3]
  i3630.m_BestFit = !!i3631[4]
  i3630.m_MinSize = i3631[5]
  i3630.m_MaxSize = i3631[6]
  i3630.m_Alignment = i3631[7]
  i3630.m_AlignByGeometry = !!i3631[8]
  i3630.m_RichText = !!i3631[9]
  i3630.m_HorizontalOverflow = i3631[10]
  i3630.m_VerticalOverflow = i3631[11]
  i3630.m_LineSpacing = i3631[12]
  return i3630
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i3632 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i3633 = data
  request.r(i3633[0], i3633[1], 0, i3632, 'm_Content')
  i3632.m_Horizontal = !!i3633[2]
  i3632.m_Vertical = !!i3633[3]
  i3632.m_MovementType = i3633[4]
  i3632.m_Elasticity = i3633[5]
  i3632.m_Inertia = !!i3633[6]
  i3632.m_DecelerationRate = i3633[7]
  i3632.m_ScrollSensitivity = i3633[8]
  request.r(i3633[9], i3633[10], 0, i3632, 'm_Viewport')
  request.r(i3633[11], i3633[12], 0, i3632, 'm_HorizontalScrollbar')
  request.r(i3633[13], i3633[14], 0, i3632, 'm_VerticalScrollbar')
  i3632.m_HorizontalScrollbarVisibility = i3633[15]
  i3632.m_VerticalScrollbarVisibility = i3633[16]
  i3632.m_HorizontalScrollbarSpacing = i3633[17]
  i3632.m_VerticalScrollbarSpacing = i3633[18]
  i3632.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i3633[19], i3632.m_OnValueChanged)
  return i3632
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i3634 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i3635 = data
  i3634.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3635[0], i3634.m_PersistentCalls)
  return i3634
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3636 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3637 = data
  i3636.m_ShowMaskGraphic = !!i3637[0]
  return i3636
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i3638 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i3639 = data
  request.r(i3639[0], i3639[1], 0, i3638, 'm_HandleRect')
  i3638.m_Direction = i3639[2]
  i3638.m_Value = i3639[3]
  i3638.m_Size = i3639[4]
  i3638.m_NumberOfSteps = i3639[5]
  i3638.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i3639[6], i3638.m_OnValueChanged)
  i3638.m_Navigation = request.d('UnityEngine.UI.Navigation', i3639[7], i3638.m_Navigation)
  i3638.m_Transition = i3639[8]
  i3638.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3639[9], i3638.m_Colors)
  i3638.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3639[10], i3638.m_SpriteState)
  i3638.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3639[11], i3638.m_AnimationTriggers)
  i3638.m_Interactable = !!i3639[12]
  request.r(i3639[13], i3639[14], 0, i3638, 'm_TargetGraphic')
  return i3638
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i3640 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i3641 = data
  i3640.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3641[0], i3640.m_PersistentCalls)
  return i3640
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i3642 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i3643 = data
  var i3645 = i3643[0]
  var i3644 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i3645[i + 0]));
  }
  i3642.m_Delegates = i3644
  return i3642
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i3648 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i3649 = data
  i3648.eventID = i3649[0]
  i3648.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i3649[1], i3648.callback)
  return i3648
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i3650 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i3651 = data
  i3650.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3651[0], i3650.m_PersistentCalls)
  return i3650
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i3652 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i3653 = data
  request.r(i3653[0], i3653[1], 0, i3652, 'nameLabel')
  request.r(i3653[2], i3653[3], 0, i3652, 'valueLabel')
  i3652.colorDefault = new pc.Color(i3653[4], i3653[5], i3653[6], i3653[7])
  i3652.colorSelected = new pc.Color(i3653[8], i3653[9], i3653[10], i3653[11])
  return i3652
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i3655 = data
  request.r(i3655[0], i3655[1], 0, i3654, 'nameLabel')
  request.r(i3655[2], i3655[3], 0, i3654, 'valueToggle')
  request.r(i3655[4], i3655[5], 0, i3654, 'checkmarkImage')
  i3654.colorDefault = new pc.Color(i3655[6], i3655[7], i3655[8], i3655[9])
  i3654.colorSelected = new pc.Color(i3655[10], i3655[11], i3655[12], i3655[13])
  return i3654
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i3657 = data
  i3656.toggleTransition = i3657[0]
  request.r(i3657[1], i3657[2], 0, i3656, 'graphic')
  i3656.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i3657[3], i3656.onValueChanged)
  request.r(i3657[4], i3657[5], 0, i3656, 'm_Group')
  i3656.m_IsOn = !!i3657[6]
  i3656.m_Navigation = request.d('UnityEngine.UI.Navigation', i3657[7], i3656.m_Navigation)
  i3656.m_Transition = i3657[8]
  i3656.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3657[9], i3656.m_Colors)
  i3656.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3657[10], i3656.m_SpriteState)
  i3656.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3657[11], i3656.m_AnimationTriggers)
  i3656.m_Interactable = !!i3657[12]
  request.r(i3657[13], i3657[14], 0, i3656, 'm_TargetGraphic')
  return i3656
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i3658 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i3659 = data
  i3658.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3659[0], i3658.m_PersistentCalls)
  return i3658
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i3661 = data
  request.r(i3661[0], i3661[1], 0, i3660, 'nameLabel')
  request.r(i3661[2], i3661[3], 0, i3660, 'valueLabel')
  i3660.colorDefault = new pc.Color(i3661[4], i3661[5], i3661[6], i3661[7])
  i3660.colorSelected = new pc.Color(i3661[8], i3661[9], i3661[10], i3661[11])
  return i3660
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i3662 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i3663 = data
  request.r(i3663[0], i3663[1], 0, i3662, 'nameLabel')
  request.r(i3663[2], i3663[3], 0, i3662, 'valueLabel')
  i3662.colorDefault = new pc.Color(i3663[4], i3663[5], i3663[6], i3663[7])
  i3662.colorSelected = new pc.Color(i3663[8], i3663[9], i3663[10], i3663[11])
  return i3662
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i3664 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i3665 = data
  request.r(i3665[0], i3665[1], 0, i3664, 'nameLabel')
  request.r(i3665[2], i3665[3], 0, i3664, 'valueLabel')
  i3664.colorDefault = new pc.Color(i3665[4], i3665[5], i3665[6], i3665[7])
  i3664.colorSelected = new pc.Color(i3665[8], i3665[9], i3665[10], i3665[11])
  return i3664
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i3666 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i3667 = data
  request.r(i3667[0], i3667[1], 0, i3666, 'nextButtonText')
  request.r(i3667[2], i3667[3], 0, i3666, 'previousButtonText')
  request.r(i3667[4], i3667[5], 0, i3666, 'nameLabel')
  request.r(i3667[6], i3667[7], 0, i3666, 'valueLabel')
  i3666.colorDefault = new pc.Color(i3667[8], i3667[9], i3667[10], i3667[11])
  i3666.colorSelected = new pc.Color(i3667[12], i3667[13], i3667[14], i3667[15])
  return i3666
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i3668 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i3669 = data
  request.r(i3669[0], i3669[1], 0, i3668, 'nameLabel')
  i3668.colorDefault = new pc.Color(i3669[2], i3669[3], i3669[4], i3669[5])
  i3668.colorSelected = new pc.Color(i3669[6], i3669[7], i3669[8], i3669[9])
  return i3668
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i3670 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i3671 = data
  request.r(i3671[0], i3671[1], 0, i3670, 'nameLabel')
  request.r(i3671[2], i3671[3], 0, i3670, 'valueToggle')
  i3670.colorDefault = new pc.Color(i3671[4], i3671[5], i3671[6], i3671[7])
  i3670.colorSelected = new pc.Color(i3671[8], i3671[9], i3671[10], i3671[11])
  return i3670
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i3672 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i3673 = data
  i3672.toggleTransition = i3673[0]
  request.r(i3673[1], i3673[2], 0, i3672, 'graphic')
  i3672.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i3673[3], i3672.onValueChanged)
  request.r(i3673[4], i3673[5], 0, i3672, 'content')
  request.r(i3673[6], i3673[7], 0, i3672, 'arrowOpened')
  request.r(i3673[8], i3673[9], 0, i3672, 'arrowClosed')
  request.r(i3673[10], i3673[11], 0, i3672, 'm_Group')
  i3672.m_IsOn = !!i3673[12]
  i3672.m_Navigation = request.d('UnityEngine.UI.Navigation', i3673[13], i3672.m_Navigation)
  i3672.m_Transition = i3673[14]
  i3672.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3673[15], i3672.m_Colors)
  i3672.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3673[16], i3672.m_SpriteState)
  i3672.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3673[17], i3672.m_AnimationTriggers)
  i3672.m_Interactable = !!i3673[18]
  request.r(i3673[19], i3673[20], 0, i3672, 'm_TargetGraphic')
  return i3672
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i3674 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i3675 = data
  request.r(i3675[0], i3675[1], 0, i3674, 'nameLabel')
  request.r(i3675[2], i3675[3], 0, i3674, 'valueToggle')
  request.r(i3675[4], i3675[5], 0, i3674, 'colorImage')
  request.r(i3675[6], i3675[7], 0, i3674, 'fieldR')
  request.r(i3675[8], i3675[9], 0, i3674, 'fieldG')
  request.r(i3675[10], i3675[11], 0, i3674, 'fieldB')
  request.r(i3675[12], i3675[13], 0, i3674, 'fieldA')
  i3674.colorDefault = new pc.Color(i3675[14], i3675[15], i3675[16], i3675[17])
  i3674.colorSelected = new pc.Color(i3675[18], i3675[19], i3675[20], i3675[21])
  return i3674
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i3676 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i3677 = data
  request.r(i3677[0], i3677[1], 0, i3676, 'nameLabel')
  request.r(i3677[2], i3677[3], 0, i3676, 'valueLabel')
  i3676.colorDefault = new pc.Color(i3677[4], i3677[5], i3677[6], i3677[7])
  i3676.colorSelected = new pc.Color(i3677[8], i3677[9], i3677[10], i3677[11])
  return i3676
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i3678 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i3679 = data
  request.r(i3679[0], i3679[1], 0, i3678, 'nameLabel')
  request.r(i3679[2], i3679[3], 0, i3678, 'valueToggle')
  request.r(i3679[4], i3679[5], 0, i3678, 'fieldX')
  request.r(i3679[6], i3679[7], 0, i3678, 'fieldY')
  i3678.colorDefault = new pc.Color(i3679[8], i3679[9], i3679[10], i3679[11])
  i3678.colorSelected = new pc.Color(i3679[12], i3679[13], i3679[14], i3679[15])
  return i3678
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i3680 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i3681 = data
  request.r(i3681[0], i3681[1], 0, i3680, 'nameLabel')
  request.r(i3681[2], i3681[3], 0, i3680, 'valueToggle')
  request.r(i3681[4], i3681[5], 0, i3680, 'fieldX')
  request.r(i3681[6], i3681[7], 0, i3680, 'fieldY')
  request.r(i3681[8], i3681[9], 0, i3680, 'fieldZ')
  i3680.colorDefault = new pc.Color(i3681[10], i3681[11], i3681[12], i3681[13])
  i3680.colorSelected = new pc.Color(i3681[14], i3681[15], i3681[16], i3681[17])
  return i3680
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i3682 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i3683 = data
  request.r(i3683[0], i3683[1], 0, i3682, 'nameLabel')
  request.r(i3683[2], i3683[3], 0, i3682, 'valueToggle')
  request.r(i3683[4], i3683[5], 0, i3682, 'fieldX')
  request.r(i3683[6], i3683[7], 0, i3682, 'fieldY')
  request.r(i3683[8], i3683[9], 0, i3682, 'fieldZ')
  request.r(i3683[10], i3683[11], 0, i3682, 'fieldW')
  i3682.colorDefault = new pc.Color(i3683[12], i3683[13], i3683[14], i3683[15])
  i3682.colorSelected = new pc.Color(i3683[16], i3683[17], i3683[18], i3683[19])
  return i3682
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i3684 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i3685 = data
  i3684.colorDefault = new pc.Color(i3685[0], i3685[1], i3685[2], i3685[3])
  i3684.colorSelected = new pc.Color(i3685[4], i3685[5], i3685[6], i3685[7])
  return i3684
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3686 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3687 = data
  i3686.m_Spacing = i3687[0]
  i3686.m_ChildForceExpandWidth = !!i3687[1]
  i3686.m_ChildForceExpandHeight = !!i3687[2]
  i3686.m_ChildControlWidth = !!i3687[3]
  i3686.m_ChildControlHeight = !!i3687[4]
  i3686.m_ChildScaleWidth = !!i3687[5]
  i3686.m_ChildScaleHeight = !!i3687[6]
  i3686.m_ReverseArrangement = !!i3687[7]
  i3686.m_Padding = UnityEngine.RectOffset.FromPaddings(i3687[8], i3687[9], i3687[10], i3687[11])
  i3686.m_ChildAlignment = i3687[12]
  return i3686
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i3689 = data
  i3688.colorDefault = new pc.Color(i3689[0], i3689[1], i3689[2], i3689[3])
  i3688.colorSelected = new pc.Color(i3689[4], i3689[5], i3689[6], i3689[7])
  return i3688
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i3690 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i3691 = data
  request.r(i3691[0], i3691[1], 0, i3690, 'nameLabel')
  request.r(i3691[2], i3691[3], 0, i3690, 'header')
  i3690.colorDefault = new pc.Color(i3691[4], i3691[5], i3691[6], i3691[7])
  i3690.colorSelected = new pc.Color(i3691[8], i3691[9], i3691[10], i3691[11])
  return i3690
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i3692 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i3693 = data
  request.r(i3693[0], i3693[1], 0, i3692, 'nameLabel')
  request.r(i3693[2], i3693[3], 0, i3692, 'valueToggle')
  var i3695 = i3693[4]
  var i3694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i3695.length; i += 2) {
  request.r(i3695[i + 0], i3695[i + 1], 1, i3694, '')
  }
  i3692.toggles = i3694
  i3692.colorDefault = new pc.Color(i3693[5], i3693[6], i3693[7], i3693[8])
  i3692.colorSelected = new pc.Color(i3693[9], i3693[10], i3693[11], i3693[12])
  return i3692
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i3698 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i3699 = data
  request.r(i3699[0], i3699[1], 0, i3698, 'nameLabel')
  request.r(i3699[2], i3699[3], 0, i3698, 'valueToggle')
  request.r(i3699[4], i3699[5], 0, i3698, 'checkmarkImage')
  i3698.colorDefault = new pc.Color(i3699[6], i3699[7], i3699[8], i3699[9])
  i3698.colorSelected = new pc.Color(i3699[10], i3699[11], i3699[12], i3699[13])
  return i3698
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i3700 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i3701 = data
  request.r(i3701[0], i3701[1], 0, i3700, 'nameLabel')
  request.r(i3701[2], i3701[3], 0, i3700, 'valueToggle')
  request.r(i3701[4], i3701[5], 0, i3700, 'checkmarkImage')
  i3700.colorDefault = new pc.Color(i3701[6], i3701[7], i3701[8], i3701[9])
  i3700.colorSelected = new pc.Color(i3701[10], i3701[11], i3701[12], i3701[13])
  return i3700
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i3702 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i3703 = data
  request.r(i3703[0], i3703[1], 0, i3702, 'nextButtonText')
  request.r(i3703[2], i3703[3], 0, i3702, 'previousButtonText')
  request.r(i3703[4], i3703[5], 0, i3702, 'nameLabel')
  request.r(i3703[6], i3703[7], 0, i3702, 'valueLabel')
  i3702.colorDefault = new pc.Color(i3703[8], i3703[9], i3703[10], i3703[11])
  i3702.colorSelected = new pc.Color(i3703[12], i3703[13], i3703[14], i3703[15])
  return i3702
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i3704 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i3705 = data
  request.r(i3705[0], i3705[1], 0, i3704, 'nameLabel')
  request.r(i3705[2], i3705[3], 0, i3704, 'valueToggle')
  i3704.colorDefault = new pc.Color(i3705[4], i3705[5], i3705[6], i3705[7])
  i3704.colorSelected = new pc.Color(i3705[8], i3705[9], i3705[10], i3705[11])
  return i3704
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i3706 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i3707 = data
  request.r(i3707[0], i3707[1], 0, i3706, 'nameLabel')
  i3706.colorDefault = new pc.Color(i3707[2], i3707[3], i3707[4], i3707[5])
  i3706.colorSelected = new pc.Color(i3707[6], i3707[7], i3707[8], i3707[9])
  return i3706
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i3708 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i3709 = data
  request.r(i3709[0], i3709[1], 0, i3708, 'nameLabel')
  request.r(i3709[2], i3709[3], 0, i3708, 'valueLabel')
  request.r(i3709[4], i3709[5], 0, i3708, 'progressBarRect')
  i3708.colorDefault = new pc.Color(i3709[6], i3709[7], i3709[8], i3709[9])
  i3708.colorSelected = new pc.Color(i3709[10], i3709[11], i3709[12], i3709[13])
  return i3708
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i3710 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i3711 = data
  request.r(i3711[0], i3711[1], 0, i3710, 'nameLabel')
  request.r(i3711[2], i3711[3], 0, i3710, 'valueLabel')
  i3710.colorDefault = new pc.Color(i3711[4], i3711[5], i3711[6], i3711[7])
  i3710.colorSelected = new pc.Color(i3711[8], i3711[9], i3711[10], i3711[11])
  return i3710
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i3712 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i3713 = data
  request.r(i3713[0], i3713[1], 0, i3712, 'nameLabel')
  request.r(i3713[2], i3713[3], 0, i3712, 'valueLabel')
  i3712.colorDefault = new pc.Color(i3713[4], i3713[5], i3713[6], i3713[7])
  i3712.colorSelected = new pc.Color(i3713[8], i3713[9], i3713[10], i3713[11])
  return i3712
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i3714 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i3715 = data
  request.r(i3715[0], i3715[1], 0, i3714, 'nextButtonText')
  request.r(i3715[2], i3715[3], 0, i3714, 'previousButtonText')
  request.r(i3715[4], i3715[5], 0, i3714, 'nameLabel')
  request.r(i3715[6], i3715[7], 0, i3714, 'valueLabel')
  i3714.colorDefault = new pc.Color(i3715[8], i3715[9], i3715[10], i3715[11])
  i3714.colorSelected = new pc.Color(i3715[12], i3715[13], i3715[14], i3715[15])
  return i3714
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i3716 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i3717 = data
  request.r(i3717[0], i3717[1], 0, i3716, 'nextButtonText')
  request.r(i3717[2], i3717[3], 0, i3716, 'previousButtonText')
  request.r(i3717[4], i3717[5], 0, i3716, 'nameLabel')
  request.r(i3717[6], i3717[7], 0, i3716, 'valueLabel')
  i3716.colorDefault = new pc.Color(i3717[8], i3717[9], i3717[10], i3717[11])
  i3716.colorSelected = new pc.Color(i3717[12], i3717[13], i3717[14], i3717[15])
  return i3716
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i3718 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i3719 = data
  request.r(i3719[0], i3719[1], 0, i3718, 'panel')
  request.r(i3719[2], i3719[3], 0, i3718, 'valuePrefab')
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i3721 = data
  i3720.AdditionalLightsPerObjectLimit = i3721[0]
  i3720.AdditionalLightsRenderingMode = i3721[1]
  i3720.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i3721[2], i3720.LightRenderingMode)
  i3720.ColorGradingLutSize = i3721[3]
  i3720.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i3721[4], i3720.ColorGradingMode)
  i3720.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i3721[5], i3720.MainLightRenderingMode)
  i3720.MainLightRenderingModeValue = i3721[6]
  i3720.SupportsMainLightShadows = !!i3721[7]
  i3720.MixedLightingSupported = !!i3721[8]
  i3720.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i3721[9], i3720.MsaaQuality)
  i3720.MSAA = i3721[10]
  i3720.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i3721[11], i3720.OpaqueDownsampling)
  i3720.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i3721[12], i3720.MainLightShadowmapResolution)
  i3720.MainLightShadowmapResolutionValue = i3721[13]
  i3720.SupportsSoftShadows = !!i3721[14]
  i3720.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i3721[15], i3720.SoftShadowQuality)
  i3720.SoftShadowQualityValue = i3721[16]
  i3720.ShadowDistance = i3721[17]
  i3720.ShadowCascadeCount = i3721[18]
  i3720.Cascade2Split = i3721[19]
  i3720.Cascade3Split = new pc.Vec2( i3721[20], i3721[21] )
  i3720.Cascade4Split = new pc.Vec3( i3721[22], i3721[23], i3721[24] )
  i3720.CascadeBorder = i3721[25]
  i3720.ShadowDepthBias = i3721[26]
  i3720.ShadowNormalBias = i3721[27]
  i3720.RenderScale = i3721[28]
  i3720.RequireDepthTexture = !!i3721[29]
  i3720.RequireOpaqueTexture = !!i3721[30]
  i3720.SupportsHDR = !!i3721[31]
  i3720.SupportsTerrainHoles = !!i3721[32]
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i3723 = data
  i3722.Disabled = i3723[0]
  i3722.PerVertex = i3723[1]
  i3722.PerPixel = i3723[2]
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i3725 = data
  i3724.LowDynamicRange = i3725[0]
  i3724.HighDynamicRange = i3725[1]
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i3727 = data
  i3726.Disabled = i3727[0]
  i3726._2x = i3727[1]
  i3726._4x = i3727[2]
  i3726._8x = i3727[3]
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i3728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i3729 = data
  i3728.None = i3729[0]
  i3728._2xBilinear = i3729[1]
  i3728._4xBox = i3729[2]
  i3728._4xBilinear = i3729[3]
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i3731 = data
  i3730._256 = i3731[0]
  i3730._512 = i3731[1]
  i3730._1024 = i3731[2]
  i3730._2048 = i3731[3]
  i3730._4096 = i3731[4]
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i3733 = data
  i3732.UsePipelineSettings = i3733[0]
  i3732.Low = i3733[1]
  i3732.Medium = i3733[2]
  i3732.High = i3733[3]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3735 = data
  var i3737 = i3735[0]
  var i3736 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3737[i + 0]));
  }
  i3734.ShaderCompilationErrors = i3736
  i3734.name = i3735[1]
  i3734.guid = i3735[2]
  var i3739 = i3735[3]
  var i3738 = []
  for(var i = 0; i < i3739.length; i += 1) {
    i3738.push( i3739[i + 0] );
  }
  i3734.shaderDefinedKeywords = i3738
  var i3741 = i3735[4]
  var i3740 = []
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3741[i + 0]) );
  }
  i3734.passes = i3740
  var i3743 = i3735[5]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3743[i + 0]) );
  }
  i3734.usePasses = i3742
  var i3745 = i3735[6]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3745[i + 0]) );
  }
  i3734.defaultParameterValues = i3744
  request.r(i3735[7], i3735[8], 0, i3734, 'unityFallbackShader')
  i3734.readDepth = !!i3735[9]
  i3734.isCreatedByShaderGraph = !!i3735[10]
  i3734.compiled = !!i3735[11]
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3749 = data
  i3748.shaderName = i3749[0]
  i3748.errorMessage = i3749[1]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3754 = root || new pc.UnityShaderPass()
  var i3755 = data
  i3754.id = i3755[0]
  i3754.subShaderIndex = i3755[1]
  i3754.name = i3755[2]
  i3754.passType = i3755[3]
  i3754.grabPassTextureName = i3755[4]
  i3754.usePass = !!i3755[5]
  i3754.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[6], i3754.zTest)
  i3754.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[7], i3754.zWrite)
  i3754.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[8], i3754.culling)
  i3754.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3755[9], i3754.blending)
  i3754.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3755[10], i3754.alphaBlending)
  i3754.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[11], i3754.colorWriteMask)
  i3754.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[12], i3754.offsetUnits)
  i3754.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[13], i3754.offsetFactor)
  i3754.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[14], i3754.stencilRef)
  i3754.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[15], i3754.stencilReadMask)
  i3754.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3755[16], i3754.stencilWriteMask)
  i3754.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3755[17], i3754.stencilOp)
  i3754.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3755[18], i3754.stencilOpFront)
  i3754.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3755[19], i3754.stencilOpBack)
  var i3757 = i3755[20]
  var i3756 = []
  for(var i = 0; i < i3757.length; i += 1) {
    i3756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3757[i + 0]) );
  }
  i3754.tags = i3756
  var i3759 = i3755[21]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( i3759[i + 0] );
  }
  i3754.passDefinedKeywords = i3758
  var i3761 = i3755[22]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3761[i + 0]) );
  }
  i3754.passDefinedKeywordGroups = i3760
  var i3763 = i3755[23]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3763[i + 0]) );
  }
  i3754.variants = i3762
  var i3765 = i3755[24]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3765[i + 0]) );
  }
  i3754.excludedVariants = i3764
  i3754.hasDepthReader = !!i3755[25]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3767 = data
  i3766.val = i3767[0]
  i3766.name = i3767[1]
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3769 = data
  i3768.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3769[0], i3768.src)
  i3768.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3769[1], i3768.dst)
  i3768.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3769[2], i3768.op)
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3771 = data
  i3770.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3771[0], i3770.pass)
  i3770.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3771[1], i3770.fail)
  i3770.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3771[2], i3770.zFail)
  i3770.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3771[3], i3770.comp)
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3775 = data
  i3774.name = i3775[0]
  i3774.value = i3775[1]
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3779 = data
  var i3781 = i3779[0]
  var i3780 = []
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.push( i3781[i + 0] );
  }
  i3778.keywords = i3780
  i3778.hasDiscard = !!i3779[1]
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3785 = data
  i3784.passId = i3785[0]
  i3784.subShaderIndex = i3785[1]
  var i3787 = i3785[2]
  var i3786 = []
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.push( i3787[i + 0] );
  }
  i3784.keywords = i3786
  i3784.vertexProgram = i3785[3]
  i3784.fragmentProgram = i3785[4]
  i3784.exportedForWebGl2 = !!i3785[5]
  i3784.readDepth = !!i3785[6]
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3791 = data
  request.r(i3791[0], i3791[1], 0, i3790, 'shader')
  i3790.pass = i3791[2]
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3795 = data
  i3794.name = i3795[0]
  i3794.type = i3795[1]
  i3794.value = new pc.Vec4( i3795[2], i3795[3], i3795[4], i3795[5] )
  i3794.textureValue = i3795[6]
  i3794.shaderPropertyFlag = i3795[7]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3797 = data
  i3796.name = i3797[0]
  request.r(i3797[1], i3797[2], 0, i3796, 'texture')
  i3796.aabb = i3797[3]
  i3796.vertices = i3797[4]
  i3796.triangles = i3797[5]
  i3796.textureRect = UnityEngine.Rect.MinMaxRect(i3797[6], i3797[7], i3797[8], i3797[9])
  i3796.packedRect = UnityEngine.Rect.MinMaxRect(i3797[10], i3797[11], i3797[12], i3797[13])
  i3796.border = new pc.Vec4( i3797[14], i3797[15], i3797[16], i3797[17] )
  i3796.transparency = i3797[18]
  i3796.bounds = i3797[19]
  i3796.pixelsPerUnit = i3797[20]
  i3796.textureWidth = i3797[21]
  i3796.textureHeight = i3797[22]
  i3796.nativeSize = new pc.Vec2( i3797[23], i3797[24] )
  i3796.pivot = new pc.Vec2( i3797[25], i3797[26] )
  i3796.textureRectOffset = new pc.Vec2( i3797[27], i3797[28] )
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3799 = data
  i3798.name = i3799[0]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3801 = data
  i3800.name = i3801[0]
  i3800.wrapMode = i3801[1]
  i3800.isLooping = !!i3801[2]
  i3800.length = i3801[3]
  var i3803 = i3801[4]
  var i3802 = []
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3803[i + 0]) );
  }
  i3800.curves = i3802
  var i3805 = i3801[5]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3805[i + 0]) );
  }
  i3800.events = i3804
  i3800.halfPrecision = !!i3801[6]
  i3800._frameRate = i3801[7]
  i3800.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3801[8], i3800.localBounds)
  i3800.hasMuscleCurves = !!i3801[9]
  var i3807 = i3801[10]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( i3807[i + 0] );
  }
  i3800.clipMuscleConstant = i3806
  i3800.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3801[11], i3800.clipBindingConstant)
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3811 = data
  i3810.path = i3811[0]
  i3810.hash = i3811[1]
  i3810.componentType = i3811[2]
  i3810.property = i3811[3]
  i3810.keys = i3811[4]
  var i3813 = i3811[5]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3813[i + 0]) );
  }
  i3810.objectReferenceKeys = i3812
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3817 = data
  i3816.time = i3817[0]
  request.r(i3817[1], i3817[2], 0, i3816, 'value')
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3821 = data
  i3820.functionName = i3821[0]
  i3820.floatParameter = i3821[1]
  i3820.intParameter = i3821[2]
  i3820.stringParameter = i3821[3]
  request.r(i3821[4], i3821[5], 0, i3820, 'objectReferenceParameter')
  i3820.time = i3821[6]
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3823 = data
  i3822.center = new pc.Vec3( i3823[0], i3823[1], i3823[2] )
  i3822.extends = new pc.Vec3( i3823[3], i3823[4], i3823[5] )
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3827 = data
  var i3829 = i3827[0]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.push( i3829[i + 0] );
  }
  i3826.genericBindings = i3828
  var i3831 = i3827[1]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.push( i3831[i + 0] );
  }
  i3826.pptrCurveMapping = i3830
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3833 = data
  i3832.name = i3833[0]
  i3832.ascent = i3833[1]
  i3832.originalLineHeight = i3833[2]
  i3832.fontSize = i3833[3]
  var i3835 = i3833[4]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3835[i + 0]) );
  }
  i3832.characterInfo = i3834
  request.r(i3833[5], i3833[6], 0, i3832, 'texture')
  i3832.originalFontSize = i3833[7]
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3839 = data
  i3838.index = i3839[0]
  i3838.advance = i3839[1]
  i3838.bearing = i3839[2]
  i3838.glyphWidth = i3839[3]
  i3838.glyphHeight = i3839[4]
  i3838.minX = i3839[5]
  i3838.maxX = i3839[6]
  i3838.minY = i3839[7]
  i3838.maxY = i3839[8]
  i3838.uvBottomLeftX = i3839[9]
  i3838.uvBottomLeftY = i3839[10]
  i3838.uvBottomRightX = i3839[11]
  i3838.uvBottomRightY = i3839[12]
  i3838.uvTopLeftX = i3839[13]
  i3838.uvTopLeftY = i3839[14]
  i3838.uvTopRightX = i3839[15]
  i3838.uvTopRightY = i3839[16]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3841 = data
  i3840.name = i3841[0]
  i3840.bytes64 = i3841[1]
  i3840.data = i3841[2]
  return i3840
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i3842 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i3843 = data
  var i3845 = i3843[0]
  var i3844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i3845.length; i += 2) {
  request.r(i3845[i + 0], i3845[i + 1], 1, i3844, '')
  }
  i3842.components = i3844
  return i3842
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i3848 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i3849 = data
  i3848.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i3849[0], i3848.mode)
  i3848.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i3849[1], i3848.neutralHDRRangeReductionMode)
  i3848.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i3849[2], i3848.acesPreset)
  i3848.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3849[3], i3848.hueShiftAmount)
  i3848.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i3849[4], i3848.detectPaperWhite)
  i3848.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3849[5], i3848.paperWhite)
  i3848.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i3849[6], i3848.detectBrightnessLimits)
  i3848.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3849[7], i3848.minNits)
  i3848.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3849[8], i3848.maxNits)
  i3848.active = !!i3849[9]
  return i3848
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i3850 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i3851 = data
  i3850.m_Value = i3851[0]
  i3850.m_OverrideState = !!i3851[1]
  return i3850
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i3852 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i3853 = data
  i3852.m_Value = i3853[0]
  i3852.m_OverrideState = !!i3853[1]
  return i3852
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i3854 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i3855 = data
  i3854.m_Value = i3855[0]
  i3854.m_OverrideState = !!i3855[1]
  return i3854
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i3856 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i3857 = data
  i3856.m_Value = i3857[0]
  i3856.m_OverrideState = !!i3857[1]
  return i3856
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i3858 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i3859 = data
  i3858.m_Value = !!i3859[0]
  i3858.m_OverrideState = !!i3859[1]
  return i3858
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i3860 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i3861 = data
  i3860.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i3861[0], i3860.skipIterations)
  i3860.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i3861[1], i3860.threshold)
  i3860.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i3861[2], i3860.intensity)
  i3860.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3861[3], i3860.scatter)
  i3860.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i3861[4], i3860.clamp)
  i3860.tint = request.d('UnityEngine.Rendering.ColorParameter', i3861[5], i3860.tint)
  i3860.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i3861[6], i3860.highQualityFiltering)
  i3860.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i3861[7], i3860.downscale)
  i3860.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i3861[8], i3860.maxIterations)
  i3860.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i3861[9], i3860.dirtTexture)
  i3860.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i3861[10], i3860.dirtIntensity)
  i3860.active = !!i3861[11]
  return i3860
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i3862 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i3863 = data
  i3862.m_Value = i3863[0]
  i3862.m_OverrideState = !!i3863[1]
  return i3862
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i3864 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i3865 = data
  i3864.m_Value = i3865[0]
  i3864.m_OverrideState = !!i3865[1]
  return i3864
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i3866 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i3867 = data
  i3866.m_Value = new pc.Color(i3867[0], i3867[1], i3867[2], i3867[3])
  i3866.m_OverrideState = !!i3867[4]
  return i3866
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i3868 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i3869 = data
  i3868.m_Value = i3869[0]
  i3868.m_OverrideState = !!i3869[1]
  return i3868
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i3870 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i3871 = data
  i3870.dimension = i3871[0]
  request.r(i3871[1], i3871[2], 0, i3870, 'm_Value')
  i3870.m_OverrideState = !!i3871[3]
  return i3870
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i3872 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i3873 = data
  i3872.color = request.d('UnityEngine.Rendering.ColorParameter', i3873[0], i3872.color)
  i3872.center = request.d('UnityEngine.Rendering.Vector2Parameter', i3873[1], i3872.center)
  i3872.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3873[2], i3872.intensity)
  i3872.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3873[3], i3872.smoothness)
  i3872.rounded = request.d('UnityEngine.Rendering.BoolParameter', i3873[4], i3872.rounded)
  i3872.active = !!i3873[5]
  return i3872
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i3874 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i3875 = data
  i3874.m_Value = new pc.Vec2( i3875[0], i3875[1] )
  i3874.m_OverrideState = !!i3875[2]
  return i3874
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3876 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3877 = data
  i3876.hashCode = i3877[0]
  request.r(i3877[1], i3877[2], 0, i3876, 'material')
  i3876.materialHashCode = i3877[3]
  request.r(i3877[4], i3877[5], 0, i3876, 'atlas')
  i3876.normalStyle = i3877[6]
  i3876.normalSpacingOffset = i3877[7]
  i3876.boldStyle = i3877[8]
  i3876.boldSpacing = i3877[9]
  i3876.italicStyle = i3877[10]
  i3876.tabSize = i3877[11]
  i3876.m_Version = i3877[12]
  i3876.m_SourceFontFileGUID = i3877[13]
  request.r(i3877[14], i3877[15], 0, i3876, 'm_SourceFontFile_EditorRef')
  request.r(i3877[16], i3877[17], 0, i3876, 'm_SourceFontFile')
  i3876.m_AtlasPopulationMode = i3877[18]
  i3876.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3877[19], i3876.m_FaceInfo)
  var i3879 = i3877[20]
  var i3878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3879.length; i += 1) {
    i3878.add(request.d('UnityEngine.TextCore.Glyph', i3879[i + 0]));
  }
  i3876.m_GlyphTable = i3878
  var i3881 = i3877[21]
  var i3880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.add(request.d('TMPro.TMP_Character', i3881[i + 0]));
  }
  i3876.m_CharacterTable = i3880
  var i3883 = i3877[22]
  var i3882 = []
  for(var i = 0; i < i3883.length; i += 2) {
  request.r(i3883[i + 0], i3883[i + 1], 2, i3882, '')
  }
  i3876.m_AtlasTextures = i3882
  i3876.m_AtlasTextureIndex = i3877[23]
  i3876.m_IsMultiAtlasTexturesEnabled = !!i3877[24]
  i3876.m_ClearDynamicDataOnBuild = !!i3877[25]
  var i3885 = i3877[26]
  var i3884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3885.length; i += 1) {
    i3884.add(request.d('UnityEngine.TextCore.GlyphRect', i3885[i + 0]));
  }
  i3876.m_UsedGlyphRects = i3884
  var i3887 = i3877[27]
  var i3886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.add(request.d('UnityEngine.TextCore.GlyphRect', i3887[i + 0]));
  }
  i3876.m_FreeGlyphRects = i3886
  i3876.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3877[28], i3876.m_fontInfo)
  i3876.m_AtlasWidth = i3877[29]
  i3876.m_AtlasHeight = i3877[30]
  i3876.m_AtlasPadding = i3877[31]
  i3876.m_AtlasRenderMode = i3877[32]
  var i3889 = i3877[33]
  var i3888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.add(request.d('TMPro.TMP_Glyph', i3889[i + 0]));
  }
  i3876.m_glyphInfoList = i3888
  i3876.m_KerningTable = request.d('TMPro.KerningTable', i3877[34], i3876.m_KerningTable)
  i3876.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3877[35], i3876.m_FontFeatureTable)
  var i3891 = i3877[36]
  var i3890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3891.length; i += 2) {
  request.r(i3891[i + 0], i3891[i + 1], 1, i3890, '')
  }
  i3876.fallbackFontAssets = i3890
  var i3893 = i3877[37]
  var i3892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3893.length; i += 2) {
  request.r(i3893[i + 0], i3893[i + 1], 1, i3892, '')
  }
  i3876.m_FallbackFontAssetTable = i3892
  i3876.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3877[38], i3876.m_CreationSettings)
  var i3895 = i3877[39]
  var i3894 = []
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.push( request.d('TMPro.TMP_FontWeightPair', i3895[i + 0]) );
  }
  i3876.m_FontWeightTable = i3894
  var i3897 = i3877[40]
  var i3896 = []
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.push( request.d('TMPro.TMP_FontWeightPair', i3897[i + 0]) );
  }
  i3876.fontWeights = i3896
  return i3876
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3898 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3899 = data
  i3898.m_FaceIndex = i3899[0]
  i3898.m_FamilyName = i3899[1]
  i3898.m_StyleName = i3899[2]
  i3898.m_PointSize = i3899[3]
  i3898.m_Scale = i3899[4]
  i3898.m_UnitsPerEM = i3899[5]
  i3898.m_LineHeight = i3899[6]
  i3898.m_AscentLine = i3899[7]
  i3898.m_CapLine = i3899[8]
  i3898.m_MeanLine = i3899[9]
  i3898.m_Baseline = i3899[10]
  i3898.m_DescentLine = i3899[11]
  i3898.m_SuperscriptOffset = i3899[12]
  i3898.m_SuperscriptSize = i3899[13]
  i3898.m_SubscriptOffset = i3899[14]
  i3898.m_SubscriptSize = i3899[15]
  i3898.m_UnderlineOffset = i3899[16]
  i3898.m_UnderlineThickness = i3899[17]
  i3898.m_StrikethroughOffset = i3899[18]
  i3898.m_StrikethroughThickness = i3899[19]
  i3898.m_TabWidth = i3899[20]
  return i3898
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3902 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3903 = data
  i3902.m_Index = i3903[0]
  i3902.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3903[1], i3902.m_Metrics)
  i3902.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3903[2], i3902.m_GlyphRect)
  i3902.m_Scale = i3903[3]
  i3902.m_AtlasIndex = i3903[4]
  i3902.m_ClassDefinitionType = i3903[5]
  return i3902
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3904 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3905 = data
  i3904.m_Width = i3905[0]
  i3904.m_Height = i3905[1]
  i3904.m_HorizontalBearingX = i3905[2]
  i3904.m_HorizontalBearingY = i3905[3]
  i3904.m_HorizontalAdvance = i3905[4]
  return i3904
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3906 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3907 = data
  i3906.m_X = i3907[0]
  i3906.m_Y = i3907[1]
  i3906.m_Width = i3907[2]
  i3906.m_Height = i3907[3]
  return i3906
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3910 = root || request.c( 'TMPro.TMP_Character' )
  var i3911 = data
  i3910.m_ElementType = i3911[0]
  i3910.m_Unicode = i3911[1]
  i3910.m_GlyphIndex = i3911[2]
  i3910.m_Scale = i3911[3]
  return i3910
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3916 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3917 = data
  i3916.Name = i3917[0]
  i3916.PointSize = i3917[1]
  i3916.Scale = i3917[2]
  i3916.CharacterCount = i3917[3]
  i3916.LineHeight = i3917[4]
  i3916.Baseline = i3917[5]
  i3916.Ascender = i3917[6]
  i3916.CapHeight = i3917[7]
  i3916.Descender = i3917[8]
  i3916.CenterLine = i3917[9]
  i3916.SuperscriptOffset = i3917[10]
  i3916.SubscriptOffset = i3917[11]
  i3916.SubSize = i3917[12]
  i3916.Underline = i3917[13]
  i3916.UnderlineThickness = i3917[14]
  i3916.strikethrough = i3917[15]
  i3916.strikethroughThickness = i3917[16]
  i3916.TabWidth = i3917[17]
  i3916.Padding = i3917[18]
  i3916.AtlasWidth = i3917[19]
  i3916.AtlasHeight = i3917[20]
  return i3916
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3920 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3921 = data
  i3920.id = i3921[0]
  i3920.x = i3921[1]
  i3920.y = i3921[2]
  i3920.width = i3921[3]
  i3920.height = i3921[4]
  i3920.xOffset = i3921[5]
  i3920.yOffset = i3921[6]
  i3920.xAdvance = i3921[7]
  i3920.scale = i3921[8]
  return i3920
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3922 = root || request.c( 'TMPro.KerningTable' )
  var i3923 = data
  var i3925 = i3923[0]
  var i3924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3925.length; i += 1) {
    i3924.add(request.d('TMPro.KerningPair', i3925[i + 0]));
  }
  i3922.kerningPairs = i3924
  return i3922
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3928 = root || request.c( 'TMPro.KerningPair' )
  var i3929 = data
  i3928.xOffset = i3929[0]
  i3928.m_FirstGlyph = i3929[1]
  i3928.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3929[2], i3928.m_FirstGlyphAdjustments)
  i3928.m_SecondGlyph = i3929[3]
  i3928.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3929[4], i3928.m_SecondGlyphAdjustments)
  i3928.m_IgnoreSpacingAdjustments = !!i3929[5]
  return i3928
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3930 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3931 = data
  var i3933 = i3931[0]
  var i3932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3933.length; i += 1) {
    i3932.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3933[i + 0]));
  }
  i3930.m_GlyphPairAdjustmentRecords = i3932
  return i3930
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3936 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3937 = data
  i3936.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3937[0], i3936.m_FirstAdjustmentRecord)
  i3936.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3937[1], i3936.m_SecondAdjustmentRecord)
  i3936.m_FeatureLookupFlags = i3937[2]
  return i3936
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3938 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3939 = data
  i3938.m_GlyphIndex = i3939[0]
  i3938.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3939[1], i3938.m_GlyphValueRecord)
  return i3938
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3940 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3941 = data
  i3940.m_XPlacement = i3941[0]
  i3940.m_YPlacement = i3941[1]
  i3940.m_XAdvance = i3941[2]
  i3940.m_YAdvance = i3941[3]
  return i3940
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3944 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3945 = data
  i3944.sourceFontFileName = i3945[0]
  i3944.sourceFontFileGUID = i3945[1]
  i3944.pointSizeSamplingMode = i3945[2]
  i3944.pointSize = i3945[3]
  i3944.padding = i3945[4]
  i3944.packingMode = i3945[5]
  i3944.atlasWidth = i3945[6]
  i3944.atlasHeight = i3945[7]
  i3944.characterSetSelectionMode = i3945[8]
  i3944.characterSequence = i3945[9]
  i3944.referencedFontAssetGUID = i3945[10]
  i3944.referencedTextAssetGUID = i3945[11]
  i3944.fontStyle = i3945[12]
  i3944.fontStyleModifier = i3945[13]
  i3944.renderMode = i3945[14]
  i3944.includeFontFeatures = !!i3945[15]
  return i3944
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3948 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3949 = data
  request.r(i3949[0], i3949[1], 0, i3948, 'regularTypeface')
  request.r(i3949[2], i3949[3], 0, i3948, 'italicTypeface')
  return i3948
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3950 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3951 = data
  i3950.useSafeMode = !!i3951[0]
  i3950.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3951[1], i3950.safeModeOptions)
  i3950.timeScale = i3951[2]
  i3950.unscaledTimeScale = i3951[3]
  i3950.useSmoothDeltaTime = !!i3951[4]
  i3950.maxSmoothUnscaledTime = i3951[5]
  i3950.rewindCallbackMode = i3951[6]
  i3950.showUnityEditorReport = !!i3951[7]
  i3950.logBehaviour = i3951[8]
  i3950.drawGizmos = !!i3951[9]
  i3950.defaultRecyclable = !!i3951[10]
  i3950.defaultAutoPlay = i3951[11]
  i3950.defaultUpdateType = i3951[12]
  i3950.defaultTimeScaleIndependent = !!i3951[13]
  i3950.defaultEaseType = i3951[14]
  i3950.defaultEaseOvershootOrAmplitude = i3951[15]
  i3950.defaultEasePeriod = i3951[16]
  i3950.defaultAutoKill = !!i3951[17]
  i3950.defaultLoopType = i3951[18]
  i3950.debugMode = !!i3951[19]
  i3950.debugStoreTargetId = !!i3951[20]
  i3950.showPreviewPanel = !!i3951[21]
  i3950.storeSettingsLocation = i3951[22]
  i3950.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3951[23], i3950.modules)
  i3950.createASMDEF = !!i3951[24]
  i3950.showPlayingTweens = !!i3951[25]
  i3950.showPausedTweens = !!i3951[26]
  return i3950
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3952 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3953 = data
  i3952.logBehaviour = i3953[0]
  i3952.nestedTweenFailureBehaviour = i3953[1]
  return i3952
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3954 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3955 = data
  i3954.showPanel = !!i3955[0]
  i3954.audioEnabled = !!i3955[1]
  i3954.physicsEnabled = !!i3955[2]
  i3954.physics2DEnabled = !!i3955[3]
  i3954.spriteEnabled = !!i3955[4]
  i3954.uiEnabled = !!i3955[5]
  i3954.textMeshProEnabled = !!i3955[6]
  i3954.tk2DEnabled = !!i3955[7]
  i3954.deAudioEnabled = !!i3955[8]
  i3954.deUnityExtendedEnabled = !!i3955[9]
  i3954.epoOutlineEnabled = !!i3955[10]
  return i3954
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3956 = root || request.c( 'TMPro.TMP_Settings' )
  var i3957 = data
  i3956.m_enableWordWrapping = !!i3957[0]
  i3956.m_enableKerning = !!i3957[1]
  i3956.m_enableExtraPadding = !!i3957[2]
  i3956.m_enableTintAllSprites = !!i3957[3]
  i3956.m_enableParseEscapeCharacters = !!i3957[4]
  i3956.m_EnableRaycastTarget = !!i3957[5]
  i3956.m_GetFontFeaturesAtRuntime = !!i3957[6]
  i3956.m_missingGlyphCharacter = i3957[7]
  i3956.m_warningsDisabled = !!i3957[8]
  request.r(i3957[9], i3957[10], 0, i3956, 'm_defaultFontAsset')
  i3956.m_defaultFontAssetPath = i3957[11]
  i3956.m_defaultFontSize = i3957[12]
  i3956.m_defaultAutoSizeMinRatio = i3957[13]
  i3956.m_defaultAutoSizeMaxRatio = i3957[14]
  i3956.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3957[15], i3957[16] )
  i3956.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3957[17], i3957[18] )
  i3956.m_autoSizeTextContainer = !!i3957[19]
  i3956.m_IsTextObjectScaleStatic = !!i3957[20]
  var i3959 = i3957[21]
  var i3958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3959.length; i += 2) {
  request.r(i3959[i + 0], i3959[i + 1], 1, i3958, '')
  }
  i3956.m_fallbackFontAssets = i3958
  i3956.m_matchMaterialPreset = !!i3957[22]
  request.r(i3957[23], i3957[24], 0, i3956, 'm_defaultSpriteAsset')
  i3956.m_defaultSpriteAssetPath = i3957[25]
  i3956.m_enableEmojiSupport = !!i3957[26]
  i3956.m_MissingCharacterSpriteUnicode = i3957[27]
  i3956.m_defaultColorGradientPresetsPath = i3957[28]
  request.r(i3957[29], i3957[30], 0, i3956, 'm_defaultStyleSheet')
  i3956.m_StyleSheetsResourcePath = i3957[31]
  request.r(i3957[32], i3957[33], 0, i3956, 'm_leadingCharacters')
  request.r(i3957[34], i3957[35], 0, i3956, 'm_followingCharacters')
  i3956.m_UseModernHangulLineBreakingRules = !!i3957[36]
  return i3956
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3960 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3961 = data
  i3960.hashCode = i3961[0]
  request.r(i3961[1], i3961[2], 0, i3960, 'material')
  i3960.materialHashCode = i3961[3]
  request.r(i3961[4], i3961[5], 0, i3960, 'spriteSheet')
  var i3963 = i3961[6]
  var i3962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3963.length; i += 1) {
    i3962.add(request.d('TMPro.TMP_Sprite', i3963[i + 0]));
  }
  i3960.spriteInfoList = i3962
  var i3965 = i3961[7]
  var i3964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3965.length; i += 2) {
  request.r(i3965[i + 0], i3965[i + 1], 1, i3964, '')
  }
  i3960.fallbackSpriteAssets = i3964
  i3960.m_Version = i3961[8]
  i3960.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3961[9], i3960.m_FaceInfo)
  var i3967 = i3961[10]
  var i3966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.add(request.d('TMPro.TMP_SpriteCharacter', i3967[i + 0]));
  }
  i3960.m_SpriteCharacterTable = i3966
  var i3969 = i3961[11]
  var i3968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.add(request.d('TMPro.TMP_SpriteGlyph', i3969[i + 0]));
  }
  i3960.m_SpriteGlyphTable = i3968
  return i3960
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3972 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3973 = data
  i3972.name = i3973[0]
  i3972.hashCode = i3973[1]
  i3972.unicode = i3973[2]
  i3972.pivot = new pc.Vec2( i3973[3], i3973[4] )
  request.r(i3973[5], i3973[6], 0, i3972, 'sprite')
  i3972.id = i3973[7]
  i3972.x = i3973[8]
  i3972.y = i3973[9]
  i3972.width = i3973[10]
  i3972.height = i3973[11]
  i3972.xOffset = i3973[12]
  i3972.yOffset = i3973[13]
  i3972.xAdvance = i3973[14]
  i3972.scale = i3973[15]
  return i3972
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3978 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3979 = data
  i3978.m_Name = i3979[0]
  i3978.m_HashCode = i3979[1]
  i3978.m_ElementType = i3979[2]
  i3978.m_Unicode = i3979[3]
  i3978.m_GlyphIndex = i3979[4]
  i3978.m_Scale = i3979[5]
  return i3978
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3982 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3983 = data
  request.r(i3983[0], i3983[1], 0, i3982, 'sprite')
  i3982.m_Index = i3983[2]
  i3982.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3983[3], i3982.m_Metrics)
  i3982.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3983[4], i3982.m_GlyphRect)
  i3982.m_Scale = i3983[5]
  i3982.m_AtlasIndex = i3983[6]
  i3982.m_ClassDefinitionType = i3983[7]
  return i3982
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3984 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3985 = data
  var i3987 = i3985[0]
  var i3986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3987.length; i += 1) {
    i3986.add(request.d('TMPro.TMP_Style', i3987[i + 0]));
  }
  i3984.m_StyleList = i3986
  return i3984
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3990 = root || request.c( 'TMPro.TMP_Style' )
  var i3991 = data
  i3990.m_Name = i3991[0]
  i3990.m_HashCode = i3991[1]
  i3990.m_OpeningDefinition = i3991[2]
  i3990.m_ClosingDefinition = i3991[3]
  i3990.m_OpeningTagArray = i3991[4]
  i3990.m_ClosingTagArray = i3991[5]
  i3990.m_OpeningTagUnicodeArray = i3991[6]
  i3990.m_ClosingTagUnicodeArray = i3991[7]
  return i3990
}

Deserializers["TMPro.TMP_ColorGradient"] = function (request, data, root) {
  var i3992 = root || request.c( 'TMPro.TMP_ColorGradient' )
  var i3993 = data
  i3992.colorMode = i3993[0]
  i3992.topLeft = new pc.Color(i3993[1], i3993[2], i3993[3], i3993[4])
  i3992.topRight = new pc.Color(i3993[5], i3993[6], i3993[7], i3993[8])
  i3992.bottomLeft = new pc.Color(i3993[9], i3993[10], i3993[11], i3993[12])
  i3992.bottomRight = new pc.Color(i3993[13], i3993[14], i3993[15], i3993[16])
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3995 = data
  var i3997 = i3995[0]
  var i3996 = []
  for(var i = 0; i < i3997.length; i += 1) {
    i3996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3997[i + 0]) );
  }
  i3994.files = i3996
  i3994.componentToPrefabIds = i3995[1]
  return i3994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4001 = data
  i4000.path = i4001[0]
  request.r(i4001[1], i4001[2], 0, i4000, 'unityObject')
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4003 = data
  var i4005 = i4003[0]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4005[i + 0]) );
  }
  i4002.scriptsExecutionOrder = i4004
  var i4007 = i4003[1]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4007[i + 0]) );
  }
  i4002.sortingLayers = i4006
  var i4009 = i4003[2]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4009[i + 0]) );
  }
  i4002.cullingLayers = i4008
  i4002.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4003[3], i4002.timeSettings)
  i4002.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4003[4], i4002.physicsSettings)
  i4002.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4003[5], i4002.physics2DSettings)
  i4002.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4003[6], i4002.qualitySettings)
  i4002.enableRealtimeShadows = !!i4003[7]
  i4002.enableAutoInstancing = !!i4003[8]
  i4002.enableDynamicBatching = !!i4003[9]
  i4002.lightmapEncodingQuality = i4003[10]
  i4002.desiredColorSpace = i4003[11]
  var i4011 = i4003[12]
  var i4010 = []
  for(var i = 0; i < i4011.length; i += 1) {
    i4010.push( i4011[i + 0] );
  }
  i4002.allTags = i4010
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4015 = data
  i4014.name = i4015[0]
  i4014.value = i4015[1]
  return i4014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4019 = data
  i4018.id = i4019[0]
  i4018.name = i4019[1]
  i4018.value = i4019[2]
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4023 = data
  i4022.id = i4023[0]
  i4022.name = i4023[1]
  return i4022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4025 = data
  i4024.fixedDeltaTime = i4025[0]
  i4024.maximumDeltaTime = i4025[1]
  i4024.timeScale = i4025[2]
  i4024.maximumParticleTimestep = i4025[3]
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4027 = data
  i4026.gravity = new pc.Vec3( i4027[0], i4027[1], i4027[2] )
  i4026.defaultSolverIterations = i4027[3]
  i4026.bounceThreshold = i4027[4]
  i4026.autoSyncTransforms = !!i4027[5]
  i4026.autoSimulation = !!i4027[6]
  var i4029 = i4027[7]
  var i4028 = []
  for(var i = 0; i < i4029.length; i += 1) {
    i4028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4029[i + 0]) );
  }
  i4026.collisionMatrix = i4028
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4033 = data
  i4032.enabled = !!i4033[0]
  i4032.layerId = i4033[1]
  i4032.otherLayerId = i4033[2]
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4035 = data
  request.r(i4035[0], i4035[1], 0, i4034, 'material')
  i4034.gravity = new pc.Vec2( i4035[2], i4035[3] )
  i4034.positionIterations = i4035[4]
  i4034.velocityIterations = i4035[5]
  i4034.velocityThreshold = i4035[6]
  i4034.maxLinearCorrection = i4035[7]
  i4034.maxAngularCorrection = i4035[8]
  i4034.maxTranslationSpeed = i4035[9]
  i4034.maxRotationSpeed = i4035[10]
  i4034.baumgarteScale = i4035[11]
  i4034.baumgarteTOIScale = i4035[12]
  i4034.timeToSleep = i4035[13]
  i4034.linearSleepTolerance = i4035[14]
  i4034.angularSleepTolerance = i4035[15]
  i4034.defaultContactOffset = i4035[16]
  i4034.autoSimulation = !!i4035[17]
  i4034.queriesHitTriggers = !!i4035[18]
  i4034.queriesStartInColliders = !!i4035[19]
  i4034.callbacksOnDisable = !!i4035[20]
  i4034.reuseCollisionCallbacks = !!i4035[21]
  i4034.autoSyncTransforms = !!i4035[22]
  var i4037 = i4035[23]
  var i4036 = []
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4037[i + 0]) );
  }
  i4034.collisionMatrix = i4036
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4041 = data
  i4040.enabled = !!i4041[0]
  i4040.layerId = i4041[1]
  i4040.otherLayerId = i4041[2]
  return i4040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4043 = data
  var i4045 = i4043[0]
  var i4044 = []
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4045[i + 0]) );
  }
  i4042.qualityLevels = i4044
  var i4047 = i4043[1]
  var i4046 = []
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.push( i4047[i + 0] );
  }
  i4042.names = i4046
  i4042.shadows = i4043[2]
  i4042.anisotropicFiltering = i4043[3]
  i4042.antiAliasing = i4043[4]
  i4042.lodBias = i4043[5]
  i4042.shadowCascades = i4043[6]
  i4042.shadowDistance = i4043[7]
  i4042.shadowmaskMode = i4043[8]
  i4042.shadowProjection = i4043[9]
  i4042.shadowResolution = i4043[10]
  i4042.softParticles = !!i4043[11]
  i4042.softVegetation = !!i4043[12]
  i4042.activeColorSpace = i4043[13]
  i4042.desiredColorSpace = i4043[14]
  i4042.masterTextureLimit = i4043[15]
  i4042.maxQueuedFrames = i4043[16]
  i4042.particleRaycastBudget = i4043[17]
  i4042.pixelLightCount = i4043[18]
  i4042.realtimeReflectionProbes = !!i4043[19]
  i4042.shadowCascade2Split = i4043[20]
  i4042.shadowCascade4Split = new pc.Vec3( i4043[21], i4043[22], i4043[23] )
  i4042.streamingMipmapsActive = !!i4043[24]
  i4042.vSyncCount = i4043[25]
  i4042.asyncUploadBufferSize = i4043[26]
  i4042.asyncUploadTimeSlice = i4043[27]
  i4042.billboardsFaceCameraPosition = !!i4043[28]
  i4042.shadowNearPlaneOffset = i4043[29]
  i4042.streamingMipmapsMemoryBudget = i4043[30]
  i4042.maximumLODLevel = i4043[31]
  i4042.streamingMipmapsAddAllCameras = !!i4043[32]
  i4042.streamingMipmapsMaxLevelReduction = i4043[33]
  i4042.streamingMipmapsRenderersPerFrame = i4043[34]
  i4042.resolutionScalingFixedDPIFactor = i4043[35]
  i4042.streamingMipmapsMaxFileIORequests = i4043[36]
  i4042.currentQualityLevel = i4043[37]
  return i4042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4053 = data
  i4052.weight = i4053[0]
  i4052.vertices = i4053[1]
  i4052.normals = i4053[2]
  i4052.tangents = i4053[3]
  return i4052
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4054 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4055 = data
  i4054.xPlacement = i4055[0]
  i4054.yPlacement = i4055[1]
  i4054.xAdvance = i4055[2]
  i4054.yAdvance = i4055[3]
  return i4054
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

Deserializers.creativeName = "Subject-Test-Build";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4414";

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

Deserializers.linearColorSpace = true;

Deserializers.buildID = "5c84a8a5-995b-4eb9-8c0b-22da3a1601f0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

