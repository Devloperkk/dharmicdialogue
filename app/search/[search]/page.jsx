'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi'

function search() {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')

    const [searchPost,setSearchPost]=useState([]);
    useEffect(()=>{
        search&&getPostListBySearch()
    },[search])
    const getPostListBySearch=()=>{
        GlobalApi.getPostBySearch(search).then(resp=>{
            console.log(resp)
            setSearchPost(resp?.blogposts)
        })
    }

    return (
    <>
        <div className="container-fluid">
			<div className="container animate-box">
				<div className="row">
					<div className="archive-header">
						<div className="archive-title"><h2>Search Results for: <em>{search}</em></h2></div>
					</div>
				</div>
			</div>
		</div>
        <title>{'Search Results for '+search+' | Dharmic Dialogue'}</title>
		<meta name="description" content="The Dharmic Dialogue is your destination to explore diverse perspectives on various topics through the lens of Dharmikta or the indigenous perspective, without being swayed by Western thought processes. Dive into insightful opinions and essays, and if you wish to stay informed, join our community and subscribe to our newsletter." />
        <link href="/banner.png" rel="image_src"/>
		<meta property="og:type" content="search" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@dharmicdialogue" />
		<meta name="twitter:creator" content="@dharmicdialogue"/>
		<meta name="twitter:url" content={'https://dharmicdialogue.vercel.app/search/a?search='+search} />
		<meta name="twitter:title" content='Search Results | Dharmic Dialogue' />
		<meta name="twitter:description" content="The Dharmic Dialogue is your destination to explore diverse perspectives on various topics through the lens of Dharmikta or the indigenous perspective, without being swayed by Western thought processes. Dive into insightful opinions and essays, and if you wish to stay informed, join our community and subscribe to our newsletter." />
        <meta name="twitter:image" content="/banner.png" />
		<meta name="twitter:image:src" content="/banner.png" />
		<meta property="og:url" content={'https://dharmicdialogue.vercel.app/search/a?search='+search} />
		<meta property="og:title" content="Search Results | Dharmic Dialogue" />
		<meta property="og:description" content="The Dharmic Dialogue is your destination to explore diverse perspectives on various topics through the lens of Dharmikta or the indigenous perspective, without being swayed by Western thought processes. Dive into insightful opinions and essays, and if you wish to stay informed, join our community and subscribe to our newsletter." />
        <meta property="og:image" content="/banner.png" />



        <div className="container-fluid">
			<div className="container">
				<div className="primary margin-15">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="post_list post_list_style_1">

                                {searchPost.map((item,index)=>(
                                    <div key={index}>
                                        <a href={'/post/'+item?.slug}>
                                            <article className="row section_margin animate-box">
                                                <div className="col-md-4 animate-box">
                                                    <figure className="alith_news_img"><Image src={item?.banner?.url} width={500} height={500} alt=""/></figure>
                                                </div>
                                                <div className="col-md-8 animate-box">
                                                    <h3 className="alith_post_title"><a href={'/post/'+item?.slug}>{item?.title}</a></h3>
                                                    <div className="post_meta">
                                                        <a className='meta_author_avatar' href='/page-author'><img src="/author-img.png" alt="author details"/></a>
                                                        <span className="meta_author_name"><a className='author' href='/page-author'>{item?.author}</a></span>
                                                        <span className="meta_categories"><a href={'/'+item?.category}>{item?.category}</a></span>
                                                        <span className="meta_date">{item?.date}</span>
                                                    </div>
                                                    <p className="alith_post_except">Aliquet accumsan etiam pharetra quisque turpis et metus nullam suspendisse ultricies, eu tempus phasellus platea lectus maecenas lorem sagittis pretium </p>
                                                    <a className='read_more' href={'/post/'+item?.slug}>Read More</a>
                                                </div>
                                            </article>
                                        </a>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default search