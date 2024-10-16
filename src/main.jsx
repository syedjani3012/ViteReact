import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//function can also be declared here and can be called inside render
function Fun(){
  return(
    <h1>So funny</h1>
  )
}

//creating a tag, it will get converted into tree by react.render
const test1=(
  <a href='https://google.com' target='blank'>click here to navigate to google</a>
)

//creating react element 
const reactelement=React.createElement(
  'a',{
    href:'https://google.com',
    target: 'blank'
  }, "using react created element"
)

createRoot(document.getElementById('root')).render(
    <App/>
)

