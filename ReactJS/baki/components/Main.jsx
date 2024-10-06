import React, { useEffect, useRef, useState } from "react"

import { useNavigate } from "react-router-dom";



const Main = () => {
    const navigation = useNavigate();
    const [currPic, setCurrPic] = useState(0);
    const slideRef = useRef(null);
    useEffect(() => {
        if (slideRef.current) {
            // console.log(listPicture[currPic].img)
            slideRef.current.style.backgroundImage = `url(${listPicture[currPic].img})`;
        }
    }, [currPic]);

    const listPicture = [{
        title: "Effortless Elegance",
        content: "From casual to formal, we've got you covered share your life style and know how much you desert when you not here. Based on how much effort u have when you were young     ",
        img: "images/ga.jpg"
    }, {
        title: "The mistery behind",
        content: "From casual to formal, we've got you covered share your life style and know how much you desert when you not here. Based on how much effort u have when you were young     ",
        img: "images/Template2.jpg"
    }, {
        title: "Multi-faceted Beauty",
        content: "From casual to formal, we've got you covered share your life style and know how much you desert when you not here. Based on how much effort u have when you were young     ",
        img: "images/Template3.jpg"
    }];
    return (
        <section className="manage">
            <div className="manage--sliders " ref={slideRef}>
                <div className="slider--info">
                    <div className="inner-slider">
                        <h1>{listPicture[currPic].title}</h1>
                        <p>{listPicture[currPic].content}</p>
                        <a href="/shop" data-w-id="a7139dc7-08b1-5722-6803-66d8beec6a02" class="button-white w-inline-block">
                            <div  class="button-border">
                                <div class="button-text">SHOP&nbsp;NOW</div>
                            </div>
                            <div class="button-border-wrap"></div>
                        </a>
                    </div>
                </div>

                <div className="manage--sliders__button">
                    <div className="button__group">
                        <button className="manage--silder__button" onClick={() => { setCurrPic(0) }}><i class="fa-regular fa-circle-dot"></i></button>
                        <button className="manage--silder__button" onClick={() => { setCurrPic(1) }}><i class="fa-regular fa-circle-dot"></i></button>
                        <button className="manage--silder__button" onClick={() => { setCurrPic(2) }}><i class="fa-regular fa-circle-dot"></i></button>
                    </div>
                </div>
            </div>
            {/* <div className="manage--btn">
                <button onClick={() => navigation('/users')}>Users</button>
                <button onClick={() => navigation('/roles')}>Roles</button>
            </div> */}

        </section>
    )


}
export default Main;