// import React from 'react'
import './menu.css';
import { menu_list } from '../../assets/assets';

const Menu = () => {
  return (

    <div> </div>
  )
}


            </div>
            <div className="m-3 text-center">
              <p className="text-lg font-semibold">{item.menu_name}</p>
            </div> 
          </div>
        ))}
      </div>
      <div className='text-center p-12 text-black'>
  <button className='menu-button 
    bg-orange-450 text-black font-semibold py-2 px-4 rounded-lg 
    shadow-md transition-transform duration-300 transform hover:scale-105 
    hover:bg-orange-450 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-40 
    focus:ring-opacity-50'>
    Full Menu
  </button>
</div>
</div>
    </div>
  );
};
export default Menu;
