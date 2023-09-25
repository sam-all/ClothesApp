import React from "react";
import "./Image.css"
import mountainPicture from './mountain.jpeg';


function Image(url) {

    const handleLike = () => {
        console.log("Liked!")
    };

    const handleComment = () => {
        console.log("Commented!")
    };

    return (
        <div class="ImageWrapper">
            <img class="Image" src={url} alt="mountain" />

            <h1> </h1>

            <button type="button" onClick={handleLike}>
                like
            </button>

            <button type="button" onClick={handleComment}>
                comment
            </button>
            
        </div>
    );

    
  }
  
  export default Image;