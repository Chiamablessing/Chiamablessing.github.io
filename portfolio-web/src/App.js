import './App.css';
import Button from "../src/Reusables/Button";
import ImageCard from "../src/Reusables/ImageCard";
import Navbar from "../src/Reusables/Navbar";

const user ={
  name: 'Pinterest',
  imageurl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
  imageSize:90,
}
function App() {
  return (
    <div>
      <Navbar/>

      <div className='home-title'>Get your next</div>
      <div className='home-pg '>
      <div> <p className='slide' style={{
          position: "absolute", alignItems: "center", fontSize: "60px", fontWeight: "600", width: "100%",
          left: "0px", margin: "0px", transform: "translateX(0px)",
          zIndex: "0", color: "rgb(194,139,0)", //opacity: "0",
        }} >Weekendnight dinner idea
        </p> </div>

 <div className='weekend'> <p style={{
          position: "absolute", alignItems: "center", fontSize: "60px", fontWeight: "600", width: "100%",
          left: "0px", color: "rgb(0,118,211)",  margin: "0px", transform: "translateX(0px)",
          opacity: "0", zIndex: "0",
        }} >home decor idea
        </p> </div>
 <div className='weekend'> <p style={{
          position: "absolute", alignItems: "center", fontSize: "60px", fontWeight: "600", width: "100%",
          left: "0px", color: "rgb(0,118,211)",  margin: "0px", transform: "translateX(-40px)",
          zIndex: "0", opacity: "0"
        }} >new look outfit
        </p> </div>

 <div className='weekend'> <p style={{
          position: "absolute", alignItems: "center", fontSize: "60px", fontWeight: "600", width: "100%",
          left: "0px", color: "rgb(64,122,87)",  margin: "0px", transform: "translateX(0px)",
          opacity: "0", zIndex: "0",
        }} >green thumb idea
        </p> </div>
        </div>

      <ImageCard font={1} w={10} h={10} overlay={1}/>
      <button/>
    </div>


  );
}

export default App;
