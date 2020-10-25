import { useRouter } from "next/router";
import Header from "../../components/SliceZone/Slices/Header";
import Layout from "../../components/Layout";
import SliceZone from "../../components/SliceZone";
import { getCaseStudyByUID, getClientByUID } from "../../utils/helpers/fetch";

const CaseStudy = (props) => {
  if (!props) return;

  const { data, title } = props;

  const { showheader, headerbackground, body } = data;

  const meta = {
    title: title + " | " + "Case Study",
  };

  return (
    <Layout title={meta.title} description={title}>
      {showheader && <Header url={headerbackground.url} />}
      {body && <SliceZone slices={body} />}
    </Layout>
  );
};

CaseStudy.getInitialProps = async ({ query, res }) => {
  try {
    const { slug } = query;
    const data = await getCaseStudyByUID(slug);
    const { title } = await getClientByUID(slug);

    return { data, title, slug };
  } catch (error) {
      res.writeHead(301, { Location: "/" });
      res.end();
      return {};
  }
};

export default CaseStudy;
