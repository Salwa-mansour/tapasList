import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ItemsList from './components/itemsList'
import ItemsForm from './components/itemsForm'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)
//  const list = [{id:crypto.randomUUID(),text:'fsdfsfs',done:true},{id:crypto.randomUUID(),text:'cocoa',done:false}]
  const [list,setList] = useState([])
 function handleSubmit(e){
    e.preventDefault();
  const newList = list.concat({id:crypto.randomUUID(),text:e.target.text.value,done:false});
   setList(newList);
  }

  function toggleDone(id){
    const newList = list.map((listItem)=>{
      if(listItem.id===id){
        listItem.done = !listItem.done
      }
      return listItem;
    });
   
    setList(newList);
  }
  return (
    <>
    <ItemsList list={list} toggleDone={toggleDone} />
   <ItemsForm handleSubmit={handleSubmit} />
    </>
  )
}

export default App
