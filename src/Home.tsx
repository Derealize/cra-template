import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import usePageViews from './usePageViews';

function Home() {
  usePageViews();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href="https://derealize.com">Derealize - Tailwindcss Studio!</a>
      </h1>
      <div className={styles.main}>
        <p>
          <Link to="/Welcome">Welcome</Link>
          <Link to="/Play">Play</Link>
        </p>
        <p>
          <Link to="/Sizing">Sizing</Link>
          <Link to="/Color">Color</Link>
          <Link to="/Typography">Typography</Link>
          <Link to="/Shadows">Shadows</Link>
        </p>
        <p>
          <Link to="/build-anything/Simple">Simple</Link>
          <Link to="/build-anything/Playful">Playful</Link>
          <Link to="/build-anything/Elegant">Elegant</Link>
          <Link to="/build-anything/Brutalist">Brutalist</Link>
        </p>
        <p>
          <Link to="/Performance">Performance</Link>
          <Link to="/Responsive">Responsive</Link>
          <Link to="/States">States</Link>
        </p>
        <p>
          <Link to="/component/Recipes">Component</Link>
          <Link to="/ApplyDirective">@apply</Link>
          <Link to="/Dark">Dark</Link>
        </p>
        <p>
          <Link to="/Grid">Grid</Link>
          <Link to="/Transforms">Transforms</Link>
          <Link to="/Gradients">Gradients</Link>
        </p>
      </div>
      <div className={styles.main}>
        <h4>Marketing</h4>
        <p>
          <Link to="/marketing/Hero">Hero</Link>
          <Link to="/marketing/Feature">Feature</Link>
          <Link to="/marketing/CTA">CTA</Link>
          <Link to="/marketing/Headers">Headers</Link>
          <Link to="/marketing/Banners">Banners</Link>
        </p>
      </div>
      <div className={styles.main}>
        <h4>Application UI</h4>
        <p>
          <Link to="/application-ui/Layouts">Layouts</Link>
          <Link to="/application-ui/Headings">Headings</Link>
          <Link to="/application-ui/DescriptionLists">DescriptionLists</Link>
          <Link to="/application-ui/Tables">Tables</Link>
          <Link to="/application-ui/Navbars">Navbars</Link>
          <Link to="/application-ui/Pagination">Pagination</Link>
          <Link to="/application-ui/Modals">Modals</Link>
          <Link to="/application-ui/SlideOvers">SlideOvers</Link>
          <Link to="/application-ui/Avatars">Avatars</Link>
          <Link to="/application-ui/Dropdowns">Dropdowns</Link>
        </p>
      </div>
      <div className={styles.main}>
        <h4>Form</h4>
        <p>
          <Link to="/application-ui/form/FormLayout">FormLayout</Link>
          <Link to="/application-ui/form/InputGroups">InputGroups</Link>
          <Link to="/application-ui/form/SelectMenus">SelectMenus</Link>
          <Link to="/application-ui/form/SignIn">SignIn</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
