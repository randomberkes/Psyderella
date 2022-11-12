import { useState } from 'react'

const AuthModal = ({ setShowModal }) => {

    const [ eamil, setEmail ] = useState(null)
    const [ password, setPassword ] = useState(null)
    const [ confirmPassword, setConfirmPassword ] = useState(null)
    const [ error, setError ] = useState(null)

    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const isSignUp = true;

    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>x</div>
            <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    palcejolder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    palcejolder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="confirmPassword"
                    id="confirmPassword"
                    name="confirmPassword"
                    palcejolder="confirmPassword"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input className="secondary-button" type="submit">

                </input>
                <p>{error}</p>

            </form>
        </div>
    )
}

export default AuthModal;