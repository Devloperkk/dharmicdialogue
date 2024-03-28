'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi'
import Image from 'next/image';
import Markdown from 'react-markdown'

function page({params}) {

    const [pageInfo,setPageInfo]=useState();
    useEffect(()=>{
		params&&getPageInfoBySlug();
    },[params])

    const getPageInfoBySlug=()=>{
        GlobalApi.getPageBySlug(params?.pageSlug).then(resp=>{
			setPageInfo(resp?.pages)
		})
    }

  return (
    <>
    <div className="container-fluid">
			<div className="container">
				<div className="primary margin-15">
					<div className="row">
						<div className="col-md-12">

							{pageInfo?.map((item,index)=>(
								<div key={index}>
									<article className="section_margin">
										<div className="post-content">
										<div className="single-header">
											<h3 className="alith_post_title">{item?.name}</h3>
										</div>
											<div className="single-content animate-box">
												<div className="dropcap mx-md-5 column-1 animate-box" style={{fontSize:"20px"}}>
													<Markdown>{item?.content?.markdown}</Markdown>
												</div>
												<div className="post-tags">
													
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