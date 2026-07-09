import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({ children }) => {
  return (
    <main className="page bg-primary text-white bg-site bg-cover bg-no-repeat bg-scroll md:bg-fixed font-sora relative">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>Rakesh Syal | Portfolio</title>
        <meta
          name="description"
          content="Rakesh Syal is a Web Development and Internet Applications student and full-stack developer building practical, user-friendly web applications."
        />
        <meta
          name="keywords"
          content="rakesh syal, react, next, nextjs, html, css, javascript, portfolio, full-stack developer, web development"
        />
        <meta name="author" content="Rakesh Syal" />
        <meta name="theme-color" content="#131424" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </main>
  );
};

export default Layout;
