'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import GlobalApi from './_utils/GlobalApi'

function search() {
    const searchParams = useSearchParams()
    const search = searchParams.get('s')

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