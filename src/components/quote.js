import React from 'react'
import Chair from '../../static/img/bench_chair.png'

const Quote = () =>{
    return(
        <>
            <section className="two-grid-elements" id="parent-quote-col">
                <div className="grid-child-elements" id="left-col">
                    <span></span>
                    <span></span>
                    <img src={Chair}/>
                </div>
                
                <div className="grid-child-elements" >
                    <div className="text-content-wrapper">
                        <h1>I am the</h1>
                        <h2>Maiden Worth</h2>
                        <p>Untouched and alive</p>
                        <span>Larry M.</span>
                    </div>
                </div>          
            </section>
        </>
    )
}


export default Quote