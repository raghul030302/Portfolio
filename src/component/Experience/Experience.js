import React from "react";
import "./Experience.css";


const Experience = () => {



  return (
    <section className="Experience">

    <div className="w-75 mx-auto Experience">
      <div className="Experience-title text-center">Experience</div>

      <div className="row mt-4">
        <div className="col-sm-12">
          <div className="card bg-transparent border-2 rounded-4 text-light border-info">
            <div className="card-body">
              <h5 className="card-title text-center text-decoration-underline">
                Front-End Developer Intern at Senchola
              </h5>
              <p className="card-text text-center">
                At Senchola, I developed dynamic front-end components using
                React.js, improving user experience and responsiveness. I worked
                on integrating APIs, managing state with Redux, and optimizing
                website performance. My role involved closely collaborating with
                back-end teams to ensure seamless data flow between the UI and
                server. I worked on various front-end projects, including a CRUD
                application, a Weather App, a Shop Cart, and a Facebook Frontend
                Clone. I used React.js, JavaScript, and Bootstrap to build
                responsive and user-friendly interfaces. Collaborating with
                back-end developers, I ensured smooth data handling and API
                integrations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-12">
          <div className="card bg-transparent border-2 rounded-4 text-light border-info">
            <div className="card-body">
              <h5 className="card-title text-center text-decoration-underline">
                Java Developer Intern at Shiash Info Tech Solutions
              </h5>
              <p className="card-text text-center">
                During my internship at Shiash Info Tech, I gained hands-on
                experience in building Java-based applications. I focused on
                writing efficient, clean, and reusable code. I collaborated with
                senior developers in debugging and enhancing server-side
                functionalities while utilizing MySQL for database management.I
                worked on an AES Encryption Data Sharing project, focusing on
                secure data transfer between systems. My role involved writing
                efficient Java code for encryption algorithms and collaborating
                with the team to improve security measures. I also contributed
                to server-side development and database management using MySQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </section>
  );
};

export default Experience;
