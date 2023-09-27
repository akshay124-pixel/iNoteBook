import React from "react";

const About = () => {
  const myStyles = {
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: "2%",
    marginbottom: "4%",
  };
  const svgBackground = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1024&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
        <path d="M1080,271.896C1126.991,274.504,1178.253,258.459,1199.503,216.467C1219.533,176.885,1192.12,133.946,1168.953,96.115C1147.269,60.707,1121.513,22.081,1080,21.326C1037.613,20.555,1005.352,55.444,985.256,92.772C966.346,127.897,962.804,169.103,981.456,204.366C1001.411,242.094,1037.386,269.531,1080,271.896" fill="rgba(167, 173, 179, 0.4)" class="triangle-float1"></path>
        <path d="M1117.8358652105337 318.38376491421303L1225.9639037853567 320.2711468480974 1174.7309573987718 157.13539801892074z" fill="rgba(167, 173, 179, 0.4)" class="triangle-float3"></path>
        <path d="M547.975486269761 366.9292176687379L501.1943965852059 230.64528138047172 416.91279466497394 324.2494832429334z" fill="rgba(167, 173, 179, 0.4)" class="triangle-float2"></path>
        <path d="M677.628,120.477C698.941,120.69,718.894,109.828,729.78,91.504C740.906,72.778,742.759,48.919,731.056,30.548C720.043,13.261,698.125,9.765,677.628,9.64C656.833,9.513,634.057,12.24,623.059,29.889C611.583,48.305,616.053,71.893,627.25,90.48C638.059,108.423,656.682,120.268,677.628,120.477" fill="rgba(167, 173, 179, 0.4)" class="triangle-float1"></path>
        <path d="M59.979,331.259C83.119,332.086,103.999,317.508,115.117,297.197C125.809,277.664,123.627,254.328,112.718,234.915C101.558,215.056,82.756,198.709,59.979,199.08C37.696,199.443,20.352,216.78,10.133,236.585C0.81,254.655,1.797,275.493,11.27,293.485C21.53,312.971,37.971,330.472,59.979,331.259" fill="rgba(167, 173, 179, 0.4)" class="triangle-float2"></path>
        <path d="M698.998,651.748C739.649,654.839,786.788,651.58,807.521,616.478C828.454,581.036,810.118,537.046,786.766,503.149C766.848,474.238,734.041,461.095,698.998,458.952C658.619,456.483,610.801,456.19,590.439,491.146C570.012,526.215,593.009,568.269,615.737,601.893C635.153,630.617,664.427,649.119,698.998,651.748" fill="rgba(167, 173, 179, 0.4)" class="triangle-float1"></path>
        <path d="M1286.014,487.472C1314.034,486.301,1338.155,470.927,1353.571,447.5C1371.029,420.97,1384.254,388.399,1369.829,360.105C1354.383,329.808,1319.969,313.102,1286.014,314.987C1254.814,316.719,1232.245,341.372,1216.904,368.595C1201.913,395.197,1192.563,427.191,1207.91,453.589C1223.197,479.884,1255.625,488.742,1286.014,487.472" fill="rgba(167, 173, 179, 0.4)" class="triangle-float2"></path>
        <path d="M1232.261169176995 152.46546669838457L1257.7297257129703 21.441101890266566 1126.7053609048521-4.027454645708588 1101.236804368877 126.9969101624094z" fill="rgba(167, 173, 179, 0.4)" class="triangle-float1"></path>
        <path d="M235.40237172310447 201.10413418168147L90.19177744074346 120.43158180259205 90.19177744074346 265.642176084953z" fill="rgba(167, 173, 179, 0.4)" class="triangle-float1"></path>
        <path d="M559.641,683.302C604.357,683.473,644.602,658.012,667.319,619.496C690.426,580.319,694.642,531.902,672.305,492.281C649.59,451.989,605.882,427.385,559.641,428.497C515.171,429.567,477.687,458.652,455.99,497.485C434.867,535.291,432.285,580.855,453.382,618.676C475.027,657.479,515.209,683.132,559.641,683.302" fill="rgba(167, 173, 179, 0.4)" class="triangle-float2"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1024">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <style>
            @keyframes float1 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(-10px, 0)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float1 {
                    animation: float1 5s infinite;
                }

                @keyframes float2 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(-5px, -5px)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float2 {
                    animation: float2 4s infinite;
                }

                @keyframes float3 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(0, -10px)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float3 {
                    animation: float3 6s infinite;
                }
        </style>
    </defs>
</svg>`;

  const backgroundStyles = {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      svgBackground
    )}")`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const labelStyle = {
    color: "white",
  };
  const h1Style = {
    color: "white",
    textAlign: "center",
  };

  return (
    <div className="img" style={backgroundStyles}>
      <div className="About" style={myStyles}>
        <div className="row g-5">
          <div className="col-md-8">
            <h3
              className="pb-4 mb-4 fst-italic border-bottom"
              style={labelStyle}
            >
              About
            </h3>
            <article className="blog-post">
              <h2 style={labelStyle} className="note">
                iNotebook - A React App for Note Management with User
                Authentication
              </h2>

              <p style={labelStyle}>
                In today's fast-paced world, it's essential to have a reliable
                tool to organize our thoughts and ideas. "iNotebook" is a
                React-based web application that offers users the ability to
                create, manage, and access their notes conveniently.
                Additionally, iNotebook provides a secure and straightforward
                sign-up and login system to ensure data privacy. Let's delve
                into the key features and functionality of iNotebook.
              </p>
              <hr />

              <h2 style={h1Style}>Note Management</h2>
              <p style={labelStyle}>
                1. Create Notes: Users can easily create new notes by clicking
                the "Add Note" button. This opens a text editor where they can
                write, format, and save their notes. 2. Edit and Delete:
                iNotebook allows users to edit their existing notes at any time.
                They can also delete notes that are no longer needed. 3.
                Organize Notes: The app offers the ability to organize notes
                using tags or categories, making it simple to find specific
                notes when needed. 4. Search Functionality: iNotebook includes a
                search bar to quickly locate notes by keywords or phrases.
              </p>

              <h3 style={h1Style}>User Authentication</h3>
              <p style={labelStyle}>
                iNotebook takes user data privacy seriously, and thus, it
                implements a robust user authentication system: 1. Sign-Up: New
                users can create an account by providing their email address and
                a secure password. The app validates the email format and
                ensures password strength. 2. Login: Registered users can log in
                using their email and password combination. The app securely
                stores and encrypts user credentials. 3. Password Reset: Users
                who forget their passwords can initiate a password reset
                process, receiving an email with instructions to reset their
                password securely. 4. User Profiles: Each user has a dedicated
                profile page where they can update their personal information,
                including their profile picture and password. 5. Authentication
                Middleware: iNotebook employs authentication middleware to
                restrict access to certain features and data only to
                authenticated users.
              </p>

              <h2 style={h1Style}>Data Storage and Security</h2>
              <p style={labelStyle}>
                iNotebook securely manages and stores user data: 1. Data
                Encryption: User notes and sensitive information are encrypted
                to protect them from unauthorized access. 2. Cloud Backup:
                Users' notes are securely stored in the cloud, ensuring that
                they can access their data from any device with an internet
                connection. 3. Regular Backups: The application performs regular
                backups to prevent data loss due to unforeseen circumstances. 4.
                GDPR Compliance: iNotebook complies with data protection
                regulations, providing users with control over their data and
                allowing them to delete their accounts and associated data.
              </p>
              <h3 style={h1Style}>Responsive Design</h3>
              <p style={labelStyle}>
                iNotebook is designed to be responsive, ensuring a seamless user
                experience on various devices, including desktops, tablets, and
                smartphones. Building iNotebook requires a combination of
                front-end and back-end technologies. React serves as the
                front-end framework, providing the interactive user interface,
                while a back-end stack (such as Node.js and Express) handles
                user authentication, data storage, and communication with the
                database. User data can be stored in a relational database like
                MySQL or PostgreSQL or a NoSQL database like MongoDB. In
                conclusion, iNotebook is a versatile React application that
                empowers users to organize their thoughts through note-taking
                while ensuring their data's security and privacy through robust
                user authentication and data protection measures. Whether it's
                for personal use, work, or education, iNotebook offers a
                powerful tool for effective note management.
              </p>
            </article>
            <li>
              <a href="https://github.com/akshay124-pixel/iNoteBook">GitHub</a>
            </li>
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-tertiary rounded">
                <h4 className="fst-italic" style={labelStyle}>
                  {" "}
                  iNotebook
                </h4>
                <p style={labelStyle} className="mb-0">
                  In an era defined by digital information and the need for
                  efficient organization, Notebook emerges as a valuable tool
                  designed to simplify your life. Notebook is a React-based web
                  application meticulously crafted to cater to your note-taking
                  needs while offering seamless sign-up and login functionality.
                  Let's dive deeper into Notebook's world and explore how it can
                  revolutionize your note-taking experience. Streamlined Note
                  Management 1. Effortless Note Creation: Notebook excels at
                  simplifying the note creation process. With just a few clicks,
                  you can initiate a new note, making it the ideal platform for
                  capturing your thoughts, ideas, tasks, and essential
                  information in real-time. 2. Rich Text Editing: Our
                  application boasts a powerful rich text editor. This tool
                  empowers you to format your notes with ease, allowing you to
                  add headers, create lists, emphasize critical points, and
                  enhance the visual appeal of your notes. 3. Smart
                  Organization: Notebook introduces a sophisticated system for
                  organizing your notes. Users can categorize their notes using
                  tags or categories, making it exceptionally convenient to
                  access specific information amidst a growing repository of
                  notes. 4. Swift Retrieval: The built-in search functionality
                  is your trusty ally in the quest for finding specific notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
