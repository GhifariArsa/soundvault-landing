export default function Navbar() {
  return (
    <div className="sticky top-0 flex justify-between items-center">
      <div id="logo" className="flex">
        <div className="p-3">
          <span className="text-orange text-4xl font-bold">Sound</span>
          <span className="text-blue-100 text-4xl font-bold"> Vault</span>
        </div>
      </div>
      <div id="header-menu" className="p-3 font-bold mr-5">
        <span className="hover:bg-gray-600 p-2 hover:rounded-xl hover:text-notwhite transition hover:ease-in">Join us</span>
      </div>
    </div>
  );
}
