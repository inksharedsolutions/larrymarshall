import React from 'react'
import Book1 from '../../static/book/book_cover.png'


import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/layout'
import Banner from '../components/banner'
import BookInfo  from '../components/book-info/book-info'
import ABA from './about-the-author'

const AboutTheBook= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'lawrence-gabriel',
	  config: { identifier:  12, slug}
	}

	const bannerText = (
		<>	
			<span className="banr-tagline-fx">Gardiner Noble</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Book</span>
			</h1>
		</>
	)

	return(
		<Layout extPath={false}>
			
            <Banner 
				spanFirst={`About the`}
				contextHeading={`Book`}
            />

			<main className="wrapperMain">
				<div 
					className="container"
					id="book-containers" >

						<BookInfo
							data={{
								title:`The Dreamwatcher Diaries`,
								spanTitle: 'A St.Louis Love Story',
								imgSrc: Book1,
								id:'dreamwatcher',
								content:
								`Discouraged and disillusioned in the search for her soul mate, Lindsay Parker makes a startling discovery 
								after moving into her new loft in Downtown St. Louis. 
								There in the window box at her new home, she finds a blue box labeled 
								"The Dreamwatcher Diaries." Opening the box, she finds a diary written by 
								the loft's former tenant, Faith. Lindsay becomes entranced by the dream-believing
								couple whose romance comes alive within the diary's pages. A sudden and mysterious 
								end to the diary's chapters compels Lindsay to engage in a search for the author 
								and solve the mystery behind The Dreamwatcher Diaries.`,

								ebooks:{
									stratton : 'https://www.stratton-press.com/books/the-dreamwatcher-diaries-a-st-louis-love-story/',
									barnes: 'https://www.barnesandnoble.com/w/the-dream-watcher-diaries-lawrence-gabriel/1136405589?ean=9781643459202',
									amazon :'https://www.amazon.com/Dreamwatcher-Diaries-Louis-Love-Story-ebook/dp/B084Q9N9QN/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1582040498&sr=8-1', 
								},
								paperback:{
									amazon:'https://www.amazon.com/dp/1643456644/ref=sr_1_1?keywords=9781643456645&qid=1582040498&sr=8-1',
									barnes:'https://www.barnesandnoble.com/w/the-dream-watcher-diaries-lawrence-gabriel/1136405589?ean=9781643456645',
									booksamillion:'https://www.booksamillion.com/p/Dreamwatcher-Diaries/Lawrence-Gabriel/9781643456645?id=7714171848832#',
								}
							}}
						/>

							
						<div className="commentSection" >
							<DiscussionEmbed {...disqusConfig} />
						</div>
				</div>	
			</main>


	  	</Layout>
	)
}

export default AboutTheBook;