import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './gallery.css';

const images = [
    {
        original: './static/front.jpeg',
        thumbnail: './static/front.jpeg',
    },
    {
        original: './static/lobby.jpeg',
        thumbnail: './static/lobby.jpeg',
    },
    {
        original: './static/lobby2.jpeg',
        thumbnail: './static/lobby2.jpeg',
    },
];

function Index() {
    return (
        <React.Fragment>
            <AppAppBar />
            <ImageGallery items={images} showFullscreenButton={false} />
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Index);
