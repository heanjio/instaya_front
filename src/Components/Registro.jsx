import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const Login =() => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const customSubmit = (data) => {console.log(data)}

    return(
        <>
        <form className="form-login" onSubmit={handleSubmit(customSubmit)}>
            <div classNem="User">
                <label>Usuario</label>
                <input
                    //{...register("User", { required: true })} 
                    //aria-invalid={errors.User ? "true" : "false"}
                />
                {errors.User && <p>Usuario no puede estar vacio</p>}
            </div>
            <div>
                <label>Contraseña</label>
                <input
                    //{...register("Pass", { required: true })} 
                    //aria-invalid={errors.Pass ? "true" : "false"}
                />
                {errors.Pass && <p>Contraseña no puede estar vacio</p>}
            </div>
                <input type="submit" value="Login" />
                </form>
            <div>
            <Link to="/registro">¿Aún no tienes cuenta? Regístrate</Link>
            </div>
            </>

    )

}

export default Login
