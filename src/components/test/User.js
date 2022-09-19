function User(props){
    const {user,y}=props;
    return(
        <div>
            <h2>{user.name} -- {user.id}</h2>
            <button onClick={()=>{
                y(user.company);
            }}>More information</button>
        </div>
    )
}
export default User;