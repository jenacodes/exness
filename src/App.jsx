import { Routes, Route } from "react-router-dom";
import {
  Home,
  AcctPage,
  StandardAccounts,
  ProfessionalAcctsPage,
  DemoTradingAcctPage,
  SocialTradingAcctPage,
  DepositsPage,
  CryptoPage,
  StocksPage,
  ForexPage,
  AboutUs,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acctPage/register" element={<AcctPage />} />
        <Route path="/login" element={<AcctPage />} />
        <Route path="/standard-accounts" element={<StandardAccounts />} />
        <Route
          path="/professional-accounts"
          element={<ProfessionalAcctsPage />}
        />
        <Route
          path="/demo-trading-accounts"
          element={<DemoTradingAcctPage />}
        />
        <Route
          path="/social-trading-accounts"
          element={<SocialTradingAcctPage />}
        />
        <Route path="/deposits-and-withdrawals" element={<DepositsPage />} />
        <Route path="/crypto-cfd" element={<CryptoPage />} />
        <Route path="/stocks-cfd" element={<StocksPage />} />
        <Route path="/forex-cfd" element={<ForexPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
