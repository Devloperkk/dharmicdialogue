"use client"
import RecentPosts from "./_components/RecentPosts";
import CarouselPosts from "./_components/CarouselPosts";
export default function Home() {
  

  return (
    <>
    

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
