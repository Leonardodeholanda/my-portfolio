import Image1 from "../../assets/code-club-burger.png"
import Image2 from "../../assets/burger-app.png"
import Image3 from "../../assets/currency-convert.png"
import Image4 from "../../assets/weather-forecast.png"
import Image5 from "../../assets/users-app.png"

const projectsList = [
  {id: 0},{id: 6},{id: 7},{id:8},
  {
    id: 1,
    image: Image1,
    alt: 'Code Burger',
    description: `This project is an online burger restaurant that offers a user-friendly experience to customers.I developed a Node API using Sequelize, Docker, and PostgreSQL and MongoDB databases. Customers can easily sign up, log in, choose their orders, and make purchases. I also designed and developed the user interface, ensuring that it was technically feasible and easy to use. With this interface, customers can conveniently place their orders and enjoy a visually appealing and user-friendly experience.`,
  },
  {
    id: 2,
    image: Image2,
    alt: 'Burger App',
    description: `This project is a burger restaurant website built using React. The website leverages the use of props between components and the useState hook for state management, making it highly efficient and responsive. Additionally, the implementation of the useRef hook allows the application to access input values, while the useEffect hook helps with rendering. To ensure a visually appealing and responsive interface, I used styled-components for styling. With this solution, the user can easily navigate through the restaurant's menu and place orders with ease`,
  },
  {
    id: 3,
    image: Image3,
    alt: 'Currency Convert',
    description: 'This project is a currency converter that allows users to convert Brazilian real to US dollar, Euro, and Bitcoin. To provide real-time currency rates, I implemented an API using Axios. The application was developed using HTML, JavaScript, and CSS for the interface, ensuring a clean and intuitive user experience. The user can easily input the desired currency amount and select the currency conversion, with the results instantly displayed on the screen. The application is efficient and reliable, allowing users to stay up-to-date on currency exchange rates for their international transactions.',
  },
  {
    id: 4,
    image: Image4,
    alt: 'Weather Forecast',
    description: 'This project is a weather forecast application that enables users to search for any city in the world and obtain real-time weather information. The app uses a specific weather API that returns data for the searched city. The user interface is developed using HTML and CSS, offering a visually pleasing experience to the user. Additionally, the app is easy to use, with an intuitive search box for entering the desired city name. With this simple and efficient solution, users can stay up-to-date on the weather conditions in any part of the world.',
  },
  {
    id: 5,
    image: Image5,
    alt: 'Users App',
    description: `The Users App project is a user registration application developed in ReactJS and integrated with NodeJS. With a mobile-first interface, the system allows users to create, show and delete users. Additionally, the application features several technologies such as Styles-components, Axios, React Hooks, React Routes, NodeJS, ExpressJS, and API Rest. The project's aim is to provide a comprehensive introduction to Full-Stack development, making it an excellent opportunity to enhance programming skills.`,
  }
]
export default projectsList