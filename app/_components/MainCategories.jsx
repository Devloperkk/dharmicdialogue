'use client'
import React from 'react'
import GlobalApi from '/app/_utils/GlobalApi'
import { useEffect, useState } from 'react'

function MainCategories() {
	
	const [postList,setPostList]=useState([]);
	useEffect(()=>{
		getAllPosts();
	},[]);

	const getAllPosts=()=>{
		GlobalApi.getAllTagList().then(resp=>{
			setPostList(resp?.blogposts)
		})
	}

  return (
    <>
    <div className="container-fluid">
		<div className="container animate-box">
			<div className="bottom margin-15">
				<div className="row">

					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
						<div className="sidebar-widget">
							<div className="widget-title-cover"><h4 className="widget-title"><span>Top Categories</span></h4></div>
							<ul className="bottom_menu">
								<li><a href="/Philosophy" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Philosophy</a></li>
								<li><a href="/Science" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Science</a></li>
								<li><a href="/Society" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Society</a></li>
								<li><a href="/Culture" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Culture</a></li>
								<li><a href="/Opinion" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Opinion</a></li>
								<li><a href="/History" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; History</a></li>
								<li><a href="/Architecture" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Architecture</a></li>
							</ul>
						</div>
					</div>

					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
						<div className="sidebar-widget">
							<div className="widget-title-cover"><h4 className="widget-title"><span>Quick Links</span></h4></div>
							<ul className="bottom_menu">
								<li><a href="/pages/privacy-policy" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Privacy Policy</a></li>
								<li><a href="/pages/terms-and-conditions" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; T&C</a></li>
								<li><a href="/pages/disclaimer" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Disclaimer</a></li>
								<li><a href="/contact" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Contact Us</a></li>
								<li><a href="/pages/newsletter" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; Newsletter</a></li>
								<li><a href="/pages/about-us" className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; About Us</a></li>
							</ul>
						</div>
					</div>

					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
						<div className="sidebar-widget">
							<div className="widget-title-cover"><h4 className="widget-title"><span>Recent Tags</span></h4></div>
							<ul className="bottom_menu">
								{postList.map((item,index)=>(
								<div key={index}>
									<li><a href={'/search/a?search='+item?.tags[0]} className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; {item?.tags[0]}</a></li>
									<li><a href={'/search/a?search='+item?.tags[1]} className=""><i className="fa fa-angle-right"></i>&nbsp;&nbsp; {item?.tags[1]}</a></li>
								</div>
								))}
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default MainCategories