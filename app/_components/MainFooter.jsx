import React from 'react'

function MainFooter() {
  return (
    <>
    <div className="container-fluid alith_footer_right_reserved">
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-12 bottom-logo">
					<h1 className="logo"><a href='/'>DHĀRMIC DIALOGUE</a></h1>
					<div className="tagline social">
						<ul>
							<li className="youtube"><a target='_blank' href="https://www.youtube.com/@DharmicDialogue?sub_confirmation=1" aria-label='youtube'><i className="fa fa-youtube"></i></a></li>
							<li className="twitter"><a target='_blank' href="https://twitter.com/dharmicdialogue" aria-label='twitter'><i className="fa fa-twitter"></i></a></li>
							<li className="instagram"><a target='_blank' href="https://www.instagram.com/dharmicdialogue/" aria-label='instagram'><i className="fa fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
				<div className="col-12 col-md-12 coppyright"> <p>© Copyright 2024, All rights reserved. Design by DeveloperKK</p> </div>
			</div>
		</div>
	</div>
	<div className="gototop js-top">
		<a href="#" className="js-gotop"><span>Top</span></a>
	</div>
    </>
  )
}

export default MainFooter