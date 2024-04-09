"use client";

import HeaderOne from "../components/HeaderOne";

export default function Page() {
  return (
    <section className="p-6">
      <HeaderOne />
      <div className="dashboard-column mt-6">
        <div className="rounded shadow p-2 pb-6">
          <h3 className="text-xl font-bold pb-4 border-b border-b-[#BBBBBB]">
            Pest Analysis
          </h3>
          <ul>
            <li className="text-[#EE4B27] py-4 border-b border-b-[#BBBBBB]">
              High risk
            </li>
            <li className="text-[#C7B301] py-4 border-b border-b-[#BBBBBB]">
              Medium risk
            </li>
            <li className="text-[#009F08] py-4 border-b border-b-[#BBBBBB]">
              Low risk
            </li>
            <li className="text-[#009F08] py-4 border-b border-b-[#BBBBBB]">
              Zero risk
            </li>
          </ul>
        </div>
        <div className="rounded shadow p-2">
          <h3>Weather</h3>
        </div>
      </div>
    </section>
  );
}
