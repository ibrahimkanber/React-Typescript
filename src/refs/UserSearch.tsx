import {useState,useRef,useEffect} from "react";


const users=[
    {name:"Sarah",age:20},
    {name:"Alex",age:20},
    {name:"Michael",age:20},
];


const UserSearch:React.FC=()=>{

    const inputRef=useRef<HTMLInputElement|null>(null);

    const [name,setName]=useState("")
    const [user,setUser]=useState<{name:string,age:number}|undefined>()

    const onClick=()=>{
        const foundUser=users.find((user)=>{
           return user.name===name
        })

        setUser(foundUser)
    }

    useEffect(()=>{
        inputRef.current?.focus()
    },[])
    
    return <div>
        UserSearch
        <input value={name} onChange={e=>setName(e.target.value)} ref={inputRef}/>
        <button onClick={onClick}>Find User</button>
        <div>
            {user?.name}
            {user?.age}
            {user && user.name}
        </div>
        </div>
}

export default UserSearch