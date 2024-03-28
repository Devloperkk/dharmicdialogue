'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi'
import Image from 'next/image';
import Markdown from 'react-markdown'

function page({params}) {

    const [postInfo,setPostInfo]=useState();
    useEffect(()=>{
		params&&getPostInfoBySlug();
    },[params])

    const getPostInfoBySlug=()=>{
        GlobalApi.getPostBySlug(params?.postSlug).then(resp=>{
			setPostInfo(resp?.blogposts)
		})
    }

  return (
    <>
        <div className="container-fluid">
			<div className="container">
				<div className="primary margin-15">
					<div className="row">
						<div className="col-md-12">

							{postInfo?.map((item,index)=>(
								<div key={index}>
									<article className="section_margin">
										{/* meta data */}
										<div dangerouslySetInnerHTML={{ __html: item?.metaData }}></div>
										


										<figure className="alith_news_img animate-box">
											<Image src={item?.banner?.url} width={1146} height={1509} alt=""/>
										</figure>

										<div className="post-content">
											<div className="single-header">
												<h2 className="alith_post_title">{item?.title}</h2>
												<p className="alith_post_except">{item?.description}</p>
												<div className="post_meta">
													<a className='meta_author_avatar' href={'/author/'+item?.authorSlug}><img src="/author-img.png" alt="author details"/> </a>
													<span className="meta_author_name"><a className='author' href={'/author/'+item?.authorSlug}> {item?.author}</a></span>
													<span className="meta_categories"><a href={'/'+item?.category}>{item?.category}</a></span>
													<span className="meta_date">{item?.date}</span>
												</div>
											</div>
											<div className="single-content animate-box">
												<div className="dropcap column-1 animate-box" style={{fontSize:"20px"}}>
													<Markdown>{item?.content?.markdown}</Markdown>
												</div>
												<div className="post-tags">
													<div className="post-tags-inner">
														<a href={'/tags/'+item?.tags[0]} rel='tag'>{item?.tags[0]}</a>
														<a href={'/tags/'+item?.tags[1]} rel='tag'>{item?.tags[1]}</a>
														<a href={'/tags/'+item?.tags[2]} rel='tag'>{item?.tags[2]}</a>
														<a href={'/tags/'+item?.tags[3]} rel='tag'>{item?.tags[3]}</a>
													</div>
												</div>
												<div className="post-share">
													<ul>
														<li className="facebook"><a href={'https://www.facebook.com/sharer.php?u=https://dharmicdialogue.vercel.app/post/'+item?.slug} target='_blank'><i className="fa fa-facebook"></i></a></li>
														<li className="twitter"><a href={'https://twitter.com/intent/tweet?url=https://dharmicdialogue.vercel.app/post/'+item?.slug+'&text='+item?.title} target='_blank'><i className="fa fa-twitter"></i></a></li>
														<li className="whatsapp"><a href={'https://api.whatsapp.com/send?text='+item?.title+' | https://dharmicdialogue.vercel.app/post/'+item?.slug} target='_blank'><i className="fa fa-whatsapp"></i></a></li>
														<li className="linkedin"><a href={'https://www.linkedin.com/shareArticle?url=https://dharmicdialogue.vercel.app/post/'+item?.slug} target='_blank'><i className="fa fa-linkedin"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
									</article>
								</div>
							))}
							
						</div>
					</div>
				</div>
			</div>
		</div>
			
    </>
)
}

export default page