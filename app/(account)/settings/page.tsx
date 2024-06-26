import HeaderTwo from "../components/HeaderTwo";
import UserIcon from "@/assets/icons/UserIcon";
import Form from "./Form";

export default function Page() {
  return (
    <section className="p-8 pb-12">
      <HeaderTwo />
      <div>
        <div className="flex items-center gap-2">
          <UserIcon className="cursor-pointer" />
          <div>
            <p className="text-lg font-bold">Briana Davis</p>
            <p className="text-base text-[#999]">Lagos, Nigeria</p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}
