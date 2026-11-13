import { motion } from "framer-motion";
import { LineChart, BarChart, AreaChart, ResponsiveContainer, Chart, XAxis, YAxis, Tooltip, Legend, Cell, Shadow, Grid, CartesianGrid, PieChart, Tooltip as PieTooltip, Cell as PieCell, } from "react-chartjs-2";
import { useState } from "react";

// Demo data
const marketData = {
  totalVolume: "$45.2B",
  totalMarketCap: "$1.2T",
  btcDominance: "53.4%",
  ethDominance: "15.2%",
};

const trendingTokens = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,421", change: "+2.3%", volume: "$12.4B", liquidity: "$85.3B", risk: "LOW" as const },
  { symbol: "ETH", name: "Ethereum", price: "$3,842", change: "-1.1%", volume: "$8.9B", liquidity: "$45.6B", risk: "LOW" as const },
  { symbol: "SOL", name: "Solana", price: "$198.50", change: "+5.7%", volume: "$3.2B", liquidity: "$12.1B", risk: "MODERATE" as const },
  { symbol: "AVAX", name: "Avalanche", price: "$35.20", change: "+3.2%", volume: "$1.8B", liquidity: "$5.4B", risk: "LOW" as const },
  { symbol: "DOT", name: "Polkadot", price: "$7.80", change: "-2.1%", volume: "$456M", liquidity: "$2.1B", risk: "HIGH" as const },
];

const tokenTableData = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,421", marketCap: "$1.3T", volume: "$12.4B", change: "+2.3%", liquidity: "$85.3B", trending: true },
  { symbol: "ETH", name: "Ethereum", price: "$3,842", marketCap: "$460B", volume: "$8.9B", change: "-1.1%", liquidity: "$45.6B", trending: false },
  { symbol: "SOL", name: "Solana", price: "$198.50", marketCap: "$86B", volume: "$3.2B", change: "+5.7%", liquidity: "$12.1B", trending: true },
  { symbol: "AVAX", name: "Avalanche", price: "$35.20", marketCap: "$12B", volume: "$1.8B", change: "+3.2%", liquidity: "$5.4B", trending: false },
  { symbol: "DOT", name: "Polkadot", price: "$7.80", marketCap: "$2.1B", volume: "$456M", change: "-2.1%", liquidity: "$2.1B", trending: false, risk: "HIGH" },
  { symbol: "MATIC", name: "Polygon", price: "$0.89", marketCap: "$8.5B", volume: "$312M", change: "+8.4%", liquidity: "$3.2B", trending: true },
];

// Chart data
const candlestickChartData = {
  labels: ["9:00", "11:00", "1:00", "3:00", "5:00", "7:00", "9:00"],
  datasets: [
    {
      label: "Price",
      data: [67400, 67800, 67200, 68100, 67950, 68500, 68200],
      borderColor: "#19C784",
      backgroundColor: "rgba(25, 199, 132, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Volume",
      type: "bar",
      data: [12400, 13200, 11800, 13500, 12900, 14200, 13800],
      borderColor: "#83E6B5",
      backgroundColor: "rgba(131, 230, 181, 0.3)",
      fill: false,
    },
  ],
};

const portfolioData = {
  totalValue: "$12,450",
  totalPnl: "+$890 (7.7%)",
  assets: [
    { symbol: "BTC", amount: "0.184", cost: "$3,500", current: "$12,421", pnl: "+$1,642 (46.9%)" },
    { symbol: "ETH", amount: "3.2", cost: "$4,200", current: "$12,288", pnl: "+$888 (21.1%)" },
    { symbol: "SOL", amount: "12.5", cost: "$800", current: "$2,475", pnl: "+$425 (34.8%)" },
    { symbol: "AVAX", amount: "45", cost: "$750", current: "$1,584", pnl: "+$834 (52.4%)" },
  ],
};

// Token safety data
const safetyData = {
  contractVerified: true,
  ownershipRenounced: true,
  canMint: false,
  holderConcentration: "15%",
  liquidityLocked: true,
  liquidityAmount: "$25M",
  riskLevel: "LOW" as const,
  riskDescription: "Low risk - Contract verified, ownership renounced, liquidity locked",
};

// Whale tracker data
const whaleData = [
  { wallet: "0x1a2b...c3d4", type: "BUY", amount: "$2.3M", token: "SOL", time: "2m ago", price: "$198.50" },
  { wallet: "0x5e6f...h7i8", type: "SELL", amount: "$890K", token: "AVAX", time: "15m ago", price: "$35.20" },
  { wallet: "0x9jkl...mnoq", type: "BUY", amount: "$5.7M", token: "BTC", time: "45m ago", price: "$67,421" },
  { wallet: "0xprst...uvwx", type: "SELL", amount: "$1.2M", token: "ETH", time: "2h ago", price: "$3,842" },
];

// AI scanner signals
const aiSignals = [
  { title: "Unusual volume activity detected", description: "Trading volume has increased compared with the recent average, while liquidity has also grown." },
  { title: "Large wallet accumulation", description: "A wallet has accumulated $2.3M worth of SOL tokens over the past hour, suggesting smart money interest." },
  { title: "Liquidity growth signal", description: "Liquidity pool has grown by 15% in the last 24 hours, indicating increasing trader confidence." },
  { title: "Price breakout detection", description: "BTC has broken resistance at $67,000 with volume 40% above the 30-day average." },
];

// Copy trading data
const copyTradingData = {
  followers: 128,
  avgWinRate: "67%",
  maxDrawdown: "-8.2%",
  topTrader: {
    wallet: "0xabc123...def456",
    winRate: "73%",
    totalFollowers: 241,
    totalProfit: "$15,800",
  },
  availableTraders: [
    { wallet: "0x111...222", winRate: "62%", totalTrades: 145, totalProfit: "+$2,340", maxDrawdown: "-5.2%" },
    { wallet: "0x333...444", winRate: "71%", totalTrades: 89, totalProfit: "+$4,120", maxDrawdown: "-3.8%" },
    { wallet: "0x555...666", winRate: "58%", totalTrades: 210, totalProfit: "+$1,280", maxDrawdown: "-7.1%" },
  ],
};

export const TerminalDemo = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1H");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTokens = tokenTableData.filter((token) => {
    const matchesSearch = token.name.toLowerCase().includes(searchTerm.toLowerCase()) || token.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || token.trending === (selectedCategory === "Trending");
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-[0A1510]" id="terminal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[19C784]/20 text-[19C784] text-sm mb-4">
            Trading Terminal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Live Terminal Preview
          </h2>
          <p className="text-[91A49A] text-lg">
            Experience the all-in-one trading interface built for Robinhood Chain.
            <span className="text-[19C784] font-medium ml-2">COMING SOON</span>
          </p>
        </div>

        {/* Market Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="rounded-2xl bg-[050B08] p-6 border border-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[91A49A] text-sm">Total 24h Volume</p>
                <p className="text-3xl font-bold text-[19C784]">{marketData.totalVolume}</p>
              </div>
              <svg className="w-6 h-6 text-[83E6B5] mt-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
            </div>
          </div>

          <div className="rounded-2xl bg-[050B08] p-6 border border-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[91A49A] text-sm">Total Market Cap</p>
                <p className="text-3xl font-bold text-[83E6B5]">{marketData.totalMarketCap}</p>
              </div>
              <svg className="w-6 h-6 text-[83E6B5] mt-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
            </div>
          </div>

          <div className="rounded-2xl bg-[050B08] p-6 border border-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[91A49A] text-sm">BTC Dominance</p>
                <p className="text-3xl font-bold text-[primaryGreen]">{marketData.btcDominance}</p>
              </div>
              <svg className="w-6 h-6 text-[primaryGreen] mt-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
            </div>
          </div>

          <div className="rounded-2xl bg-[050B08] p-6 border border-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[91A49A] text-sm">Ethereum Dominance</p>
                <p className="text-3xl font-bold text-[mint]">{marketData.ethDominance}</p>
              </div>
              <svg className="w-6 h-6 text-[mint] mt-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Trending Tokens Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedCategory === "All" ? "bg-[19C784]/20 text-[19C784]" : ""
              } ${selectedCategory === "Trending" ? "bg-[19C784] text-[050B08]" : "hover:bg-[19C784]/20 transition-colors"}`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            <button
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedCategory === "Trending" ? "bg-[19C784] text-[050B08]" : "hover:bg-[19C784]/20 transition-colors"
              }`}
              onClick={() => setSelectedCategory("Trending")}
            >
              Trending
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-[050B08] p-6 border border-white/10">
            <table className="w-full text-sm text-[91A49A]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left font-medium text-xs text-[91A49A] w-24">Token</th>
                  <th className="text-right font-medium text-xs text-[91A49A] w-14">Price</th>
                  <th className="text-right font-medium text-xs text-[91A49A] w-14">24h</th>
                  <th className="text-right font-medium text-xs text-[91A49A] w-12">Volume</th>
                  <th className="text-right font-medium text-xs text-[91A49A] w-12">Liquidity</th>
                  <th className="text-right font-medium text-xs text-[91A49A] w-10">Risk</th>
                </tr>
              </thead>
              <tbody>
                {filteredTokens.map((token) => (
                  <tr key={token.symbol} className="border-b border-white/5 hover:bg-[050B08] transition-colors">
                    <td className="font-medium">
                      {token.trending && <span className="inline-flex items-center gap-2 px-2 py-1 rounded bg-[19C784]/20 text-[19C784] text-xs">TRENDING</span>}
                      {token.symbol}
                    </td>
                    <td className="text-right">{token.price}</td>
                    <td className="text-right">
                      <span className={token.change.startsWith("-") ? "text-red-500" : "text-[83E6B5]"}>{token.change}</span>
                    </td>
                    <td className="text-right">{token.volume}</td>
                    <td className="text-right">{token.liquidity}</td>
                    <td className="text-right">
                      <span className={token.risk === "LOW" ? "text-[83E6B5]" : token.risk === "MODERATE" ? "text-[f6e05e]" : "text-[f87171]"}>
                        {token.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-[91A49A]">
            <span>Showing {filteredTokens.length} of {tokenTableData.length} tokens</span>
            <span>Search: <span className="font-medium">{searchTerm || "anything"}</span></span>
          </div>
        </div>

        {/* Advanced Charts Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[91A49A] text-sm">Timeframe</span>
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedTimeframe === "1H" ? "bg-[19C784] text-[050B08]" : "hover:bg-[0A1510] transition-colors"
                }`}
                onClick={() => setSelectedTimeframe("1H")}
              >
                1H
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedTimeframe === "4H" ? "bg-[19C784] text-[050B08]" : "hover:bg-[0A1510] transition-colors"
                }`}
                onClick={() => setSelectedTimeframe("4H")}
              >
                4H
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedTimeframe === "1D" ? "bg-[19C784] text-[050B08]" : "hover:bg-[0A1510] transition-colors"
                }`}
                onClick={() => setSelectedTimeframe("1D")}
              >
                1D
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedTimeframe === "1W" ? "bg-[19C784] text-[050B08]" : "hover:bg-[0A1510] transition-colors"
                }`}
                onClick={() => setSelectedTimeframe("1W")}
              >
                1W
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-[050B08] p-6 border border-white/10">
            <ResponsiveContainer width="100%" height="400">
              <LineChart data={candlestickChartData} options={{ responsive: true }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis data="labels" type="category" tick={{ fontSize: 10, fontFamily: "Inter", color: "#91A49A" }} />
                <YAxis tick={{ fontSize: 10, fontFamily: "Inter", color: "#91A49A" }} />
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
                <Series type="line" data={candlestickChartData.datasets[0].data} fill={true} backgroundColor="rgba(25, 199, 132, 0.1)" />
                <Series type="bar" data={candlestickChartData.datasets[1].data} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Token Safety Section */}
        <div className="mb-12">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[050B08] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[19C784]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white mb-2">Token Safety Analysis</h3>
              <p className="text-[91A49A] text-sm">
                Analyzing contract permissions, liquidity and suspicious token activity for the selected token.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="rounded-2xl bg-[050B08] p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-[83E6B5]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12h2a10 10 0 0 0 10 10v2a10 10 0 0 1-10 10h-2a10 10 0 0 1-10-10v-2a10 10 0 0 0 10-10zm0 0h2v2h-2v-2zm0 0h2v6H12v-6zm0 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2zm-2 .5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2zm0-7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-2z" />
                </svg>
                <span>Contract Verified</span>
              </div>
              <p className="text-[91A49A] text-xs">The token's contract source code has been verified on the blockchain explorer.</p>
            </div>

            <div className="rounded-2xl bg-[050B08] p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-[83E6B5]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 12a12 12 0 1 0 12 12A12.024 12.024 0 0 0 0 12zM11.99 18.56l-1.75-1.75.006-.006-.998.998.006-.006L12 17.35l1.24 1.24.006.006.998-.998-.006-.006L13.25 16.06l.006.006.998.998-.006.006L14.06 17.25l.006.006-.998.998.006.006L15.25 18.56l.006.006-.998.998.006.006L16.06 19.06l.006.006.998-.998.006-.006L17.25 18.06l.006.006.998.998.006.006L18.56 17.25l.006.006.998-.998.006-.006L19.06 16.06l.006.006-.998.998.006.006L20.25 14.75l.006.006-.998.998.006.006L21.06 15.06l.006.006.998-.998.006-.006L22.25 13.75l.006.006-.998.998.006.006L23.06 12.56l.006.006-.998.998.006.006L24 11.34l.006-.006-.998-.998.006-.006L24.94 9.86l.006-.006-.998-.998.006-.006L25.81 7.18l.006-.006-.998-.998.006-.006L26.69 4.5l.006-.006-.998-.998.006-.006L27.57 1.82l.006-.006-.998-.998.006-.006L28.45 0a12.024 12.024 0 0 0-12.024-12 12.024 12.024 0 0 0-1.447.3l-.028.013-.765 1.175L21.61 7.319 18.23 4.06a12.025 12.025 0 0 0-1.98-.078l-.008-.006z" />
                </svg>
                <span>Ownership Renounced</span>
              </div>
              <p className="text-[91A49A] text-xs">Token ownership has been renounced, meaning no single entity can modify the contract.</p>
            </div>

            <div className="rounded-2xl bg-[050B08] p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-[83E6B5]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12h2a10 10 0 0 1 10 10v2a10 10 0 0 0 10 10h-2a10 10 0 0 1-10 10v-2a10 10 0 0 1-10-10zm0 0h2v2H12v-2zm0 0h2v6H12V12z" />
                  <path d="M3 12l2-2m0 0l7-7M5 10l2-2M7 14l2-2M9 18l2-2M11 6l2-2M13 14l2-2M15 10l2-2M17 18l2-2" />
                </svg>
                <span>No Minting</span>
              </div>
              <p className="text-[91A49A] text-xs">The token cannot mint additional supply.</p>
            </div>

            <div className="rounded-2xl bg-[050B08] p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-[83E6B5]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M12 10V3.5a8.5 8.5 0 1 1 13 0V10" />
                </svg>
                <span>Holder Conc.: 15%</span>
              </div>
              <p className="text-[91A49A] text-xs">Top 15 holders control a reasonable distribution of tokens.</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-[19C784]/10 border border-[19C784]/30 text-center">
            <p className="text-sm text-[19C784] font-medium">
              ⚠️ <strong>Disclaimer:</strong> These are illustrative safety checks for demo purposes only. Not guarantees against scams or rug pulls. Always DYOR.
            </p>
          </div>
        </div>

        {/* Whale Tracker Section */}
        <div className="mb-12">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[050B08] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[83E6B5]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M12 10V3.5a8.5 8.5 0 1 1 13 0V10" />
                <path d="M12 15V9.5a3.5 3.5 0 1 0-2.182-2.57L12 5.5a3.5 3.5 0 0 0-1.388 3.03" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white mb-2">Whale Tracker</h3>
              <p className="text-[91A49A] text-sm">
                Monitoring large wallet transactions and accumulation patterns across the network.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-[050B08] p-6 border border-white/10 mt-6">
            <table className="w-full text-sm text-[91A49A]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left font-medium text-xs text-[91A49A]">Action</th>
                  <th className="text-right font-medium text-xs text-[91A49A]">Wallet</th>
                  <th className="text-right font-medium text-xs text-[91A49A]">Token</th>
                  <th className="text-right font-medium text-xs text-[91A49A]">Value</th>
                  <th className="text-right font-medium text-xs text-[91A49A]">Time</th>
                </tr>
              </thead>
              <tbody>
                {whaleData.map((whale) => (
                  <tr key={whale.wallet} className="border-b border-white/5 hover:bg-[050B08] transition-colors">
                    <td className={whale.type === "BUY" ? "text-[83E6B5]" : "text-[f87171]"}>
                      <span className="font-medium">{whale.type}</span>
                    </td>
                    <td className="text-right font-mono text-xs">{whale.wallet}</td>
                    <td className="text-right">{whale.token}</td>
                    <td className="text-right">${whale.amount}</td>
                    <td className="text-right text-xs">{whale.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Scanner Section */}
        <div className="mb-12">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[050B08] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[19C784]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white mb-2">AI Market Scanner</h3>
              <p className="text-[91A49A] text-sm">
                Identifying unusual market activity and explaining potential opportunities using on-chain signals.
              </p>
            </div>
          </div>

          <div className="space-y-4 mt-6">
            {aiSignals.map((signal, index) => (
              <div key={index} className="px-4 py-3 rounded-2xl bg-[050B08] border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-[83E6B5] mt-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12h2a10 10 0 0 1 10 10v2a10 10 0 0 0 10 10h-2a10 10 0 0 1-10 10v-2a10 10 0 0 1-10-10zm0 0h2v2h-2V12zm0 0h2v6H12V12zm0 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2zm-2 .5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2zm0-7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white">{signal.title}</h4>
                    <p className="text-[91A49A] text-xs">{signal.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-12">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[050B08] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[19C784]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 12l2 2m8-2l2-2m4 8l2 2M6 21l2-2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white mb-2">Portfolio Dashboard</h3>
              <p className="text-[91A49A] text-sm">
                Monitor holdings, performance and trading history all in one place.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Portfolio Summary */}
            <div className="rounded-2xl bg-[050B08] p-6 border border-white/10">
              <div className="flex items-between justify-between">
                <div>
                  <p className="text-[91A49A] text-sm">Total Portfolio Value</p>
                  <p className="text-3xl font-bold text-[19C784]">{portfolioData.totalValue}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[83E6B5]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M12 10V3.5a8.5 8.5 0 1 1 13 0V10" />
                  </svg>
                  <span className="text-[83E6B5] font-medium">{portfolioData.totalPnl}</span>
                </div>
              </div>
            </div>

            {/* Asset Allocation */}
            <div className="rounded-2xl bg-[050B08] p-6 border border-white/10">
              <h4 className="text-semibold text-white mb-4">Asset Allocation</h4>
              <div className="space-y-3 text-[91A49A] text-sm">
                <div className="flex items-between justify-between">
                  <span>BTC (0.184)</span>
                  <span className="text-[19C784]">46.9%</span>
                </div>
                <div className="h-2 bg-[0A1510] rounded-full overflow-hidden">
                  <div className="h-full bg-[19C784] w-46.9%" style={{ width: "46.9%" }} />
                </div>
                <div className="flex items-between justify-between">
                  <span>ETH (3.2)</span>
                  <span className="text-[83E6B5]">21.1%</span>
                </div>
                <div className="h-2 bg-[0A1510] rounded-full overflow-hidden">
                  <div className="h-full bg-[83E6B5] w-21.1%" style={{ width: "21.1%" }} />
                </div>
                <div className="flex items-between justify-between">
                  <span>SOL (12.5)</span>
                  <span className="text-[83E6B5]">34.8%</span>
                </div>
                <div className="h-2 bg-[0A1510] rounded-full overflow-hidden">
                  <div className="h-full bg-[83E6B5] w-34.8%" style={{ width: "34.8%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copy Trading Section */}
        <div>
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[050B08] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[83E6B5]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 8h16c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1zm16 12H4v-1h12v1zm0-10H4v-1h12v1zm0-4H4v-1h12v1z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white mb-2">Copy Trading</h3>
              <p className="text-[91A49A] text-sm">
                Discover and follow wallet strategies with configurable limits and safeguards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Copy Trading Stats */}
            <div className="rounded-2xl bg-[050B08] p-6 border border-white/10">
              <div className="text-center">
                <p className="text-3xl font-bold text-[19C784]">{copyTradingData.followers}</p>
                <p className="text-[91A49A] text-sm">Followers</p>
              </div>
            </div>

            {/* Top Trader Preview */}
            <div className="rounded-2xl bg-[050B08] p-6 border border-white/10">
              <h4 className="text-semibold text-white mb-4">Top Trader Preview</h4>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[19C784] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[050B08]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">0xabc123...</p>
                  <p className="text-[91A49A] text-xs">Wallet address</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-[83E6B5] font-medium">Win Rate: 73%</p>
                  <p className="text-[91A49A] text-xs">Historical win rate</p>
                </div>
                <div>
                  <p className="text-[83E6B5] font-medium">+$15,800</p>
                  <p className="text-[91A49A] text-xs">Total profit</p>
                </div>
                <div>
                  <p className="text-red-500 font-medium">-8.2% max drawdown</p>
                  <p className="text-[91A49A] text-xs">Maximum drawdown</p>
                </div>
              </div>

              <p className="text-xs text-[91A49A] mt-4">
                <strong>Note:</strong> Automated copy trading is a planned feature. This preview does not execute transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};