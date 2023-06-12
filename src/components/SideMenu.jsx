function SideMenu({ menuOpen }) {
  return (
    <div className={`auto-rows-min bg-black grid items-center fixed min-w-[228px] overflow-auto right-0 top-20 h-full transform transition duration-500 translate-x-full ${menuOpen ? 'transform-none' : ''}`}>
      <div className="grid text-white font-default text-sm py-2 px-4 justify-between items-center flex ">Stash</div>
      <div className="grid text-white font-default text-sm py-2 px-4 justify-between items-center flex ">Store</div>
      <div className="grid text-white font-default text-sm py-2 px-4 justify-between items-center flex ">Social</div>
      <div className="grid text-white font-default text-sm py-2 px-4 justify-between items-center flex ">About</div>
      <div className="grid text-white font-default text-sm py-2 px-4 justify-between items-center flex ">Redeem Code</div>
    </div>
  )
}

export default SideMenu;