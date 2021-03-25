import { Component } from "react";


const users=[
    {name:"Sarah",age:20},
    {name:"Alex",age:20},
    {name:"Michael",age:20},
];


interface User {
    name: string;
    age: number
}


interface UserSearchProps {
    users: {
        name: string;
        age: number
    }[]
}

interface UserSearchState {
    name: string;
    user: User | undefined
}

class UserSearch extends Component<UserSearchProps>{

    state: UserSearchState = {
        name: "",
        user: undefined
    }

    onClick=()=>{
        const foundUser=users.find((user)=>{
            return user.name===this.state.name
         })
 
         this.setState({user:foundUser})
    }
    render() {
        const {user,name}=this.state

        return (<div>
            UserSearch
            <input value={name} onChange={e => this.setState({name:e.target.value})} />
            <button onClick={this.onClick}>Find User</button>
            <div>
                {user?.name}
                {user?.age}
                {/* {user && user.name} */}
            </div>
        </div>)
    }

}

export default UserSearch;