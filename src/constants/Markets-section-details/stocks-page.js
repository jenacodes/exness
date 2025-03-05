export const StocksPageDetails = [
  {
    heading: "Diversify your portfolio",
    paragraph:
      "with popular names from various global stock markets, like Alphabet, Boeing, McDonald's, Nike and more.",
  },
  {
    heading: "Low and stable spreads",
    paragraph:
      "Take advantage of our tight spreads and trade the stock market.¹",
  },
  {
    heading: "Enjoy superior execution",
    paragraph:
      "on popular trading platforms like MetaTrader 4 and 5, as well as our proprietary Exness Web Terminal and Exness Trade App.",
  },
];

//info sections
export const stocksInfoSectionData = {
  header: "Stock market conditions",
  description:
    "The stock market is a global exchange for stocks and securities. Trading stocks allows you to capitalize on the share price movements of a company, whether they are rising or falling.",
  subsections: [
    {
      title: "Stocks trading hours",
      paragraph:
        "All stocks can be traded from Monday to Friday, between the hours of 14:40 to 20:45. Pre-market trading from 11:00 to 14:40 is available for the following stocks:",
      secondParagraph:
        "Please note, you can only close open orders during these pre-market hours. Opening new orders during pre-market is not possible.",
      list: [
        "INTC, BAC, TSLA, WFC, BABA, NFLX, C, AMD, PFE, META, JNJ, PYPL, ORCL, NVDA, MSFT, AMZN,",
        "BTCXAU, BTCXAG: Monday - Thursday from 21:58 to 23:01",
      ],
      link: {
        preText: "Learn more about trading hours in our",
        href: "#",
        text: "Help Center",
      },
    },
    {
      title: "Spreads¹",
      paragraph:
        "Spreads are always floating, so the spreads in the table above are yesterday’s averages. For live spreads, please refer to the trading platform.",
    },
    {
      title: "Swap",
      paragraph:
        "Swaps occur at 22:00 GMT+0 each day, excluding the weekend, until the position is closed. To help you estimate your swap costs, you can use our handy Exness calculator. Please bear in mind that when trading stocks, triple swaps are charged on Fridays to cover financing costs incurred over the weekend.",
    },
    {
      title: "Stop level",
      paragraph:
        "Please note that the stop level values in the table above are subject to change and may not be available for traders using certain high-frequency trading strategies or Expert Advisors.",
    },
  ],
}; // stocks page

export const stocksCards = [
  {
    imgSrc:
      "https://d33vw3iu5hs0zi.cloudfront.net/media/exness_fast_execution_57c7f263d9.svg",
    imgAlt: "Fast Execution icon",
    title: "Fast execution",
    description:
      "Never miss a pip. Get your orders executed in milliseconds on both the MT platforms and proprietary Exness Terminals.",
  },
  {
    imgSrc:
      "https://d33vw3iu5hs0zi.cloudfront.net/media/exness_stable_spreads_832d4a7b36.svg",
    imgAlt: "Low and stable spreads icon",
    title: "Low and stable spreads",
    description:
      "Trade both rising and falling stock markets with low spreads that stay stable, even during high-impact stock market news.",
  },
  {
    imgSrc:
      "https://d33vw3iu5hs0zi.cloudfront.net/media/exness_stop_out_protection_3058b9de65.svg",
    imgAlt: "Stop Out Protection icon",
    title: "Stop Out Protection",
    description:
      "Take on volatile markets with a unique protection feature that strengthens your positions and helps delay or avoid stop outs.",
  },
];
