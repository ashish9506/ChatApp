import React from 'react'

 const Users = (props) => {

    const { name, profile_pic, status } = props.userData;
    return (
      
        <div className="container contactDiv">
            <div className="row mt-3">
                <div className="col-3  p-0 m-0">
                    <img className="rounded-circle profilePic" src={profile_pic} width={60} height={60}/>
                </div>
                <div className="d-md-inline d-sm-none d-xs-none col-9 p-0 m-0">
                    <p><strong>{name}</strong></p>
                    <p>{status}</p>
                </div>
            </div>
         
         
            {/* {props.usersData} */}
        </div>
    )
}
export default Users
