'use client'
import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi'

function authorPage({params}) {

    const [authorPost,setAuthorPost]=useState([]);
    const [authorInfo,setAuthorInfo]=useState([]);
    useEffect(()=>{
        params&&getPostByAuthor()
    },[params])

    const getPostByAuthor=()=>{
        GlobalApi.getAuthorPostList(params?.authorSlug).then(resp=>{
            console.log(resp)
            setAuthorPost(resp?.blogposts)
            setAuthorInfo(resp?.authorDetails)
        })
    }



  return (
    <>
        <div className="container-fluid">
			<div className="container animate-box">
				<div className="row">
					<div className="archive-header">
						<div className="post-author-info">
							{authorInfo.map((item,index) => (
								<div key={index}>
									<Image className="section_margin_20" src={item?.authorPicture?.url} width={150} height={150} alt="author details"/>
									<div className="archive-title"><h2>{item?.authorName}</h2></div>
									<p>{item?.authorDescription}</p>
									<ul>
										<li><a href={item?.instagramHandel} aria-label='author-social-link'><i className="fa fa-instagram"></i></a></li>
										<li><a href={item?.twitterHandel} aria-label='author-social-link'><i className="fa fa-twitter"></i></a></li>
										<li><a href={item?.linkedinHandel} aria-label='author-social-link'><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
    
	
		<div className="container-fluid">
			<div className="container">
				<div className="primary margin-15">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="post_list post_list_style_1">

                                {authorPost.map((item,index)=>(
                                    <div key={index}>
                                        <a href={'/post/'+item?.slug}>
                                            <article className="row section_margin animate-box">
                                                <div className="col-md-4 animate-box">
                                                    <figure className="alith_news_img"><Image src={item?.banner?.url} width={500} height={500} alt=""/></figure>
                                                </div>
                                                <div className="col-md-8 animate-box">
                                                    <h3 className="alith_post_title"><a href={'/post/'+item?.slug}>{item?.title}</a></h3>
                                                    <div className="post_meta">
                                                        <a className='meta_author_avatar' href={'/author/'+item?.authorSlug}><img src="/author-img.png" alt="author details"/></a>
                                                        <span className="meta_author_name"><a className='author' href={'/author/'+item?.authorSlug}>{item?.author}</a></span>
                                                        <span className="meta_categories"><a href={'/'+item?.category}>{item?.category}</a></span>
                                                        <span className="meta_date">{item?.date}</span>
                                                    </div>
                                                    <p className="alith_post_except">{item?.description}</p>
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

export default authorPage