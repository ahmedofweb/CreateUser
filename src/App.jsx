import './App.css'
import Navbar from './components/Navbar'
import Modal from './pages/Modal'
import Card from './pages/Card'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [mode , setMode] = useState(false)
  const [showModal , setShowModal] = useState(false)

  //  Local Storage ga saqlangan events 
  const [events , setEvents] = useState(() => {
    return localStorage.getItem('eventList') ? JSON.parse(localStorage.getItem('eventList')) : []
  })
  useEffect(() => {
    localStorage.setItem('eventList' , JSON.stringify(events))
  }, [events])


  

  return (
    <div className={`App ${mode ? "mode" : ""}`}>
      <Navbar events={events}/>
      {/* <p className='mode' onClick={() => {console.log(mode
        )}}>Light</p> */}
      <button className='create' onClick={() => {setShowModal(true)}}>
        Create User
        </button>
      { showModal && <Modal setShowModal={setShowModal} setEvents={setEvents}/>}
      { events && <Card events={events} setEvents={setEvents}/>}
    </div>
  )
}

export default App
