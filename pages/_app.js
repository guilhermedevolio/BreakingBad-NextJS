import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import '../components/Header/Header.css';
import '../components/Card/Card.css';

const progress = new ProgressBar({
  size: 2,
  color: "#38a169",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
