import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'

const initialStoreItems = [
  {
    id: '001-beetroot',
    name: 'beetroot',
    price: 0.35
  },
  {
    id: '002-carrot',
    name: 'carrot',
    price: 0.35
  },
  {
    id: '003-apple',
    name: 'apple',
    price: 0.35
  },
  {
    id: '004-apricot',
    name: 'apricot',
    price: 0.35
  },
  {
    id: '005-avocado',
    name: 'avocado',
    price: 0.35
  },
  {
    id: '006-bananas',
    name: 'bananas',
    price: 0.35
  },
  {
    id: '007-bell-pepper',
    name: 'bell pepper',
    price: 0.35
  },
  {
    id: '008-berry',
    name: 'berry',
    price: 0.35
  },
  {
    id: '009-blueberry',
    name: 'blueberry',
    price: 0.35
  },
  {
    id: '010-eggplant',
    name: 'eggplant',
    price: 0.35
  }
]

const userCartItems = [
  {
    item: {
      id: '001-beetroot',
      name: 'Beetroot',
      price: 0.33
    },
    quantity: 8
  }
]
export default function App() {
  // Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState(userCartItems)
  console.log('InsideStoreItems: ', storeItems)
  console.log('InsideCartItems: ', cartItems)
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(storeItems => {
            return (
              <li>
                <div className="store--item-icon">
                  <img
                    src={`/assets/icons/${storeItems.id}.svg`}
                    alt="StoreItems"
                  />
                </div>
                <button>Add to cart</button>
              </li>
            )
          })}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(cartItems => {
              return (
                <li>
                  <img
                    className="cart--item-icon"
                    src={`assets/icons/${cartItems.item.id}.svg`}
                    alt="beetroot"
                  />
                  <p>Beetroot</p>
                  <button className="quantity-btn remove-btn center">-</button>
                  <span className="quantity-text center">1</span>
                  <button className="quantity-btn add-btn center">+</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
