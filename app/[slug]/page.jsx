"use client"
import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'

function Category({params}) {

    const [categoryPost,setCategoryPost]=useState([]);
    useEffect(()=>{
        params&&getPostByCategory()
    },[params])

    const getPostByCategory=()=>{
        GlobalApi.getCategoryPostList(params?.slug).then(resp=>{
            setCategoryPost(resp?.blogposts)
        })
    }
  return (
    <>
        <div className="container-fluid">
            <div className="container">
                <div className="primary margin-15">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="post_list grid-blance">
								<div className="row row-cols-1 row-cols-md-3">

                                    {categoryPost?.length>0? categoryPost.map((item,index)=>(
                                    <div key={index}>
                                        <article className="col-md-12 animate-box section_margin">
                                            <a href={'/post/'+item?.slug}>
                                                <div className="wrap">
                                                    <figure className="alith_news_img">
                                                        <span className="post_meta_categories_label">{item?.category}</span>
                                                        <a href={'/post/'+item?.slug}><Image src={item?.banner?.url} width={378} height={210} alt=""/></a>
                                                    </figure>
                                                </div>
                                                <h3 className="alith_post_title"><a href={'/post/'+item?.slug}>{item?.title}</a></h3>
                                                <div className="post_meta">
                                                    <a className='meta_author_avatar' href='/page-author'><img src="/author-img.png" alt="author details"/></a>
                                                    <span className="meta_author_name"><a className='author' href='/page-author'>{item?.author}</a></span>
                                                    <span className="meta_date">{item?.date}</span>
                                                </div>
                                                <p className="alith_post_except">{item?.description}</p>
                                                <div className="line-space"></div>
                                            </a>
                                        </article>
                                    </div>
                                    )):
                                    [1,2,3,4,5,6].map((item,index)=>(
                                        <div className="col-md-4 animate-box section_margin skeleton" aria-hidden="true">
                                            <div className='wrap'>
                                                <div className="bg-secondary mb-3 shimmer" style={{ height: '240px', width: '365px' }}></div>
                                            </div>
                                        </div>
                                    ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Category