import { useState } from "react";

const Content = () => {
    const [name,setName]=useState("somanth");
    const [count,setCount]=useState(1);

    const handleNameChange=()=>{
        const names=["somnath",'vishal','tejas','sahil'];
        const idx=Math.floor(Math.random()*4);
        setCount(count+1);
        setName(`${names[idx]} Navale`);
    }

    const handleClick=(e)=>{
        console.log("click me ");
        console.log("from event param ", e.target.innerText);
    }
    const handleClick2=()=>{
        console.log("click me ");
    }
    return (
        <main className="content" onDoubleClick={handleClick2}>
            <p>
                Hello {name}!
            </p>
            <p style={{margin:"5px 0px"}}>Name has been updated {count} {count!=1 ? "times":"time"}</p>
            <button onClick={handleNameChange} style={{margin:"5px"}}>Change Name</button>
            <button onClick={(e)=>handleClick(e)}> click me</button>
        </main>
    )
}
export default Content;