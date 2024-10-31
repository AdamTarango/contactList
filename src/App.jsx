import { useState } from 'react'
import './App.css'
import ContactList from './contactlist'
import SelectedContact from './components/SelectedContact'

function App () {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <>
      {selectedContactId ?(
        <><p>{selectedContactId}</p>
        <SelectedContact selectedContactId={selectedContactId} /></>
        ):(
        <ContactList setSelectedContactId={setSelectedContactId} />
        )}
    </>
  )
}

export default App
