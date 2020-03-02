import React, {useState} from "react"
import domtoimage from "dom-to-image"

const App = () => {
  // Texte + Dateityp
  const [state, setState] = useState({
    inputTop: "   ",
    unputBottom: "   ",
    textSize: "60",
    textColor: "#ffffff",
    textFont: "Verdana",
    dateiTyp: ".jpg"
  })

  // Image
  const [meme, setMeme] = useState()

  // Image + Texte (fertiges Meme)
  const [finalMeme, setfinalMeme] = useState()

  // Controlled Input für Texte + Dateityp
  const handleChange = (event) => {
    const {name, value} = event.target
    setState({
      ...state,
      [name]: value
    })
  }

  // Lokale Datei hochladen (in Anlehnung an https://www.html5rocks.com/en/tutorials/file/dndfiles/)
  const handleFileSelect = (evt) => {
    var file = evt.target.files[0]
    var reader = new FileReader()
    reader.onload = (() => {
      return function(e) {
        setMeme(e.target.result)        
      };
    })(file);
    reader.readAsDataURL(file)
  }

  // Image und Text auf Canvas übertragen und herunterladen (In Anlehnung an https://github.com/tsayen/dom-to-image)
  const downloadImage = () => {	
    var node = document.getElementById("final");
    domtoimage.toPng(node)
      .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          setfinalMeme(dataUrl)
      })
      .catch(function (error) {
          console.error("Ein Fehler ist aufgetreten!", error);
      });
  }

  // Style für Textelemente
  const style = {
    color: state.textColor,
    fontSize: state.textSize + "px",
    fontFamily: state.textFont
  }


  return (
    <div className="mainContainer">
      <h1>Meme Generator</h1>
      {/*Parameter zur Meme Erstellung*/}
      <form>
      <label>Datei Auswählen
          <input
            id="memeFile"
            type="file"
            name="memeFile"
            value={state.memeFile}
            onChange={handleFileSelect}
            accept="image/*"
          />
        </label>
        <input
          type="text"
          name="inputTop"
          value={state.inputTopinputTop}
          placeholder="Oberer Text"
          onChange={handleChange}
          />
        <input
          type="text"
          name="inputBottom"
          value={state.inputBottom}
          placeholder="Unterer Text"
          onChange={handleChange}
        />
        <div className="textOptions">
          <label className="optionLabel"> Textfarbe: 
            <input
              className="textOption"
              type="color"
              name="textColor"
              value={state.textColor}
              onChange={handleChange}
            />
          </label> 
          <label className="optionLabel">Schriftgröße: 
            <input
              className="textOption"
              type="number"
              min="10"
              max="99"
              name="textSize"
              value={state.textSize}
              onChange={handleChange}
            />
          </label>
          <label className="optionLabel">Schriftart: 
            <select
              className="textOption"
              name="textFont"
              value={state.textFont}
              onChange={handleChange}>
                <option value="Verdana">Verdana</option>
                <option value="Courier New">Courier New</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Arial">Arial</option>
                <option value="Georgia">Georgia</option>
                <option value="Pacifico">Pacifico</option>
            </select>
          </label>
          <label className="optionLabel">Dateiformat: 
            <select
              className="textOption"
              name="dateiTyp"
              value={state.dateiTyp}
              onChange={handleChange}>
                <option value=".jpg">JPG</option>
                <option value=".png">PNG</option>
                <option value=".gif">GIF</option>
            </select>
          </label>
        </div>       
      </form>
      
      {/*Meme Vorlage*/}
      {meme &&
      <div className="memeImgContainer" id="final">
        <span
          style={style}
          className="textTop"
        >
          {state.inputTop}
        </span>
        <img
          className="image"
          src={meme}
          alt="Dein Meme"
        />
        <span
          style={style}
          className="textBottom"
        >
          {state.inputBottom}
        </span>
      </div>
      }
      
      {/*Meme erstellen*/}
      {meme && <button
                  className="downloadBtn"
                  onClick={() => downloadImage()}
                >
                  Meme generieren
                </button>}
      
      {/*Fertiges Meme herunterladen*/}
      {finalMeme &&
        <a href={finalMeme}
          className="downloadBtn"
          download={ "Meme" + state.dateiTyp}
          >Download
        </a>
      }
    </div>
  );
}

export default App;
