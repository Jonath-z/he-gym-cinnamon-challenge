import Head from "next/head";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="The one-stop shop to design, develop and deploy your next digital project."
        />
        <meta property="og:image" content="/images/work-together.webp" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        ></link>
        <title>CINNAMON | All software, zero bullshit.</title>
      </Head>
      <HomePage />
    </div>
  );
}
