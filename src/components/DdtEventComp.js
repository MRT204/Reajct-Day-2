import React from 'react'

export default function DdtEventComp() {
   const npm_Func1 = ()=>{
        alert("Xin chào")
    }
    const npm_Func2 = (param)=>{
        alert(param)
    }
    return (
        <div>
        <h1>Event - Component Function</h1>
            <button onClick={npm_Func1}>Click Here</button>
            
            {/* gọi lần đầu tiên và duy nhất khi load */}
            {/* <button onClick={tvc_Func1()}>Click Here</button>ss */}

            {/* gọi hàm có tham số */}
            <button onClick={()=>ddt_Func2('Đăng Tâm')}>Click Here Param</button>

        </div>
    )
}