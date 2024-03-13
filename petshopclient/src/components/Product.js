import React, { useState } from 'react';
import './product.css';

const Product = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const isProductInCart = cartItems.find((item) => item.id === product.id);
    if (!isProductInCart) {
      setCartItems([...cartItems, product]);
      window.location.href = '/cart';
    } else {
      console.log('Product is already in the cart');
    }
  };

  const products = [
    {
      id: 1,
      name: 'LION',
      description: 'Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey. Their coats are yellow-gold, and adult males have shaggy manes that range in color from blond to reddish-brown to black',
      image: 'https://photonfact.weebly.com/uploads/2/6/4/0/26401694/8752886186_8fe2e6a917_o.jpg',
      price: '$20',
      quantity: 1,
      availableQuantity: 10,
    },
    {
      id: 2,
      name: 'HUSKY',
      description: '  Good Family Dog: Yes, especially for active families. Intelligence: Highly intelligent, but can be stubborn. Lifespan: Typically 12–14 years. Miniature Versions: No true miniature Siberian Huskies, but similar breeds like the Alaskan Klee Kai exist',
      image: 'https://media.istockphoto.com/id/1338954116/photo/dog-portrait-outside-at-the-park-on-summer.jpg?s=612x612&w=0&k=20&c=6sRSNWMhZj4QxeTuLS2JZLzjR_os-Gbfnil6mNjga6I=',
      price: '$20',
      quantity: 1,
      availableQuantity: 10,
    },
    {
      id: 3,
      name: 'BETTA FISH',
      description: 'One of the luckiest Vastu species for a home aquarium is the betta fish. It brings happiness and draws good vibes into the house in all homes. It is stated that catfish can survive in any type of water, including freshwater lakes and drainage systems',
      image: 'https://4.imimg.com/data4/VI/GO/ANDROID-12484308/product-500x500.jpeg',
      price: '$20',
      quantity: 1,
      availableQuantity: 10,
    },
    {
      id: 4,
      name: 'SHITZU',
      description: 'Shi Tzus good luck comes from Buddhism since the Buddha possibly owned one. An old myth says the Buddhas Shi Tzu defended him from robbers by transforming into a lion. Then, Buddha thanked him by kissing his forehead, leaving a white mark known as the “Buddhas kiss',
      image: 'https://t3.ftcdn.net/jpg/04/06/80/48/360_F_406804814_R9li7y4DIh9N656GjChhKi8eFyCHouZ6.jpg',
      price: '$20',
      quantity: 1,
      availableQuantity: 10,
    },
    {
      id: 5,
      name: 'CAT',
      description: 'the white or silver Persians we all know, these pretty kitties can have grey, orange, black, tri-colored, and even calico coats. And there are just as many varieties of Persian cats, including tortoiseshell, calico, and tuxedo',
      image: 'https://besttopets.com/wp-content/uploads/2023/11/Beautiful-Kitten-Besttopets-1.jpg',
      price: '$20',
      quantity: 1,
      availableQuantity: 10,
    },
    {
      id: 6,
      name: 'MACCAW BIRS',
      description: ' a well-socialized, positively interacted with macaw can be a gentle pet. Macaws from the Ara genus, such as green-winged, scarlet, and blue-and-gold macaws, have a bare facial patch, which turns flush when the bird is overly excited',
      image: 'https://t4.ftcdn.net/jpg/00/43/06/21/360_F_43062103_9O3g0hNHpKfugKIqhBV6HS7feW71lfDl.jpg',
      price: '$20',
      quantity: 1,
      availableQuantity: 10,
    },
  ];

  return (
    <div>
      <h2>Available Pets</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h3>{product.description}</h3>
            <p>  avabilequantity: {product.availableQuantity}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
