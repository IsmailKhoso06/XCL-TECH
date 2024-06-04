import React from 'react'

function AboutUsText() {
    return (
        <>
            <div className="container py-4">
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100">
                            <p>XCL Technologies Is A Leading Software Development, Web Development, Mobile App Development, Digital Marketing Including SEO Service Provider Company, Our company is ISO certified,10pxc which means we have met international standards for quality management and are committed to providing our clients with the highest level of service. We believe that our Innovative, Creative and skilled IT staff Is Our Company's Backbone.
                                <br /><br />
                                XCL Technologies Was Founded In Pakistan Having Marketing Offices In United Arab Emirates And Unites States Of America, To Provide Creative Web Design, Software Development, Web Development And Mobile App Development, Graphic Design And Digital Marketing Including SEO Service From Static Presentation Websites To Complex Database Driven With CMS, Ecommerce Websites Development.
                                <br /><br />
                                Among The Very Few In The Sector, We Have Also Stepped In Successfully To Introduce The Complete Business Automation Process That Has So Far Proved Its Worth.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 className="display-5 fw-bold text-center" style={{paddingTop:"15%", color:"#F67510", textShadow:"1px 1px 5px #F67510", fontSize:"70px", lineHeight:"0.8"}}>Welcome.</h6>
                        <h6 className="display-5 fw-bold text-center" style={{lineHeight:"1.3", fontSize:"30px", letterSpacing:"5px"}} >To The New <span style={{margin: "-10px 0px", padding: "0px 30px", background:"#F67510", color: "white", borderTopLeftRadius:"20px", borderBottomRightRadius:"20px"}}>World</span> </h6>

                        <img src='./public/Man.png' style={{position: "absolute",marginTop: "-220px", marginLeft:"17rem", zIndex:"-1", width:"300px" }} />

                    </div>
                </div>


            </div>
        </>
    )
}

export default AboutUsText
 