import React from 'react'

let date = new Date();
let dayName = date.toLocaleDateString("en-us",{ weekday: 'long'});
let currentDate = date.getDate();
let currentMonth = date.toLocaleDateString("en-us",{ month: 'long'});
let currentYear = date.getFullYear();


function MainNavbar() {
  return (
    <>
    <div id="page-content-wrapper">
      <div className="container-fluid">
        <div className="container">
          <div className="top_bar margin-15">
            <div className="row">
              <div className="col-md-6 col-sm-12 time">
								<div id="off-canvas-toggle"><p className="sidebar-open">EN</p></div>
                <i className="fa fa-clock-o"></i><span>&nbsp;&nbsp;&nbsp;{dayName}, {currentDate} {currentMonth} {currentYear}</span>
              </div>
              <div className="col-md-6 col-sm-12 social">
                <ul>
                  <li><a target='_blank' href="https://www.youtube.com/@DharmicDialogue?sub_confirmation=1" aria-label='youtube'><i className="fa fa-youtube"></i></a></li>
                  <li><a target='_blank' href="https://twitter.com/dharmicdialogue" aria-label='twitter'><i className="fa fa-twitter"></i></a></li>
                  <li><a target='_blank' href="https://www.instagram.com/dharmicdialogue/" aria-label='instagram'><i className="fa fa-instagram"></i></a></li>
                </ul>
                <div className="top-search">
									<i className="fa fa-search"></i><span>SEARCH</span>
								</div>
								<div className="top-search-form">
									<form action="/search/" className="search-form" method="get" role="search">
										<label>
											<span className="screen-reader-text">Search for:</span>
											<input type="search" name="s" placeholder="Search …" className="search-field"/>
										</label>
										<input type="submit" value="Search" className="search-submit"/>
									</form>
								</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 header">
              <h1 className="logo"><a href='/'>DHARMIC DIALOGUE</a></h1>
              <p className="tagline">TOWARDS THE TRUTH</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-nav section_margin">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 main_nav_cover" id="nav">
                <ul id="main-menu">
                  <li><a href='/Philosophy'>Philosophy</a></li>
                  <li><a href='/Science'>Science</a></li>
                  <li><a href='/Society'>Society</a></li>
                  <li><a href='/Culture'>Culture</a></li>
                  <li><a href='/Opinion'>Opinion</a></li>
                  <li><a href='/History'>History</a></li>
                  <li><a href='/Architecture'>Architecture</a></li>
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

export default MainNavbar