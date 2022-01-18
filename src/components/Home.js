import Header from './header';
import Container from './container';
import Footer from './footer';


function App() {
  return (
    <div>

      
  <Header />

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


        <Container />

       
      </div>

    </section>


  </main>



  <Footer />



  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

  

    </div>
  );
}

export default App;
