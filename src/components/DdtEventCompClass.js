import React, { Component } from 'react'

 class DdtEventCompClass extends Component {    

   ddt_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    npm_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.ddt_Func1}>Click</button>
                <button onClick={()=>this.ddt_Func2("Đỗ Đăng Tâm")}>Click Param</button>
            </div>
        );
    }
}


export default DdtEventCompClass;