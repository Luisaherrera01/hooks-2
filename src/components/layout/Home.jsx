import { Link } from "react-router-dom"
import Header from "../helpers/Header"



const Home = () => {

    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

  return (
    <div>
        <Header/>
        <Usuarios/>
    </div>
    
  )
}

export default Home