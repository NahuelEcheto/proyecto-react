import React, { useEffect, useState } from 'react'
import { getOneProducto } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState(null) 
    const [loading, setLoading] = useState(true) 

    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        getOneProducto(id)
        .then((res) => setDetalle(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [id])

    if(loading) {
        return <div style={{textAlign:'center', padding:'50px'}}>Cargando producto...</div>
    }

    if(!detalle) {
        return <div style={{textAlign:'center', padding:'50px'}}>Producto no encontrado</div>
    }

    return (
        <>
            <ItemDetail detalle={detalle}/>
        </>
    )
}

export default ItemDetailContainer