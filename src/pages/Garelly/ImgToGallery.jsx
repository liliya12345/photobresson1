import React, {useEffect, useState} from 'react';
import './gallery.css'
import AOS from "aos";
import "aos/dist/aos.css";
import {data} from "./data";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Captions, Fullscreen, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";




export default function ImgToGallery(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-out-cubic",
        });
    }, []);

        const [toggler, setToggler] = useState(false);
    return (

        <>

            <Lightbox
                plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
                open={toggler}
                close={() => setToggler(false)}
                slides={data}
            />

            <h3 className="text-center">Gallery</h3>
            <div className="tab-content py-5 ">
                <div id="tab-1" className="tab-pane fade show p-0 active p-5 ">
                    <div className="row g-4 py-5">
                        <div className="col-lg-12">
                            <div className="row g-3 ">
                                {data.map(img =>

                                    <img src={img.img} alt="" key={img.id} onClick={() => {
                                        console.log(img.id);
                                        let startImage = data[0];
                                        data[0] = data[img.id - 1];
                                        data[img.id - 1] = startImage;
                                        setToggler(true)
                                    }
                                    }{...img} className="col-md-6 col-lg-4 col-xl-3  img-gallery"/>
                                )}


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}


