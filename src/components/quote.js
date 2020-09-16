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
                        <h1>On this day</h1>
                        <h2>That sense of purpose</h2>
                        <p>was compelling like hearing the whisper of an Epiphany that waits for you just around the corner.</p>
                        <span>Lawrence Gabriel.</span>
                    </div>
                </div>          
            </section>
        </>
    )
}


export default Quote