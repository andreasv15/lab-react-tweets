function User(props) {
    const {name, handle } = props.datosUser;
    //console.log(props.datosUser)
    return (
        <span className="user">
            <span className="name"> {name} </span>
            <span className="handle"> @{handle} </span>
        </span>
    )

}

export default User;