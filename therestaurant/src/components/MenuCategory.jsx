import MenuItem from './MenuItem';

const MenuCategory = ({ menuList }) => {
  return (
    <section>
      <header>
        <h3>{menuList.categoryName}</h3>
      </header>

      <div className="category">
        {menuList.menuItems.map((item, index) => {
          return (
            <MenuItem
              key={index}
              item={item}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MenuCategory;
