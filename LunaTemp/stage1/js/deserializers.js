var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointSpring' )
  var i431 = data
  i430.spring = i431[0]
  i430.damper = i431[1]
  i430.targetPosition = i431[2]
  return i430
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointMotor' )
  var i433 = data
  i432.m_TargetVelocity = i433[0]
  i432.m_Force = i433[1]
  i432.m_FreeSpin = i433[2]
  return i432
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointLimits' )
  var i435 = data
  i434.m_Min = i435[0]
  i434.m_Max = i435[1]
  i434.m_Bounciness = i435[2]
  i434.m_BounceMinVelocity = i435[3]
  i434.m_ContactDistance = i435[4]
  i434.minBounce = i435[5]
  i434.maxBounce = i435[6]
  return i434
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointDrive' )
  var i437 = data
  i436.m_PositionSpring = i437[0]
  i436.m_PositionDamper = i437[1]
  i436.m_MaximumForce = i437[2]
  i436.m_UseAcceleration = i437[3]
  return i436
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i439 = data
  i438.m_Spring = i439[0]
  i438.m_Damper = i439[1]
  return i438
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i441 = data
  i440.m_Limit = i441[0]
  i440.m_Bounciness = i441[1]
  i440.m_ContactDistance = i441[2]
  return i440
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i443 = data
  i442.m_ExtremumSlip = i443[0]
  i442.m_ExtremumValue = i443[1]
  i442.m_AsymptoteSlip = i443[2]
  i442.m_AsymptoteValue = i443[3]
  i442.m_Stiffness = i443[4]
  return i442
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i445 = data
  i444.m_LowerAngle = i445[0]
  i444.m_UpperAngle = i445[1]
  return i444
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i447 = data
  i446.m_MotorSpeed = i447[0]
  i446.m_MaximumMotorTorque = i447[1]
  return i446
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i449 = data
  i448.m_DampingRatio = i449[0]
  i448.m_Frequency = i449[1]
  i448.m_Angle = i449[2]
  return i448
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i451 = data
  i450.m_LowerTranslation = i451[0]
  i450.m_UpperTranslation = i451[1]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i452 = root || new pc.UnityMaterial()
  var i453 = data
  i452.name = i453[0]
  request.r(i453[1], i453[2], 0, i452, 'shader')
  i452.renderQueue = i453[3]
  i452.enableInstancing = !!i453[4]
  var i455 = i453[5]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i455[i + 0]) );
  }
  i452.floatParameters = i454
  var i457 = i453[6]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i457[i + 0]) );
  }
  i452.colorParameters = i456
  var i459 = i453[7]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i459[i + 0]) );
  }
  i452.vectorParameters = i458
  var i461 = i453[8]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i461[i + 0]) );
  }
  i452.textureParameters = i460
  var i463 = i453[9]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i463[i + 0]) );
  }
  i452.materialFlags = i462
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i467 = data
  i466.name = i467[0]
  i466.value = i467[1]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i471 = data
  i470.name = i471[0]
  i470.value = new pc.Color(i471[1], i471[2], i471[3], i471[4])
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i475 = data
  i474.name = i475[0]
  i474.value = new pc.Vec4( i475[1], i475[2], i475[3], i475[4] )
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i479 = data
  i478.name = i479[0]
  request.r(i479[1], i479[2], 0, i478, 'value')
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i483 = data
  i482.name = i483[0]
  i482.enabled = !!i483[1]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i485 = data
  i484.name = i485[0]
  i484.width = i485[1]
  i484.height = i485[2]
  i484.mipmapCount = i485[3]
  i484.anisoLevel = i485[4]
  i484.filterMode = i485[5]
  i484.hdr = !!i485[6]
  i484.format = i485[7]
  i484.wrapMode = i485[8]
  i484.alphaIsTransparency = !!i485[9]
  i484.alphaSource = i485[10]
  i484.graphicsFormat = i485[11]
  i484.sRGBTexture = !!i485[12]
  i484.desiredColorSpace = i485[13]
  i484.wrapU = i485[14]
  i484.wrapV = i485[15]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i487 = data
  i486.name = i487[0]
  i486.atlasId = i487[1]
  i486.mipmapCount = i487[2]
  i486.hdr = !!i487[3]
  i486.size = i487[4]
  i486.anisoLevel = i487[5]
  i486.filterMode = i487[6]
  var i489 = i487[7]
  var i488 = []
  for(var i = 0; i < i489.length; i += 4) {
    i488.push( UnityEngine.Rect.MinMaxRect(i489[i + 0], i489[i + 1], i489[i + 2], i489[i + 3]) );
  }
  i486.rects = i488
  i486.wrapU = i487[8]
  i486.wrapV = i487[9]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i493 = data
  i492.name = i493[0]
  i492.index = i493[1]
  i492.startup = !!i493[2]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i495 = data
  i494.position = new pc.Vec3( i495[0], i495[1], i495[2] )
  i494.scale = new pc.Vec3( i495[3], i495[4], i495[5] )
  i494.rotation = new pc.Quat(i495[6], i495[7], i495[8], i495[9])
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i497 = data
  i496.enabled = !!i497[0]
  i496.aspect = i497[1]
  i496.orthographic = !!i497[2]
  i496.orthographicSize = i497[3]
  i496.backgroundColor = new pc.Color(i497[4], i497[5], i497[6], i497[7])
  i496.nearClipPlane = i497[8]
  i496.farClipPlane = i497[9]
  i496.fieldOfView = i497[10]
  i496.depth = i497[11]
  i496.clearFlags = i497[12]
  i496.cullingMask = i497[13]
  i496.rect = i497[14]
  request.r(i497[15], i497[16], 0, i496, 'targetTexture')
  i496.usePhysicalProperties = !!i497[17]
  i496.focalLength = i497[18]
  i496.sensorSize = new pc.Vec2( i497[19], i497[20] )
  i496.lensShift = new pc.Vec2( i497[21], i497[22] )
  i496.gateFit = i497[23]
  i496.commandBufferCount = i497[24]
  i496.cameraType = i497[25]
  return i496
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i499 = data
  i498.m_RenderShadows = !!i499[0]
  i498.m_RequiresDepthTextureOption = i499[1]
  i498.m_RequiresOpaqueTextureOption = i499[2]
  i498.m_CameraType = i499[3]
  var i501 = i499[4]
  var i500 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i501.length; i += 2) {
  request.r(i501[i + 0], i501[i + 1], 1, i500, '')
  }
  i498.m_Cameras = i500
  i498.m_RendererIndex = i499[5]
  i498.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i499[6] )
  request.r(i499[7], i499[8], 0, i498, 'm_VolumeTrigger')
  i498.m_VolumeFrameworkUpdateModeOption = i499[9]
  i498.m_RenderPostProcessing = !!i499[10]
  i498.m_Antialiasing = i499[11]
  i498.m_AntialiasingQuality = i499[12]
  i498.m_StopNaN = !!i499[13]
  i498.m_Dithering = !!i499[14]
  i498.m_ClearDepth = !!i499[15]
  i498.m_AllowXRRendering = !!i499[16]
  i498.m_AllowHDROutput = !!i499[17]
  i498.m_UseScreenCoordOverride = !!i499[18]
  i498.m_ScreenSizeOverride = new pc.Vec4( i499[19], i499[20], i499[21], i499[22] )
  i498.m_ScreenCoordScaleBias = new pc.Vec4( i499[23], i499[24], i499[25], i499[26] )
  i498.m_RequiresDepthTexture = !!i499[27]
  i498.m_RequiresColorTexture = !!i499[28]
  i498.m_Version = i499[29]
  i498.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i499[30], i498.m_TaaSettings)
  return i498
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i505 = data
  i504.m_Quality = i505[0]
  i504.m_FrameInfluence = i505[1]
  i504.m_JitterScale = i505[2]
  i504.m_MipBias = i505[3]
  i504.m_VarianceClampScale = i505[4]
  i504.m_ContrastAdaptiveSharpening = i505[5]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i507 = data
  i506.name = i507[0]
  i506.tagId = i507[1]
  i506.enabled = !!i507[2]
  i506.isStatic = !!i507[3]
  i506.layer = i507[4]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i509 = data
  i508.enabled = !!i509[0]
  i508.type = i509[1]
  i508.color = new pc.Color(i509[2], i509[3], i509[4], i509[5])
  i508.cullingMask = i509[6]
  i508.intensity = i509[7]
  i508.range = i509[8]
  i508.spotAngle = i509[9]
  i508.shadows = i509[10]
  i508.shadowNormalBias = i509[11]
  i508.shadowBias = i509[12]
  i508.shadowStrength = i509[13]
  i508.shadowResolution = i509[14]
  i508.lightmapBakeType = i509[15]
  i508.renderMode = i509[16]
  request.r(i509[17], i509[18], 0, i508, 'cookie')
  i508.cookieSize = i509[19]
  return i508
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i511 = data
  i510.m_Version = i511[0]
  i510.m_UsePipelineSettings = !!i511[1]
  i510.m_AdditionalLightsShadowResolutionTier = i511[2]
  i510.m_LightLayerMask = i511[3]
  i510.m_RenderingLayers = i511[4]
  i510.m_CustomShadowLayers = !!i511[5]
  i510.m_ShadowLayerMask = i511[6]
  i510.m_ShadowRenderingLayers = i511[7]
  i510.m_LightCookieSize = new pc.Vec2( i511[8], i511[9] )
  i510.m_LightCookieOffset = new pc.Vec2( i511[10], i511[11] )
  i510.m_SoftShadowQuality = i511[12]
  return i510
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i513 = data
  i512.priority = i513[0]
  i512.blendDistance = i513[1]
  i512.weight = i513[2]
  request.r(i513[3], i513[4], 0, i512, 'sharedProfile')
  i512.m_IsGlobal = !!i513[5]
  return i512
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'm_FirstSelected')
  i514.m_sendNavigationEvents = !!i515[2]
  i514.m_DragThreshold = i515[3]
  return i514
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i517 = data
  i516.m_HorizontalAxis = i517[0]
  i516.m_VerticalAxis = i517[1]
  i516.m_SubmitButton = i517[2]
  i516.m_CancelButton = i517[3]
  i516.m_InputActionsPerSecond = i517[4]
  i516.m_RepeatDelay = i517[5]
  i516.m_ForceModuleActive = !!i517[6]
  i516.m_SendPointerHoverToParent = !!i517[7]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i519 = data
  i518.ambientIntensity = i519[0]
  i518.reflectionIntensity = i519[1]
  i518.ambientMode = i519[2]
  i518.ambientLight = new pc.Color(i519[3], i519[4], i519[5], i519[6])
  i518.ambientSkyColor = new pc.Color(i519[7], i519[8], i519[9], i519[10])
  i518.ambientGroundColor = new pc.Color(i519[11], i519[12], i519[13], i519[14])
  i518.ambientEquatorColor = new pc.Color(i519[15], i519[16], i519[17], i519[18])
  i518.fogColor = new pc.Color(i519[19], i519[20], i519[21], i519[22])
  i518.fogEndDistance = i519[23]
  i518.fogStartDistance = i519[24]
  i518.fogDensity = i519[25]
  i518.fog = !!i519[26]
  request.r(i519[27], i519[28], 0, i518, 'skybox')
  i518.fogMode = i519[29]
  var i521 = i519[30]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i521[i + 0]) );
  }
  i518.lightmaps = i520
  i518.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i519[31], i518.lightProbes)
  i518.lightmapsMode = i519[32]
  i518.mixedBakeMode = i519[33]
  i518.environmentLightingMode = i519[34]
  i518.ambientProbe = new pc.SphericalHarmonicsL2(i519[35])
  i518.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i519[36])
  i518.useReferenceAmbientProbe = !!i519[37]
  request.r(i519[38], i519[39], 0, i518, 'customReflection')
  request.r(i519[40], i519[41], 0, i518, 'defaultReflection')
  i518.defaultReflectionMode = i519[42]
  i518.defaultReflectionResolution = i519[43]
  i518.sunLightObjectId = i519[44]
  i518.pixelLightCount = i519[45]
  i518.defaultReflectionHDR = !!i519[46]
  i518.hasLightDataAsset = !!i519[47]
  i518.hasManualGenerate = !!i519[48]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i525 = data
  request.r(i525[0], i525[1], 0, i524, 'lightmapColor')
  request.r(i525[2], i525[3], 0, i524, 'lightmapDirection')
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i526 = root || new UnityEngine.LightProbes()
  var i527 = data
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i535 = data
  i534.pivot = new pc.Vec2( i535[0], i535[1] )
  i534.anchorMin = new pc.Vec2( i535[2], i535[3] )
  i534.anchorMax = new pc.Vec2( i535[4], i535[5] )
  i534.sizeDelta = new pc.Vec2( i535[6], i535[7] )
  i534.anchoredPosition3D = new pc.Vec3( i535[8], i535[9], i535[10] )
  i534.rotation = new pc.Quat(i535[11], i535[12], i535[13], i535[14])
  i534.scale = new pc.Vec3( i535[15], i535[16], i535[17] )
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i537 = data
  i536.enabled = !!i537[0]
  i536.planeDistance = i537[1]
  i536.referencePixelsPerUnit = i537[2]
  i536.isFallbackOverlay = !!i537[3]
  i536.renderMode = i537[4]
  i536.renderOrder = i537[5]
  i536.sortingLayerName = i537[6]
  i536.sortingOrder = i537[7]
  i536.scaleFactor = i537[8]
  request.r(i537[9], i537[10], 0, i536, 'worldCamera')
  i536.overrideSorting = !!i537[11]
  i536.pixelPerfect = !!i537[12]
  i536.targetDisplay = i537[13]
  i536.overridePixelPerfect = !!i537[14]
  return i536
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i539 = data
  i538.m_UiScaleMode = i539[0]
  i538.m_ReferencePixelsPerUnit = i539[1]
  i538.m_ScaleFactor = i539[2]
  i538.m_ReferenceResolution = new pc.Vec2( i539[3], i539[4] )
  i538.m_ScreenMatchMode = i539[5]
  i538.m_MatchWidthOrHeight = i539[6]
  i538.m_PhysicalUnit = i539[7]
  i538.m_FallbackScreenDPI = i539[8]
  i538.m_DefaultSpriteDPI = i539[9]
  i538.m_DynamicPixelsPerUnit = i539[10]
  i538.m_PresetInfoIsWorld = !!i539[11]
  return i538
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i541 = data
  i540.m_IgnoreReversedGraphics = !!i541[0]
  i540.m_BlockingObjects = i541[1]
  i540.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i541[2] )
  return i540
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'panelPrefab')
  var i545 = i543[2]
  var i544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i545.length; i += 1) {
    i544.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i545[i + 0]));
  }
  i542.prefabs = i544
  return i542
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i549 = data
  i548.type = i549[0]
  request.r(i549[1], i549[2], 0, i548, 'prefab')
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i551 = data
  i550.cullTransparentMesh = !!i551[0]
  return i550
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.Image' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'm_Sprite')
  i552.m_Type = i553[2]
  i552.m_PreserveAspect = !!i553[3]
  i552.m_FillCenter = !!i553[4]
  i552.m_FillMethod = i553[5]
  i552.m_FillAmount = i553[6]
  i552.m_FillClockwise = !!i553[7]
  i552.m_FillOrigin = i553[8]
  i552.m_UseSpriteMesh = !!i553[9]
  i552.m_PixelsPerUnitMultiplier = i553[10]
  request.r(i553[11], i553[12], 0, i552, 'm_Material')
  i552.m_Maskable = !!i553[13]
  i552.m_Color = new pc.Color(i553[14], i553[15], i553[16], i553[17])
  i552.m_RaycastTarget = !!i553[18]
  i552.m_RaycastPadding = new pc.Vec4( i553[19], i553[20], i553[21], i553[22] )
  return i552
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i555 = data
  i554.m_Spacing = i555[0]
  i554.m_ChildForceExpandWidth = !!i555[1]
  i554.m_ChildForceExpandHeight = !!i555[2]
  i554.m_ChildControlWidth = !!i555[3]
  i554.m_ChildControlHeight = !!i555[4]
  i554.m_ChildScaleWidth = !!i555[5]
  i554.m_ChildScaleHeight = !!i555[6]
  i554.m_ReverseArrangement = !!i555[7]
  i554.m_Padding = UnityEngine.RectOffset.FromPaddings(i555[8], i555[9], i555[10], i555[11])
  i554.m_ChildAlignment = i555[12]
  return i554
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i557 = data
  i556.m_HorizontalFit = i557[0]
  i556.m_VerticalFit = i557[1]
  return i556
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'contentHolder')
  return i558
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'nameLabel')
  request.r(i561[2], i561[3], 0, i560, 'scrollRect')
  request.r(i561[4], i561[5], 0, i560, 'viewport')
  request.r(i561[6], i561[7], 0, i560, 'Canvas')
  return i560
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i563 = data
  i562.m_IgnoreLayout = !!i563[0]
  i562.m_MinWidth = i563[1]
  i562.m_MinHeight = i563[2]
  i562.m_PreferredWidth = i563[3]
  i562.m_PreferredHeight = i563[4]
  i562.m_FlexibleWidth = i563[5]
  i562.m_FlexibleHeight = i563[6]
  i562.m_LayoutPriority = i563[7]
  return i562
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.UI.Button' )
  var i565 = data
  i564.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i565[0], i564.m_OnClick)
  i564.m_Navigation = request.d('UnityEngine.UI.Navigation', i565[1], i564.m_Navigation)
  i564.m_Transition = i565[2]
  i564.m_Colors = request.d('UnityEngine.UI.ColorBlock', i565[3], i564.m_Colors)
  i564.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i565[4], i564.m_SpriteState)
  i564.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i565[5], i564.m_AnimationTriggers)
  i564.m_Interactable = !!i565[6]
  request.r(i565[7], i565[8], 0, i564, 'm_TargetGraphic')
  return i564
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i567 = data
  i566.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i567[0], i566.m_PersistentCalls)
  return i566
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i569 = data
  var i571 = i569[0]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i571.length; i += 1) {
    i570.add(request.d('UnityEngine.Events.PersistentCall', i571[i + 0]));
  }
  i568.m_Calls = i570
  return i568
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'm_Target')
  i574.m_TargetAssemblyTypeName = i575[2]
  i574.m_MethodName = i575[3]
  i574.m_Mode = i575[4]
  i574.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i575[5], i574.m_Arguments)
  i574.m_CallState = i575[6]
  return i574
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'm_ObjectArgument')
  i576.m_ObjectArgumentAssemblyTypeName = i577[2]
  i576.m_IntArgument = i577[3]
  i576.m_FloatArgument = i577[4]
  i576.m_StringArgument = i577[5]
  i576.m_BoolArgument = !!i577[6]
  return i576
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i579 = data
  i578.m_Mode = i579[0]
  i578.m_WrapAround = !!i579[1]
  request.r(i579[2], i579[3], 0, i578, 'm_SelectOnUp')
  request.r(i579[4], i579[5], 0, i578, 'm_SelectOnDown')
  request.r(i579[6], i579[7], 0, i578, 'm_SelectOnLeft')
  request.r(i579[8], i579[9], 0, i578, 'm_SelectOnRight')
  return i578
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i581 = data
  i580.m_NormalColor = new pc.Color(i581[0], i581[1], i581[2], i581[3])
  i580.m_HighlightedColor = new pc.Color(i581[4], i581[5], i581[6], i581[7])
  i580.m_PressedColor = new pc.Color(i581[8], i581[9], i581[10], i581[11])
  i580.m_SelectedColor = new pc.Color(i581[12], i581[13], i581[14], i581[15])
  i580.m_DisabledColor = new pc.Color(i581[16], i581[17], i581[18], i581[19])
  i580.m_ColorMultiplier = i581[20]
  i580.m_FadeDuration = i581[21]
  return i580
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'm_HighlightedSprite')
  request.r(i583[2], i583[3], 0, i582, 'm_PressedSprite')
  request.r(i583[4], i583[5], 0, i582, 'm_SelectedSprite')
  request.r(i583[6], i583[7], 0, i582, 'm_DisabledSprite')
  return i582
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i585 = data
  i584.m_NormalTrigger = i585[0]
  i584.m_HighlightedTrigger = i585[1]
  i584.m_PressedTrigger = i585[2]
  i584.m_SelectedTrigger = i585[3]
  i584.m_DisabledTrigger = i585[4]
  return i584
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.Text' )
  var i587 = data
  i586.m_FontData = request.d('UnityEngine.UI.FontData', i587[0], i586.m_FontData)
  i586.m_Text = i587[1]
  request.r(i587[2], i587[3], 0, i586, 'm_Material')
  i586.m_Maskable = !!i587[4]
  i586.m_Color = new pc.Color(i587[5], i587[6], i587[7], i587[8])
  i586.m_RaycastTarget = !!i587[9]
  i586.m_RaycastPadding = new pc.Vec4( i587[10], i587[11], i587[12], i587[13] )
  return i586
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.FontData' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_Font')
  i588.m_FontSize = i589[2]
  i588.m_FontStyle = i589[3]
  i588.m_BestFit = !!i589[4]
  i588.m_MinSize = i589[5]
  i588.m_MaxSize = i589[6]
  i588.m_Alignment = i589[7]
  i588.m_AlignByGeometry = !!i589[8]
  i588.m_RichText = !!i589[9]
  i588.m_HorizontalOverflow = i589[10]
  i588.m_VerticalOverflow = i589[11]
  i588.m_LineSpacing = i589[12]
  return i588
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'm_Content')
  i590.m_Horizontal = !!i591[2]
  i590.m_Vertical = !!i591[3]
  i590.m_MovementType = i591[4]
  i590.m_Elasticity = i591[5]
  i590.m_Inertia = !!i591[6]
  i590.m_DecelerationRate = i591[7]
  i590.m_ScrollSensitivity = i591[8]
  request.r(i591[9], i591[10], 0, i590, 'm_Viewport')
  request.r(i591[11], i591[12], 0, i590, 'm_HorizontalScrollbar')
  request.r(i591[13], i591[14], 0, i590, 'm_VerticalScrollbar')
  i590.m_HorizontalScrollbarVisibility = i591[15]
  i590.m_VerticalScrollbarVisibility = i591[16]
  i590.m_HorizontalScrollbarSpacing = i591[17]
  i590.m_VerticalScrollbarSpacing = i591[18]
  i590.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i591[19], i590.m_OnValueChanged)
  return i590
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i593 = data
  i592.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i593[0], i592.m_PersistentCalls)
  return i592
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Mask' )
  var i595 = data
  i594.m_ShowMaskGraphic = !!i595[0]
  return i594
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'm_HandleRect')
  i596.m_Direction = i597[2]
  i596.m_Value = i597[3]
  i596.m_Size = i597[4]
  i596.m_NumberOfSteps = i597[5]
  i596.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i597[6], i596.m_OnValueChanged)
  i596.m_Navigation = request.d('UnityEngine.UI.Navigation', i597[7], i596.m_Navigation)
  i596.m_Transition = i597[8]
  i596.m_Colors = request.d('UnityEngine.UI.ColorBlock', i597[9], i596.m_Colors)
  i596.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i597[10], i596.m_SpriteState)
  i596.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i597[11], i596.m_AnimationTriggers)
  i596.m_Interactable = !!i597[12]
  request.r(i597[13], i597[14], 0, i596, 'm_TargetGraphic')
  return i596
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i599 = data
  i598.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i599[0], i598.m_PersistentCalls)
  return i598
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i601 = data
  var i603 = i601[0]
  var i602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i603.length; i += 1) {
    i602.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i603[i + 0]));
  }
  i600.m_Delegates = i602
  return i600
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i607 = data
  i606.eventID = i607[0]
  i606.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i607[1], i606.callback)
  return i606
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i609 = data
  i608.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i609[0], i608.m_PersistentCalls)
  return i608
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'nameLabel')
  request.r(i611[2], i611[3], 0, i610, 'valueLabel')
  i610.colorDefault = new pc.Color(i611[4], i611[5], i611[6], i611[7])
  i610.colorSelected = new pc.Color(i611[8], i611[9], i611[10], i611[11])
  return i610
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'nameLabel')
  request.r(i613[2], i613[3], 0, i612, 'valueToggle')
  request.r(i613[4], i613[5], 0, i612, 'checkmarkImage')
  i612.colorDefault = new pc.Color(i613[6], i613[7], i613[8], i613[9])
  i612.colorSelected = new pc.Color(i613[10], i613[11], i613[12], i613[13])
  return i612
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i615 = data
  i614.toggleTransition = i615[0]
  request.r(i615[1], i615[2], 0, i614, 'graphic')
  i614.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i615[3], i614.onValueChanged)
  request.r(i615[4], i615[5], 0, i614, 'm_Group')
  i614.m_IsOn = !!i615[6]
  i614.m_Navigation = request.d('UnityEngine.UI.Navigation', i615[7], i614.m_Navigation)
  i614.m_Transition = i615[8]
  i614.m_Colors = request.d('UnityEngine.UI.ColorBlock', i615[9], i614.m_Colors)
  i614.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i615[10], i614.m_SpriteState)
  i614.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i615[11], i614.m_AnimationTriggers)
  i614.m_Interactable = !!i615[12]
  request.r(i615[13], i615[14], 0, i614, 'm_TargetGraphic')
  return i614
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i617 = data
  i616.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i617[0], i616.m_PersistentCalls)
  return i616
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'nameLabel')
  request.r(i619[2], i619[3], 0, i618, 'valueLabel')
  i618.colorDefault = new pc.Color(i619[4], i619[5], i619[6], i619[7])
  i618.colorSelected = new pc.Color(i619[8], i619[9], i619[10], i619[11])
  return i618
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'nameLabel')
  request.r(i621[2], i621[3], 0, i620, 'valueLabel')
  i620.colorDefault = new pc.Color(i621[4], i621[5], i621[6], i621[7])
  i620.colorSelected = new pc.Color(i621[8], i621[9], i621[10], i621[11])
  return i620
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'nameLabel')
  request.r(i623[2], i623[3], 0, i622, 'valueLabel')
  i622.colorDefault = new pc.Color(i623[4], i623[5], i623[6], i623[7])
  i622.colorSelected = new pc.Color(i623[8], i623[9], i623[10], i623[11])
  return i622
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'nextButtonText')
  request.r(i625[2], i625[3], 0, i624, 'previousButtonText')
  request.r(i625[4], i625[5], 0, i624, 'nameLabel')
  request.r(i625[6], i625[7], 0, i624, 'valueLabel')
  i624.colorDefault = new pc.Color(i625[8], i625[9], i625[10], i625[11])
  i624.colorSelected = new pc.Color(i625[12], i625[13], i625[14], i625[15])
  return i624
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'nameLabel')
  i626.colorDefault = new pc.Color(i627[2], i627[3], i627[4], i627[5])
  i626.colorSelected = new pc.Color(i627[6], i627[7], i627[8], i627[9])
  return i626
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'nameLabel')
  request.r(i629[2], i629[3], 0, i628, 'valueToggle')
  i628.colorDefault = new pc.Color(i629[4], i629[5], i629[6], i629[7])
  i628.colorSelected = new pc.Color(i629[8], i629[9], i629[10], i629[11])
  return i628
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i631 = data
  i630.toggleTransition = i631[0]
  request.r(i631[1], i631[2], 0, i630, 'graphic')
  i630.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i631[3], i630.onValueChanged)
  request.r(i631[4], i631[5], 0, i630, 'content')
  request.r(i631[6], i631[7], 0, i630, 'arrowOpened')
  request.r(i631[8], i631[9], 0, i630, 'arrowClosed')
  request.r(i631[10], i631[11], 0, i630, 'm_Group')
  i630.m_IsOn = !!i631[12]
  i630.m_Navigation = request.d('UnityEngine.UI.Navigation', i631[13], i630.m_Navigation)
  i630.m_Transition = i631[14]
  i630.m_Colors = request.d('UnityEngine.UI.ColorBlock', i631[15], i630.m_Colors)
  i630.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i631[16], i630.m_SpriteState)
  i630.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i631[17], i630.m_AnimationTriggers)
  i630.m_Interactable = !!i631[18]
  request.r(i631[19], i631[20], 0, i630, 'm_TargetGraphic')
  return i630
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'nameLabel')
  request.r(i633[2], i633[3], 0, i632, 'valueToggle')
  request.r(i633[4], i633[5], 0, i632, 'colorImage')
  request.r(i633[6], i633[7], 0, i632, 'fieldR')
  request.r(i633[8], i633[9], 0, i632, 'fieldG')
  request.r(i633[10], i633[11], 0, i632, 'fieldB')
  request.r(i633[12], i633[13], 0, i632, 'fieldA')
  i632.colorDefault = new pc.Color(i633[14], i633[15], i633[16], i633[17])
  i632.colorSelected = new pc.Color(i633[18], i633[19], i633[20], i633[21])
  return i632
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'nameLabel')
  request.r(i635[2], i635[3], 0, i634, 'valueLabel')
  i634.colorDefault = new pc.Color(i635[4], i635[5], i635[6], i635[7])
  i634.colorSelected = new pc.Color(i635[8], i635[9], i635[10], i635[11])
  return i634
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'nameLabel')
  request.r(i637[2], i637[3], 0, i636, 'valueToggle')
  request.r(i637[4], i637[5], 0, i636, 'fieldX')
  request.r(i637[6], i637[7], 0, i636, 'fieldY')
  i636.colorDefault = new pc.Color(i637[8], i637[9], i637[10], i637[11])
  i636.colorSelected = new pc.Color(i637[12], i637[13], i637[14], i637[15])
  return i636
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'nameLabel')
  request.r(i639[2], i639[3], 0, i638, 'valueToggle')
  request.r(i639[4], i639[5], 0, i638, 'fieldX')
  request.r(i639[6], i639[7], 0, i638, 'fieldY')
  request.r(i639[8], i639[9], 0, i638, 'fieldZ')
  i638.colorDefault = new pc.Color(i639[10], i639[11], i639[12], i639[13])
  i638.colorSelected = new pc.Color(i639[14], i639[15], i639[16], i639[17])
  return i638
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'nameLabel')
  request.r(i641[2], i641[3], 0, i640, 'valueToggle')
  request.r(i641[4], i641[5], 0, i640, 'fieldX')
  request.r(i641[6], i641[7], 0, i640, 'fieldY')
  request.r(i641[8], i641[9], 0, i640, 'fieldZ')
  request.r(i641[10], i641[11], 0, i640, 'fieldW')
  i640.colorDefault = new pc.Color(i641[12], i641[13], i641[14], i641[15])
  i640.colorSelected = new pc.Color(i641[16], i641[17], i641[18], i641[19])
  return i640
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i643 = data
  i642.colorDefault = new pc.Color(i643[0], i643[1], i643[2], i643[3])
  i642.colorSelected = new pc.Color(i643[4], i643[5], i643[6], i643[7])
  return i642
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i645 = data
  i644.m_Spacing = i645[0]
  i644.m_ChildForceExpandWidth = !!i645[1]
  i644.m_ChildForceExpandHeight = !!i645[2]
  i644.m_ChildControlWidth = !!i645[3]
  i644.m_ChildControlHeight = !!i645[4]
  i644.m_ChildScaleWidth = !!i645[5]
  i644.m_ChildScaleHeight = !!i645[6]
  i644.m_ReverseArrangement = !!i645[7]
  i644.m_Padding = UnityEngine.RectOffset.FromPaddings(i645[8], i645[9], i645[10], i645[11])
  i644.m_ChildAlignment = i645[12]
  return i644
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i647 = data
  i646.colorDefault = new pc.Color(i647[0], i647[1], i647[2], i647[3])
  i646.colorSelected = new pc.Color(i647[4], i647[5], i647[6], i647[7])
  return i646
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'nameLabel')
  request.r(i649[2], i649[3], 0, i648, 'header')
  i648.colorDefault = new pc.Color(i649[4], i649[5], i649[6], i649[7])
  i648.colorSelected = new pc.Color(i649[8], i649[9], i649[10], i649[11])
  return i648
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'nameLabel')
  request.r(i651[2], i651[3], 0, i650, 'valueToggle')
  var i653 = i651[4]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 1, i652, '')
  }
  i650.toggles = i652
  i650.colorDefault = new pc.Color(i651[5], i651[6], i651[7], i651[8])
  i650.colorSelected = new pc.Color(i651[9], i651[10], i651[11], i651[12])
  return i650
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'nameLabel')
  request.r(i657[2], i657[3], 0, i656, 'valueToggle')
  request.r(i657[4], i657[5], 0, i656, 'checkmarkImage')
  i656.colorDefault = new pc.Color(i657[6], i657[7], i657[8], i657[9])
  i656.colorSelected = new pc.Color(i657[10], i657[11], i657[12], i657[13])
  return i656
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'nameLabel')
  request.r(i659[2], i659[3], 0, i658, 'valueToggle')
  request.r(i659[4], i659[5], 0, i658, 'checkmarkImage')
  i658.colorDefault = new pc.Color(i659[6], i659[7], i659[8], i659[9])
  i658.colorSelected = new pc.Color(i659[10], i659[11], i659[12], i659[13])
  return i658
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'nextButtonText')
  request.r(i661[2], i661[3], 0, i660, 'previousButtonText')
  request.r(i661[4], i661[5], 0, i660, 'nameLabel')
  request.r(i661[6], i661[7], 0, i660, 'valueLabel')
  i660.colorDefault = new pc.Color(i661[8], i661[9], i661[10], i661[11])
  i660.colorSelected = new pc.Color(i661[12], i661[13], i661[14], i661[15])
  return i660
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'nameLabel')
  request.r(i663[2], i663[3], 0, i662, 'valueToggle')
  i662.colorDefault = new pc.Color(i663[4], i663[5], i663[6], i663[7])
  i662.colorSelected = new pc.Color(i663[8], i663[9], i663[10], i663[11])
  return i662
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'nameLabel')
  i664.colorDefault = new pc.Color(i665[2], i665[3], i665[4], i665[5])
  i664.colorSelected = new pc.Color(i665[6], i665[7], i665[8], i665[9])
  return i664
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'nameLabel')
  request.r(i667[2], i667[3], 0, i666, 'valueLabel')
  request.r(i667[4], i667[5], 0, i666, 'progressBarRect')
  i666.colorDefault = new pc.Color(i667[6], i667[7], i667[8], i667[9])
  i666.colorSelected = new pc.Color(i667[10], i667[11], i667[12], i667[13])
  return i666
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'nameLabel')
  request.r(i669[2], i669[3], 0, i668, 'valueLabel')
  i668.colorDefault = new pc.Color(i669[4], i669[5], i669[6], i669[7])
  i668.colorSelected = new pc.Color(i669[8], i669[9], i669[10], i669[11])
  return i668
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'nameLabel')
  request.r(i671[2], i671[3], 0, i670, 'valueLabel')
  i670.colorDefault = new pc.Color(i671[4], i671[5], i671[6], i671[7])
  i670.colorSelected = new pc.Color(i671[8], i671[9], i671[10], i671[11])
  return i670
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'nextButtonText')
  request.r(i673[2], i673[3], 0, i672, 'previousButtonText')
  request.r(i673[4], i673[5], 0, i672, 'nameLabel')
  request.r(i673[6], i673[7], 0, i672, 'valueLabel')
  i672.colorDefault = new pc.Color(i673[8], i673[9], i673[10], i673[11])
  i672.colorSelected = new pc.Color(i673[12], i673[13], i673[14], i673[15])
  return i672
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'nextButtonText')
  request.r(i675[2], i675[3], 0, i674, 'previousButtonText')
  request.r(i675[4], i675[5], 0, i674, 'nameLabel')
  request.r(i675[6], i675[7], 0, i674, 'valueLabel')
  i674.colorDefault = new pc.Color(i675[8], i675[9], i675[10], i675[11])
  i674.colorSelected = new pc.Color(i675[12], i675[13], i675[14], i675[15])
  return i674
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'panel')
  request.r(i677[2], i677[3], 0, i676, 'valuePrefab')
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i679 = data
  i678.AdditionalLightsPerObjectLimit = i679[0]
  i678.AdditionalLightsRenderingMode = i679[1]
  i678.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i679[2], i678.LightRenderingMode)
  i678.ColorGradingLutSize = i679[3]
  i678.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i679[4], i678.ColorGradingMode)
  i678.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i679[5], i678.MainLightRenderingMode)
  i678.MainLightRenderingModeValue = i679[6]
  i678.SupportsMainLightShadows = !!i679[7]
  i678.MixedLightingSupported = !!i679[8]
  i678.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i679[9], i678.MsaaQuality)
  i678.MSAA = i679[10]
  i678.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i679[11], i678.OpaqueDownsampling)
  i678.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i679[12], i678.MainLightShadowmapResolution)
  i678.MainLightShadowmapResolutionValue = i679[13]
  i678.SupportsSoftShadows = !!i679[14]
  i678.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i679[15], i678.SoftShadowQuality)
  i678.SoftShadowQualityValue = i679[16]
  i678.ShadowDistance = i679[17]
  i678.ShadowCascadeCount = i679[18]
  i678.Cascade2Split = i679[19]
  i678.Cascade3Split = new pc.Vec2( i679[20], i679[21] )
  i678.Cascade4Split = new pc.Vec3( i679[22], i679[23], i679[24] )
  i678.CascadeBorder = i679[25]
  i678.ShadowDepthBias = i679[26]
  i678.ShadowNormalBias = i679[27]
  i678.RenderScale = i679[28]
  i678.RequireDepthTexture = !!i679[29]
  i678.RequireOpaqueTexture = !!i679[30]
  i678.SupportsHDR = !!i679[31]
  i678.SupportsTerrainHoles = !!i679[32]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i681 = data
  i680.Disabled = i681[0]
  i680.PerVertex = i681[1]
  i680.PerPixel = i681[2]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i683 = data
  i682.LowDynamicRange = i683[0]
  i682.HighDynamicRange = i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i685 = data
  i684.Disabled = i685[0]
  i684._2x = i685[1]
  i684._4x = i685[2]
  i684._8x = i685[3]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i687 = data
  i686.None = i687[0]
  i686._2xBilinear = i687[1]
  i686._4xBox = i687[2]
  i686._4xBilinear = i687[3]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i689 = data
  i688._256 = i689[0]
  i688._512 = i689[1]
  i688._1024 = i689[2]
  i688._2048 = i689[3]
  i688._4096 = i689[4]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i691 = data
  i690.UsePipelineSettings = i691[0]
  i690.Low = i691[1]
  i690.Medium = i691[2]
  i690.High = i691[3]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i693 = data
  var i695 = i693[0]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i695.length; i += 1) {
    i694.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i695[i + 0]));
  }
  i692.ShaderCompilationErrors = i694
  i692.name = i693[1]
  i692.guid = i693[2]
  var i697 = i693[3]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( i697[i + 0] );
  }
  i692.shaderDefinedKeywords = i696
  var i699 = i693[4]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i699[i + 0]) );
  }
  i692.passes = i698
  var i701 = i693[5]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i701[i + 0]) );
  }
  i692.usePasses = i700
  var i703 = i693[6]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i703[i + 0]) );
  }
  i692.defaultParameterValues = i702
  request.r(i693[7], i693[8], 0, i692, 'unityFallbackShader')
  i692.readDepth = !!i693[9]
  i692.isCreatedByShaderGraph = !!i693[10]
  i692.compiled = !!i693[11]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i707 = data
  i706.shaderName = i707[0]
  i706.errorMessage = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i712 = root || new pc.UnityShaderPass()
  var i713 = data
  i712.id = i713[0]
  i712.subShaderIndex = i713[1]
  i712.name = i713[2]
  i712.passType = i713[3]
  i712.grabPassTextureName = i713[4]
  i712.usePass = !!i713[5]
  i712.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[6], i712.zTest)
  i712.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[7], i712.zWrite)
  i712.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[8], i712.culling)
  i712.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i713[9], i712.blending)
  i712.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i713[10], i712.alphaBlending)
  i712.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[11], i712.colorWriteMask)
  i712.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[12], i712.offsetUnits)
  i712.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[13], i712.offsetFactor)
  i712.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[14], i712.stencilRef)
  i712.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[15], i712.stencilReadMask)
  i712.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[16], i712.stencilWriteMask)
  i712.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[17], i712.stencilOp)
  i712.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[18], i712.stencilOpFront)
  i712.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[19], i712.stencilOpBack)
  var i715 = i713[20]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i715[i + 0]) );
  }
  i712.tags = i714
  var i717 = i713[21]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i712.passDefinedKeywords = i716
  var i719 = i713[22]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i719[i + 0]) );
  }
  i712.passDefinedKeywordGroups = i718
  var i721 = i713[23]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i721[i + 0]) );
  }
  i712.variants = i720
  var i723 = i713[24]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i723[i + 0]) );
  }
  i712.excludedVariants = i722
  i712.hasDepthReader = !!i713[25]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i725 = data
  i724.val = i725[0]
  i724.name = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i727 = data
  i726.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[0], i726.src)
  i726.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[1], i726.dst)
  i726.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[2], i726.op)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i729 = data
  i728.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[0], i728.pass)
  i728.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[1], i728.fail)
  i728.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[2], i728.zFail)
  i728.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[3], i728.comp)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i733 = data
  i732.name = i733[0]
  i732.value = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.keywords = i738
  i736.hasDiscard = !!i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i743 = data
  i742.passId = i743[0]
  i742.subShaderIndex = i743[1]
  var i745 = i743[2]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i742.keywords = i744
  i742.vertexProgram = i743[3]
  i742.fragmentProgram = i743[4]
  i742.exportedForWebGl2 = !!i743[5]
  i742.readDepth = !!i743[6]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'shader')
  i748.pass = i749[2]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i753 = data
  i752.name = i753[0]
  i752.type = i753[1]
  i752.value = new pc.Vec4( i753[2], i753[3], i753[4], i753[5] )
  i752.textureValue = i753[6]
  i752.shaderPropertyFlag = i753[7]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i755 = data
  i754.name = i755[0]
  request.r(i755[1], i755[2], 0, i754, 'texture')
  i754.aabb = i755[3]
  i754.vertices = i755[4]
  i754.triangles = i755[5]
  i754.textureRect = UnityEngine.Rect.MinMaxRect(i755[6], i755[7], i755[8], i755[9])
  i754.packedRect = UnityEngine.Rect.MinMaxRect(i755[10], i755[11], i755[12], i755[13])
  i754.border = new pc.Vec4( i755[14], i755[15], i755[16], i755[17] )
  i754.transparency = i755[18]
  i754.bounds = i755[19]
  i754.pixelsPerUnit = i755[20]
  i754.textureWidth = i755[21]
  i754.textureHeight = i755[22]
  i754.nativeSize = new pc.Vec2( i755[23], i755[24] )
  i754.pivot = new pc.Vec2( i755[25], i755[26] )
  i754.textureRectOffset = new pc.Vec2( i755[27], i755[28] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i757 = data
  i756.name = i757[0]
  i756.ascent = i757[1]
  i756.originalLineHeight = i757[2]
  i756.fontSize = i757[3]
  var i759 = i757[4]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i759[i + 0]) );
  }
  i756.characterInfo = i758
  request.r(i757[5], i757[6], 0, i756, 'texture')
  i756.originalFontSize = i757[7]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i763 = data
  i762.index = i763[0]
  i762.advance = i763[1]
  i762.bearing = i763[2]
  i762.glyphWidth = i763[3]
  i762.glyphHeight = i763[4]
  i762.minX = i763[5]
  i762.maxX = i763[6]
  i762.minY = i763[7]
  i762.maxY = i763[8]
  i762.uvBottomLeftX = i763[9]
  i762.uvBottomLeftY = i763[10]
  i762.uvBottomRightX = i763[11]
  i762.uvBottomRightY = i763[12]
  i762.uvTopLeftX = i763[13]
  i762.uvTopLeftY = i763[14]
  i762.uvTopRightX = i763[15]
  i762.uvTopRightY = i763[16]
  return i762
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i765 = data
  var i767 = i765[0]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i764.components = i766
  return i764
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i771 = data
  i770.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i771[0], i770.mode)
  i770.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i771[1], i770.neutralHDRRangeReductionMode)
  i770.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i771[2], i770.acesPreset)
  i770.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i771[3], i770.hueShiftAmount)
  i770.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i771[4], i770.detectPaperWhite)
  i770.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i771[5], i770.paperWhite)
  i770.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i771[6], i770.detectBrightnessLimits)
  i770.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i771[7], i770.minNits)
  i770.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i771[8], i770.maxNits)
  i770.active = !!i771[9]
  return i770
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i773 = data
  i772.m_Value = i773[0]
  i772.m_OverrideState = !!i773[1]
  return i772
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i775 = data
  i774.m_Value = i775[0]
  i774.m_OverrideState = !!i775[1]
  return i774
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i777 = data
  i776.m_Value = i777[0]
  i776.m_OverrideState = !!i777[1]
  return i776
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i779 = data
  i778.m_Value = i779[0]
  i778.m_OverrideState = !!i779[1]
  return i778
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i781 = data
  i780.m_Value = !!i781[0]
  i780.m_OverrideState = !!i781[1]
  return i780
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i783 = data
  i782.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i783[0], i782.skipIterations)
  i782.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i783[1], i782.threshold)
  i782.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i783[2], i782.intensity)
  i782.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i783[3], i782.scatter)
  i782.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i783[4], i782.clamp)
  i782.tint = request.d('UnityEngine.Rendering.ColorParameter', i783[5], i782.tint)
  i782.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i783[6], i782.highQualityFiltering)
  i782.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i783[7], i782.downscale)
  i782.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i783[8], i782.maxIterations)
  i782.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i783[9], i782.dirtTexture)
  i782.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i783[10], i782.dirtIntensity)
  i782.active = !!i783[11]
  return i782
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i785 = data
  i784.m_Value = i785[0]
  i784.m_OverrideState = !!i785[1]
  return i784
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i787 = data
  i786.m_Value = i787[0]
  i786.m_OverrideState = !!i787[1]
  return i786
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i789 = data
  i788.m_Value = new pc.Color(i789[0], i789[1], i789[2], i789[3])
  i788.m_OverrideState = !!i789[4]
  return i788
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i791 = data
  i790.m_Value = i791[0]
  i790.m_OverrideState = !!i791[1]
  return i790
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i793 = data
  i792.dimension = i793[0]
  request.r(i793[1], i793[2], 0, i792, 'm_Value')
  i792.m_OverrideState = !!i793[3]
  return i792
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i795 = data
  i794.color = request.d('UnityEngine.Rendering.ColorParameter', i795[0], i794.color)
  i794.center = request.d('UnityEngine.Rendering.Vector2Parameter', i795[1], i794.center)
  i794.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i795[2], i794.intensity)
  i794.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i795[3], i794.smoothness)
  i794.rounded = request.d('UnityEngine.Rendering.BoolParameter', i795[4], i794.rounded)
  i794.active = !!i795[5]
  return i794
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i797 = data
  i796.m_Value = new pc.Vec2( i797[0], i797[1] )
  i796.m_OverrideState = !!i797[2]
  return i796
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i799 = data
  i798.useSafeMode = !!i799[0]
  i798.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i799[1], i798.safeModeOptions)
  i798.timeScale = i799[2]
  i798.unscaledTimeScale = i799[3]
  i798.useSmoothDeltaTime = !!i799[4]
  i798.maxSmoothUnscaledTime = i799[5]
  i798.rewindCallbackMode = i799[6]
  i798.showUnityEditorReport = !!i799[7]
  i798.logBehaviour = i799[8]
  i798.drawGizmos = !!i799[9]
  i798.defaultRecyclable = !!i799[10]
  i798.defaultAutoPlay = i799[11]
  i798.defaultUpdateType = i799[12]
  i798.defaultTimeScaleIndependent = !!i799[13]
  i798.defaultEaseType = i799[14]
  i798.defaultEaseOvershootOrAmplitude = i799[15]
  i798.defaultEasePeriod = i799[16]
  i798.defaultAutoKill = !!i799[17]
  i798.defaultLoopType = i799[18]
  i798.debugMode = !!i799[19]
  i798.debugStoreTargetId = !!i799[20]
  i798.showPreviewPanel = !!i799[21]
  i798.storeSettingsLocation = i799[22]
  i798.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i799[23], i798.modules)
  i798.createASMDEF = !!i799[24]
  i798.showPlayingTweens = !!i799[25]
  i798.showPausedTweens = !!i799[26]
  return i798
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i800 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i801 = data
  i800.logBehaviour = i801[0]
  i800.nestedTweenFailureBehaviour = i801[1]
  return i800
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i802 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i803 = data
  i802.showPanel = !!i803[0]
  i802.audioEnabled = !!i803[1]
  i802.physicsEnabled = !!i803[2]
  i802.physics2DEnabled = !!i803[3]
  i802.spriteEnabled = !!i803[4]
  i802.uiEnabled = !!i803[5]
  i802.textMeshProEnabled = !!i803[6]
  i802.tk2DEnabled = !!i803[7]
  i802.deAudioEnabled = !!i803[8]
  i802.deUnityExtendedEnabled = !!i803[9]
  i802.epoOutlineEnabled = !!i803[10]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i807[i + 0]) );
  }
  i804.files = i806
  i804.componentToPrefabIds = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i811 = data
  i810.path = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'unityObject')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i813 = data
  var i815 = i813[0]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i815[i + 0]) );
  }
  i812.scriptsExecutionOrder = i814
  var i817 = i813[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i817[i + 0]) );
  }
  i812.sortingLayers = i816
  var i819 = i813[2]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i819[i + 0]) );
  }
  i812.cullingLayers = i818
  i812.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i813[3], i812.timeSettings)
  i812.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i813[4], i812.physicsSettings)
  i812.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i813[5], i812.physics2DSettings)
  i812.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i813[6], i812.qualitySettings)
  i812.enableRealtimeShadows = !!i813[7]
  i812.enableAutoInstancing = !!i813[8]
  i812.enableDynamicBatching = !!i813[9]
  i812.lightmapEncodingQuality = i813[10]
  i812.desiredColorSpace = i813[11]
  var i821 = i813[12]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i812.allTags = i820
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i825 = data
  i824.name = i825[0]
  i824.value = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i829 = data
  i828.id = i829[0]
  i828.name = i829[1]
  i828.value = i829[2]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i833 = data
  i832.id = i833[0]
  i832.name = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i835 = data
  i834.fixedDeltaTime = i835[0]
  i834.maximumDeltaTime = i835[1]
  i834.timeScale = i835[2]
  i834.maximumParticleTimestep = i835[3]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i837 = data
  i836.gravity = new pc.Vec3( i837[0], i837[1], i837[2] )
  i836.defaultSolverIterations = i837[3]
  i836.bounceThreshold = i837[4]
  i836.autoSyncTransforms = !!i837[5]
  i836.autoSimulation = !!i837[6]
  var i839 = i837[7]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i839[i + 0]) );
  }
  i836.collisionMatrix = i838
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i843 = data
  i842.enabled = !!i843[0]
  i842.layerId = i843[1]
  i842.otherLayerId = i843[2]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'material')
  i844.gravity = new pc.Vec2( i845[2], i845[3] )
  i844.positionIterations = i845[4]
  i844.velocityIterations = i845[5]
  i844.velocityThreshold = i845[6]
  i844.maxLinearCorrection = i845[7]
  i844.maxAngularCorrection = i845[8]
  i844.maxTranslationSpeed = i845[9]
  i844.maxRotationSpeed = i845[10]
  i844.baumgarteScale = i845[11]
  i844.baumgarteTOIScale = i845[12]
  i844.timeToSleep = i845[13]
  i844.linearSleepTolerance = i845[14]
  i844.angularSleepTolerance = i845[15]
  i844.defaultContactOffset = i845[16]
  i844.autoSimulation = !!i845[17]
  i844.queriesHitTriggers = !!i845[18]
  i844.queriesStartInColliders = !!i845[19]
  i844.callbacksOnDisable = !!i845[20]
  i844.reuseCollisionCallbacks = !!i845[21]
  i844.autoSyncTransforms = !!i845[22]
  var i847 = i845[23]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i847[i + 0]) );
  }
  i844.collisionMatrix = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i851 = data
  i850.enabled = !!i851[0]
  i850.layerId = i851[1]
  i850.otherLayerId = i851[2]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i853 = data
  var i855 = i853[0]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i855[i + 0]) );
  }
  i852.qualityLevels = i854
  var i857 = i853[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i852.names = i856
  i852.shadows = i853[2]
  i852.anisotropicFiltering = i853[3]
  i852.antiAliasing = i853[4]
  i852.lodBias = i853[5]
  i852.shadowCascades = i853[6]
  i852.shadowDistance = i853[7]
  i852.shadowmaskMode = i853[8]
  i852.shadowProjection = i853[9]
  i852.shadowResolution = i853[10]
  i852.softParticles = !!i853[11]
  i852.softVegetation = !!i853[12]
  i852.activeColorSpace = i853[13]
  i852.desiredColorSpace = i853[14]
  i852.masterTextureLimit = i853[15]
  i852.maxQueuedFrames = i853[16]
  i852.particleRaycastBudget = i853[17]
  i852.pixelLightCount = i853[18]
  i852.realtimeReflectionProbes = !!i853[19]
  i852.shadowCascade2Split = i853[20]
  i852.shadowCascade4Split = new pc.Vec3( i853[21], i853[22], i853[23] )
  i852.streamingMipmapsActive = !!i853[24]
  i852.vSyncCount = i853[25]
  i852.asyncUploadBufferSize = i853[26]
  i852.asyncUploadTimeSlice = i853[27]
  i852.billboardsFaceCameraPosition = !!i853[28]
  i852.shadowNearPlaneOffset = i853[29]
  i852.streamingMipmapsMemoryBudget = i853[30]
  i852.maximumLODLevel = i853[31]
  i852.streamingMipmapsAddAllCameras = !!i853[32]
  i852.streamingMipmapsMaxLevelReduction = i853[33]
  i852.streamingMipmapsRenderersPerFrame = i853[34]
  i852.resolutionScalingFixedDPIFactor = i853[35]
  i852.streamingMipmapsMaxFileIORequests = i853[36]
  i852.currentQualityLevel = i853[37]
  return i852
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[80],"81":[2],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[91],"98":[91],"99":[91],"100":[91],"101":[91],"102":[91],"103":[91],"104":[2],"105":[106],"107":[108],"109":[108],"16":[15],"110":[20,111,15],"44":[15],"112":[2],"5":[2],"7":[6],"113":[114],"115":[15],"116":[15],"18":[16],"21":[20,15],"117":[15],"17":[16],"24":[15],"118":[15],"52":[15],"119":[15],"29":[15],"120":[15],"23":[15],"33":[15],"121":[15],"122":[20,15],"123":[15],"32":[15],"28":[15],"124":[15],"27":[20,15],"37":[15],"125":[11],"126":[11],"12":[11],"127":[11],"128":[2],"129":[2],"130":[114],"131":[15],"132":[106,15],"133":[15,20],"134":[15],"135":[20,15],"136":[106],"137":[20,15],"138":[15],"139":[114]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.GameObject","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Texture2D","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 07:34:56";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1810";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3697";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, reflection";

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

Deserializers.buildID = "4db20cbc-804f-4625-bd3c-874cba028616";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

