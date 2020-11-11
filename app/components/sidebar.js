import React from 'react'
import Users from './users'

const SideBar = (props) => {
    
    return (
        
            <div className='col-3 sidebar'>
                    <aside>
                    
                        {Object.keys(props.data).map((user)=>{
                          
                            return <Users key={props.data[user].user_id} userData={props.data[user]}/>
                        })}
                    </aside>
           
             </div>
       
    )
}

export default SideBar
