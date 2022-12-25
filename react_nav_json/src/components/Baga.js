import React, { useEffect, useState } from 'react'
import axios  from 'axios'
const Baga = () => {
    const [students, setstudents] = useState([])
    const SERVER ='http://localhost:3005/students/'
    const [refreshFlaga, setrefreshFlaga] = useState(false)
    const [name, setname] = useState("")
    const [num, setnum] = useState(2)
    const [age, setage] = useState(18)
    const [img, setimg] = useState("p1.jpg")
    // read
    const loadData=async ()=>{
        let temp= await axios.get(SERVER)
        setstudents(temp.data)
    }
    useEffect(() => {
        loadData()
    }, [refreshFlaga])
    // add
    const addStudent=()=>{
        axios.post(SERVER, { name, "number":num, age,img})
          setrefreshFlaga(!refreshFlaga)
    }
    //upd
    const updStudent=(id)=>{
        axios.put(SERVER+id, { name, "number":num, age,img})
          setrefreshFlaga(!refreshFlaga)
    }
    //delete
    const delStudent=(id)=>{
        axios.delete(SERVER +id)
        setrefreshFlaga(!refreshFlaga)
    }
    return (
        <div>
            name<input onChange={(e)=>setname(e.target.value)}/>
            number  <input onChange={(e)=>setnum(e.target.value)}/>
            age  <input onChange={(e)=>setage(e.target.value)}/>
            img  <input onChange={(e)=>setimg(e.target.value)}/>
            <button onClick={()=>addStudent()} className='btn btn-info'>add</button>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {students.map(stu => <div className="col">
                    <div className="card">
                        <img src={`/media/${stu.img}`} className="card-img-top" alt="..." style={{ maxHeight: "150px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{stu.name}</h5>
                            <p className="card-text">{stu.number}, {stu.age}</p>
                            <button className='btn btn-success'>Buy</button>
                            <button className='btn btn-danger' onClick={()=>delStudent(stu.id)}>Delete</button>
                            <button onClick={()=>updStudent(stu.id)} className='btn btn-warning'>Update</button>
                        </div>
                    </div>
                </div>)}
            </div> </div>
    )
}
export default Baga
