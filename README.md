# Bynce: AI Pose Picker for BynceDance

<img width="300px" alt="demo_pose" src="./logo.jpg" />

Bynce is a **Web-based tool** that poses MMD models from video input in real-time. Welcome feature requests and PRs!


## Tech Stack

- 3D key points detection: [Mediapipe](https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker/web_js)
- 3D scene: [Babylon.js](https://www.babylonjs.com/)
- MMD model viewer: [babylon-mmd](https://github.com/noname0310/babylon-mmd)
- Web framework: [Vite+React](https://vitejs.dev/)
- Models are from [aplaybox](https://aplaybox.com/en/mmd-models/).

## Features

- [x] Pose detection
- [x] Face detection
- [x] Hand detection (experimental)
- [x] Rust-WASM based pose-to-quaternion solver
- [x] 360-degree background selection
- [x] Video, image upload
- [x] Webcam input
- [x] Model selection
- [x] Ollama support ([electron version](https://github.com/AmyangXYZ/MiKaPo-Electron))
- [x] VMD import/export (to export a valid VMD file, you must record at least one motion)
- [x] MMD editor: bone, material, mesh edit

## Hint

- Let your browser use dedicated GPU for better performance.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
