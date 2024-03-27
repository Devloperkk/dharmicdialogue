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
    <div class="container-fluid">
			<div class="container">
				<div class="primary margin-15">
					<div class="row">
						<div class="col-md-12">

							{pageInfo?.map((item,index)=>(
								<div key={index}>
									<article class="section_margin">
										<div class="post-content">
										<div class="single-header">
											<h3 class="alith_post_title">{item?.name}</h3>
										</div>
											<div class="single-content animate-box">
												<div class="dropcap column-2 animate-box">
													<Markdown>{item?.content?.markdown}</Markdown>
												</div>
												<div class="post-tags">
													
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