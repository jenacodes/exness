// App.jsx
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
  Dashboard,
  // DashboardBody,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import {
  MyAccountsSection,
  DepositsSection,
  WithdrawalSection,
} from "./components";

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

        {/* Dashboard route with nested children */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route index element={<DashboardBody />} /> */}
          <Route path="deposit" element={<DepositsSection />} />
          <Route path="myaccount" element={<MyAccountsSection />} />
          <Route path="withdrawal" element={<WithdrawalSection />} />
          {/* <Route path="setting" element={<SettingsPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
