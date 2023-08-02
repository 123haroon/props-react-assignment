import React from 'react'
import './Listitem.css'
export default function Listitem(props) {
  return (
    <div>
<div className="card" style={{width:"18rem"}}>
<ul className="list-group">
{props.list.map((item=>
  {
    return(
      <li className="list-group-item itemstyle" style={props.style}>{item}</li>
    )
  }
  ))}
  
</ul>
</div>
    </div>
  )
}
