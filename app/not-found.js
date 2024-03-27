import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-fluid">
		<div className="container">
			<div className="primary margin-15">
				<div className="row">
					<div className="col-md-12">
						<article className="section_margin">
							<div className="post-content">
								<div className="single-content animate-box">
									<div className="page_404 animate-box">
									    <h1>404</h1>
									    <h2>Page Not Found</h2>
									    <p>The page requested couldn't be found. This could a spelling error in the URL or a removed page. </p>
									    <p><a className='alith_button' href='/'>Home Page</a></p>
									</div>
								</div>
                            </div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}