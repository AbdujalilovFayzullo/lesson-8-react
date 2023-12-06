

const handleLoginSubmit = (event) => {
    event.preventDefault();

    let loginValid = true;

    const updateLoginError = {
        email: validateEmail(email) ? '' : 'Invalid email',
        password: validatePassword(password) ? '' : 'Kamida 6ta son',
    }

};

Object.keys(updateError).forEach((key) => {
    if(updateError[key]) {
        loginValid = false;
    }
});

if(!loginValid) {
    setError(updateError)
    return;
};

// import useLogin from "./useLogin"

// const Login = () => {

//     const { loginEmail, loginPassword, loginError, handleLoginSubmit, handleLoginPasswordChange, handleLoginEmailChange } = useLogin();

//     return(
//         <form onSubmit={handleLoginSubmit}>

//             <input type="email" onChange={handleLoginEmailChange} value={loginEmail} />
//             {loginError.loginEmail && <p>{loginError.loginEmail}</p>}
   
   
//             <input type="password" onChange={handleLoginPasswordChange} value={loginPassword} />
//             {loginError.loginPassword && <p>{loginError.loginPassword}</p>}

//             <button type="submit">Log In</button>

//         </form>

//     )
// }

// export default Login




// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// const useLogin = () => {

//     const navigate = useNavigate

//     const [loginEmail, setLoginEmail] = useState('')
//     const [loginPassword, setLoginPassword] = useState('')
//     const [loginError, setLoginError] = useState({
//         loginEmailmail: '',
//         loginPassword: '',
//     })

//     const validateLoginEmail = (loginEmail) => {
//         return /\S+@\S+\.\S+/.test(loginEmail)
//     }

//     const validatePassword = (loginPassword) => {
//         return loginPassword.length >= 6
//     }

//     handleLoginSubmit = (event) => {
//         event.preventDefualt()

//         let formLoginValid = true;

//         const updateLoginError = {
//             loginEmail: validateLoginEmail ? '' : 'Invalid email',
//             loginPassword:  validatePassword ? '' : 'Parol xato',
//         }

//         Object.keys(updateLoginError).forEach((key) => {
//             if(updateLoginError[key]) {
//                 formLoginValid = false
//             }
//         });

//         if(!formLoginValid) {
//             setLoginError(updateLoginError)
//             return;
//         }

//         navigate('/about')

//     }

//   return {
//         loginEmail, loginPassword, loginError,

//         handleLoginEmailChange: (event) => {
//             setLoginEmail(event.target.value);
//             setLoginError({ ...loginError, loginEmail: ''});
//         },

//         handleLoginPasswordChange: (event) => {
//             setLoginPassword(event.target.value);
//             setLoginError({ ...loginPassword, loginPassword: ''});
//         },

//         handleLoginSubmit,

//   }
// }

// export default useLogin