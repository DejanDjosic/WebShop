import React from 'react'

const Context =React.createContext({
    items:[],
    totalAmount:0,
    category:'',
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

export default Context