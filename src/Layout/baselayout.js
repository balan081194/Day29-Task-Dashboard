import React from 'react'
import Aside from './aside'
import Header from './header'
import Footer from './footer'

export default function BaseLayout() {
    return (
        <div>

            <Aside />
            <div id="right-panel" class="right-panel">
                <Header />
                <div class="content">

                    <div class="animated fadeIn">
                        <h1>This is my content</h1>
                    </div>
                </div>
             
                <Footer />
            </div>
        </div>
    )
}
