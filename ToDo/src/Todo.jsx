import React, { useState } from 'react'

function Todo() {

    const [activity, setActivity] = useState('')
    const [listData, setListData] = useState([])

    function addActivity(){
        setListData((listData)=>{
            const updatedList = [...listData, activity]  //spread operator => activity will get append in listdata
            console.log(updatedList);
            setActivity('')
            return updatedList
        })
    }

    function removeTask(i){
        const updatedListData = listData.filter((elem, id)=>{
            return i!= id;
        })
        setListData(updatedListData)
    }

    function removeAll(){
        setListData([])
    }

  return (
   <>
   <div>

    <div>ToDo List</div>

    <input
    type='text'
    placeholder='Enter task'
    value={activity}
    onChange={(e)=> setActivity(e.target.value)}
    />

    <button onClick={addActivity}>Add</button>

    <p >List</p>  

    {listData!=[] && listData.map((data, i)=>{ // data = data that you have to render and i = will be used as key
        return(
            <>
            <p key={i}>
                <div>{data}</div>
                <button onClick={()=>removeTask(i)}>Remove</button>
            </p>
            </>
        )
    })}

    {listData.length>=1 &&  <button onClick={removeAll} >Remove All</button> }
   
   </div>
   </>
  )
}

export default Todo
