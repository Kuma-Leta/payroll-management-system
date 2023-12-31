import {Link} from 'react-router-dom'
function Home(){
    return (
        <>
            <div className="home">
        <h1>Discover The World of </h1>
        <h1>Education</h1>
        <p>Experience, accountability and innovation – all of which is</p>
        <p>reflected in the quality of our results</p>
        <div className="signAndSignup">

            <Link to="/signup" className="btn">
              Sign up{" "}
            </Link>
            <Link to="/login" className="btn">
              Login{" "}
            </Link>
          
        </div>
      </div>
      <div className="aboutAndMission">
        <h1>Discover The World Of Education</h1>
        <div className="dash"></div>

        <p>
          we will streamline your financial processes, ensuring accuracy and
        </p>
        <p>compliance every step of the way. Let's embark on a journey of</p>
        <p>efficient payroll solutions tailored to your business needs.</p>
        <div className="galleries">
          <div className="galleryElement">
            <img src="tempImage6.jpg" alt="no thing" />
            <div className="about">
              <h1>About</h1>
              <p>
                Jimma University is a renowned academic institution located in
                Jimma, Ethiopia. Established in 1999, it has grown to become one
                of the country's leading universities, offering a diverse range
                of undergraduate and postgraduate programs. Known for its
                commitment to research and community engagement, Jimma
                University plays a vital role in contributing to educational
                advancement and societal development in the region. With a focus
                on excellence, it continues to be a hub for knowledge,
                innovation, and cultural enrichment.
              </p>
            </div>
          </div>
          <div className="galleryElement">
            <img src="tempImage7.jpg" alt="no thing" />
            <div className="mission">
              <h1>Mission</h1>
              <p>
                The mission of Jimma University is to foster academic
                excellence, innovation, and societal impact. Committed to
                providing quality education, advancing research, and promoting
                community engagement, the university strives to empower students
                with critical thinking skills and ethical values. With a focus
                on inclusivity and sustainable development, Jimma University
                aims to be a catalyst for positive change in Ethiopia and
                beyond, contributing to the advancement of knowledge and the
                betterment of society.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="attribution">
        <div className="overlay"></div>
        <h1>Attribution</h1>
        <div className="dash"></div>
        <div className="attributionElement">
          <div className="box">
            <h2>unique idea and solutions</h2>
          </div>
          <div className="box">
            <h2>targeting and positioning</h2>
          </div>
          <div className="box">
            <h2>friendly customer service</h2>
          </div>
        </div>
      </div>
      <div className="services">
        <h1>our services</h1>
        <div className="dash"></div>
      </div>
      <div className="statistics">
        <div className="statisticsOverlay"></div>

        <div className="summaryElement">
          <h1>1123</h1>
          <p>years of Experience</p>
        </div>
        <div className="summaryElement">
          {" "}
          <h1>1123</h1>
          <p>student Numbers</p>
        </div>
        <div className="summaryElement">
          {" "}
          <h1>1123</h1>
          <p>employees accross a country</p>
        </div>
        <div className="summaryElement">
          {" "}
          <h1>1123</h1>
          <p>employees accross a country</p>
        </div>
      </div>
      <footer className="footer">footer</footer> 
      </> 
    )
}
export default Home;