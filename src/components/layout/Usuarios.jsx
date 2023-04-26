import { useState } from "react"
import Header from "../helpers/Header"

const usuarios = () => {

    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    return (
        <section>
            <Header />
            <section className="contenedor">
                <section className="formulario">
                    <form action="">
                        <p >Nombre </p>
                        <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" size={40}/>
                        <p >Password </p>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" size={40}  maxLength={6}/>
                        <p >E mail </p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" size={40}/> <br/>
                        <button>Enviar</button>
                    </form>
                </section>
                <section className="tabla">
                    <table>
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Contraseña</td>
                                <td>Correo</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{nombre}</td>
                                <td>{password}</td>
                                <td>{email}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        </section>
    )
}

export default usuarios