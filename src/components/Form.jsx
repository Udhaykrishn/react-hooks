import useForm from "../hooks/useForm"
const Form = () => {
    const [value, handleChange] = useForm({
        name: "",
        email: "",
        password:""
    });
    return (
        <div>
            <h2>Name: {value.name}</h2>
            <input type="text" value={value.name} onChange={handleChange
            } name="name" placeholder="Enter your name" />
            <input type="email" value={value.email} onChange={handleChange} name="email" placeholder="Enter your email" />
            <input type="password" value={value.passoword} onChange={handleChange} name="password" placeholder="Enter your Password" />
            <h2>Email:{value.email}</h2>
            <h3>Password: {value.password}</h3>
        </div>
    )
}

export default Form
