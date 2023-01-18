import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

const renderInBrowser = () => {
  const rootEl = document.getElementById('root') as HTMLElement
  if (!rootEl) {
    throw new Error('#root element is not found')
  }
  const root = ReactDom.createRoot(rootEl)
  root.render(<App />)
}
renderInBrowser()
