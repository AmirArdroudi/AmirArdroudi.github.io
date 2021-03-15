---
date: '2020-09-00'
title: 'A Dialog System in Unity'
github: 'https://github.com/AmirArdroudi/Dialog-System'
external: ''
tech:
  - Unity
  - C#
  - Scriptable-Objects
  - modular

company: ''
showInProjects: true
---

<img src="/images/dialogSystem.png" width="265" height="160"></img>

---
I've implemented a Dialog System, which has two types of dialog, simple one (text only) and complex one (text and other content such as video, image, animation, ...). All the dialog data are separated from the logic and stored in Dialog [ScriptableObjects](https://docs.unity3d.com/Manual/class-ScriptableObject.html).
I've created this system upon a [my custom event handler](https://github.com/AmirArdroudi/unity-custom-eventhandler'), modular system for [handling events](https://github.com/AmirArdroudi/unity-custom-eventhandler') designed based on scriptable-object and UnityEvent in Unity. Developer/Designer could hook things up in the editor, which comes in handy in gameplay development and will help to isolate prefabs. The idea of this project was inspired by [Game Architecture with Scriptable Objects conference](https://www.youtube.com/watch?v=raQ3iHhE_Kk)
