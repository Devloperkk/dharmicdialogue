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

										<title>{item?.name}</title>
										<meta name="description" content={item?.description} />
                                        <link href="/banner.png" rel="image_src"/>
										<meta property="og:type" content="BlogPosting" />
										<meta name="twitter:card" content="summary_large_image" />
										<meta name="twitter:site" content="@dharmicdialogue" />
										<meta name="twitter:creator" content="@dharmicdialogue"/>
										<meta name="twitter:url" content={'https://dharmicdialogue.com/pages/'+item?.slug} />
										<meta name="twitter:title" content={item?.name} />
										<meta name="twitter:description" content={item?.description} />
										<meta name="twitter:image" content="/banner.png" />
										<meta name="twitter:image:src" content="/banner.png" />
										<meta property="og:url" content={'https://dharmicdialogue.com/pages/'+item?.slug} />
										<meta property="og:title" content={item?.name} />
										<meta property="og:description" content={item?.description} />
										<meta property="og:image" content="/banner.png" />




										<div className="post-content">
										<div className="single-header">
											<h3 className="alith_post_title">{item?.name}</h3>
										</div>
											<div className="single-content animate-box">
												<div className="dropcap column-1 animate-box" style={{fontSize:"20px"}}>
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