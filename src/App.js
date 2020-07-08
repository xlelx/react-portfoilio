import React from 'react';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand js-scroll-trigger" href="#page-top">LEO'S PORTFOLIO</a>
          <button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded"
            type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#portfolio">PROJECTS</a>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#about">ABOUT</a>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          <img class="masthead-avatar mb-5" src="img/photo (2).jpg" alt="" />
          <h1 class="masthead-heading mb-0">Hi, I'm Leo.</h1>
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          <p class="pre-wrap masthead-subheading font-weight-light mb-0">
            Undergraduate @ The University of Melbourne <br />
            Majoring in Computing and Information Systems <br />
            <a class="btn btn-outline-light btn-social mx-1"
              href="https://www.github.com/xlelx"><i
                class="fab fa-fw fa-github"></i></a></p>
        </div>
      </header>
      <section class="page-section portfolio" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="page-section-heading text-secondary mb-0 d-inline-block">PROJECTS</h2>
          </div>
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal0">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div><img class="img-fluid" src="img/sorting.PNG" alt="Sorting Visualizer" />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div><img class="img-fluid" src="img\shadowdefend.PNG" alt="Tower Defense Game" />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div><img class="img-fluid" src="img\chess.jpg" alt="Chess" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="portfolio-modal modal fade" id="portfolioModal0" tabindex="-1" role="dialog"
        aria-labelledby="#portfolioModal0Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i
              class="fas fa-times"></i></span></button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <h2 class="portfolio-modal-title text-secondary mb-0">Sorting Visualizer</h2>
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    <img class="img-fluid rounded mb-5" src="img\sorting.PNG" alt="Sorting Visualizer" />
                    <p class="mb-5">A webapp built in React to visualize well-known sorting algorithms. 
                    <a href="https://xlelx.github.io/SortingVisualizer">Link Here</a></p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i
                      class="fas fa-times fa-fw"></i>Close Window</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog"
        aria-labelledby="#portfolioModal1Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i
              class="fas fa-times"></i></span></button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <h2 class="portfolio-modal-title text-secondary mb-0">Tower Defense Game</h2>
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    <img class="img-fluid rounded mb-5" src="img\shadowdefend.PNG" alt="Tower Defense Game" />
                    <p class="mb-5">A game of Tower Defense designed and implemented in Java.</p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i
                      class="fas fa-times fa-fw"></i>Close Window</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog"
        aria-labelledby="#portfolioModal2Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i
              class="fas fa-times"></i></span></button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">

                    <h2 class="portfolio-modal-title text-secondary mb-0">Chess</h2>

                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    <img class="img-fluid rounded mb-5" src="img\chess.jpg" alt="Chess" />
                    <p class="mb-5">Implemented a fully functional two-player chess game in Java, using
                                    object-oriented techniques.</p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i
                      class="fas fa-times fa-fw"></i>Close Window</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
          <div class="text-center">
            <h2 class="page-section-heading d-inline-block text-white">ABOUT</h2>
          </div>
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          <div class="row">
            <div class="col-lg-4 ml-auto">
              <p class="pre-wrap lead">My name is Leo @ Khant Thurein Han. I'm currently in my second year pursuing a Computer Science
              Degree. I'm looking to expand my skillset as a Software Developer. </p>
            </div>
            <div class="col-lg-4 mr-auto">
              <p class="pre-wrap lead">I tutor computing subjects such as COMP10001/10002 for university students.
              I am able to demonstrate a strong understanding of fundamental programming concepts and
                        algorithms.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section" id="contact">
        <div class="container">
          <div class="text-center">
            <h2 class="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
          </div>
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4">
              <div class="d-flex flex-column align-items-center">
                <div class="icon-contact mb-3"><i class="far fa-envelope"></i></div>
                <div class="text-muted">Email</div><a class="lead font-weight-bold"
                  href="mailto:khantthureinhan.professional@gmail.com">khantthureinhan.professional@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="mb-4"></h4>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="mb-4">SOCIAL MEDIA</h4><a class="btn btn-outline-light btn-social mx-1"
                href="https://www.facebook.com/chintgel"><i class="fab fa-fw fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/in/khant-thurein-han"><i
                  class="fab fa-fw fa-linkedin-in"></i></a>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="mb-4"></h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
