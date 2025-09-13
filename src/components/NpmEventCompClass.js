import React, { Component } from 'react'

 class NpmEventCompClass extends Component {    

   npm_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    npm_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.npm_Func1}>Click</button>
                <button onClick={()=>this.npm_Func2("Nguyễn Phi Mạnh")}>Click Param</button>
            </div>
        );
    }
}


export default NpmEventCompClass;