import Image from 'next/image';
import GlobalApi from '/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function RecentPosts() {
  
	const [postList,setPostList]=useState([]);
	useEffect(()=>{
		getAllPosts();
	},[]);

	const getAllPosts=()=>{
		GlobalApi.getAllPostList().then(resp=>{
			setPostList(resp?.blogposts)
		})
	}

  return (
    <>
    {postList?.length>0? postList.map((item,index)=>(
	<div key={index}>
		<article className="col-md-12 animate-box section_margin">
			<a href={'post/'+item?.slug}>
				<div className="wrap">
					<figure className="alith_news_img">
						<span className="post_meta_categories_label"><a href={'/'+item?.category} style={{color:"white"}}>{item?.category}</a></span>
						<Image src={item?.banner?.url} width={378} height={210} alt=""/>
					</figure>
				</div>
				<h3 className="alith_post_title">{item?.title}</h3>
				<div className="post_meta">
					<a className='meta_author_avatar' href='/page-author'><Image src="/author-img.png" width={10} height={10} alt="author-details"/> </a>
					<span className="meta_author_name"><a className='author' href='/page-author'> {item?.author}</a></span>
					<span className="meta_date">{item?.date}</span>
				</div>
				<p className="alith_post_except">{item?.description}</p>
				<div className="line-space"></div>
			</a>
		</article>

    </div>
    )):
	[1,2,3,4,5,6,7,8,9].map((item,index)=>(
		<div key={index} className="col-md-4 animate-box section_margin skeleton" aria-hidden="true">
			<div className='wrap'>
				<div className="bg-secondary mb-3 shimmer" style={{ height: '240px', width: '365px' }}></div>
			</div>
		</div>
	))
	}
    </>
  )
}

export default RecentPosts