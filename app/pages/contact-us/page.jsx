'use client'
import React from "react";

export function ContactUs() {

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "f24d07eb-0708-4fea-bb09-708928ef175f",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }


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
													<form onSubmit={handleSubmit} id="form" className="comment-form">

                                                        <div className="row">
                                                            <div className="comment-form-author col-sm-12 col-md-6">
                                                                <label htmlFor="name">Name (*)</label>
                                                                <input type="text" id="author" name="name" required placeholder="Your name" style={{border: "1px solid black"}}/>
                                                            </div>
                                                            <div className="comment-form-email col-sm-12 col-md-6">
                                                                <label htmlFor="email">Email (*)</label>
                                                                <input type="email" name="email" required placeholder="email@example.com" style={{border: "1px solid black"}}/>
                                                            </div>
                                                        </div>
													    <p className="comment-form-comment">
                                                            <label htmlFor="message">Message</label>
                                                            <textarea name="message" required rows="4" placeholder="Enter Message"></textarea>
                                                        </p>
													    <p className="form-submit">
                                                            <button type="submit" id="submit" className="submit">Send Message</button>
                                                        </p>
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

export default ContactUs;