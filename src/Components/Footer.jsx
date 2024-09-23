import React from "react"

import { FaCircleInfo } from "react-icons/fa6";

export default function Footer({ setShowModal, showModal, data }) {
    return (
        <footer>
            <div className="Background-Gradient"></div>
            <div>
                <h1>APOD Project</h1>
                <h2>{(data?.title)}</h2>
            </div>

            <button onClick={() => setShowModal(!showModal)} className="Icon"><FaCircleInfo /></button>
        </footer >
    )
}