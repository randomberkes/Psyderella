import Nav from "../components/Navbar"

const Home = () => {

    const authToken = true

    const handleClick = () => {
        console.log("clicked")
    }

    return (

        <div className="Home">
            <h1>Swipe Right</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account'}
            </button>
        </div>
    )
}

export default Home;