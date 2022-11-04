

const Experience = () => {

    return (
        <section id="pricing" className="pricing-area gray-bg pt-125 pb-130 my-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center pb-5">
                            <h2 className="title">Work Experience</h2>
                            <p>I took a two year gap after graduation doing valuntry work in different cities, however my
                                <strong>LOVE</strong> for development never seized...</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* loop experience */}
                    <div className="col-md-12 my-3">
                        <div className="card single-service" title="">
                            <div className="card-header">
                                < img src="'.$comapanyLogo.'" title="https://lucidocean.com" alt="" width={10} height={10} style={{ "width": "10em" }} />
                                <h4>'.$experience['company'].' (pyt) '.$experience['start'].' - '.$experience['end'].'</h4>
                                <span className="float-right">'.$experience['position'].'</span>
                            </div>
                            <div className="card-body">
                                <p>'.$experience['responsibility'].'</p>
                            </div>
                            <div className="card-footer">
                                <p>'.$experience['city'].', '.$experience['country'].'</p>
                            </div>
                        </div>
                    </div> ';
                    {/* close loop */}
                </div>
            </div>
        </section>
    )
}

export default Experience;