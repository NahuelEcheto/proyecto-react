import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = (props)=>{
    const[data, setData]=useState([])
    const {type} = useParams()
    useEffect(()=>{
        getProductos()
        .then((res)=>{
            if(type){
                 setData(res.filter((prod)=> prod.category === type))
            }else{
                 setData(res)
            }
        })
        .catch((error)=> console.log(error))
    },[type])
    console.log(data, 'estado')
    return(
        <div>
            <h1 className="text-success">{props.saludo}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer

