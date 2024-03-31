import "./assets/global.css";
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import MainNavbar from "./_components/MainNavbar";
import MainFooter from "./_components/MainFooter";
import MainCategories from "./_components/MainCategories";

export const metadata = {
  title: {
    default: "Dharmic Dialogue",
    template: "%s - Dharmic Dialogue",
  },
  description: "The Dharmic Dialogue is your destination to explore diverse perspectives on various topics through the lens of Dharmikta or the indigenous perspective, without being swayed by Western thought processes. Dive into insightful opinions and essays, and if you wish to stay informed, join our community and subscribe to our newsletter.",
  twitter: {
    card: "summary_large_image",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/js/popup.css" rel="stylesheet"></link>
        <link href="https://hewo-html.netlify.app/assets/css/owl.carousel.css" rel="stylesheet" type="text/css"/>
        <link href="https://hewo-html.netlify.app/assets/css/owl.theme.default.css" rel="stylesheet" type="text/css"/>
        <link rel="preconnect" href="https://fonts.bunny.net"></link>
        <link href="https://fonts.bunny.net/css?family=ibm-plex-serif:300,400,500" rel="stylesheet" />
        <link href="https://fonts.bunny.net/css?family=playfair-display:400,500,600,700" rel="stylesheet" />
      </head>
      <body>
        <div id="wrapper">
          <MainNavbar/>
          {children}
          <Analytics />
          <SpeedInsights />
          <MainCategories/>
          <MainFooter/>
        </div>

        
        <Script src="/js/modernizr-3.5.0.min.js"/>
        <Script src="/js/jquery-3.7.0.min.js"/>
        <Script src="/js/owl.carousel.min.js"/>
        <Script src="/js/jquery.waypoints.min.js"/>
        <Script src="/js/jquery.slicknav.min.js"/>
        <Script src="/js/masonry.pkgd.min.js"/>
        <Script src="/js/jquery.sticky-sidebar.js"/>
        <Script src="/js/jquery.bpopup.min.js"/>
        <Script src="/js/main.js?v=2.0"/>
        <Script src="/js/smart-sticky.js"/>
      </body>
    </html>
  );
}
