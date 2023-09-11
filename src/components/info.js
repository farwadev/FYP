import React from "react";
// import videos
// import video from "../images/video1.MP4";
import video1 from "../images/video3.MP4";
import video2 from "../images/video2.MP4";
import video3 from "../images/video4.MP4";
// import { Link } from "react-router-dom";
import "../pages/style/info.css";

function cards(props) {
  return (
    <div>
    
      <div class="row featurette">
        
        <div class="col-md-12">
          <center>
            <h2 class="featurette-heading fw-normal lh-">
              WELCOME TO OUR GARAGE!!!
            </h2>
          </center>
          {/* <p class="lead">
          </p> */}
        </div>
        {/* <div class="col-md-4">
          <video src={video} width="100%" autoPlay loop muted></video>
        </div> */}
        {/* <hr class="featurette-divider" /> */}
      </div>

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">
            MY NAME IS ADIL SAEED{" "}
            {/* <span class="text-body-secondary">See for yourself.</span> */}
          </h2>
          <p class="lead">
            I have been working and providing different services in automotive
            industry since 2002.I have work experience of 21 Years and can do
            all types of repairs and maintenance. I have been working and
            providing different services in automotive industry since 2002.I
            have work experience of 21 Years and can do all types of repairs and
            maintenance. I have been working and providing different services in
            automotive industry since 2002.I have work experience of 21 Years
            and can do all types of repairs and maintenance.
          </p>
          <hr class="featurette-divider" />
        </div>
        <div class="col-md-4 order-md-1">
          <video src={video3} width="100%" autoPlay loop muted></video>
        </div>
      </div>

      {/* <hr class="featurette-divider" /> */}

      <div class="row featurette">
        <div class="col-md-8">
          <h2 class="featurette-heading fw-normal lh-1">
            HOME SERVICE IS AVAILABLE:
          </h2>
          <p class="lead">
            We treat every vehicle as if it were our own and strive to provide
            high-quality work and excellent communication throughout the repair
            process.We know that car troubles can be stressful , so we d our
            best to make the experience as hassle-free as possible.I have been
            working and providing different services in automotive industry
            since 2002.I have work experience of 21 Years and can do all types
            of repairs and maintenance. I have been working and providing
            different services in automotive industry since 2002.I have work
            experience of 21 Years and can do all types of repairs and
            maintenance .We also provide home services.
          </p>
          <hr class="featurette-divider" />
        </div>
        <div class="col-md-4">
          <video src={video2} width="100%" autoPlay loop muted></video>
        </div>
      </div>
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">
            RANGE OF SERVICES FOR YOUR VEHICLES.{" "}
          </h2>
          <p class="lead">
            At our Garage, we offer Link range of services to keep your vehicle
            running smoothly, from oil changes and tire rotations to more
            complex engine repairs .We specialize in working with both domestic
            and foreign vehicles and have the latest diagnostic tools and
            equipment to ensure accurate ans efficient repairs. I have been
            working and providing different services in automotive industry
            since 2002.I have work experience of 21 Years and can do all types
            of repairs and maintenance. I have been working and providing
            different services in automotive industry since 2002.I have work
            experience of 21 Years and can do all types of repairs and
            maintenance.
          </p>
          <hr class="featurette-divider" />
        </div>

        <div class="col-md-4 order-md-1">
          <video src={video1} width="100%" autoPlay loop muted></video>
        </div>
      </div>

      {/* <hr class="featurette-divider" /> */}
    </div>
  );
}

export default cards;
