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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Api Developer",
      icon: api,
    },
    {
      title: "Database Management",
      icon: dbms,
    },
    {
      title: "Operating Systems",
      icon: os,
    },
    {
      title: "Project Management",
      icon: pm,
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
        "Led the development of a feature that involved pulling data from different sources.",
        "Maintaining data pipelines using kafka, created and schedules cron jobs for automated data extraction.",
        "Designing database queries for efficient data retrieval.",
        "Collaborated with cross-functional teams to understand requirements, define data formats.",
        "Leverage AWS services to store data, thereby ensuring scalable and reliable data processing, ingestion and high availability.",
        "Implemented performance optimization strategies to reduce load time by optimizing API calls and eliminating heavy intermediate API calls.",
        "Designed and developed scalable APIs reducing unnecessary data transfer and improve response time",
        "Conducted load testing to identify performance bottlenecks and fine-tune existing APIs",
        "Utilized tools like Postman for API testing, ensuring quality and usability of APIs.",
        "Impact: Increased RPS(Request Per Second) by 40%, decreased CPU utilisation by 40% and reduced latency by 30% for the get-commission API calls Overall made the system extensible and maintainable",
        "Tools & Technologies: Golang, Ruby On Rails(ROR), Postgresql, MySql, AWS, Docker, Dbeaver, Postman, Snowflake",
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
        "Developed and deployed a production-ready application providing convenient ways to discover nearest restaurants and dining.",
        "Using goggle maps API, users can Fetch different hotels, restaurants and attractions based on location from specialized Rapid APIs, filter as per rating provided, hover over the place and you get access to the contact-details, reviews, awards, website etc. of the desired restaurant, hotels and attractions.",
        "Real-Time Updates: Update displayed information to reflect real-time changes in availability, operating hours or special promotions.",
        "Impact: Time Efficiency, Immediate results, Increased decision-making speed, Seamless experience, Enhanced discovery.",
        "Tools & Technologies: Reactjs, Google Maps Api, Netlify"
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
        "Solved around 1000+ coding problems across various platforms and from different resources.",
        "An All-India rank-740 in Google I/O for women 2022",
        "Qualified for 2nd round of IONathon 1.0",
        "Best Girls team in Hackoverflow4.0",
        "Awarded -2 times merit scholarships of INR 100K+ from Thapar Institute of Engineering and Technology",
        "Ranked in Top 5 for the Intuit Coding Assessment among 1000+ candidates",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Night Entry Portal System",
      description:
      "Convenient and easy-to-use application for hostellers to mark their night attendance, by the use of unique QR codes. It reduces the manual work and provide quick access for data retrieval and large amount of data storing",
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
      "Designed a web-scrapper bot that accepts the desired place, check-in & check-out dates and number of people going and provides the cheapest hotel deals. It provides hotel-names, price and rating based on provided information.",
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
      "Developed and deployed a marketplace for digital services offers both buyers and sellers a digitally streamlined transactional platform.The service offered is called ‘Gig’.Offers, order placements, reviews, one-to-one messaging with seller or previous buyers, rating, uploading new services",
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
      "Developed and published a topsis(Technique For Order Preference) calculator package. Users can provide an input csv and details abour weights and impacts, and an email will be sent to users with output csv having topsis score",
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
      "Developed and deployed a file-sharing MERN application. Easy to share and download, where users can upload file in any format and get a shareable link, post clicking on the link any user with the link can download the file",
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
      "Electricity billing management system with customer and admin interaction over generating, paying, calculating bills, deposit details, update/view information",
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
      name: "MP3ify",
      description:
      "Microservice architecture that converts video files to MP3 files and send the MP3 over email. Users upload their video files and send request to API Gateway, messages are stored in mongoDB and reside in queue. Converter consumes and converts messages, notification service consumes and sends email.",
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
      source_code_link: "",
    },
  ];

  export { services, technologies, experiences, education, achievements, projects };
  