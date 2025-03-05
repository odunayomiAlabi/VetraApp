import Script from 'next/script';

const Analytics = () => {
    return (
        <>
        <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=G-9JQ7QVZP7Q`}
        strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
        {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9JQ7QVZP7Q');`
        }
        </Script>
        </>
    );
};

export default Analytics;