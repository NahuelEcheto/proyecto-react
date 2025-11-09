const productos = [
    {
        id:'01',
        name:'Producto 1',
        description:'Lorem ipsum',
        stock: 30,
        price: 30000,
        img:'../logo-hamburguesa.png',
        category:'nuevos',
    },
        {
        id:'02',
        name:'Producto 2',
        description:'Lorem ipsum',
        stock: 20,
        price: 20000,
        img:'../logo-hamburguesa.png',
        category:'nuevos',
    },
        {
        id:'03',
        name:'Producto 3',
        description:'Lorem ipsum',
        stock: 20,
        price: 20000,
        img:'../logo-hamburguesa.png',
        category:'ofertas',
    },
        {
        id:'04',
        name:'Producto 4',
        description:'Lorem ipsum',
        stock: 20,
        price: 20000,
        img:'../logo-hamburguesa.png',
        category:'mas vendidos',
    }
]

export const getProductos = ()=>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProducto = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let prod= productos.find((producto)=> producto.id === id)
            resolve(prod)
        },2000)
    })
}
