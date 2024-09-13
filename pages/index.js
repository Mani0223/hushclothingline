import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Head from 'next/head';
import 'font-awesome/css/font-awesome.min.css';


if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap.bundle.min.js');
}

export default function Index() {
  return (
    <div>
      <Head>
        {/* Preconnecting to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        
 {/* Bootstrap Icons */}
 <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css" rel="stylesheet" />
        
        <style>{`
          body {
            font-family: 'Bebas Neue', sans-serif;
          }

          html, body {
  max-width: 100%;
  overflow-x: hidden;
}

        `}</style>
      </Head>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light border-bottom">
  <div className="container-fluid">
    <div className="d-flex flex-column w-100">
      {/* Logo centered */}
      <div className="d-flex justify-content-center">
        <a className="navbar-brand" href="#">
          <img src="/images/logo.jpeg" alt="Logo" className="img-fluid" />
        </a>
      </div>

       {/* Toggler Button */}
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Items centered under the logo */}
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <a className="nav-link" href="https://fda732-6d.myshopify.com/collections/mens-clothing">Mens</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="https://fda732-6d.myshopify.com/collections/womens-clothing">Womens</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="https://fda732-6d.myshopify.com/collections/childrens-clothing">Kids</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="https://fda732-6d.myshopify.com/collections/all">Best Sellers</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="https://fda732-6d.myshopify.com/collections/new-arrivals">New Arrivals</a>
          </li>
        </ul>
      </div>
</div>
   </div>

</nav>



   
    {/* Hero Section */}
<section
  className="d-flex justify-content-center align-items-center vh-100 text-center position-relative"
>
  {/* Video Background */}
  <video
    className="position-absolute w-100 h-100"
    src="/images/Hush.mp4"
    type="video/mp4"
    autoPlay
    muted
    loop
    playsInLine
    style={{
      objectFit: 'cover',
      zIndex: '-1',  
    }}
  />

  <div className="container text-white position-relative">
    <a
      className="btn btn-dark btn-lg"
      href="https://fda732-6d.myshopify.com/collections/all"
      target="_blank"
      rel="noopener noreferrer"
    >
      Shop Now
    </a>
  </div>
</section>



     {/* Carousel Items */}
<section id="gallery" className="py-5 bg-light text-dark py-4">
  <div className="container">
    <h1 className="text-center jumbotron-text mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>2024 Fall Collection</h1>

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-4">
              <div className="card h-100 text-center border-0">
                <img src="/images/orange.jpeg" className="img-fluid mx-auto d-block" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Orange Hockey Jersey</h5>
                   <p>$100</p>
                  
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card h-100 text-center border-0">
                <img src="/images/brown2.jpeg" className="img-fluid mx-auto d-block" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Brown Hockey Jersey</h5>
                  <p>$100</p>
                  
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card h-100 text-center border-0">
                <img src="/images/white.jpeg" className="img-fluid mx-auto d-block" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Black & White Hockey Jersey</h5>
                  <p>$100</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col-4">
              <div className="card h-100 text-center border-0">
                <img src="/images/childrens.jpeg" className="img-fluid mx-auto d-block" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Kids Orange Hockey Jersey</h5>
                  <p>$55</p>
                  
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card h-100 text-center border-0">
                <img src="/images/kidsb.jpeg" className="img-fluid mx-auto d-block" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Kids Black & White Hockey Jersey</h5>
                  <p>$55</p>
                  
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card h-100 text-center border-0">
                <img src="/images/hush2.jpeg" className="img-fluid mx-auto d-block" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Kids Brown & White Hockey Jersey</h5>
                  <p>$55</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    {/* Shop All Styles Button */}
    <div className="text-center mt-4">
      <a href="https://fda732-6d.myshopify.com/collections/all" className="btn btn-outline-dark btn-lg">Shop All Styles</a>
    </div>
  </div>
</section>


      {/* Photo Section*/}
      <section className="py-0">
  <div className="container-fluid p-0">
    <div className="row" style={{ margin: '0' }}>

      {/* First Image with Text */}
      <div className="col-md-6 position-relative">
        <img src="/images/her.jpeg" alt="Photo 1" className="img-fluid" style={{ width: '100%' }} />
        <div className="position-absolute" style={{ top: '55%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <div>
            <span style={{ display: 'block', fontFamily: 'Bebas Neue, sans-serif', color: 'white', textTransform: 'uppercase', fontSize: '60px', letterSpacing: '2px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'  }}>Unisex Jerseys</span>
            <span style={{ display: 'block', fontFamily: 'Bebas Neue, sans-serif', color: 'white', textTransform: 'uppercase', fontSize: '30px', letterSpacing: '1px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'  }}>starting at</span>
            <span style={{ display: 'block', fontFamily: 'Bebas Neue, sans-serif', color: 'white', textTransform: 'uppercase', fontSize: '80px', letterSpacing: '2px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'  }}>$100</span>
            <a className="btn btn-outline-light btn-lg" href="https://hushclothingline.org/collections/hockey-jersey-collection">Shop Now</a>
          </div>
        </div>
      </div>

      {/* Second Image with Text */}
      <div className="col-md-6 position-relative">
        <img src="/images/model.jpeg" alt="Photo 2" className="img-fluid" style={{ width: '100%' }} />
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <div>
            <span style={{ display: 'block', fontFamily: 'Bebas Neue, sans-serif', color: 'white', textTransform: 'uppercase', fontSize: '70px', letterSpacing: '2px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'  }}>SALE</span>

            <span style={{ display: 'block', fontFamily: 'Bebas Neue, sans-serif', color: 'white', textTransform: 'uppercase', fontSize: '50px', letterSpacing: '2px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'  }}>UNISEX JOGGING SUITES</span>
            <span style={{ display: 'block', fontFamily: 'Bebas Neue, sans-serif', color: 'white', textTransform: 'uppercase', fontSize: '70px', letterSpacing: '1px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'  }}>$90</span>
            <a className="btn btn-outline-light btn-lg mt-4" href="https://fda732-6d.myshopify.com/collections/unisex-jogging-suits">Shop Now</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Contact Section */}
      <section id="get-in-touch" className="py-5">
  <div className="container">
    {/* Title */}
    <div className="row">
      <div className="col text-center mt-4 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
        <h1>Products</h1>
      </div>
    </div>

    {/* First row of images */}
    <div className="row">
      <div className="col-md-4 position-relative">
        <img src="/images/womens.jpeg" alt="Photo 1" className="img-fluid" />
        <a href="https://fda732-6d.myshopify.com/collections/womens-clothing" className="position-absolute top-50 start-50 translate-middle text-dark btn btn-light btn-md">Womens</a>
      </div>
      <div className="col-md-4 position-relative">
        <img src="/images/mens.jpeg" alt="Photo 2" className="img-fluid" />
        <a href="https://fda732-6d.myshopify.com/collections/mens-clothing" className="position-absolute top-50 start-50 translate-middle text-dark btn btn-light btn-md">Mens</a>
      </div>
      <div className="col-md-4 position-relative">
        <img src="/images/caps.png" alt="Photo 3" className="img-fluid" />
        <a href="https://fda732-6d.myshopify.com/collections/hats" className="position-absolute top-50 start-50 translate-middle text-white btn btn-dark btn-md">Hats</a>
      </div>
    </div>

    {/* Second row of images */}
    <div className="row mt-4 pb-5 border-bottom">
      <div className="col-md-4 position-relative">
        <img src="/images/joggies.jpeg" alt="Photo 4" className="img-fluid" />
        <a href="https://fda732-6d.myshopify.com/collections/unisex-jogging-suits" className="position-absolute top-50 start-50 translate-middle text-dark btn btn-light btn-md">Jogging Suits</a>
      </div>
      <div className="col-md-4 position-relative">
        <img src="/images/childrens2.jpeg" alt="Photo 5" className="img-fluid" />
        <a href="https://fda732-6d.myshopify.com/collections/childrens-clothing" className="position-absolute top-50 start-50 translate-middle text-dark btn btn-light btn-md">Childrens</a>
      </div>
      <div className="col-md-4 position-relative">
        <img src="/images/denim2.jpeg" alt="Photo 6" className="img-fluid" />
        <a href="https://fda732-6d.myshopify.com/collections/denim-pants" className="position-absolute top-50 start-50 translate-middle text-dark btn btn-light btn-md">Denim</a>
      </div>
    </div>
  </div>
</section>


{/* About */}
<section className="text-center py-5 border-bottom">
  <div className="container text-dark">
    <h1 className="" style={{ fontFamily: 'Bebas Neue, sans-serif', marginTop: '-40px' }}>Hush Clothing</h1>
    <p className='mt-4' style={{ lineHeight: '2.5' }}>
    Our streetwear brand combines bold, urban aesthetics with modern comfort, designed for those who dare to stand out. Inspired by the energy of city life, we blend contemporary fashion with street culture, offering unique pieces that express individuality and confidence. Founded in Akron, Ohio, our brand is rooted in the spirit of resilience and innovation, reflecting the dynamic blend of grit and creativity found in the city. Whether you're on the move or making a bold statement, our collections are crafted for those who live without limits and embrace their unique style.
    </p>
     {/* Instagram Button */}
     <div className="mt-4">
      <a href="https://www.instagram.com/hush.clothingline?igsh=ODQ1anJwdGlkZ3Z6" target="_blank" className="btn btn-outline-dark btn-lg" rel="noopener noreferrer">
        <i className="fa fa-instagram" aria-hidden="true"></i> Follow Us on Instagram
      </a>
    </div>
  </div>
</section>


{/* Pant, Hoodies, Tees */}
<section className="new-layout pt-5" style={{ marginBottom: '50px' }}> 
  <div className="container">
    <div className="row">
      {/* Graphic Section */}
      <div className="col-md-6 text-white d-flex flex-column">
        <div 
          className="flex-fill p-3 bg-light text-center d-flex flex-column justify-content-center align-items-center"
          style={{ 
            minHeight: '315px', 
            backgroundImage: 'url(/images/graphic.jpeg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          <h3>Graphic Tees</h3>
          <a href="https://fda732-6d.myshopify.com/collections/graphic-tees" className="btn btn-light">Shop Now</a>
        </div>

        {/* Bottoms Section */}
        <div 
          className="p-3 text-center text-white d-flex flex-column justify-content-center align-items-center"
          style={{ 
            minHeight: '285px', 
            backgroundImage: 'url(/images/pants.jpeg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          <h3>Bottoms</h3>
          <a href="https://fda732-6d.myshopify.com/collections/denim-pants" className="btn btn-light">Shop Now</a>
        </div>
      </div>

      {/* Hoodies Section */}
      <div 
        className="col-md-6"
        style={{
          backgroundImage: 'url(/images/hoodies.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
        }}
      >
        <div className="text-white text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '100%', padding: '20px' }}>
          <h4>Jackets & Hoodies</h4>
          <a href="https://fda732-6d.myshopify.com/collections/hoodies-jackets" className="btn btn-light">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
</section>


      

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; 2024 Hush Clothing. All Rights Reserved.</p>
        </div>
      </footer>
      <style jsx>{`
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-image: none; /* Remove the default background */
          border: none;
        }

        .carousel-control-prev-icon::after,
        .carousel-control-next-icon::after {
          content: '‹'; /* Left arrow for prev */
          font-size: 40px;
          color: black; 
        }

        .carousel-control-next-icon::after {
          content: '›'; /* Right arrow for next */
          color: black;
        }

        /* Move arrows out */
        .carousel-control-prev {
          left: -80px; 
        }

        .carousel-control-next {
          right: -80px; 
        }
      `}</style>
    </div>



  );
}


