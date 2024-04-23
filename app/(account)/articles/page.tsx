import Book from "../components/Book";
import HeaderTwo from "../components/HeaderTwo";

export default function Page() {
  return (
    <section className="p-8 pb-12">
      <HeaderTwo />
      <div className="mt-8 grid grid-cols-3 gap-12 w-[90%]">
        <Book title="Journal of Forestry Engineering" />
        <Book title="Agricultural Systems" />
        <Book title="Field Crops Research" />
        <Book title="Jourmal of Agricultural and Food Chemistry" />
        <Book title="Journal of Agricultural Economics" />
        <Book title="Crop Protection" />
        <Book title="Journal of Agricultural Science" />
        <Book title="Plant Physiology" />
        <Book title="Soil Science Society of America Journal" />
      </div>
    </section>
  );
}
