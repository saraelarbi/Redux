import React,{useState } from 'react'
import {useDispatch} from "react-redux"
import { addTask } from "../Redux/action/action"
import { Button, Modal } from "react-bootstrap"


const AddTask = () => {
    const [Text, setText] = useState("")
    const dispatch = useDispatch()
    const add = () =>{
        dispatch(addTask({id:Math.random(), task:Text, isDone: false}));
        setText("");
    }
    return (
        <div className="add">
        <input type="text" onChange={(e) => setText(e.target.value)} value={Text} />
      
        <button type="button" class="btn btn-outline-danger btn-space" onClick={add}>Add</button>
        </div>
    )
}

export default AddTask