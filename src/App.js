import React from 'react';
import './App.css'
import * as products from '../src/shared/products'
import * as leads from '../src/shared/leaders'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/about">Про нас</Link></li>
          <li><Link to="/contact">Контакти</Link></li>
        </ul>
      </nav>
      <div className="cart">
        <a href="#">Кошик</a>
      </div>
    </header>
  );
}


function PersonCard(props) {
  const { name, position, company, email, phone, address } = props;

  return (
    <div className="person-card">
      <h2 className="person-name">{name}</h2>
      <p className="person-position">{position}</p>
      <p className="person-company">{company}</p>
      <p className="person-contact">Email: {email}</p>
      <p className="person-contact">Phone: {phone}</p>
      <p className="person-contact">Address: {address}</p>
    </div>
  );
}

function Product(props) {
  const { imageSrc, alt, title, description, price } = props;
  return (
    <div className="product">
      <img src={imageSrc} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Купити за {price} грн</button>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© Магазин годинників 2023</p>
    </footer>
  );
}


    function AboutPage() {
      return (
        <div className="about-container">
          <h1>Про Нас</h1>
          <p>
            Ми є провідною компанією з розповсюдження годинників, присвяченою привезенню вам найкращих годинників з усього світу. З великою пристрастю до якості та майстерності, ми формуємо різноманітну колекцію годинників, що задовольняють кожен стиль та випадок.
          </p>
          <p>
            Наша місія полягає в тому, щоб надати нашим клієнтам виняткові годинники, які не тільки показують час, але й роблять заявку. Ми тісно співпрацюємо з відомими годинниковими майстрами та дизайнерами, щоб кожен годинник відповідав нашим високим стандартам відмінності.
          </p>
          <p>
            В нашій компанії ми віримо, що годинник - це більше, ніж пристрій для вимірювання часу; він є відображенням особистості та стилю людини. Незалежно від того, чи ви вподобаєте класичну елегантність, сучасну вишуканість чи спортивну функціональність, у нас є ідеальний годинник, що підкреслить вашу індивідуальність.
          </p>
          <p>
            Задоволення клієнта - основа нашого бізнесу. Ми прагнемо забезпечити винятковий досвід покупок, пропонуючи безперебійну онлайн-платформу та винятковий сервіс для клієнтів. Наш досвідчений персонал завжди готовий допомогти вам знайти ідеальний годинник та відповісти на будь-які питання, які ви маєте.
          </p>
          <p>
            Дякуємо, що обрали нашу компанію з розповсюдження годинників. Ми з нетерпінням чекаємо, щоб допомогти вам знайти ідеальний годинник, який супроводжуватиме вас на незабутні моменти життя.
          </p>
        </div>
      );
    }
  



function App() {
  const watches = products.PRODUCTS.map((product) =>
    (<Product imageSrc={product.img} title={product.name} description={product.description} price={product.price} />)
  );
  const leaders = leads.LEADERS.map((leader) => (
    <PersonCard name = {leader.name} position= {leader.position} company = {leader.company} email={leader.email} phone = {leader.phone} address={leader.address} />
  ))

  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <Switch>
          <Route path="/about" component={()=> (<AboutPage/>)} />
          <Route path="/" exact component={() => (
            <div className="grid-container">
              {watches}
            </div>
          )} />
          <Route path="/contact" component={ () => (
            <div className="grid-container">
            {leaders}
           </div>
          )
            
          } />

          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

