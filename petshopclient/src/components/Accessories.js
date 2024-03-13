import React, { useState } from 'react';
import './Accessories.css';

const Accessories = () => {
  const [cartItems, setCartItems] = useState([]);
  const [accessories, setAccessories] = useState([
   {
        id: 1,
        name: 'DOG chain with glass',
        description: 'A chain, a leash, a tether for walks, a symbol of companionship. Links of trust, binding hearts, guiding adventures side by side.',
        image: 'https://www.ardeaprints.com/t/172/dog-pug-wearing-gold-chain-headphones-11690441.jpg.webp',
        price: '$20',
        quantity: 1,
        avabilequantity: 10,
      },
      {
        id: 2,
        name: 'chain',
        description: 'A chain, a leash, a tether for walks, a symbol of companionship. Links of trust, binding hearts, guiding adventures side by side.',
        image: 'https://images-cdn.ubuy.co.in/6354f4835c07ec149116f5c3-2-pieces-dog-link-chain-gold-necklace.jpg',
        price: '$15',
        quantity: 1,
        avabilequantity: 10,
      },
      {
        id: 3,
        name: 'DOG food',
        description: 'Nutritious meals for our furry friends, sustenance for their boundless energy. Quality ingredients ensure health, vitality, and happy tails wagging.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qRJd019hgMlofoPLgc_GKxEimNGYOsfMQQ&usqp=CAU',
        price: '$20',
        quantity: 1,
        avabilequantity: 10,
      },
      {
        id: 4,
        name: 'Toys',
        description: 'Chew toys, balls, and squeaky delights A dog joy, their playful rights.From tug-of-war to fetchs call,  Toys bring happiness, the best of all.',
        image: 'https://www.marthastewart.com/thmb/3OrmTmEmNka3nfkUWUPUjdCjY5w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dog-with-toys-getty-0419-b30617e5597a4fe889cd20ca32266fae.jpg',
        price: '$15',
        quantity: 1,
        avabilequantity: 10,
      },
      {
        id: 5,
        name: 'DOG HOME',
        description: 'A cozy haven, a pups domain, filled with toys, warmth, and love. Safe retreat from the world, their sanctuary reigns.',
        image: 'https://funnyfuzzy.com/cdn/shop/files/FunnyFuzzy_ChristmasSnowHouseCozyWarmthLargeDogHouse3.jpg?v=1704274081&width=1000',
        price: '$20',
        quantity: 1,
        avabilequantity: 10,
      },
      {
        id: 6,
        name: 'DRESS',
        description: 'Canine couture: Dresses for dogs, stylish and snug. Colors and fabrics match their charm, a fashion statement for every wag.',
        image: 'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/917/849/new_medium/that_dood_squad.jpg?1560499617',
        price: '$15',
        quantity: 1,
        avabilequantity: 10,
      },
  ]);

  const addToCart = (accessory) => {
    // Calculate total price for the item
    const totalPrice = parseFloat(accessory.price.slice(1)) * accessory.quantity;
    // Add the accessory to the cart with total price
    setCartItems([...cartItems, { ...accessory, totalPrice }]);
    window.location.href = '/cart';
  };

  const increaseQuantity = (accessory) => {
    const updatedAccessories = accessories.map((item) =>
      item.id === accessory.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setAccessories(updatedAccessories);
  };

  const decreaseQuantity = (accessory) => {
    const updatedAccessories = accessories.map((item) =>
      item.id === accessory.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    );
    setAccessories(updatedAccessories);
  };

  return (
    <div className="Accessories-container">
      <h2>Available Accessories</h2>
      <div className="Accessories-list">
        {accessories.map((accessory) => (
          <div key={accessory.id} className="Accessories">
            <img src={accessory.image} alt={accessory.name} />
            <h3>{accessory.name}</h3>
            <p>{accessory.description}</p>
            <p>Price: {accessory.price}</p>
            <p>Available Quantity: {accessory.avabilequantity}</p>
            <div className="quantity-control">
              <button onClick={() => decreaseQuantity(accessory)}>-</button>
              <span>{accessory.quantity}</span>
              <button onClick={() => increaseQuantity(accessory)}>+</button>
            </div>
            <button onClick={() => addToCart(accessory)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
