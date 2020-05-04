import React from 'react'

const index = () => {
    return (
        <div>
            Hospital
            <ul className="uk-tab" data-uk-tab="{connect:'#my-id'}">
                <li><a href="shcool">Tab 1</a></li>
                <li><a href="">Tab 2</a></li>
                <li><a href="">Tab 3</a></li>
            </ul>
            <ul id="my-id" className="uk-switcher uk-margin">
                <li><a href="#" id="autoplayer" data-uk-switcher-item="next"></a>
     This slide contains a hidden link, that selects the next slide when clicked. The click is simulated by jacascript to mimic autoplay.
      </li>
                <li>Content 2</li>
                <li>Content 3</li>
            </ul>
        </div>
    )
}

export default index
