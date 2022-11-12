import Navbar from "../components/Navbar"
import { useState } from 'react'
import AuthModal from "../components/AuthModal"

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    const authToken = true

    const handleClick = () => {
        console.log("clicked")
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <>
            <div className="overlay">
                <Navbar minimal={false} 
                        authToken={false} 
                        setShowModal={setShowModal} 
                        showModal={showModal} 
                        setIsSignUp={setIsSignUp}/>
                <div className="Home">
                    <h1 className="primary-title">Swipe Right</h1>
                    <button className="primary-button" onClick={handleClick}>
                        {authToken ? 'Signout' : 'Create Account'}
                    </button>
                    {showModal && (
                        <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;