import {MenuData } from '../../assets/assets';
import './fullmenu.css'; 

const Menu = () => {
  return (
    <div className="full-menu min-h-screen  p-6">
    <h1 className="text-center text-4xl font-bold mb-10 text-yellow-400">Our Menu</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
      {MenuData.map((menu) => (
        <div
          key={menu._id}
          className=" p-6 flex flex-col items-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">{menu.title}</h2>
          <div className='flex justify-center items-center gap-10'>
          <img
            src={menu.image}
            alt={menu.title}
             className="min-w-full h-60 object-cover"
          />
          <ul className="w-full">
            {menu.items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-gray-700 py-2"
              >
                <p className='w-40 font-semibold text-xl  text-white'>{item.name}</p>
                <p className="font-semibold text-white">₹{item.price}</p>
              </li>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Menu;