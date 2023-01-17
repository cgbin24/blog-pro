import React, { FC } from 'react'
import { RouterProvider } from 'react-router'
import { routesBrowser } from './router'
import '@/style/index.scss'

const App: FC = () => (
  <React.Suspense>
    <RouterProvider router={routesBrowser} />
  </React.Suspense>
)

export default App