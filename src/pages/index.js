import Image from "next/image";
import { Inter } from "next/font/google";
import Sheet from "@mui/joy/Sheet";
import { useEffect, useState } from "react";
import { dividerClasses } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=whitep4nth3r")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  console.log(articles);

  function map() {
    return articles.map((e) => {
      return (
        <Card variant="outline" color="neutral">
          <Card key={articles.id} color="primary" variant="soft">
            <CardContent>
              <a href={`/${e.slug}`}>{e.title}</a>
            </CardContent>
          </Card>
        </Card>
      );
    });
  }

  return (
    <div>
      <Head>
        {/* <title>Vlogs/Guides</title> */}
        <meta property="Proto Vlogs" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
      </Head>
      {map()}
      niba
    </div>
  );
}
