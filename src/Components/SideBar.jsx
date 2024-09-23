import React from "react"
import { FaArrowRightLong } from "react-icons/fa6";

export default function SideBar({ setShowModal, showModal, data }) {
    return (
        <div className="Sidebar">
            <div className="Background-Overlay"></div>
            <div className="Sidebar-Contents">
                <h2>{(data ?.title)}</h2>
                <div className="Description-Container">
                    <p>{data ?.date}</p>
                    <p className="Description-Title">{(data ?.explanation)}</p>
                </div>
                <button onClick={() => setShowModal(!showModal)}> <FaArrowRightLong size="22px" /></button>
            </div>
        </div>
    )
}