
// create your App component here
import React, {useEffect, useState}from "react";
const API_URL="https://dog.ceo/api/breeds/image/random"
function App(){
    const [image, setImage] =useState(null)
useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {setImage(data.message)
})
},[])
if(!image) return (
    <p>Loading...</p>
)
   return (
    <div>
    <p>Here is a Dog image</p>
    <img src={image} alt="A Random Dog" />
    </div>
   )
}
export default App;