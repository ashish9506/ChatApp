export const initialState={
    user:{
        user_id:"u1",
        email:"ashish@gmail.com",
        name:"Ashish",
        Status:"Hey I am using Skype",
        profile_pic:""

    },
    messages: {
        "userID1": {
           0: {
              text:"Hi bro",
              number:0,
              is_user_msg:false
           },
           1: {
                text:"Hello bro,How u doing?",
                number:1,
                is_user_msg:false
           }
        },
        "userID2": {
          0: {
             text:"Hi !!",
             number:0,
             is_user_msg:false
          }
       }  
    },
    contacts: {
        "userID1": {
          name:"Rishi Raj",
          profile_pic:"https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          status:"To success in life. You need two things.Ignorance and Confidence...",
          user_id:"userID1"
        },
        "userID2": {
          name:"Ankit",
          profile_pic:"https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          status:"Smile and the world smiles with you.",
          user_id:"userID2"
        },
        
        
      },
      typing:"",
      activeUserId:"userID2"
      
}

const reducer=(state=initialState,action)=>{
    return state
}

export default reducer
