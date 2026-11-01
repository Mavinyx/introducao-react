import { useState } from "react"
import { InputAdd } from "./components/InputAdd";

export function App() {
  const [list, setList] = useState([
    {id:'1', label:'fazer café', complete: false},
    {id:'2', label:'fazer almoço'},
    {id:'3', label:'fazer janta'},
  ]);
    return (
      <>
      <InputAdd 
      onAdd={(value)=>
        setList([
          ...list,{id: (list.length+1).toString(),complete:false,label:value}
        ])
      }
      />
      
      <ol>
        {list.map((listItem) =>
          <li key={listItem.id}>
              {listItem.label}
              {listItem.complete ? 'concluido' : ''}
              <button onClick={() => setList(list.map(item => ({...item, complete: item.id === listItem.id ? true : item.complete})))}> V</button>          
              <button onClick={() => setList(list.filter(item => item.id !== listItem.id))}> X</button>          
              </li>
        )}        
      </ol>
      </>
    )
}
