import React from 'react'


const BookTrailer = ()=>{
    return(
        <>
            <section className="trailer-section">
                <div className="container-gt">
                    <div className="grid-two-columns trailer-wrapper"> 

                        <div className="trailer-box">
                            <iframe src="https://www.youtube.com/watch?v=dQ9lJ_VLq9U" width="600" height="400"></iframe>
                        </div>

                        <div className="trailer-box trailer-content">
                            <h5>Lawrence Gabriel</h5>
                            <h1>Book Trailer</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default BookTrailer;