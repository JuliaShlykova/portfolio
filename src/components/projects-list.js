import blog from "../assets/projects/blog.png";
import rocketgram from "../assets/projects/rocketgram.png";
import inventory from "../assets/projects/inventory-application.png";
import memebersOnly from "../assets/projects/members-only.png";
import shoppingCart from "../assets/projects/shopping-cart.png";
import waldo from "../assets/projects/where-is-waldo.jpg";
import messageMe from "../assets/projects/message-me.png";
import inTune from "../assets/projects/in-tune.png";

import mongodb from "../assets/icons-small/MongoDB.svg";
import node from "../assets/icons-small/nodejs.svg";
import reactjs from "../assets/icons-small/reactjs.svg";
import firebase from "../assets/icons-small/firebase.svg";
import pugjs from "../assets/icons-small/pugjs.svg";

const projects = [
  {name: "messageMe", 
    description: "MERN-stack website. A chat application with the feature of real-time message exchange, online users and creation of group chats",
    screenshot: messageMe,
    githubUrl: "https://github.com/JuliaShlykova/messaging-app-frontend",
    url: "https://messaging-app-frontend-two.vercel.app/",
    languages: [mongodb, reactjs, node]
  },  
  {name: "In-tune", 
    description: "MERN-stack website. An application for posts sharing, adding friends and creating profiles.",
    screenshot: inTune,
    githubUrl: "https://github.com/JuliaShlykova/in-tune-frontend",
    url: "https://in-tune-frontend.vercel.app/",
    languages: [mongodb, reactjs, node]
  },
  {name: "Blog", 
    description: "MERN-stack website. As a user you can read posts in this blog-site. As an admin you can create ones.",
    screenshot: blog,
    githubUrl: "https://github.com/JuliaShlykova/blog-clients",
    url: "https://blog-clients-jet.vercel.app/",
    languages: [mongodb, reactjs, node]
  },
  {name: "Rocketgram", 
    description: "The messenger site. Inspired by Telegram. Made with Firebase.",
    screenshot: rocketgram,
    githubUrl: "https://github.com/JuliaShlykova/rocketgram",
    url: "https://rocketgram-872da.web.app/",
    languages: [firebase, reactjs]
  },
  {name: "Inventory", 
    description: "Create and categorize items at the time of zombie apocalypse.",
    screenshot: inventory,
    githubUrl: "https://github.com/JuliaShlykova/inventory-application-express",
    url: "https://zombie-inventory-application.onrender.com/",
    languages: [mongodb, node, pugjs]
  },
  {name: "Private Club", 
    description: "Website with restricted access - to view, delete posts.",
    screenshot: memebersOnly,
    githubUrl: "https://github.com/JuliaShlykova/members-only",
    url: "https://members-only-sww1.onrender.com/",
    languages: [mongodb, node, pugjs]
  },
  {name: "Online Shopping", 
    description: "Adding items to the shopping cart with showing total sum.",
    screenshot: shoppingCart,
    githubUrl: "https://github.com/JuliaShlykova/shopping-cart",
    url: "https://juliashlykova.github.io/shopping-cart/",
    languages: [reactjs]
  },
  {name: "Where's Waldo", 
    description: "Implementation of the popular game 'Where's Waldo'.",
    screenshot: waldo,
    githubUrl: "https://github.com/JuliaShlykova/where-is-waldo",
    url: "https://where-s-waldo-71437.web.app/",
    languages: [reactjs, firebase]
  }
]

export default projects;