import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const Login =() => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const customSubmit = (data) => {console.log(data)}

    return(
        <>
        <form className="form" onSubmit={handleSubmit(customSubmit)}>
            <div className="form__item">
                <label>Usuario</label>
                <input
                    //{...register("User", { required: true })} 
                    //aria-invalid={errors.User ? "true" : "false"}
                />
                {errors.User && <p>Usuario no puede estar vacio</p>}
            </div>
            <div className="form__item">
                <label>Contraseña</label>
                <input
                    //{...register("Pass", { required: true })} 
                    //aria-invalid={errors.Pass ? "true" : "false"}
                />
                {errors.Pass && <p>Contraseña no puede estar vacio</p>}
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
        <div>
            <Link to="/registro">¿Aún no tienes cuenta? Regístrate</Link>
        </div>
            </>

    )

}

export default Login
