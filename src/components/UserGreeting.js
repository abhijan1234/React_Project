import React, { Component } from 'react'

 class UserGreeting extends Component {
constructor(props) {
    super(props)

    this.state = {
         isloggedin : true
    }
}

    render() {

        return (
            this.state.isloggedin ?
            <div>Welcome Abhi</div>:
            <div>Welcome Guest</div>
        )
        // let message                     ----------------> element variable
        // if(this.state.isloggedin){
        //     message=<div>Welcome Abhi</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
            // if(this.state.isloggedin){        -----------> normal if else
            //     return(
            //         <div>
            //             Welcome Abhi
            //         </div>
            //     )
            // }else{
            //     return(
            //         <div>
            //         Welcome Guest
            //     </div>
            //     )
            // }
      //  return (
      //      <div>
      //          <div>Welcome </div>
      //          <div>Welcome Guest</div>
      //      </div>
      //  )
    }
}

export default UserGreeting
