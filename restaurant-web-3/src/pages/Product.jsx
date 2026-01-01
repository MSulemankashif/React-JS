import { useParams } from "react-router-dom"

function Product(){

    var params =  useParams()

    return <>
      <h1>THIS IS PRODUCT : {params.id} </h1>
    </>

}

export default Product