import React, { useState, useContext } from "react";
import { DrawerContext } from "../../context/DrawerContext";

const ViewLayout = ({ emailView }) => {
    const { isManualOpen } = useContext(DrawerContext);
    return (
        <div
            className={`flex flex-col ${isManualOpen ? "ml-0" : "ml-20"
                }`}
        >
            <div className="bg-white rounded-3xl">
                {emailView.length > 0 ? (
                    emailView.map((data, index) => (
                        <div key={index}>{data.title}</div>
                    ))
                ) : (
                    <p>No messages to display</p>
                )}
            </div>
        </div>
    )
}

export default ViewLayout