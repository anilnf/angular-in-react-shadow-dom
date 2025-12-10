import { useEffect } from 'react';

const AngularWidget = () => {
    useEffect(() => {
        const loadScript = (src: string) => {
            if (document.querySelector(`script[src="${src}"]`)) return;
            const script = document.createElement('script');
            script.src = src;
            script.type = 'module';
            // Important for Angular Elements to bootstrap correctly if they use modules
            script.async = true;
            document.body.appendChild(script);
        };

        loadScript('/angular-widget/polyfills.js');
        loadScript('/angular-widget/main.js');

        // Optional: Load styles if global styles are needed.
        // For ShadowDOM encapsulated component, styles are inside, but standard Angular styles.css might be relevant.
        const loadStyle = (href: string) => {
            if (document.querySelector(`link[href="${href}"]`)) return;
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        }
        loadStyle('/angular-widget/styles.css');

    }, []);

    return (
        <div style={{ padding: '20px', border: '1px dashed blue' }}>
            <h3>React Host Wrapper</h3>
            <angular-widget-element></angular-widget-element>
        </div>
    );
};

export default AngularWidget;
