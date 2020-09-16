import React from 'react'
import Banner from '../components/banner'
import '../assets/scss/pages.scss'
import Layout from '../components/layout'
import AuthorImg from '../../static/author/author_model.jpg'

 const AboutTheAuthor = (props)=>{

     return(
        <> 
            <Layout extPath={false}>

                <Banner 
                    spanFirst={`About the`}
                    contextHeading={`Author`} 
                />

                <div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>
                        </div>

                        <article className="article-section" id="author">
                            <div className="heading-quote">
                                 
                                <h4>
                                    "I am the Maiden Worth, untouched and alive."
                                </h4>
                                
                                <span className="ata-span-fx">author quote</span>
                            </div>

                            <p>
                                Lawrence Gabriel was born and raised in Mishawaka, Indiana.
                                He completed his undergraduate studies in psychology at Taylor 
                                University where he wrote for the college newspaper and played football.
                                He completed his Master’s degree in Counseling Psychology at Ball State University. 
                            </p>

                            <p>
                                He has been practicing now for more that 36-years 
                                working with a wide variety of psychological problem populations 
                                and issues. Some of these more recent issues include the Treatment 
                                of Sexual Abuse Survivors and Domestic Violence Survivors/Offenders, 
                                and the treatment of Sex Addiction and Sex Offenders.
                            </p>

                            <p>
                                 While working with
                                a preschool seeking guidance with behavior management for preschoolers
                                he created a children’s book that was published in 2017. The book,
                                (Book Title: “The Pig in Your Head”), includes a workbook curriculum designed
                                for both teachers and parents aimed at teaching self-regulation to the very young.
                            </p>

                            <p>
                                The author is also the creator of an innovative approach to couple’s therapy
                                called “Couple Archetypes: Introducing a Jungian Approach to “Couples Therapy”.
                                Most recently he has created a specific self-growth curriculum that maps a pathway
                                to one’s Authentic Self. His current project dedicated to the “Me Too” movement is 
                                a treatment approach designed to both measure the injury and heal the wound of sex 
                                abuse survivors. This healing journey mapped out in a book currently under construction
                                entitled “Purging the Trauma Laden Soul’ is an attempt to clarify the complexities 
                                of the soul’s organic response to a sexual violation event.
                            </p>

                            <p>
                                The Dreamwatcher Diaries has been a long-term project for the author,
                                set aside and resumed over a period of 17-years. The author remarked
                                that he would often experience great comfort revisiting certain passages 
                                that seemed to resonate with the spirit of hope. It is that hope, he shares,
                                that inspired him to publish. 
                            </p>

                            <p>
                                The proposal to use a pen name came as a suggestion from 
                                the publisher to the author. The idea was to choose a name that 
                                might resonate with angelic/spiritual tenor of the story.
                                The choice of the pen name ‘Lawrence Gabriel’ seemed to 
                                accomplish this and the rest as they say is history. 
                            </p>

                            <p>
                                <span className="author-name">
                                    <p className="auth-paragrpah">
                                        <span>Lawrence</span>
                                        <span>Gabriel</span>
                                    </p>
                                    <span className="author-span-ft">Author |  Writer </span>
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>
                 
            </Layout>
        </>
     )

 }

 export default AboutTheAuthor;