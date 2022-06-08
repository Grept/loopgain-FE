import React from "react";
import "./HomePage.scss";

export default function HomePage() {

    // RENDER
    return (
        <>
            <main className="homepage">
                <section className="homepage__container">
                    <h1 className="introtext__header">LOOPGAIN</h1>
                    <p className="introtext introtext--introduction">Loopgain is a webapplication designed to collect
                        feedback on mediaprojects. Register as a <strong className="keyword">Project-Host</ strong>, create a project, and upload a mediafile that needs reviewing.
                        Uploaded files will show up to users registered as a <strong className="keyword">Reviewer</ strong>. A Reviewer can watch the content and simultaniously write
                        remarks. When remarks are saved they show up for the Project-Host and feedback is
                        collected. The comments are associated with a moment in the mediafile via timestamps.</p>
                    <p className="introtext introtext--demo-accounts">Checkout the demo accounts to get a feel of what's
                        possible. Login as Sam (password: sam123) to
                        experience Project-Host capabilities. Use the account Johan (password: johan123) to review
                        uploaded content.</p>
                    <p className="introtext introtext--new-account">Or register as a new user and start your own
                        projects.</p>
                    <p className="introtext introtext--goodbye"><strong className="keyword">Happy Reviewing!</ strong></p>
                </section>
            </main>
        </>
    );
}