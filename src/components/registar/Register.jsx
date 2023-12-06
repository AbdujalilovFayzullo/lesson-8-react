import useRegister from "./useRegister"


const register = () => {
    const { firstName, lastName, email, password, confirmPassword, error, handleSubmit, handleFirstNameChange, handleLastNameChange, handleEmailChange, handlePasswordChange,handleConfirmPasswordChange } = useRegister();


  return (
    <div className="container">
          <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder="FirstName" />
        {error.firstName && <p>{error.firstName}</p>}

        <input type="text" onChange={handleLastNameChange} value={lastName} placeholder="LastName" />
        {error.lastName && <p>{error.lastName}</p>}

        <input type="email" onChange={handleEmailChange} value={email} placeholder="Email" />
        {error.email && <p>{error.email}</p>}

        <input type="password" onChange={handlePasswordChange} value={password} placeholder="Password" />
        {error.password && <p>{error.password}</p>}

        <input type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} placeholder="ConfirmPassword" />
        {error.confirmPassword && <p>{error.confirmPassword}</p>}

        <button type="submit">Register</button>

        
    </form>
    </div>      

  )
}

export default register