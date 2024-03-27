import Image from 'next/image';
import GlobalApi from '/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function CarouselPosts() {

    const [carouselPostList,setCarouselPostList]=useState([]);
	useEffect(()=>{
		getCarouselPosts();
	},[]);

	const getCarouselPosts=()=>{
		GlobalApi.getCarouselPostList().then(resp=>{
			setCarouselPostList(resp?.blogposts)
		})
	}

  return (
    <>
    {carouselPostList.map((item,index)=>(
	<div key={index}>
        <div className="item">
		<a href={'/post/'+item?.slug}>
			<div className="alith_post_content_big animate-box">
				<div className="alith_post_content_big_inner animate-box">
					<div className="alith_post_content_big_mark"></div>
					<div className="alith_post_content_big_caption">
						<div className="post_meta_center">
							<span className="post_meta_date">{item?.date}</span>
						</div>
						<h2 className="alith_post_title">
							<a href={'/post/'+item?.slug}>{item?.title}</a>
						</h2>
						<p className="alith_post_except"><a href={'/post/'+item?.slug}>KEEP READING</a></p>
					</div>
				</div>
				<figure className="alith_post_thumb_big">
					<span className="post_meta_categories_label">{item?.category}</span>
					<a href={item?.slug}><Image src={item?.banner?.url} width={1116} height={509} alt=""/></a>
				</figure>
			</div>
		</a>
		</div>
    </div>
    ))}
	
    </>
)
}

export default CarouselPosts