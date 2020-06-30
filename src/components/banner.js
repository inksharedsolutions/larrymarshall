import React from 'react'
import {Link} from 'gatsby'
import '../assets/scss/pages.scss'
import BannerImg from '../../static/img/banner_yoga.png'


const Banner = (props) =>{

    const isFront =props.isFront;
    return(
        <>

            { (props.isFront) ? 
                <>
                    <section className="banner-section">
                        <div className="container-gt">
                            <div className="grid-two-columns" id="banner-layout-responsive">
                                
                                <div className="left-col">
                         
                                </div>

                                <div className="right-col banner-text">
                                        <h1 className="heading-banner-fs fontHeading">
                                            <span>A St. Louis</span>
                                            <span>Love Story</span>
                                        </h1>

                                        <span className="meta-spanline">
                                            The Dreamwatcher Diaries
                                        </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
             :
                <>
                    <section className="web-banner">
                        <div className="container">
                            <div className="wrapper-ds">
                                <span> 
                                    {props.spanFirst}
                                </span>
                                <h1>
                                    {props.contextHeading}
                                </h1>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}           

export default Banner;