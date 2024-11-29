import React from "react";
import "./Project.css";


const Project = () => {




  return (
    <section className="Project">
    
    <div className="w-75 mx-auto Project">
      <div className="Project-title text-center">Projects</div>
      <div class="row mt-4 ">
        <div class="col-sm-6 list">
          <div class="card bg-transparent border-2 rounded-4 text-light border-info">
            <div class="card-body">
              <h5 class="card-title text-center text-decoration-underline">E-Book Store</h5>
              <p class="card-text text-center">The "E-Book Store" project is a web-based platform built using HTML, CSS, JavaScript, PHP, and MySQL for managing and downloading e-books. Users can browse, search, and download e-books, with secure user authentication and an admin panel to manage books and orders. The backend manages database operations like user accounts, book inventory, and download.</p>
              <div className="d-flex justify-content-center ">
              <a href="https://github.com/raghul030302/project/tree/main/e-book" class="link_btn" target='blank'>Repo Link</a>
            </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 list">
          <div class="card bg-transparent border-2 rounded-4 text-light border-info  h-100">
            <div class="card-body ">
              <h5 class="card-title text-center text-decoration-underline">Weather</h5>
              <p class="card-text text-center">A React.js-based weather app that fetches real-time weather data from the OpenWeatherMap API, providing current conditions, forecasts, and location-based weather details. Features include dynamic city search and user-friendly temperature displays</p>
              <div className="d-flex justify-content-center mt-lg-5 pt-lg-3">
              <a href="https://github.com/raghul030302/Weather" class="link_btn" target='blank'>Repo Link</a>
              <a href="https://charming-biscochitos-d54157.netlify.app/" class="link_btn ms-5" target='blank'>Live Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4 ">
        <div class="col-sm-6 list">
          <div class="card bg-transparent border-2 rounded-4 text-light border-info h-100">
            <div class="card-body">
              <h5 class="card-title text-center text-decoration-underline">Gesture-based Desktop Automation</h5>
              <p class="card-text text-center">
              The project "Gesture-based Desktop Automation" allows users to upload images and perform operations like blurring or resizing based on hand gestures recognized by a CNN model. The system uses a webcam to capture gestures and applies pre-defined actions accordingly. Technologies like OpenCV and HTML are used for processing and UI design. 
              </p>
              <div className="d-flex justify-content-center ">
              <a href="https://github.com/raghul030302/project/tree/main/A%20Gesture%20Based%20Tool" class="link_btn" target='blank'>Repo Link</a>
            </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 list">
          <div class="card bg-transparent border-2 rounded-4 text-light border-info h-100">
            <div class="card-body">
              <h5 class="card-title text-center text-decoration-underline">Fitter</h5>
              <p class="card-text text-center">"Fitter" is a gym website project currently under development, designed to provide users with personalized workout plans, diet recommendations, personal training (PT) services, and a BMI calculator. The platform aims to help users achieve their fitness goals through tailored programs. Future updates will enhance its features and functionality.</p>
              <div className="d-flex justify-content-center ">
              <a href="https://github.com/raghul030302/GYM-Site" class="link_btn" target='blank'>Repo Link</a>
              <a href="https://660e0c80f3f7bb8252f19013--tiny-valkyrie-d06da9.netlify.app/" class="link_btn ms-5" target='blank'>Live Link</a>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-4 ">
        <div class="col-sm-6 list">
          <div class="card bg-transparent border-2 rounded-4 text-light border-info h-100">
            <div class="card-body">
              <h5 class="card-title text-center text-decoration-underline">Shop cart</h5>
              <p class="card-text text-center">The watch shop cart is a sleek single-page website that showcases a curated collection of stylish watches, allowing users to browse and select their favorites effortlessly. With an intuitive interface, customers can add items to their cart, view product details, and proceed to checkout seamlessly. The design emphasizes user experience, ensuring a quick and enjoyable shopping journey</p>
              <div className="d-flex justify-content-center ">
              <a href="https://github.com/raghul030302/shop-cart" class="link_btn" target='blank'>Repo Link</a>
              <a href="https://raghul030302.github.io/shop-cart/" class="link_btn ms-5" target='blank'>Live Link</a>
            </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 list ">
          <div class="card bg-transparent border-2 rounded-4 text-light border-info h-100">
            <div class="card-body">
              <h5 class="card-title text-center text-decoration-underline">CRUD application</h5>
              <p class="card-text text-center">
              A single-page React.js CRUD application for vehicle management allows users to collect and manage data on vehicles. It includes fields for Vehicle Number, Invoice Number, Date, Delivery Area, and Amount. The app enables users to create, read, update, and delete vehicle records efficiently in a user-friendly interface.</p>
              <div className=" d-flex justify-content-center mt-lg-5 pt-lg-3 ">
              <a href="https://github.com/raghul030302/CURD" class="link_btn" target='blank'>Repo Link</a>
              <a href="https://keen-pegasus-59b712.netlify.app/" class="link_btn ms-5" target='blank'>Live Link</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>
  );
};

export default Project; 

