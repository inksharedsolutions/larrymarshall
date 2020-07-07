import React, {useState, useEffect } from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author_img.jpg'


const UpperMain =()=>{


    return  (
        <>  
            <section className="upper-main">
                <div className="container-gt">
                    <div className="grid-two-columns" id="column-upper"> 
                        <div className="col-left author-image">
                            <img src={AuthorImg}/>
                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                        <div className="col-right">
                            <h1 className="fontHeading">
                                “I am the Maiden Worth, 
                                untouched and alive.” 
                            </h1>
                            <p>
                                Larry Marshall was born and raised in Mishawaka, Indiana.
                                He completed his undergraduate studies in psychology
                                at Taylor University where he wrote for the college
                                newspaper and played football. He completed his
                                Master’s degree in Counseling Psychology at Ball
                                State University. 
                            </p>

                            <p className="author-name-fx">
                                <span>
                                    Lawrence 
                                </span>

                                <span>
                                    Gabriel
                                </span>
                                <span>
                                    Author & Writer
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain