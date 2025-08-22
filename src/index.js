import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// 配置redux
import reduxStore from './store/reduxStore/index.js'
import { Provider as ReduxProvider } from 'react-redux'
// 配置mobx
import { Provider as MobxProvider } from 'mobx-react'
import * as mobxStore from './store/mobxStore/index.js'
// 配置路由
import { RouterProvider } from 'react-router-dom'
import router from './router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
    <ReduxProvider store={reduxStore}>
      <MobxProvider {...mobxStore}>
        <RouterProvider router={router} />
      </MobxProvider>
    </ReduxProvider>
  </Suspense>
);

function Loading() {
  return <h2>🌀 Loading...</h2>
}

// 配置StrictMode严格模式下，组件可能会渲染两次，只有开发环境生效，生产环境不生效（目前没有配置StrictMode）

// 屏蔽控制台react-router-dom的warning报错
const console_warn = console.warn
console.warn = function (...args) {
  const message = args.join(' ')
  if (typeof message === 'string' && message.includes('React Router Future Flag Warning')) {
    return
  }
  console_warn.apply(console, args)
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
