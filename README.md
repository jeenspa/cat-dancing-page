# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Deploy Test - 260414
최초 deploy 후 웹 접속 시 아무 화면도 나오지 않음.
수종 지시하고 완료 후 다시 접속 했으나 그래도 안 나옴.
한 번 더 수정 후 정상 작동

claude report :

● 정상 작동 확인됩니다!

  원인은 두 가지가 복합적으로 작용했습니다:

  1. crossorigin 속성 — Vite 빌드 시 자동 추가되는 속성인데, GitHub Pages 환경에서 CSS 로딩을 막는 경우가 있었습니다.
  2. <script> 위치 — <head>에 있던 스크립트를 <body> 끝으로 이동해 DOM이 완전히 로드된 후 React가 실행되도록 했습니다.

  앞으로 Vite 프로젝트를 GitHub Pages에 배포할 때는 vite.config.js에 base 설정을 추가하고, 빌드된 index.html에서 crossorigin 속성을
  제거하는 것이 안전합니다.

  배포 URL: https://jeenspa.github.io/cat-dancing-page/
  
