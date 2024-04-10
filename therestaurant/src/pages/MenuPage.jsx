import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import MenuCategory from '../components/MenuCategory';

const MenuPage = () => {
  const { menuList } = useContext(GlobalContext);

  return (
    <div className="column">
      <div className="content">
        <h2>Meny</h2>

        <div className="menu">
          {menuList.map((list, index) => {
            return (
              <MenuCategory
                key={index}
                menuList={list}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
