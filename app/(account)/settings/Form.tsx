export default function Form() {
  return (
    <form className="w-[90%] max-w-3xl mt-8 mb-4">
      <div className="mb-4">
        <label htmlFor="fullName" className="block mb-2 text-[#999]">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="h-14 px-2 rounded-md shadow w-full focus:outline-none border border-[#ccc]"
          placeholder="John Doe"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-[#999]">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="h-14 px-2 rounded-md shadow w-full focus:outline-none border border-[#ccc]"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nameOfFarm" className="block mb-2 text-[#999]">
          Name of Farm
        </label>
        <input
          type="text"
          id="nameOfFarm"
          name="nameOfFarm"
          className="h-14 px-2 rounded-md shadow w-full focus:outline-none border border-[#ccc]"
          placeholder="Smart Farm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block mb-2 text-[#999]">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="h-14 px-2 rounded-md shadow w-full focus:outline-none border border-[#ccc]"
          placeholder="Lagos, Nigeria"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-[#999]">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="h-14 px-2 rounded-md shadow w-full focus:outline-none border border-[#ccc]"
          placeholder="********"
        />
      </div>
      <button className="h-12 w-36 bg-primary text-white rounded-md hover:text-primary hover:border hover:border-primary hover:bg-transparent">Save</button>
    </form>
  );
}
