import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Text from "./components/Text/Text";
import Video from "./components/Videos/Video";
import v1 from "./assets/videos/v1.mp4";
import v2 from "./assets/videos/v2.mp4";
import v3 from "./assets/videos/v3.mp4";
import v4 from "./assets/videos/v4.mp4";
import Parallax from "./components/parallax/Parallax";
import bg1 from "./assets/img/rolexBg1.jpg";
import bg2 from "./assets/img/rolexBg2.jpg";
import bg3 from "./assets/img/rolexBg3.jpg";
import bg4 from "./assets/img/rolexBg4.jpg";
import Geography from "./components/Geography/Geography";
import End from "./components/End/End";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Text
        heading={"Rolex"}
        textMain={
          " With the invention of the word “Rolex” in 1908, Hans Wilsdorf did not only create a new brand. He immediately affirmed his unique vision of watchmaking and embarked on the quest for excellence that Rolex has unceasingly pursued ever since."
        }
        sub={
          " Having these exacting standards from the outset meant gradually incorporating all the know-how and every expertise into the manufacture, thus guaranteeing the brand’s autonomy and integrity."
        }
      />
      <Video source={v1} />
      <Text
        heading={
          "With “Rolex”, Hans Wilsdorf paved the way for a unique kind of watchmaking. One in perpetual movement, capable of meeting a then burgeoning modernity and of rising above its novel challenges."
        }
        textMain={
          "With “Rolex”, Hans Wilsdorf paved the way for a unique kind of watchmaking. One in perpetual movement, capable of meeting a then burgeoning modernity and of rising above its novel challenges. In the wake of this visionary name, other terms had to be coined to express the constant innovation which characterises the brand: “Oyster”, “Perpetual”, “Superlative Chronometer”."
        }
        sub={
          "Engraved on each dial, these words not only speak of water resistance, autonomy, precision or durability. They reveal what makes every Rolex Oyster Perpetual Superlative Chronometer a unique object. They embody the horological accomplishment as much as they inspire the confidence needed to overcome any challenges that may lay ahead."
        }
      />
      <Parallax parallaxSource={bg1} />
      <Text
        heading={"Oyster"}
        textMain={
          "“Oyster”. The very word evokes water resistance. It also speaks to the unrivalled ingenuity of those who, through technical expertise, achieved the watertight qualities of the case that bears the same name and then applied them to protect the horological movements within."
        }
        sub={
          "In fact, “Oyster” does not only refer to watertightness but also – more broadly – to the case’s resistance to all the natural elements that may prevent a chronometer from working smoothly."
        }
      />
      <Video source={v2} />
      <Text
        heading={
          "“Oyster” does not only refer to watertightness but also - more broadly - to the case’s resistance to all the natural elements that may prevent a chronometer from working smoothly."
        }
        textMain={
          "But “Oyster” is not merely the name of a case either. Its invention was so decisive that it also became the name of a watch: the first water-resistant wristwatch in history. Since then, it has continued to prove its durability and adaptability to the demands of every age. The “Oyster” case also seals and guarantees the watch’s precision."
        }
        sub={
          "As impervious to the fury of storms as to hostile expanses or to the vagaries of everyday life, the watch is made to withstand the greatest challenges. Secured with the utmost care, it is your trusted ally on your path outwards, to the world."
        }
      />
      <Parallax parallaxSource={bg2} />
      <Text
        heading={"Perpetual"}
        textMain={
          "Since the invention of its Perpetual rotor self-winding system in 1931, Rolex converts the wrist’s movements into a power reserve and tunes the beat of its watches to that of the life of their wearers."
        }
        sub={
          "The optimal use of energy is a key area of expertise in Rolex’s watchmaking know-how. Engraved on our every dial, the word “Perpetual” makes the connection between time and movement."
        }
      />
      <Video source={v3} />
      <Text
        heading={
          "The word “Perpetual” makes the connection between time and movement. It expresses a Rolex watch’s endless ability to capture the rhythm of the world and is another proof of their reliability."
        }
        textMain={
          "It expresses a Rolex watch’s endless ability to capture the rhythm of the world and is another proof of their reliability: when you will need it most, it won’t stop."
        }
        sub={
          "So long as the wearer takes action and moves, supplying the rotor with energy, the movement within the case will be fed to follow, unrelentingly. Rolex is the link between horological movement and human movement."
        }
      />
      <Parallax parallaxSource={bg3} />
      <Text
        heading={"Superlative Chronometer"}
        textMain={
          "Though perfection is intrinsically unattainable, we are always striving to reach it. It is for this reason that Rolex has invented the “Superlative Chronometer”."
        }
        sub={
          "We have designed our own tests and means of measurement which all our watches endure at every step of their manufacturing as well as after they are assembled. Through them, each watch’s precision, water resistance, reliability and autonomy are the guarantees of their performance and durability."
        }
      />
      <Video source={v4} />
      <Text
        heading={
          "Two words – “Superlative Chronometer” – expresses our founding desire to do our utmost to continually surpass our own achievements."
        }
        textMain={
          "To these attributes, the best is never the enemy of the good. Which is why within our manufacture is found our Superlative Control: a dedicated unit devoted to testing them all, continually and after they are completed."
        }
        sub={
          "With time, it has become the cornerstone of our watchmaking expertise which, with two words - “Superlative Chronometer” - expresses our founding desire to do our utmost to continually surpass our own achievements."
        }
      />
      <Parallax parallaxSource={bg4} />
      <Geography />
      <End />
    </div>
  );
}

export default App;
