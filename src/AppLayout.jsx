import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideNav';
import Home from './components/Home';
import Shop from './components/Shop';
import Collection from './components/Collection';
import Features from './components/Features';
import Products from './components/Product';
import Review from './components/Reviews';
import Footer from './components/Footer';
import Cart from './components/Cart'; // Import Cart component

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isCartShowing, setIsCartShowing] = useState(false);

  const openSidebar = () => {
    setScrollPosition(window.scrollY);
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCart = () => {
    setScrollPosition(window.scrollY);
    setIsCartShowing((option) => !option);
  };

  const closeSidebar = () => {
    setIsSidebarOpen((option) => !option);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!isSidebarOpen) {
      window.scrollTo(0, scrollPosition);
    }
  }, [isSidebarOpen, scrollPosition]);

  return (
    <div>
      {isSidebarOpen ? (
        <SideBar onClose={closeSidebar} />
      ) : (
        <div className='flex flex-col min-h-screen'>
          <Header onMenuClick={openSidebar} showCart={handleCart} />
          {isCartShowing && <Cart onClose={() => setIsCartShowing(false)} />}
          <main>
            <Home />
            <Shop />
            <Collection />
            <Features />
            <Products />
            <Review />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default AppLayout;
