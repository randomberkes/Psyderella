import Navbar from "../components/Navbar"
import Nav from "../components/Navbar"

const Home = () => {

    const authToken = true

    const handleClick = () => {
        console.log("clicked")
    }

    return (
        <>
            
           
            <div className="overlay">
                <Navbar minimal={false} authToken={false}/>
                <div className="Home">
                    <h1>Swipe Right</h1>
                    <button className="primary-button" onClick={handleClick}>
                        {authToken ? 'Signout' : 'Create Account'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home;