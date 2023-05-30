import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount } from '../store'
import { changeName, increase } from '../store/userSlice'

const Cart = () => {

    let cartState = useSelector((state)=>{
        return state
    })

    console.log(cartState);

    let dispatch = useDispatch()

  return (
    <div>

        <h6>{cartState.user.name} {cartState.user.age}의 장바구니</h6>
        <button onClick={()=>{
            dispatch(increase(100))
        }}>버튼</button>

        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
            {
                cartState.cart.map((a,i)=>
                <tr key={i}>
                    <td>{cartState.cart[i].id}</td>
                    <td>{cartState.cart[i].name}</td>
                    <td>{cartState.cart[i].count}</td>
                    <td>
                        <button onClick={()=>{
                            dispatch(addCount(cartState.cart[i].id))
                        }}>+</button>
                    </td>
                </tr>
                )
            }
            </tbody>
        </Table> 
    </div>
  )
}

export default Cart