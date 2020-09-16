import React, {useState, useEffect } from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author_model.jpg'


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
                                “It’s been said that we are like travelers in 
                                a strange land and that here at this place
                                we are as far from home as we ever shall be.” 
                            </h1>
                            <p>
                                Lawrence Gabriel was born and raised in Mishawaka, Indiana.
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