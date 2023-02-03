import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useSelector } from 'react-redux';


function Viewrestaurant() {

  const params = useParams()

  //   const [allrestaurent, setallrestaurent] = useState([])
  //   // function to api call for datas inside json file
  //   const getrestaurentdata = async () => {
  //       await fetch('/restaurants.json')
  //           .then(data => {
  //               data.json().then(result => {
  //                   setallrestaurent(result.restaurants)
  //               })
  //           })

  //   }
 // console.log(allrestaurent);

    useEffect(() => {
        // getrestaurentdata()
    }, [])
    
    const result=useSelector(state=>state.restaurentReducer)
    const {restaurantList}=result
    
    const restData=restaurantList.find(item=>item.id == params.id)


  return (
    <>
    {restData?(
      <Row style={{width : "100%"}}>
        <Col> 
          <Image src={restData.photograph} className="p-5 square bg-primary rounded-9" fluid></Image> 
        </Col>

        <Col className='mt-5'> 
          <h1 className='text-uppercase'>* {restData.name}</h1>
          <h2 className='mt-3 ms-4'>{restData.neighborhood}</h2>
          <h2 className='mt-3 ms-4'>cusine type : {restData.cuisine_type}</h2>
          <h4 className='mt-3 ms-4'>address : {restData.address}</h4>
       
        <Operatingtime timedata={restData.operating_hours}></Operatingtime>
        <Review reviewData={restData.reviews}></Review>  
 
        </Col>


      </Row>
    ):"null"

    }
    </>
  )
}

export default Viewrestaurant