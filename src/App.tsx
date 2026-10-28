import { useState } from "react"

export function App() {
  const [list, setList] = useState([
    {id:'1', label:'fazer café'},
    {id:'2', label:'fazer almoço'},
    {id:'3', label:'fazer janta'},
  ]);
    return (
      <>
      <input />
      <button>+</button>
      <ol>
        {list.map((listItem) =>
          <li key={listItem.id}>{listItem.label}</li>
        )}        
      </ol>
      </>
    )
}
