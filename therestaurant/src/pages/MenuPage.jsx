import MenuCategory from '../components/MenuCategory';
import { menuList } from '../utils/restaurant.config';

const MenuPage = () => {
  return (
    <div className="column">
      <div className="content">
        <p>
          Välkommen till SatoSuShi, din främsta källa för allt som rör sushi.
        </p>
        <p className="subtitle">Sushi Restaurang sedan 2008</p>
      </div>

      <div className="content">
        <h2>Menu</h2>

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
