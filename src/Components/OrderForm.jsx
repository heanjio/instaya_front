import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import axios from "axios"

const OrderForm = ({data}) => {
    const [isEdit, setIsEdit] = useState(false)

    const { register, formState: { error }, handleSubmit, setValue} = useForm();
    
    const customSubmit = (dataForm) => {
        if (isEdit) {
            console.log('Here goes the edit logic')
            console.log('dataForm', dataForm)
        } else {

            axios
                .post("http://localhost:9000/api/orders", dataForm)
                .then(response => console.log(response.data.orders))

        }
        console.log('dataForm', dataForm)
    }

    useEffect(() => {
        if (data.length != 0) {
            setValue('fecha', dataForm.fecha)
            setValue('largo', dataForm.largo)
            setValue('ancho', dataForm.ancho)
            setValue('peso', dataForm.peso)
            setValue('direccion', dataForm.direccion)
            setValue('ciudad', dataForm.ciudad)
            setValue('destinatario', dataForm.destinatario)
            setValue('nitdestinatario', dataForm.nitdestinatario)
            setValue('direccionentrega', dataForm.direccionentrega)
            setValue('ciudadentrega', dataForm.ciudadentrega)
        }
    })

    return (
        <>
        <form className="form" onSubmit={handleSubmit(customSubmit)}>

            
            <div className="form__item">
                <label>Fecha</label>
                <input
                    type="date"
                    {...register("fecha", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Largo</label>
                <input
                    {...register("largo", { required: true })}
                />
            </div>
            <div className="form__item">                
                <label>Ancho</label>
                <input
                    {...register("ancho", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Peso</label>
                <input
                    {...register("peso", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Direccion recogida</label>
                <input
                    {...register("direccion", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Ciudad recogida</label>
                <input
                    {...register("ciudad", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Nombre destinatario</label>
                <input
                    {...register("destinatario", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Cedula / NIT destinatario</label>
                <input
                    {...register("nitdestinatario", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Direccion entrega</label>
                <input
                    {...register("direccionentrega", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Ciudad entrega</label>
                <input
                    {...register("ciudadentrega", { required: true })}
                />
            </div>

            <input type="submit" value={isEdit ? "Edit" : "Create"} />
        </form>
        </>

    )
}

export default OrderForm
