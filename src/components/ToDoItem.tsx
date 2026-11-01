
interface IToDoItemProps{
    id: string;
    label: string;
    complete: boolean;
    
    onRemove(): void;
    onComplete(): void;
}
export const ToDoItem = ({id , label, complete, onRemove, onComplete}: IToDoItemProps) =>{
    
    return(
         <li key={id}>
              {label}
              {complete ? 'concluido' : ''}
              <button onClick={onComplete}> V</button>          
              <button onClick={onRemove}> X</button>          
              </li>
    )
}