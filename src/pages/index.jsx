import { render } from '@czechitas/render';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

import '../global.css';
import './index.css';

const response = await fetch('http://localhost:4000/api/drinks');
const body = await response.json();
const drinks = body.data;
//console.log('ahoj', body);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const navToogle = document.querySelector('.nav-btn');
const rolloutNav = document.querySelector('.rollout-nav');

navToogle.addEventListener('click', () => {
  rolloutNav.classList.toggle('nav-closed');
});

rolloutNav.addEventListener('click', () => {
  rolloutNav.classList.add('nav-closed');
});
