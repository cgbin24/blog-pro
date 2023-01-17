import React, { Children, FC, lazy } from "react";
import { createBrowserRouter, Navigate, useRoutes } from 'react-router-dom'

// 组件懒加载
const Layout = lazy(() => import('../layout'))
const Home = lazy(() => import('../pages/home'))

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Navigate to='/home' replace />,
        title: 'home',
        hidden: true,
      },
      {
        path: '/home',
        element: <Home />,
        title: 'home',
      },
    ]
  }
]

const Routes: FC = () => {
  return useRoutes(routes)
}

const routesBrowser = createBrowserRouter(routes)

export {
  Routes,
  routes,
  routesBrowser
}
