import HeaderOne from "../components/HeaderOne";
import PestAnalysis from "./components/PestAnalysis";
import Weather from "./components/Weather";
import MarketListing from "./components/MarketListing";
import Jornals from "./components/Jornals";

export default function Page() {
  return (
    <section className="p-6 pb-12">
      <HeaderOne />
      <div className="dashboard-column mt-6">
        <div className="rounded shadow p-2 pb-6">
          <h3 className="text-xl font-bold pb-4 border-b border-b-[#BBBBBB]">
            Pest Analysis
          </h3>
          <PestAnalysis />
        </div>
        <div className="rounded shadow p-4">
          <h3 className="text-xl font-bold pb-4">Weather</h3>
          <Weather />
        </div>
      </div>
      <div className="dashboard-column mt-6">
        <MarketListing />
        <Jornals />
      </div>
    </section>
  );
}
