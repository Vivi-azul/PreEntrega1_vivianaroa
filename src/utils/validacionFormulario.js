import { string, object, mixed } from "yup";

let userSchema = object({
  nombre: string().required("Escriba su nombre"),
  telefono: mixed().required("Escriba numero de telefono"),
  email: string().email("El campo email no tiene el formato correcto").required("El campo email es requerido")
})

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm)
    return { status: "success" }
  } catch (error) {
    return { status: "error", message: error.message }
  }
}

export default validateForm;