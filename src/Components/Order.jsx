import { useParams } from "react-router-dom"

const Order = () => {
    const { id } = useParams()
    return (

        <h1>#{id} Esta es una orden</h1>

    )
}

export default Order