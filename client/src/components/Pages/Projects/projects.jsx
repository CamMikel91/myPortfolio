import React, { Component } from "react";
import Footer from "../../footer";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <>
        <div id="projectsContainer" className="container">
          <div className="row">
            <div className="col-12 text-center my-5">
              <h1>Projects</h1>
              <nav>
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link" href="#bcRow">
                      BC Small Engine Repair
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#taskManagerSection">
                      Task Manager
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#palDexRow">
                      PalDex
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* BC Small Engine Repair Project Start */}
          <div id="bcRow" className="row mb-5 p-0">
            <section id="featuredProjectSection">
              <div className="row">
                <div className="col-md-12 col-lg-6 my-auto">
                  <h2>BC Small Engine Repair</h2>
                  <p className="mb-4">
                    BC Small Engine Repair is a repair/warranty center located
                    in Kaysville, UT. They specialize in small engine and lawn
                    equipment repair and work on a large variety of brands and
                    machine types. They have been in business for over 24 years
                    and have a loyal customer base that grows larger each year.
                  </p>
                </div>
                <div className="col-md-12 col-lg-6 mb-5">
                  <img
                    src="./assets/BC_mockups_complete.png"
                    alt="BC Small Engine Mockups"
                  />
                </div>
                <div
                  id="featuredProjectDetails"
                  className="row my-5 mx-auto gx-4"
                >
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    <h4>Purpose</h4>
                    <p>
                      The purpose of this project was to create a website that
                      showcases the services offered by BC Small Engine Repair
                      and provide customers with a way to contact the business
                      and get accurate information about their services.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    <h4>Technologies</h4>
                    <ul>
                      <li>MongoDB Database</li>
                      <li>Express API</li>
                      <li>React Client</li>
                      <li>Node.js</li>
                      <li>Bootstrap Styling</li>
                      <li>Joi Validation</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-lg-4">
                    <h4>Functionality</h4>
                    <p>
                      Displays a monthly coupon on the homepage to users that
                      are registered and logged in, the coupon rotates out
                      automatically each month. Saves the business money by
                      replacing their bi-yearly magazine ad marketing strategy
                      and provides a montly reason for customers to check the
                      website.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* TaskManager Project Start */}
          <div className="row p-0">
            <section id="taskManagerSection">
              <div className="row">
                <div className="col-md-12 col-lg-6 my-auto">
                  <h2>Task Manager (CRUD Project)</h2>
                  <p className="mb-4">
                    This was a project that I completed in my Web Development
                    class. The purpose of this project was to learn how to
                    create a full stack application that uses CRUD operations.
                    The project was built using the MERN stack (MongoDB,
                    Express, React, Node.js) and uses some basic Bootstrap for
                    styling.
                  </p>
                  <h5 className="mt-5">Too Simple For A Portfolio Project?</h5>
                  <p style={{ fontSize: ".85rem" }}>
                    This may seem like just another basic task manager app, but
                    it includes a few extra bytes and pieces that help it stand
                    out and provide some real world application.
                  </p>
                </div>
                <div className="col-md-12 col-lg-6">
                  <img
                    className="taskManagerImg mx-auto d-block"
                    src="./assets/TaskManager_task_list.png"
                    alt="Task manager task list"
                  />
                </div>
                <div className="row projectDetails my-5 mx-auto">
                  <div className="col-12 my-4">
                    <h5>How It Works</h5>
                    <p>
                      When a user visits the site they are met with a
                      login/register page. Once logged in they can create, read,
                      update, and delete tasks. The tasks are stored in a
                      MongoDB database and are displayed on the tasks page. The
                      user can click on a task to view more details or edit the
                      task.
                    </p>
                    <p>
                      From the task page, you are able to sort and filter your
                      tasks by status, category, and severity. This allows the
                      user to easily find the tasks they are looking for.
                    </p>
                  </div>
                </div>
                <div className="col-12 mt-5 mb-3 text-center">
                  <h3>Database & Security</h3>
                </div>
                <div className="row px-0 ">
                  <div className="col-sm-12 col-lg-6 my-auto">
                    <h5>User Data Security</h5>
                    <p className="mb-1">
                      When a new user is created, they are assigned a user ID
                      and their password is hashed and encrypted before being
                      stored in the database. This ensures that the user's
                      password is secure and cannot be accessed by anyone,
                      including the site's administrator.
                    </p>
                  </div>
                  <div className="col-sm-12 col-lg-6 mb-3 d-flex align-center">
                    <img
                      className="taskManagerImg mx-auto d-block my-auto mb-3"
                      src="./Assets/TaskManager_mongo_user_list.png"
                      alt="TaskManager user list screenshot"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-lg-6">
                    <img
                      className="taskManagerImg mx-auto mb-3"
                      src="./Assets/TaskManager_mongo_task_list.png"
                      alt="TaskManager user list screenshot"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-6 my-auto">
                    <h5>Task Specificity</h5>
                    <p>
                      When a new task is created, it is given an "owner"
                      property which contains the ID of the user who created it.
                      When the task list page is accessed, it queries the
                      database for any task that has an "owner" equal to the
                      currently logged in User ID, this means that each task is
                      user specific and can only be viewed by either the person
                      that created the task or the admin querying the database.
                    </p>
                  </div>
                  <div className="row projectDetails my-5 mx-auto">
                    <div className="col-12 my-4">
                      <h5>Future Possibilities</h5>
                      <p>
                        This project could easily be expanded for use in a team
                        setting. By adding a "team" property to each task and a
                        "supervisor" property to each user, the tasks could be
                        shared among team members and their supervisors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* PalDex Project Start */}
          <div id="palDexRow" className="row p-0">
            <section id="palDexSection">
              <div className="row">
                <div className="col-md-12 col-lg-6 my-auto">
                  <h2>PalDex</h2>
                  <p className="mb-4">
                    PalDex is a small scale, full stack application that I built
                    for personal use with the PalWorld game. The purpose of this
                    project was to gain experience with using the MERN Stack
                    while also creating something I could use and enjoy.
                  </p>
                  <h5 className="mt-5">What's The Purpose?</h5>
                  <p>
                    The idea for this project came to me while I was playing the
                    PalWorld game on Xbox. I needed to track how many of each
                    type of "pal" I had caught, while there is a way to do that
                    from within the game, you had to navigate through multiple
                    menu screens with a delay between each screen. With this
                    app, I'm able to quickly and easily keep track of the counts
                    from my phone.
                  </p>
                </div>
                <div className="col-md-12 col-lg-6">
                  <img
                    className="taskManagerImg mx-auto d-block"
                    src="./assets/PalDex_pals_page.png"
                    alt="PalDex Pokedex"
                  />
                </div>
                <div className="row my-5 projectDetails mx-auto">
                  <div className="col-12 my-4">
                    <h5>How It Works</h5>
                    <p>
                      When a user visits the site they are met with a
                      register/login page, after creating an account they are
                      brought to the pals page. This page displays a table of
                      all the pals along with their id number in the game and
                      the users current count for each pal. The
                      increment/decrement buttons are located within the table
                      row for easy updates. The user can also click on a row to
                      open the corresponding pal's wiki page to find location
                      data or other details.
                    </p>
                  </div>
                </div>
                <div className="row px-0 ">
                  <div className="col-sm-12 col-lg-6 my-auto">
                    <h5>Database Details</h5>
                    <ul className="text-start">
                      <li>
                        <p>
                          When a new user is created, they are assigned a user
                          ID and their password is hashed and encrypted before
                          being stored in the database. This ensures that the
                          user's password is secure and cannot be accessed by
                          anyone, including the site's administrator.
                        </p>
                      </li>
                      <li>
                        <p>
                          Each user in the database has a "pals" property which
                          is an array of objects. Each object contains the pal
                          ID and the user's count for that pal. This allows each
                          user to have a unique count for each pal.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-lg-6 mb-3 text-center my-auto">
                    <h5>Technologies</h5>
                    <ul className="list-unstyled">
                      <li>MongoDB Database</li>
                      <li>Express API</li>
                      <li>React Client</li>
                      <li>Node.js</li>
                      <li>Bootstrap Styling</li>
                      <li>React Router</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Projects;
