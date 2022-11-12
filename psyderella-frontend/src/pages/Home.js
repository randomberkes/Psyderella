import Navbar from "../components/Navbar"
import { useState } from 'react'
import AuthModal from "../components/AuthModal"

const Home = () => {

    const [showModal, setShowModal] = useState(false)

    const authToken = true

    const handleClick = () => {
        console.log("clicked")
        setShowModal(true)
    }

    return (
        <>
            <div className="overlay">
                <Navbar minimal={false} authToken={false} setShowModal={setShowModal} showModal={showModal} />
                <div className="Home">
                    <h1>Swipe Right</h1>
                    <button className="primary-button" onClick={handleClick}>
                        {authToken ? 'Signout' : 'Create Account'}
                    </button>
                    {showModal && (
                        <AuthModal setShowModal={setShowModal} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;