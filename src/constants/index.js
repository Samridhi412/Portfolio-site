import {
    elect,
    api,
    os,
    dbms,
    ruby,
    fiver,
    snowflake,
    c,
    topsis,
    success,
    pm,
    sharex,
    travel,
    golang,
    sql,
    vid,
    postgres,
    django,
    python,
    thapar,
    byjus,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    github,
    figma,
    docker,
    niep,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "achievements",
      title: "Achievements",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Structures and Algorithms",
      icon: web,
    },
    {
      title: "Software Engineering Projects",
      icon: backend,
    },
    {
      title: "Database Design and Management",
      icon: dbms,
    },
    {
      title: "Operating Systems and System Programming",
      icon: os,
    },
  ];
  
  const technologies = [
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "Sql",
      icon: sql,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "Snowflake",
      icon: snowflake,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Golang",
      icon: golang,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Member Of Technical Staff",
      company_name: "Byjus-The Learning App",
      icon: byjus,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      source_code_link: "https://d857x1yne8b8d.cloudfront.net/production/monthly_progress_reports_v2/05-2023/98952346_1001556644.pdf",
      points: [
        "Led the development of a feature that involved data integration from multiple sources.",
        "Implemented and maintained data pipelines using Kafka and scheduled cron jobs for automated data extraction.",
        "Designed and optimized efficient database queries for seamless data retrieval.",
        "Collaborated with cross-functional teams to gather requirements and define data formats.",
        "Utilized AWS services for scalable and reliable data storage, processing, and ingestion.",
        "Optimized API calls, eliminating heavy intermediaries, and reducing load time.",
        "Designed and developed scalable APIs, resulting in improved response time and reduced data transfer.",
        "Conducted load testing to identify and address performance bottlenecks in existing APIs.",
        "Utilized Postman for API testing, ensuring high-quality and usable APIs.",
        "Achieved a 40% increase in RPS (Requests Per Second), a 40% decrease in CPU utilization, and a 30% reduction in latency for the get-commission API calls, making the system more extensible and maintainable.",
        "Tools & Technologies: Golang, Ruby On Rails (ROR), Postgresql, MySQL, AWS, Docker, DBeaver, Postman, Snowflake.",      
      ],
    },
    {
      title: "Student Software Developer",
      company_name: "Thapar Institute Of Engineering & Technology",
      icon: thapar,
      iconBg: "#383E56",
      date: "June 2022 - Dec 2022",
      source_code_link: "https://github.com/Samridhi412/Travel-partner",
      points: [
        "Developed and deployed a production-ready application enabling users to discover nearby restaurants and attractions conveniently.",
        "Utilized Google Maps API and specialized Rapid APIs to fetch and display hotels, restaurants, and attractions based on the user's location.",
        "Implemented filtering options based on user preferences, such as ratings, providing access to contact details, reviews, awards, and websites for desired places.",
        "Incorporated real-time updates to reflect changes in availability, operating hours, and special promotions for a seamless user experience.",
        "Impact: Increased efficiency in decision-making with immediate results, enhanced discovery of nearby places, and a seamless user experience.",
        "Tools & Technologies: React.js, Google Maps API, Netlify.",
      ],
    },
  ];
  
  const education = [
    {
      title: "Thapar Institute of Engineering & Technology",
      company_name: "CGPA: 9.06/10.0",
      icon: thapar,
      iconBg: "#383E56",
      date: "May 2019 - Jun 2023",
      points: [
        "Courses: Data-Structures and Algorithms, Operating Systems, Database Management System, Object-oriented Programming",
      ],
    },
  ];


  const achievements = [
    {
      icon: success,
      points:[
        "Solved 1000+ coding problems across diverse platforms and resources, showcasing a strong problem-solving ability and dedication to continuous learning in computer science.",
        "Secured an impressive All-India rank of 740 in Google I/O for women in 2022, demonstrating excellence in a highly competitive coding event.",
        "Qualified for the second round of IONathon 1.0, highlighting exceptional skills and competence in a prestigious coding challenge.",
        "Part of the Best Girls team in Hackoverflow4.0, recognized for outstanding teamwork and performance in a hackathon event.",
        "Received merit scholarships totaling INR 100K+ on two occasions from Thapar Institute of Engineering and Technology, acknowledging academic excellence and achievements.",
        "Achieved a top 5 rank in the Intuit Coding Assessment among 1000+ candidates, validating coding proficiency and problem-solving capabilities.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Night Entry Portal System",
      description:
      "Developed an efficient and user-friendly application for hostellers to mark their night attendance using unique QR codes. The application streamlined attendance management, reducing manual effort and ensuring quick data retrieval and storage.",
      tags: [
        {
          name: "html&css",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "MySql",
          color: "pink-text-gradient",
        },
      ],
      image: niep,
      source_code_link: "https://github.com/Samridhi412/Niep",
    },
    {
      name: "CheapFinder",
      description:
      "Developed a web-scraper bot that efficiently fetches and compares hotel deals based on user-inputted parameters, including the desired location, check-in & check-out dates, and the number of guests. The bot provides users with a list of cheapest hotel options, along with their names, prices, and ratings, facilitating informed decision-making for travelers.",
      tags: [
        {
          name: "Selenium",
          color: "blue-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/Samridhi412/Thrifty-Travels/tree/master",
    },
    {
      name: "GigSavvy",
      description:
      "Development of a digital services marketplace called 'Gig,' providing a seamless transactional platform for both buyers and sellers. The platform facilitates offers, order placements, reviews, one-to-one messaging with sellers or previous buyers, ratings, and easy uploading of new services.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
      ],
      image: fiver,
      source_code_link: "https://github.com/Samridhi412/GigSavvy/tree/master",
    },
    {
      name: "TopsisMaster",
      description:
      "Created and published a custom Topsis (Technique For Order Preference by Similarity to Ideal Solution) calculator package. The package enables users to input a CSV file along with weight and impact details. Upon processing, the package automatically sends users an email containing the output CSV with Topsis scores.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: topsis,
      source_code_link: "https://github.com/Samridhi412/python_topsis_Samridhi_101916086",
    },
    {
      name: "ShareX",
      description:
      "Led the development and deployment of a MERN-based file-sharing application. This user-friendly platform allows seamless file uploads in various formats, generating shareable links for easy sharing and downloading. Any user with the link gains instant access to download the shared files.",
      tags: [
        {
          name: "MERN",
          color: "pink-text-gradient",
        },
      ],
      image: sharex,
      source_code_link: "https://github.com/Samridhi412/ShareBox",
    },
    {
      name: "ElectriCare",
      description:
      "Developed an efficient Electricity Billing Management System that facilitates seamless interactions between customers and admins. The system encompasses features such as bill generation, payment processing, bill calculations, deposit details, and easy access to update/view information for both customers and administrators.",
      tags: [
        {
          name: "Java(Swing, Awt)",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: elect,
      source_code_link: "https://github.com/Samridhi412/ElectriCare",
    },
    {
      name: "MediaTranscribe",
      description:
      "MediaTranscribe is an advanced microservice designed to seamlessly convert video files into high-quality audio formats. Utilizing cutting-edge technology, this service delivers precise and accurate audio extraction from a wide range of video sources.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Kubernetes",
          color: "green-text-gradient",
        },
        {
          name: "MySql",
          color: "pink-text-gradient",
        },
        {
          name: "RabbitMQ",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: vid,
      source_code_link: "https://github.com/Samridhi412/MediaTranscribe/tree/master",
    },
  ];

  export { services, technologies, experiences, education, achievements, projects };
  