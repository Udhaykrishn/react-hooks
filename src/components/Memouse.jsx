import { useMemo } from "react"

const Memouse = ({numbers}) => {
    console.log("memo is working in componenet ")
    const sum = useMemo(()=>{
        console.log(`Calculating sum...`);
        return numbers.reduce((total,num)=>total + num,0)
    },[numbers])
  return (
    <div>
      Sum:{sum}
    </div>
  )
}

export default Memouse
