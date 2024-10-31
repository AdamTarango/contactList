import { useEffect } from "react";
import { useState } from "react";
const SelectedContact = ({ selectedContactId }) => {
  const [contact, setcontact] = useState(null)
  useEffect(() =>
    async() => {
      console.log(selectedContactId)
      const content = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
      // const contentJSON = await content.json()
      // setContact(contentJSON)  }
      console.log(content)}
  , [])
  return <></>
}
export default SelectedContact