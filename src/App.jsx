import React from 'react'
import AppLayout from './AppLayout'
import {Toaster} from "react-hot-toast"
import LogIn from './components/LogIn'
import { useSelector } from 'react-redux'

function App() {
  const username = useSelector(state => state.user.username);
  return (
    <div>
      <Toaster position='bottom-center' gutter={12} containerStyle={{margin:"8px"}} toastOptions={{
      success: {
        duration: 1500,
      },
      error: {
        duration: 1500
      },
      style:{
        fontSize: "16px",
        width: "300px",
        padding: "16px 24px",
        backgroundColor: "hsl(0, 0%, 85%)",
        color: "hsl(0, 0%, 20%)",
        zIndex:"100000"
      }
    }}
      
      />
      
      {username === "" ? <LogIn /> : <AppLayout />}
    </div>
  )
}

export default App
