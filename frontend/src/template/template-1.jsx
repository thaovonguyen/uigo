import React from 'react';

function HTMLComponent() {
    const htmlContent = `
        <header class="header-block">This is a header</header>
        <nav class="body-block">This is the body</nav>
        <footer class="footer-block">This is the footer</footer>
    `;

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}

export default HTMLComponent;