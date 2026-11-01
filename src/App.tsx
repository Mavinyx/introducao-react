import { useState } from "react"
import { InputAdd } from "./components/InputAdd";
import { ToDoItem } from "./components/ToDoItem";
import { List } from "./components/List";

export function App() {
  const [list, setList] = useState([
    {id:'1', label:'fazer café', complete: false},
    {id:'2', label:'fazer almoço', complete: false},
    {id:'3', label:'fazer janta', complete: false},
  ]);

  const handleAdd = (value:string) =>{
        setList([
          ...list,{id: (list.length+1).toString(),complete:false,label:value}
        ]);
  }
  const handleRemove=(id:string)=>{
    setList(list.filter(item => item.id !== id))
  }
  const handleComplete=(id:string)=>{
    setList(list.map(item => ({...item, complete: item.id === id ? true : item.complete})))
  }
    return (
      <>
      <InputAdd 
      onAdd={handleAdd}
      />
      
      <List>
        {list.map((listItem) => (
          <ToDoItem
            key={listItem.id}
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}
            onComplete={() => handleComplete(listItem.id)}
            onRemove={() => handleRemove(listItem.id)}
          />
          ))}        
      </List>
      </>
    )
}
