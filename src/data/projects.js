import CropGuard from "../assets/cropguardAI.jpg";
import Myface from "../assets/MYFACE.png";
import QuickFood from "../assets/quickfood.jpg";
import Portfolio from "../assets/portfolio.jpg";


export const projects = [
  {
    title: "KisanSuraksha CropGuard AI",
    description: [
      "Built a full-stack plant care app using React, Node.js, and Flask APIs for farm management.",
      "Used CNNs with TensorFlow and Pillow to predict plant diseases from images.",
      "Integrated Razorpay to let users instantly purchase medicines for detected plant issues.",
      "Improved AI accuracy using data augmentation and regularly updated disease datasets.",
    ],
    techStack: ["React", "TailwindCSS", "MongoDB", "Flask", "Python", "Node.js", "Razorpay"],
    image: CropGuard,
    aosImage: "fade-right",
    repo: "https://github.com/nillmishra/Kishan-Suraksha",
    live: "https://kishan-suraksha.vercel.app/"
  },
  {
    title: "Quick Food - Food Delivery App",
    description: [
      "Developed a full-stack food delivery app with React, Node.js, and MongoDB.",
      "Implemented user authentication, restaurant listings, and order management.",
      "Using Swiggy API for real-time order tracking and delivery updates.",
      "Designed a responsive UI with Tailwind CSS for seamless user experience.",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Swiggy API"],
    image: QuickFood,
    aosImage: "fade-right",
    repo: "https://github.com/nillmishra/Food-Delivery-App",
    live: "https://media-platform-demo.vercel.app"
  },
  {
    title: "Nill Mishra - Portfolio",
    description: [
      "Created a personal portfolio website to showcase my skills and projects.",
      "Implemented a responsive design using React and Tailwind CSS.",
      "Featured my projects with detailed descriptions and tech stacks.",
      "used 3d tilt effect for the avatar image using react-parallax-tilt.",
    ],
    techStack: ["React", "Tailwind CSS", "JavaScript", "React Parallax Tilt"],
    image: Portfolio,
    aosImage: "fade-right",
    repo: "https://github.com/nillmishra/portfolio",
    live: "https://portfolio-self-one-83.vercel.app/"
  },
  {
    title: "Face Recognition Attendance Master",
    description: [
      "Built an automated attendance system using face recognition with OpenCV and Python.",
      "Trained the model to detect and recognize faces from real-time webcam input.",
      "Integrated attendance logging with date and time into a CSV or database.",
      "Designed a simple GUI for user interaction and live attendance tracking.",
    ],
    techStack: ["Python", "Mahine Learning", "Open CV", "Flask", "Face-Recogination"],
    image: Myface,
    aosImage: "fade-right",
    repo: "https://github.com/nillmishra/Face-Recoginition",
    live: "https://media-platform-demo.vercel.app"
  },
];