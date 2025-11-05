import React from 'react';
import './gallery.css'

export default function Gallery(props) {
    return (
        <>


                                <div className="col-md-6 col-lg-4 col-xl-3">
                                        <img  src={props.img}
                                                    className=" img-gallery "
                                                    alt={"image"}/>

                                </div>

        </>
    );
}

