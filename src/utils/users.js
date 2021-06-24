const users=[]

const addUser=({id,username,room})=>{
    //clean the data
    username=username.trim().toLowerCase()
    room=room.trim().toLowerCase()

    //validate data
    if(!username || !room){
        return{
            error: 'Username and room are required!'
        }
    }

    //check for existing user
    const existingUser=users.find((user)=>{
        return user.room===room && user.username===username
    })
    if(existingUser){
        return{
            error: 'Username is already taken!'
        }
    }

    //Store user
    const user={id,username,room}
    users.push(user)
    return{user}
}

const removeUser=(id)=>{
    const index=users.findIndex((user)=>user.id===id)

    if(index!==-1){
        return users.splice(index,1)[0]
    }
}

const getUser=(id)=>{
    return users.find((user)=>user.id===id)
}

const getUsersInRoom=(room)=>{
    room=room.trim().toLowerCase()
    return users.filter((user)=>user.room===room)
}

module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// addUser({
//     id:22,
//     username:'goutam363',
//     room:'kolkata'
// })
// addUser({
//     id:23,
//     username:'neon',
//     room:'kolkata'
// })
// addUser({
//     id:24,
//     username:'alpha',
//     room:'bombay'
// })
// console.log(users)

// const user=getUser(23)
// console.log(user)

// const userList=getUsersInRoom('kolkata')
// console.log(userList)
// const removedUser=removeUser(22)
// console.log(removedUser)
// console.log(users)