import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  const posts = [
    {
      name: "Hang post",
      numberOfLikes: 290,
      description: "I go to Jeju",
      picUrl:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/473714455_122201453378197898_8113970895915753667_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5VZwOPSOWtQQ7kNvgH0fAUq&_nc_zt=23&_nc_ht=scontent-ssn1-1.xx&_nc_gid=Anjwm0I0d51ydA-AcU3Bs6d&oh=00_AYDKb0EBnsTcZruVSAxhE3ff8GfLuwnF-6cj2BaBZ4s89g&oe=6792E9A2",
      comment: "WoW",
    },
    {
      name: "Damir post",
      numberOfLikes: 5,
      description: "I go to Pusan",
      picUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6HefFJaPcPGxELB7FE3CUWz-E5VzFIznkQ&s",
      comment: "Good",
    },
    {
      name: "Karen post",
      numberOfLikes: 1,
      description: "I go to China",
      picUrl:
        "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_245773270v2.jpg",
      comment: "very Good",
    },
    {
      name: "Sapa post",
      numberOfLikes: 0,
      description: "I go to Degu",
      picUrl: "https://media1.agfg.com.au/images/content/2528/7303.jpg",
      comment: "Perfect",
    },
  ];
  return (
    <div className="m-4">
      <Header />
      <Content items={posts} />
      <Footer />
    </div>
  );
}

export default App;
