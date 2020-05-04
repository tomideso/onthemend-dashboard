import React from 'react'

const Banner = () => {
    return (
        <div className="uk-grid-small uk-grid-match uk-text-center uk-child-width-auto@m uk-margin-top" uk-grid="">

            <div className="uk-width-2-3@m">
                <div>
                    <div>BANNER IMAGE</div>
                    <div className="uk-height-match"><img className="uk-preserve" data-src={"/Image/banner.jpg"} alt="" uk-img="" /></div>
                    <div>
                        <button className="uk-button uk-text-capitalize uk-float-left uk-button-link">Change</button>
                        <button className="uk-button uk-text-capitalize uk-float-right uk-button-link">Delete</button>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>LOGO</div>
                    <div>
                        <img className="uk-preserve" data-src={"/Image/Logo.svg"} alt="" uk-img="" />
                    </div>
                    <div>
                        <button className="uk-button uk-text-capitalize uk-float-left uk-button-link">Change</button>
                        <button className="uk-button uk-text-capitalize uk-float-right uk-button-link">Delete</button>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>THUMBNAIL</div>
                    <div>
                        <img className="uk-preserve" data-src={"/Image/Logo.svg"} height="200" alt="" uk-img="" />
                    </div>
                    <div>
                        <button className="uk-button uk-text-capitalize uk-float-left uk-button-link">Change</button>
                        <button className="uk-button uk-text-capitalize uk-float-right uk-button-link">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
