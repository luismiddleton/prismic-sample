import Head from "next/head";
import PropTypes from "prop-types";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#45b4e9" />
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
      </Head>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
};

export default Layout;
