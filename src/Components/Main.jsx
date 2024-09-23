import React from "react"



export default function Main({ data }) {
    return (
        <div className="Image-Container">
            <img src={data.hdurl} alt={data.title} className="Background-Img" />
        </div>
    )
}