import "./Poap.css";





const Poap=(props)=>{
    const user = props.user;
    return (
        <>

        <div className="poap"></div>
        {
            user.map((item)=>{
                return  <div className="poap-1">
                <div>
                    <img src={user.profile_path} ></img>
                </div>
                <div className="poap-2">
                    <h1>{user.name}</h1>
                    <h2>name</h2>
                    <h4>{user.id}</h4>
    
                </div>
            </div> 
            })
        }
        </>
    )
}
export default Poap;