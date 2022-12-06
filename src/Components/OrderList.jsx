import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const labels = [
    "No. orden",
    "Fecha",
    "Dirección entrega",
    //"Acción"
]

const OrderList = () => {
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:9000/api/orders")
            .then(response => {
                console.log(response.data)
                setOrders(response.data.orders)
            })
    }, [])

    return (
        <>
        <table className="table">
            <thead>
                    <tr>
                        {labels.map((labels, index) => {
                            return (
                            <th key={index} scope="col">{labels}</th>)
                        })}
                    </tr>
            </thead>
            <tbody>
                {orders !== null ? orders.map((order, index) => {
                    return (
                    <tr key ={index}>
                        <th scope="row">
                            <Link to={'/orderlist/1' + order._id}>{index}</Link>
                        </th>
                        <td>{order.fecha}</td>
                        <td>{order.direccionentrega}</td>
                    </tr>)
                    
                }) : ""}

            </tbody>
        </table>
        <Link to="/orderlist/new">Crear nueva Orden</Link>
        </>
    )
}

export default OrderList
