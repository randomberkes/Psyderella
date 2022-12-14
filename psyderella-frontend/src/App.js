import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Person from "./components/Person"
import Result from "./components/Result"
import data from "./data.json"
import './App.css';
import Home from "./pages/Home";
import OnBoarding from "./pages/OnBoarding";
import Dashboard from "./pages/Dashboard";

const App = () => {
    const [people, setPeople] = useState(data);
    const [likedUsers, setLikedUsers] = useState([]);
    const [superLikedUsers, setSuperLikedUsers] = useState([]);
    const [dislikedUsers, setDislikedUsers] = useState([]);
    const activeUser = 0;

    const removedPersonFromDataSrc = (peopleSource, userId) =>
    peopleSource.filter(user => user.id !== userId);

    const modifyChoices = (userId, action) => {
        const newPeople = [...people];
        const newLikedUsers = [...likedUsers];
        const newDislikedUsers = [...dislikedUsers];
        const newSuperLikedUsers = [...superLikedUsers];

        switch (action) {
            case 'ADD_TO_LIKED_USERS':
              if (!people[activeUser].likedUsers.includes(userId)) {
                    newPeople[activeUser].likedUsers.push(userId);
                    newLikedUsers.push(data[userId]);
        
                    setLikedUsers(newLikedUsers);
                    setPeople(removedPersonFromDataSrc(people, userId));
                }
                break;
            case 'ADD_TO_DISLIKED_USERS':
                if (!people[activeUser].dislikedUsers.includes(userId)) {
                    newPeople[activeUser].dislikedUsers.push(userId);
                    newDislikedUsers.push(data[userId]);
            
                    setDislikedUsers(newLikedUsers);
                    setPeople(removedPersonFromDataSrc(people, userId));
                }
                break;  
            case 'ADD_TO_SUPERLIKED_USERS':
                if (!people[activeUser].superLikedUsers.includes(userId)) {
                    newPeople[activeUser].superLikedUsers.push(userId);
                    newSuperLikedUsers.push(data[userId]);
            
                    setSuperLikedUsers(newSuperLikedUsers);
                    setPeople(removedPersonFromDataSrc(people, userId));
                }
                break;
            default:
                return people;  
    
        }

    }

    
    return (
        // <div className="app">
        //     <div>Learn React</div>
        //     <Header/>
        //     {people[1] ? (
        //         <Person
        //         key={people[1].id}
        //         person={people[1]}
        //         modifyChoices={modifyChoices}
        //         likedUsers={likedUsers}
        //     />
        //     ) : (
        //         <Result
        //         activeUserImage={people[activeUser].image}
        //         likedUsers={likedUsers}
        //         superLikedUsers={superLikedUsers}
        //         />
        //     )}
            
        // </div>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/onBoarding"} element={<OnBoarding/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;