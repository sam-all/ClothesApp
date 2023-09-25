import React, { useEffect, useRef, useState }from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from './Footer';
import Image from './Image';
import axios from "axios";
import FormData from 'form-data'





function App() {
  
  const [data, setData] = React.useState(null);


  const [file, setFile] = useState()
  const [description, setDescription] = useState("")

  

  React.useEffect(() => {

    fetch("/api")

      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        return res.json();
      })

      .then((data) => {
        console.log("Data received:", data);
        setData(data.message);
      }) 

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const submit = async event => {
    event.preventDefault()

    console.log("clicked! + ", file)
    const formData = new FormData()
    formData.append("image", file)
    formData.append("description", description)

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }

    const result = await axios.post('/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    console.log(result.data)
  }



  return (
    <div className="App">
      <form onSubmit={submit}>

        <input //image input field
            filename={file} 
            onChange={e => setFile(e.target.files[0])} 
            type="file" 
            accept="image/*"
        ></input>


        <input // description input field
            onChange={e => setDescription(e.target.value)} 
            type="text"
        ></input>

        <button type="submit">Submit</button>
      </form>

      {/* <div>
        <Image url="./mountain.jpeg"/>
        <Image url="./mountain.jpeg"/>
        <Image url="./mountain.jpeg"/>
      </div> */}


      <h1></h1>

    </div>

    
  );
}

export default App;