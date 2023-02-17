import Head from "next/head";

import { externalLinks, aboutMeContent, footer } from "@/content/homepage";

const metaDetails = {
  title: "Cafe Sonyah",
  desc: "Join Sonia on her gaming adventures! From Skyrim to party games, and everything in between, watch and engage with this friendly Twitch streamer. Come for the games, stay for the community!",
  image: "",
  keywords:
    "Twitch streamer, gaming, Skyrim, party games, community, video games, multiplayer",
  url: "https://cafesonyah.mikedez.com",
};

export default function Home() {
  return (
    <>
      <Head>
        {/* DEFAULT */}
        <title>{metaDetails.title}</title>
        <meta name="title" content={metaDetails.title} />
        <meta name="description" content={metaDetails.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaDetails.url} />
        <meta property="og:title" content={metaDetails.title} />
        <meta property="og:description" content={metaDetails.desc} />
        <meta property="og:image" content={metaDetails.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaDetails.url} />
        <meta property="twitter:title" content={metaDetails.title} />
        <meta property="twitter:description" content={metaDetails.desc} />
        <meta property="twitter:image" content={metaDetails.image} />

        {/* Keywords */}
        <meta name="keywords" content={metaDetails.keywords} />

        {/* Icon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="tile flex min-h-screen flex-col items-center bg-orange-100 py-8">
        <div className="flex w-full justify-center bg-orange-900 p-3">
          <h1 className="f-heading text-4xl text-orange-200">
            {aboutMeContent.heading}
          </h1>
        </div>
        <div className="f-body max-w-xl p-6 ">
          <div className="bg rounded-lg border-2 border-orange-900 bg-orange-100 p-4 drop-shadow-lg">
            <p className="indent-8 text-orange-900">{aboutMeContent.p1}</p>
            <p className="indent-8 text-orange-900">{aboutMeContent.p2}</p>
          </div>
          <div className="flex w-full flex-col gap-3 pt-6 sm:grid sm:grid-cols-2">
            {externalLinks.map((link, index) => {
              return (
                <a
                  className="flex justify-center rounded-lg bg-orange-900 p-3 text-orange-200 drop-shadow-lg hover:bg-orange-100 hover:text-orange-900 focus:bg-orange-100 focus:text-orange-900"
                  key={index}
                  href={link.href}
                  target={link.newTab ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex grow"></div>
        <footer className="flex w-full justify-center bg-orange-900 p-3 text-orange-200 underline">
          <a rel="noreferrer" target={"_blank"} href={footer.href}>
            {footer.label}
          </a>
        </footer>
      </main>
    </>
  );
}
