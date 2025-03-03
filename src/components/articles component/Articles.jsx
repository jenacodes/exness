/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import ArticlesHeader from "./ArticlesHeader";

// Main Articles component
const Articles = ({ articlesData, headerDetails }) => {
  const { pathname } = useLocation();
  const isCryptoArticles = pathname === "/crypto-cfd";
  // Fallback header details if not provided
  const defaultHeader = {
    title: "Keep up with Exness",
    subtitle:
      "Stay on top of our news, product and technology updates, events, partnerships, and more.",
    linkText: "Read more Articles",
    linkHref: "#",
  };

  const header = headerDetails || defaultHeader;

  // Fallback articles data if no articlesData is passed
  const defaultData = [
    {
      id: 1,
      imageSrc: "Article1.png",
      altText: "Article 1 thumbnail",
      category: "Trading News",
      title: "Week 5 trading roundup",
      link: "#",
    },
    {
      id: 2,
      imageSrc: "Article2.png",
      altText: "Article 2 thumbnail",
      category: "Trading News",
      title: "Week 5 trading roundup",
      link: "#",
    },
    {
      id: 3,
      imageSrc: "Article3.png",
      altText: "Article 3 thumbnail",
      category: "Trading News",
      title: "Week 5 trading roundup",
      link: "#",
    },
  ];

  const articles = articlesData || defaultData;

  return (
    <section className="px-6 my-16 md:mx-[84px] md:my-32 md:px-0">
      <ArticlesHeader
        title={header.title}
        subtitle={header.subtitle}
        linkText={header.linkText}
        linkHref={header.linkHref}
      />
      <div
        className={`grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-3.5 ${
          isCryptoArticles && "md:grid-cols-4"
        }`}
      >
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
