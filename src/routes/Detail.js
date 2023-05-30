import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Detail.scss'

const Detail = (props) => {

  const [showalert, setShowalert] = useState(true);
  let [num, setNum] = useState('');

  useEffect(()=>{
    // let clock =  setTimeout(()=>{
    //   setShowalert(false);
    // }, 2000)

    // return ()=>{
    //   clearTimeout(clock)
    // }
    if(isNaN(num) == true){
      alert('숫자만 넣으세요')
    }
  },[num])

  let {id} = useParams();
  
  return (
    <div className='detail'>
      {showalert && (
      <div className='alert alert-warning'>2초이내 구매시 할인</div>
      )}
        <div className='left'>
            <img src={props.dior[id].url}/>
        </div>
        <div className='right'>
            <input onChange={(e)=>{setNum(e.target.value)}}/>
            <h4>{props.dior[id].title}</h4>
            <p>{props.dior[id].content}</p>
            <p>₩{props.dior[id].price}</p>
            <button>빠른구매</button>
        </div>
    </div>
  )
}

export default Detail