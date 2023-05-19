import "./App.css";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "unity/DoubleUp.loader.js",
    dataUrl: "unity/DoubleUp.data",
    frameworkUrl: "unity/DoubleUp.framework.js",
    codeUrl: "unity/DoubleUp.wasm",
  });
  //

  return (
    <div className="App">
      <div className="side" />
      <div className="center">
        <p className="title">DoubleUp</p>
        <p className="subtitle">
          An idle/puzzle game demo by{" "}
          <a
            href="https://github.com/DqwertyC"
            target="_blank"
            rel="noreferrer"
          >
            DqwertyC
          </a>
        </p>
        <div className="game-container">
          <Unity className="game" unityProvider={unityProvider} />
        </div>
        <p className="subtitle">What is DoubleUp?</p>
        <p className="description">
          DoubleUp is a hybrid idle/puzzle game inspired by sliding puzzle games
          like{" "}
          <a href="https://play2048.co/" target="_blank" rel="noreferrer">
            2048
          </a>{" "}
          and{" "}
          <a href="https://asherv.com/threes/" target="_blank" rel="noreferrer">
            Threes
          </a>
          . In DoubleUp, the player starts with a tiny 2x2 grid with measly 1
          tiles and has to work their way up from there, upgrading the playing
          field and base tiles, earning achievements, and unlocking new
          currencies and new powerful upgrades to let the player reach larger
          and larger tiles.{" "}
        </p>
        <p className="subtitle">Core Design Principles</p>
        <p className="description">
          One of the biggest barriers to entry in idle games is the overwhelming
          feeling that you'll never be able to 'beat' the game. With this in
          mind, my primary goal with DoubleUp was to make the end feel
          attainable. Early progression is very quick - the first upgrades are
          unlocked withing a few seconds, and withing 5 minutes the playing
          field is effectively equivalent to the playing field in 2048. There's
          also an achievement visible from the start that tracks total game
          progression to reassure players that the end is attainable.
          <br />
          <br />
          Another common issue with idle games is that they're too, well, idle.
          While later upgrades do unlock different tiers of automatic tile
          movers, players will always have the option to turn it off and just
          play the game themselves.
        </p>
        <p className="subtitle">Upgrade Summary</p>
        <p className="description">
          Here's a brief overview of the upgrades players will unlock as they
          progress: <br /><br/>
          Tetragon (Base Currency) Upgrades:
          <ul>
            <li>Grid Size</li>
            <li>Tile Speed</li>
            <li>
              Extra Lives
              <dd>
                - If the player still has lives, they keep their largest tile
                when they run out of moves
              </dd>
            </li>
            <li>Better Tile Chance</li>
            <dd>
              - Chance for the new tile to be one level higher than the base
            </dd>
            <li>Shield Level*</li>
            <li>Auto Move Speed*</li>
          </ul>
          Hexahedron (Prestige Level 1 Currency) Upgrades:
          <ul>
            <li>Autobuy**</li>
            <li>Automove**</li>
            <li>Shields</li>
            <dd>
              - Tiles won't spawn in shielded rows or columns unless there are
              no other spaces
            </dd>
            <li>Life Multiplier</li>
            <li>Multi Merge</li>
            <dd>
              - Allows three or more of the same tile to be merged, gaining a
              level for each extra tile
            </dd>
            <li>Tiles Kept on Life Lost</li>
            <li>Base Tile Power</li>
          </ul>
          Octachoron (Prestige Level 2 Currency) Upgrades:
          <ul>
            <li>Autobuy II**</li>
            <li>Bypass Hexahedron Prestige</li>
            <dd>
              - Hexahedrons are earned directly instead of requiring a prestige
            </dd>
            <li>Smarter Automove</li>
            <dd>
              - Automove is no longer random, and will actively work towards
              better tiles
            </dd>
            <li>Tile Upgrade Chance</li>
            <dd>- Chance to upgrade a random tile each turn</dd>
            <li>Tile Sorter</li>
            <dd>
              - Tiles kept are sorted and moved to the bottom row when a life is
              lost
            </dd>
          </ul>
          * Upgrade dependent on higher tier upgrade
          <br />
          ** Upgrade toggleable
        </p>
        <p className="subtitle">Game Progress</p>
        <p className="description">
          At this point, I'd say the game is between 60% and 70% complete. The
          core game mechanics have all been finished, so almost everything left
          is balance tweaks and polish. In addition to overall playtesting and
          quality assurance, here are a few things that I'd like to add before
          releasing the game:
          <ul>
            <li>Better in-game information on upgrades and mechanics</li>
            <li>More achievements</li>
            <li>More (and better) sound effects</li>
            <li>Cloud saves</li>
          </ul>
        </p>
        <p className="subtitle">About the Developer</p>
        <p className="description">
          Hello! My name is{" "}
          <a
            href="https://www.linkedin.com/in/drewdcamp/"
            target="_blank"
            rel="noreferrer"
          >
            Drew Camp
          </a>
          , but on the Internet I usually go by DqwertyC. My professional
          background is embedded software development, but I've been tinkering
          with Unity since 2019. <br /> I also have a{" "}
          <a
            href="https://www.youtube.com/@DqwertyC/videos"
            target="_blank"
            rel="noreferrer"
          >
            YouTube channel
          </a>{" "}
          where I showcase my Minecraft Command Block and Datapack creations!
          <br />
        </p>
      </div>
      <div className="side" />
    </div>
  );
}

export default App;
