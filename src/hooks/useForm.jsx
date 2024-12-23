import { useState } from "react"
const useForm = (init) => {
    const [value,setValue] = useState(init)
 return [value,(event)=>{
    setValue({
        ...value,
        [event.target.name]:event.target.value
    })
 }]
}

export default useForm
