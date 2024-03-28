"use client"
import RecentPosts from "./_components/RecentPosts";
import CarouselPosts from "./_components/CarouselPosts";
export default function Home() {
  

  return (
    <>
    <title>Dharmic Dialogue</title>
    <meta name="description" content="The Dharmic Dialogue is your destination to explore diverse perspectives on various topics through the lens of Dharmikta or the indigenous perspective, without being swayed by Western thought processes. Dive into insightful opinions and essays, and if you wish to stay informed, join our community and subscribe to our newsletter." />
    <link href="/banner.png" rel="image_src"/>
    <meta property="og:type" content="WebSite" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@dharmicdialogue" />
		<meta name="twitter:creator" content="@dharmicdialogue"/>
		<meta name="twitter:url" content="https://dharmicdialogue.vercel.app/" />
		<meta name="twitter:title" content="Dharmic Dialogue" />
		<meta name="twitter:description" content="The Dharmic Dialogue is your destination to explore diverse perspectives on various topics through the lens of Dharmikta or the indigenous perspective, without being swayed by Western thought processes. Dive into insightful opinions and essays, and if you wish to stay informed, join our community and subscribe to our newsletter." />
    <meta name="twitter:image" content="/banner.png" />
		<meta name="twitter:image:src" content="/banner.png" />
		<meta property="og:url" content="https://dharmicdialogue.vercel.app/" />
		<meta property="og:title" content="Dharmic Dialogue" />
		<meta property="og:description" content="The Dharmic Dialogue is your destination to explore diverse perspectives on various topics through the lens of Dharmikta or the indigenous perspective, without being swayed by Western thought processes. Dive into insightful opinions and essays, and if you wish to stay informed, join our community and subscribe to our newsletter." />
    <meta name="og:image" content="/banner.png" />


    <div className="container-fluid">
			<div className="container animate-box" data-animate-effect="fadeIn">
				<div className="row">
					<div className="owl-carousel owl-theme-js section_margin" id="slideshow_big">
            <CarouselPosts/>
          </div>
        </div>
      </div>
    </div>



    <div className="container-fluid">
      <div className="container">
        <div className="primary margin-15">
          <div className="row">
            <div className="col-md-12">
              
              <div className="post_list grid-blance">
								<div className="row row-cols-1 row-cols-md-3">
                  <RecentPosts/>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
