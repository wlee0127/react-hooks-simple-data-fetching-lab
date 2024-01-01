
import React, {useEffect, useState} from "react";

function App() {
    const [isLoaded, setIsLoaded]=useState(false);
    const [dogImage,setDogImage]=useState();

    console.log("test");

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            setDogImage(data.message);
            setIsLoaded(true);
        })
    },[])

    if(isLoaded===false) return <p>Loading...</p>;
    

    return (
        <img src={dogImage} alt="A Random Dog"/>
    )

}

export default App