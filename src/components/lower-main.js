import React from 'react'
import Logo1 from '../../static/logo/amazon.png'
import Logo2 from '../../static/logo/bam.png'
import Logo3 from '../../static/logo/Barnes-and-noble-booksellers-logo.png'
import Logo4 from '../../static/logo/stratton-logo.png'

const LowerMain = ()=>{
    return(
        <>  
            <section className="mid-main">
                <div className="two-grid-elements" id="grid-bg-element">

                    <div className="grid-child box-one">

                        <p className="book-letter">
                            <span>Bo</span>
                            <span>ok</span>
                        </p>

                        <h1 className="fontHeading">Featured</h1>
                        <p className="middle-params">
                            Lawrence Gabriel has been featured numerous times on..
                        </p> 
                    </div>

                    <div className="grid-child grid-template-four-col" id="logos-col">
                        <li>
                            <img src={Logo1}/>
                        </li>

                        <li>
                            <img src={Logo2}/>  
                        </li>

                        <li>
                            <img src={Logo3}/>
                        </li>

                        <li>
                            <img src={Logo4}/>
                        </li>

                    </div>

                </div>
            </section>
        </>
    )
}

export default LowerMain 