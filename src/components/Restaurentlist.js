import React from 'react'
import { useEffect } from 'react'
import Restaurantcard from './Restaurantcard'
import Row from 'react-bootstrap/Row';
import { RestaurentlistAction } from '../actions/restaurantAction';
import { useDispatch,useSelector } from 'react-redux';



function Restaurentlist() {
   

    // object created for usedispatch to apply
    const dispatch=useDispatch()
const result=useSelector(state=>state.restaurentReducer)
const {restaurantList}=result





    useEffect(() => {
        dispatch(RestaurentlistAction())
        // getrestaurentdata()
    })

    return (
        <Row style={{width:"100%"}}>
            {
                restaurantList.map(item => (
                    <Restaurantcard data={item}></Restaurantcard>
                ))
            }
        </Row>
    )
}

export default Restaurentlist


















// const [allrestaurent, setallrestaurent] = useState([])
// function to api call for datas inside json file
    // const getrestaurentdata = async () => {
    //     await fetch('/restaurants.json')
    //         .then(data => {
    //             data.json().then(result => {
    //                 setallrestaurent(result.restaurants)
    //             })
    //         })

    // }