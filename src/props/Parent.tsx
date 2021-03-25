import {Child,ChildAsFC} from "./Child"

const Parent=()=>{

return <ChildAsFC color="red" onClick={()=>console.log("onclick")}>
    deneme
</ChildAsFC>
}

export default Parent