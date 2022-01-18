import logo from './logo.svg';


function App() {
  return (
    <div>

      
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html">CookR<span>.</span></a></h1>
      

      <a href="SignUp.html" className="get-started-btn scrollto">SignUp</a>
      <a href="login.html" className="get-started-btnl scrollto">Login</a>
    </div>
  </header>



  
  <section id="hero" className="d-flex align-items-center">

    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <div className="row">
        <div className="col-xl-6">
          <h1>Find recipes for the ingedrients you aldready have </h1>
          <h2>We suggest you the best dishes with easiest recipies that can be made with the available ingedrients in your kitchen.</h2>
          <a href="search.html" className="btn-search scrollto"><i className="fas fa-search"></i>  Search</a>
          <a href="Explore.html" className="btn-explore scrollto"><i className="fas fa-dharmachakra"></i>  Explore</a>
        </div>
      </div>
    </div>

  </section>

  <main id="main">

    
    <section id="portfolio" className="portfolio">

      

      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Trending</h2>
          <p>Here are some dishes which are loved by most of the people</p>
        </div>


        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Sugar Free</li>
              <li data-filter=".filter-card">Dairy</li>
              <li data-filter=".filter-web">High Protein</li>
            </ul>
          </div>
        </div>

       <div clas="container">
       <div className="row card-deck">
        <div className="card card-columns text-center" style={{"width": "18rem"}}>
           <img className="card-img-top" src="assets/img/portfolio/portfolio-1.jpg" alt="Card image cap" />
           <div className="card-body">
              <h5 className="card-title">Noodles</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">Explore >></a>
          </div>
        </div>

        <div className="card card-columns text-center" style={{"width": "18rem"}}>
           <img className="card-img-top" src="assets/img/portfolio/portfolio-2.jpg" alt="Card image cap" />
           <div className="card-body">
              <h5 className="card-title">Gajar Ka Halwa</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">Explore >></a>
          </div>
        </div>


        <div className="card card-columns text-center" style={{"width": "18rem"}}>
           <img className="card-img-top" src="assets/img/portfolio/portfolio-3.jpg" alt="Card image cap" />
           <div className="card-body">
              <h5 className="card-title">Green Tea</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">Explore >></a>
          </div>
        </div>


        <div className="card card-columns text-center" style={{"width": "18rem"}}>
           <img className="card-img-top" src="assets/img/portfolio/portfolio-1.jpg" alt="Card image cap" />
           <div className="card-body">
              <h5 className="card-title">Noodles</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">Explore >></a>
          </div>
        </div>

      </div>
  </div>

</div>

    </section>


  </main>



  <footer id="footer">

    <div className="container py-4">

      <div className="social-links text-center  pt-md-0">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="https://www.linkedin.com/in/lakshay-joshi-b9298b201/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>

      <h6 className="Copyright">&copy; Copyright <strong><span>CookR</span></strong>. </h6>
      

    </div>

  </footer>



  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

  

    </div>
  );
}

export default App;
