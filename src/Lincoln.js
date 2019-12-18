import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import Markdown from './modules/components/Markdown';
import lincoln from './markdown/lincoln.md';

function Index() {
    return (
        <React.Fragment>
            <AppAppBar />
            <Markdown md={lincoln}></Markdown>
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Index);
