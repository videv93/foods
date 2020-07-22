import React from 'react';
import './App.css';


const drinks = [
  {
    id: 1,
    image: 'https://images.foody.vn/res/g71/700458/s120x120/988d741d-f41a-4e8f-9fc0-f7a28312ed67.jpg',
    title: 'Sữa tươi trân châu đường đen',
    description: 'Brown sugar deerioca milk. (Không thể thay đổi mức đường và topping, chỉ thêm được kem trứng)',
    price: '62,000'
  },
  {
    id: 2,
    image: 'https://images.foody.vn/res/g71/700458/s120x120/5e9b3341-4163-4c01-c634-a479f11b65f6.jpg',
    title: 'Sữa tươi kem trứng trân châu đường đen',
    description: 'Creme brulee brown sugar deerioca. (Không thể thay đổi mức đường và topping)',
    price: '65,000'
  },
  {
    id: 3,
    image: 'https://images.foody.vn/res/g71/700458/s120x120/bccc064f-71a6-4da5-1812-7a0d9aef03db.jpg',
    title: 'Cacao trân châu đường đen',
    description: 'Brown sugar deerioca cocoa milk',
    price: '65,000'
  },
  {
    id: 4,
    image: 'https://images.foody.vn/res/g71/700458/s120x120/aedf12f1-a876-4461-0116-6f06efe824dd.jpg',
    title: 'Matcha trân châu đường đen',
    description: 'Brown sugar deerioca matcha latte',
    price: '65,000'
  },
  {
    id: 5,
    image: 'https://images.foody.vn/res/g71/700458/s120x120/ed72f451-47f1-4b29-e6db-0d1ddf158564.jpg',
    title: 'Latte trân châu đường đen',
    description: 'Brown sugar deerioca latte. (Không thể thay đổi mức đường và topping)',
    price: '75,000'
  },
]

function App() {
  return (
    <div className="App">
      <div className="container">
        { drinks.map(drink => {
          const { id, image, title, description, price } = drink;
          return (
            <div className="item" key={id}>
              <img className="item__img" src={image} alt="img" />
              <div className="item__info">
                <h2 className="item__title">{title}</h2>
                <div className="item__description">{description}</div>
              </div>
              <div className="item__price">
                {price}
                <span className="item__price-notation">đ</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
