import HeaderTwo from "../components/HeaderTwo";
import Time from "./components/Time";
import Weather from "./components/Weather";

export default function Page() {
  return (
    <section className="p-8 pb-12">
      <HeaderTwo />
      <div className="p-6 border border-gray-200 shadow-gray-500 mt-6 rounded-xl">
        <Time />
        <Weather />
      </div>
    </section>
  );
}
