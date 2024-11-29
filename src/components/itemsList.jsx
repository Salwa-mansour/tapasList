function ItemsList({list,toggleDone}){
    return(
    <ul>{
        list.map((item)=>{
          return  <li key={item.id} >{item.text}
          <input type="checkbox" key={item.id} checked={item.done} name="done" onChange={()=>toggleDone(item.id)} /></li>;
        }) 
    }</ul>
    )
}


export default ItemsList