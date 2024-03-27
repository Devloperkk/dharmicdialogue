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
        <div class="container-fluid">
			<div class="container">
				<div class="primary margin-15">
					<div class="row">
						<div class="col-md-12">

							{postInfo?.map((item,index)=>(
								<div key={index}>
									<article class="section_margin">
										
										<figure className="alith_news_img animate-box">
											<Image src={item?.banner?.url} width={1146} height={1509} alt=""/>
										</figure>

										<div class="post-content">
											<div class="single-header">
												<h2 class="alith_post_title">{item?.title}</h2>
												<p className="alith_post_except">{item?.description}</p>
												<div class="post_meta">
													<a class='meta_author_avatar' href='/page-author'><img src="/author-img.png" alt="author details"/> </a>
													<span class="meta_author_name"><a class='author' href='/page-author'> {item?.author}</a></span>
													<span class="meta_categories"><a href={'/'+item?.category}>{item?.category}</a></span>
													<span class="meta_date">{item?.date}</span>
												</div>
											</div>
											<div class="single-content animate-box">
												<div class="dropcap column-2 animate-box">
													<Markdown>{item?.content?.markdown}</Markdown>
												</div>
												<div class="post-tags">
													
												</div>
												<div class="post-share">
													<ul>
														<li class="facebook"><a href={'https://www.facebook.com/sharer.php?u=https://localhost:3000/post/'+item?.slug} target='_blank'><i class="fa fa-facebook"></i></a></li>
														<li class="twitter"><a href={'https://twitter.com/intent/tweet?url=https://localhost:3000/post/'+item?.slug+'&text='+item?.title} target='_blank'><i class="fa fa-twitter"></i></a></li>
														<li class="whatsapp"><a href={'https://api.whatsapp.com/send?text='+item?.title+' | '+item?.slug} target='_blank'><i class="fa fa-whatsapp"></i></a></li>
														<li class="linkedin"><a href={'https://www.linkedin.com/shareArticle?url='+item?.slug} target='_blank'><i class="fa fa-linkedin"></i></a></li>
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