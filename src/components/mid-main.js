import React from 'react'
import {Link} from "gatsby"
import BookImg from '../../static/book/book_cover.png'


const MidMain = ()=>{
    return(
        <>
            <section className="book-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="book-columns"> 

                        <div className="box-element-left">
                            <img src={BookImg}/>
                            <button>
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>
                        </div>

                        <div className="box-element-right">

                            <p className="span-letter-ft fontHeading">
                                <span>A St. Louis</span> 
                                <span>Love Story</span>
                            </p>

                            <h1 className="fontHeading heading-ft">About the Book</h1>
                            <p>
                                Discouraged and disillusioned in the search for
                                her soul mate, Lindsay Parker makes a startling 
                                discovery after moving into her new loft in Downtown       
                                St. Louis. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default MidMain;