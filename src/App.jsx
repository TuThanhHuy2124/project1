import './App.css';
import Box from './components/Box.jsx';

const App = () => {

  return (
    <>
    <h1>Top 10 Games of All Time</h1>
    <h2>According to <a href="https://www.ign.com/articles/the-best-100-video-games-of-all-time" target="_blank">IGN</a></h2>
    <div className="App">
        <Box title="The Legend of Zelda:" subtitle="Breath of the Wild" image="src/assets/botw.jpg" link="https://www.amazon.com/Legend-Zelda-Breath-Wild-switch-Nintendo/dp/B01N1083WZ/ref=asc_df_B01N1083WZ/?tag=hyprod-20&linkCode=df0&hvadid=416671265013&hvpos=&hvnetw=g&hvrand=18032938382840208942&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031591&hvtargid=pla-564457057881&psc=1&mcid=85f0d0b86cb034e68d2c243ad1799c5e&tag=&ref=&adgrpid=99511641048&hvpone=&hvptwo=&hvadid=416671265013&hvpos=&hvnetw=g&hvrand=18032938382840208942&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031591&hvtargid=pla-564457057881&gclid=CjwKCAiAloavBhBOEiwAbtAJO172ufzxVtLzRNGbPyxMb7omK1XOV9ycQKWIlW8UZCo7ILG6OXPN3hoCkrEQAvD_BwE"/>
        <Box title="Super Mario World" image="src/assets/smw.jpg" link="https://www.amazon.com/Super-Mario-World-Nintendo/dp/B00002STXQ"/>
        <Box title="Portal 2" image="src/assets/portal2.jpg" link="https://store.steampowered.com/app/620/Portal_2/"/>
        <Box title="The Legend of Zelda:" subtitle="A Link to the Past" image="src/assets/lttp.jpg" link="https://www.amazon.com/Legend-Zelda-Link-Past-Super-Nintendo/dp/B00002STXN"/>
        <Box title="Super Metroid" image="src/assets/supermetroid.jpg" link="https://www.amazon.com/Super-Metroid-Nintendo/dp/B00002SVFV/ref=sr_1_3?crid=N34JYETYDZE0&dib=eyJ2IjoiMSJ9.U6TwOM0_U2lMr8PYwCAOpVDb8tKjMD51-uWrrkL0Tbz7PuUJ3DFR9YOM7HKo4OwW2PKPbKrDMg95T-tQK9ZKS4b7wAlcOLbIzrSY0yYfK7V31bi2pqL6MCPDQcaN1TQUYMqoGejth0b-RXsRGFIHtqQYqp8EhLUw-OReXAmOJnRzC_xkY5XNFa8o_wJYwghGRvwW2S4YkRw-cK8J1jz-Xtk57gW79QayHY5PY2yKd3Q.2eHxXghQIVU0j2nd5MXjFzqYqvY9Enz7Inyu7kw1zto&dib_tag=se&keywords=super+metroid&qid=1709323758&s=videogames&sprefix=super+metroi%2Cvideogames%2C154&sr=1-3"/>
        <Box title="Mass Effect 2" image="src/assets/masseffect2.jpg" link="https://www.amazon.com/Mass-Effect-2-Xbox-360/dp/B004GWQNN6/ref=sr_1_1?crid=2SI22ED2NE0LG&dib=eyJ2IjoiMSJ9.Q4xg2kiEEztkKFQatV7405_ovAk54mrdjRKDc5dQsa3kCuvktMWFieSzWa7ANeZ-Yi3r7EvFO1rUTesqFzof7tVs6xyWy9QY2NRtItS32yn9mLGK3y4Wl97NDlpHH-0qHkXYGV7HH_h-flogcBSZeqK4-ljc5I9SNifuoVv7I_WO7pzwfKBHK4usW9VkrM3jUxfPPijC87od2dBhNdLAr5XYdwGilFtIYPfzoUb0lf4.SPWYwX1gcsIgBTpcJSUouaLqkn0qYc4l1CiKHf_gsK0&dib_tag=se&keywords=mass+effect+2&qid=1709323882&s=videogames&sprefix=mass+effect+2%2Cvideogames%2C153&sr=1-1"/>
        <Box title="Super Mario 64" image="src/assets/sm64.jpg" link="https://www.amazon.com/Super-Mario-64-nintendo/dp/B00000F1GM/ref=sr_1_2?crid=3MK8T2YQMG9Q9&dib=eyJ2IjoiMSJ9.vU7lgKE2xfCOT76p3skCPijMgnzFzMPsAvonTxgcV5bn9KbUEpdVQntyc5bcGgYe4Hshdo0kPDaXhpMSgmeTrV9lBu4iFEYqUsseB-vsOSv8KRsMxoiCPhKef_YCLL0vUwBRxIAMSk2GO0XPZ2wEsfTXlCiZikT_pqUlScZ4qlTIYvz5aEmSke7aU70wXMQErUiSZoEzhX4IVpTw4v1aAV-100rW68EeKJo4l0m3Ftg.UmkTg4IiXCMBFjEYrqZOP5Ny76Zo_yHhkl1VC6dJ9MY&dib_tag=se&keywords=super+mario+64&qid=1709323906&s=videogames&sprefix=super+mario+6%2Cvideogames%2C149&sr=1-2"/>
        <Box title="Red Dead Redemption 2" image="src/assets/rdr2.jpg" link="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"/>
        <Box title="Half-Life 2" image="src/assets/hl2.jpg" link="https://store.steampowered.com/app/220/HalfLife_2/"/>
        <Box title="Disco Elysium" image="src/assets/de.jpg" link="https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/"/>
    </div>
    </>
  )
}

export default App