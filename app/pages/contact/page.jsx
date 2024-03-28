import React from "react";

export function Contact() {
  return (
    <>
        <div className="container-fluid">
			<div className="container">
				<div className="primary margin-15">
					<div className="row">
						<div className="col-md-12">
							<article className="section_margin">
								<div className="post-content">
									<div className="single-header">
										<h3 className="alith_post_title">Contact us</h3>
									</div>
                                    <title>Contact Us | Dharmic Dialogue</title>
                                    <meta name="description" content="Contact Us | Dharmic Dialogue" />
                                    <div className="single-content animate-box">

										<div className="column-1 animate-box">
											<div className="row">
                                                <div className="col-md-12">
													<h2>Get in touch</h2>
													<form method="POST" id="form" className="comment-form">

                                                        <input type="hidden" name="access_key" value="f24d07eb-0708-4fea-bb09-708928ef175f"/>
                                                        <input type="hidden" name="subject" value="New Form Submission from Your Dharmic Dialogue Website"/>
                                                        <input type="checkbox" name="botcheck" id="" style={{display: "none"}}/>
                                                        <div className="row">
                                                            <div className="comment-form-author col-sm-12 col-md-6">
                                                                <label htmlFor="Name">Name (*)</label>
                                                                <input type="text" id="author" name="name" required placeholder="Your name" style={{border: "1px solid black"}}/>
                                                            </div>
                                                            <div className="comment-form-email col-sm-12 col-md-6">
                                                                <label htmlFor="Email">Email (*)</label>
                                                                <input type="email" name="email" required placeholder="email@example.com" style={{border: "1px solid black"}}/>
                                                            </div>
                                                        </div>
													    <p className="comment-form-comment">
                                                            <label htmlFor="Comment">Message</label>
                                                            <textarea name="message" required rows="4" placeholder="Enter Message"></textarea>
                                                        </p>
                                                        <div class="h-captcha" data-captcha="true"></div>
													    <p className="form-submit">
                                                            <input type="submit" name="submit" id="submit" className="submit" value="Send Message"/> 
                                                        </p>
                                                        <div id="result"></div>
												    </form>
												</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  );
}

export default Contact