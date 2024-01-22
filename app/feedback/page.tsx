'use client'

import { useState, FormEvent, ChangeEvent } from "react"
import axios from "axios"


const inititalState = {
    name : "",
    email : "",
    message : ""
}

const FeedBackForm = () => {
    const [data, setData] = useState(inititalState)
    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        setData({...data, [event.target.name] : event.target.value})
    }
    const submitFormHandler = async (event : FormEvent) => {
        event.preventDefault()
        const res = await axios.post('/api/feedback', data)
        const msg = res.data.msg
        console.log(msg)
    }
    return(
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={data.name} onChange={onChangeHandler} />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={data.email} onChange={onChangeHandler} />
                <label htmlFor="message">Message</label>
                <input type="text" name="message" value={data.message} onChange={onChangeHandler} />
                <button onClick={submitFormHandler}>Submit</button>
            </form>
        </div>
    )
}

export default FeedBackForm