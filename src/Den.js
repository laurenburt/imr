import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM, { render } from "react-dom";
import "./App.css";
import { App, Page } from "./App";

export var pages3 = [
  //intro 1
  {
    path: "/mk1",
    body: (
      <div className="oceanblue">
        <div className="wrapper">
          <div className="lombardic">W</div>
          <div className="item1">
            alking through East Ward's canal centre, a shimmering glare from the
            shadowy green waters catches your eye. Your destination: Naer's
            Pour. You wrestled with your decision for a couple days, and
            ultimately, it was Nix's invitation that you accepted.
          </div>
          <div className="item2">
            <div class="gradient-border" id="box"></div>
          </div>
          <div className="item3">
            All of the canals in Shale flowed into Great Lake Palm, which in
            turn connected to a series of underwater caverns bridging Shale and
            Denthalassa's underwater canal system, Naer's Pour aka NP. At the
            wrist of Lake Palm, flotillas floated along the the entrance to
            Naer's Pour.
          </div>
          <div className="item4">
            <Link to="mk2">
              <img width="100" height="125" src="cleararrow.png"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/mk2",
    body: (
      <div className="oceanblue">
        <div className="wrapper">
          <div className="lombardic">M</div>
          <div className="item1">
            erchant ships sold a myriad of wares from Denthalassa, boat villas
            of roving villages took shelter in lake Palm while resupplying for
            long journeys at sea, ship restaurants catered to locals and
            visitors with the latest cuisine offering, while tourist ferries
            cris-crossed underneath the temporary ship bridges.
          </div>
          <div className="item2">
            <div class="gradient-border" id="box"></div>
          </div>
          <div className="item3">
            You exit the ferry terminal, having watched the sunset border
            Shale's towers while sailing toward NP station. Rows of submerging
            vehicles were docked at the foot of the entrance to the diving point
            of Lake Palm. You walk to dock 8, where large commercial submarines
            traveling to and from Den rested.{" "}
          </div>

          <div className="item4">
            <Link to="mk3">
              <img width="100" height="125" src="cleararrow.png"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/mk3",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Each submarine varied in shape and size. The one you stood before
              was Mythril whale shaped and towered over you emblazoned with
              name: MK Ulta. You present your codex to a rather friendly Sub
              Sailor. Must be new, you think.
            </p>
            <p class="sailor">
              <span class="bold1">Sub Sailor:</span> Ahoj traveler! Your seat
              will be... E7 on floor 2!
            </p>

            <p>
              Thanking the youthful sailor and leaving a tip in your codex, you
              enter the subarine MK Ulta.
            </p>
            <p>
              You walk cross the alloy plank connecting the dock and file behind
              a couple in matching daisy fern colored jackets into the
              submarine.
            </p>
          </div>
          <div className="next2">
            <Link to="mk4">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/mk5",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            After all, Nix was one of the foremost architects on the planet. Any
            project the building savant touched seemed to be exactly what people
            wanted- beyond that, Nix seemed to possess a keen ability to
            anticipate the lifetime of the building and its many needs. You felt
            rather flustered after meeting Nix-
            <p class="darnic">
              <span class="bold1">Darnic:</span> Good evening passengers and
              welcome aboard MK Ulta- my name is Captain Darnic. Our estimated
              arrival is approximately 9 hours. During our submerge, please be
              seated. Once we reach the current, you are more than welcome to
              visit our observation deck, cafeteria, restroom and access other
              amenities. Here we go!
            </p>
            <p>
              The submarine lurches forward but other than a slight bump, you
              notice little motion in the water.
            </p>
          </div>
          <div className="next2">
            <Link to="mk6">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/mk6",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You close your capsule and slide down the cover from your window.
              Shale glimmers in the last of the sunset.
            </p>
            <p>
              Watching as the view from out the window transitions from surface
              to the waters of Lake Palm, you see fish swimming about just
              underneath, until the darkness of the lake depths engulfs any
              discernible light. You slide your cover back up and trail away
              into slumber.
            </p>
          </div>
          <div className="next2">
            <Link to="mk7">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/mk7",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="darnic">
              <span class="bold1">Darnic:</span> Good evening passengers- this
              is a message for those who wished to see Naer's Cup.
            </p>
            <p>
              Naer's Cup was a famous undersea cavern. You forgot you had
              selected your capsule to receive the Captain's message. You slide
              your cover down.
            </p>
            <p>
              The undersea cavern glowed with millions of bioluminescent aquatic
              flora and fauna. Fairy eels trawled the depths among glowing
              polyps. Crystal snails and diamond jellies wondered the darkness.
              Billions of star cells pulsed, as it to create an underwater
              firework spectacle.
            </p>
            <p>
              You marvel at the sight for a couple minutes, eventually nodding
              off back into slumber.
            </p>
          </div>
          <div className="next2">
            <Link to="mk8">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/mk8",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="darnic">
              <span class="bold1">Darnic:</span> Good morning passengers- we are
              now departing Naer's Reach and entering Ocean Gyaaraa. In a moment
              you will be able to see one of the wonders of the world, the
              Leviathan as we travel along current 4.
            </p>
            <p>
              Stretching your limbs, you wondered toward the observation deck,
              hopeing to catch the Leviathan in detail.
            </p>
            <p>
              You wait patiently along with four others in the spacious
              observation deck, looking into the ocean depths when the ship
              shudders.
            </p>
          </div>
          <div className="next2">
            <Link to="mk9">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/mk9",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              The Leviathan was vast- it's ancient mech like appearance could
              only be seen in pieces as its body passed the observation decks
              windows.
            </p>
            <p>
              Not until the last of its massive shape passed beyond the
              submarine did you being to realize that the Leviathan looked like
              an ancient cephalopod called a squid.
            </p>
            <p>
              Denthalassa says cephalopods and other sentient beings departed
              the planet's oceans on an Ark, leaving behind mech. So was the
              theory.
            </p>
          </div>
          <div className="next2">
            <Link to="mk10">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/mk10",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="darnic">
              <span class="bold1">Darnic:</span> Good morning passengers- we
              will now exit the current. Please be seated.
            </p>
            <p>MK Ulta shakes as it exits the deap sea current.</p>
            <p class="darnic">
              <span class="bold1">Darnic:</span> Thank you for your patience. As
              we make our ascent, please enjoy a complimentary meal. Have at it!
            </p>
            <p>
              After getting ready you head to the cafeteria and enjoy a meal of
              Divers' eggs, yaki, fruit, a warm Naer roll, and sea milk.
            </p>
          </div>
          <div className="next2">
            <Link to="mk11">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/mk11",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="darnic">
              <span class="bold1">Darnic:</span> Welcome to Denthalassa! We have
              arrived on schedule. Thank you for riding Von Lua Enterprise.
              Enjoy your stay!
            </p>
            <p>
              You read an article online on Denthalassa while the submarine
              begins to dock to Terminal 4:
            </p>
            <p>
              Denthalassa is an archipelago of seafaring islands that travels
              the oceans. Every four years the islands returns to the convening
              point. How the islands were constructed is a mystery. At the Expo,
              you remember overhearing Nix saying in an overly theatrical spooky
              tone how Den was an 'Aaaaancient Puuuuuzzle!'. Each island is
              governed by village elders with a chief. There are four stationary
              islands and 20 traveling islands, each island containing 5 levels.
            </p>
          </div>
          <div className="next2">
            <Link to="mk12">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/mk12",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              On the 0th level, some skies above each island teem with floating
              energy facilities, weather science decks, roosts for migrating
              species and luxury homes. On level 1, the surface features an
              array of wilderness beside villages, farming zones, resort areas
              and highly concentrated urban environments. Each island on
              Denthalassa terraforms according to collective decision, ranging
              from a surface of mostly jungle to one covered in an array of
              entertainments. Beneath level 1 is level 2, the island crust,
              where some residential homes, most storage facilities, training
              grounds, and offices are located. On level 3 are research
              facilities, processing plants, energy grids, schools, and
              underwater cities that are protected by clear barriers made from
              true ether. It is typical for residents to go about their day
              among shoals of fish, whales, and other underwater occurences. Few
              have been said to gain access to level 4 where strict adherence to
              clearances are made- children call it The Phantom Zone, elders
              call it Eternium. If you were to dive beyond level 3 from outside,
              attempting to reach level 4, you would encounter a bounded field,
              preventing access.
            </p>
          </div>
          <div className="next2">
            <Link to="mk13">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/mk13",
    body: (
      <div className="oceanblue">
        <div className="smalldialogue">
          <div className="dialogue">
            <p>
              The four main islands Kahi, Lua, Ekolu, and Eha reside at the
              convening area - waiting for the appointed time...
            </p>
            <p>
              Separate, each island has its own name- however, only every four
              years does Denthalassa exist. A resort area, a gamblers delight,
              where Divers are celebrities, and fashion makes for fierce
              competition among islanders.{" "}
            </p>
            <p>
              You finish reading the entry in the article as MK Ulta docks at
              terminal 4. You collect your belongings and cross the submarine
              platform on to the dock of terminal 4. You taste the cool morning
              ocean air with what looks like for kilometers horizon and ocean
              behind you. You call a skidder taxi to Eha island, where Nix's
              estate was located.
            </p>
          </div>
          <div className="apples">
            <Link to="/fly1">
              <a className="textlink3"> Fly</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/dive1">
              <a className="textlink3"> Dive</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/fly1",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              The skidder arrives in wing formation. You open the skidders' back
              door and climb on the black leathery seats.
            </p>
            <p class="driver">
              <span class="bold1">Driver:</span> Alo wanderer. This your first
              time?
            </p>
            <p>You nod.</p>
            <p class="driver">
              <span class="bold1">Driver:</span> Looks like you wanna fly, eh?
              Buckle up. I'm going to take you trew da local route.
            </p>
          </div>

          <div className="next2">
            <Link to="fly2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/fly2",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              As soon as you buckle up, the skidder splashes through the water,
              takes off, and makes a vertical ascent. You cling to your seat as
              the driver soars through the skies, cutting through air traffic,
              ducking and weaving through the palacial buildings, terminals and
              floating research platforms.
            </p>
            <p class="driver">
              <span class="bold1">Driver:</span> Ya, almost there- my bro says
              diving paths are better but me? Nah- the skies are where it's at,
              yeah?
            </p>
            <p>The skidder slows a little.</p>
          </div>

          <div className="next2">
            <Link to="fly3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/fly3",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="driver">
              <span class="bold1">Driver:</span> This my favorite part-
            </p>
            <p>
              You see the four great islands circling a portion of ocean. Five
              slightly smaller islands borders the perimeter of each island.{" "}
            </p>

            <p>Denthalassa...</p>
            <p class="driver">
              <span class="bold1">Driver:</span> Here we go!
            </p>
            <p>
              Before you imprint your memory of the skies, you imprint your
              memory of falling toward the island in terror.
            </p>
          </div>

          <div className="next2">
            <Link to="eha1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/dive1",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              The skidder arrives in sea formation. You open the skidders' back
              door and climb on the black leathery seats.
            </p>
            <p class="driver">
              <span class="bold1">Driver:</span> Alo wanderer. This your first
              time?
            </p>
            <p>You nod.</p>
            <p class="driver">
              <span class="bold1">Driver:</span> Looks like you wanna swim, ya?
              Buckle up. I'm going to take you trew da local route.
            </p>
          </div>

          <div className="next2">
            <Link to="dive2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/dive2",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              As soon as you buckle up, the skidder splashes into the water,
              submerging, and makes a vertical descent. You cling to your seat
              as the driver soars through the ocean, cutting through sea
              traffic, ducking and weaving through the marine life, Diver
              platforms, submarines and deapsea platforms.
            </p>
            <p class="driver">
              <span class="bold1">Driver:</span> Ya, almost there- my bro says
              flight paths are better but me? Nah- the water's where it's at,
              yeah?
            </p>
            <p>The skidder slows a little.</p>
            <p class="driver">
              <span class="bold1">Driver:</span> This my favorite part-
            </p>
          </div>

          <div className="next2">
            <Link to="dive3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/dive3",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              From below, the morning light cascades through the waters. You see
              from above the four great islands circling a patch of the ocean.
              Five slightly smaller islands borders the perimeter of each of the
              stationed islands. The deap sea levels hang from the islands like
              a garden of crystal stalactites robust with all manner of
              activity, each spear of life tipped with a shroud of mystery- the
              bounded fields of level 4. Denthalassa...
            </p>
            <p class="driver">
              <span class="bold1">Driver:</span> Here we go!
            </p>
            <p>
              Before you imprint your memory of the ocean, you imprint your
              memory of the ocean ascent toward Eha island in terror.
            </p>
          </div>

          <div className="next2">
            <Link to="eha1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/eha1",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>The skidder lands at terminal 1.</p>
            <p class="driver">
              <span class="bold1">Driver:</span> Welcome to Eha Island. Word to
              the wize. Be careful out there, eh?
            </p>
            <p>
              You shake off your shock, having survived the skidder ride after
              all. The skidder takes off after you collect yourself and things-
              no time like the Present, huh?
            </p>
            <p>
              Normally, Eha island unlike the 3 other greater islands, is less
              populated. That said, during this season, and especially during
              Denthalassa, it's bustling.
            </p>
          </div>

          <div className="next2">
            <Link to="eha2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha2",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              The outdoor market bordering the town Taj along the white sand
              beach is abuzz with activity as islanders present Eha original
              wares.
            </p>
            <p>
              Wherever you look, people are STYLISH. Residents were wearing
              garments you had never seen before, and even patterns you
              recognized were rare downloads. Hair styles ranged drastically as
              did the jewelry. You were aware of statements that Denthalassan's'
              fashion epitomized the ingenuity of humankind but to see it in
              action from the baker to the children right down to their pets was
              proof in the Shale pudding. Culture seems to permeate all of life
              here on the islands, you observed.
            </p>
          </div>

          <div className="next2">
            <Link to="eha3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/eha3",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              While thinking, you walk along the path between the beach and the
              market vendors toward Nix's residence when a squat man with a
              bulbous nose greets you with a smile.
            </p>{" "}
            <p class="jingo">
              <span class="bold1">Jingo:</span> Alo traveler- you look like you
              could use a fresh pattern. Let Jingo have a better look at you-
              ah, yes. You look like you could use a fresh.... everything. Not a
              problem, not a problem! Nowhere else will you find the best KVL
              deals in all of the archipelago.
            </p>
            <p>
              The old market vendor neatly picks from a mobile container behind
              him a shimmering garment.
            </p>
          </div>

          <div className="next2">
            <Link to="eha4">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/eha4",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="jingo">
              <span class="bold1">Jingo:</span> This KVL original design would
              suit you. Take a look at the workmanship. Makes you proud to be a
              Denthalassan to see fine embroidery like this. Nowhere else will
              you find a make like this- after '74 KVL moved away from wrap trim
              altogether. Feel the texture- soft right? The pattern of the
              phoenix herons is a KVL original- one of her first. That indigo?
              Lush isn't it? It was washed in a bath of True Water, ancient
              squid ink, and rare indigo grown with meteor mulch. So- how about
              it?
            </p>
            <p>
              The old vendor listed his asking price and it was an offer you
              could not refuse! As you reached for your codex you hear a
              familiar voice.
            </p>
            <p class="indent1">
              <span class="bold1">???:</span> I wouldn't do that if I were you.
            </p>
          </div>

          <div className="next2">
            <Link to="eha5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/eha5",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>Terran!</p>{" "}
            <p>
              The old vendor glowers at Terran who wore the same suit, only this
              time with a matching pair of dress shorts on.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> I was wondering when you'd
              arrive. While the make of this article looks amazing, this old man
              is known for spinning his fair share of tales. That garment is not
              a KVL original. In fact, it's a knock-off. True indigo glimmers
              like the surface of the waves, the phoenix heron embroidery here
              is paltry, and to top it off- this is a downloadable pattern not a
              garment. Isn't that right- Hocker Jingo?
            </p>
            <p class="jingo">
              <span class="bold1">Jingo:</span> Tch. This is better style than
              anything any of you are wearing.
            </p>
            <p>
              Hocker Jingo, scowls at Terran, and moves on to his next mark.
            </p>
          </div>

          <div className="next2">
            <Link to="eha6">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha6",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="terran">
              <span class="bold1">Terran:</span> You fell for that hook, line,
              and sinker. If I hadn't stopped you, you would have found yourself
              with one of Jingo's viruses. He has a habit of adding curse
              viruses to his downloads, allowing him to extort you for more than
              the worth of that fabric he tried to hock off on you.
            </p>
            <p>
              Terran points to a young woman wearing an industrial work apron.
            </p>
            <p class="terran">
              <span class="bold1">Terran: </span>That's Clara. If you really
              want something nice to wear, talk to her.
            </p>
            <p>
              Terran introduces you to Clara who recommends beach attire
              suitable for work and play. You purchase the garment and download
              a couple patterns.
            </p>
          </div>

          <div className="next2">
            <Link to="eha7">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha7",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="clara">
              <span class="bold1">Clara:</span> My mother used to tell me
              stories of how the ancient Denthalassan's once communed with
              primordial sea life- the True cephalopod's taught the people of
              Dentha how to mimic their surroundings. This was their parting
              gift after leaving the planet on the Ark. While I can't prove this
              story, without a doubt our Mimic magic makes it possible to wear
              all sorts of things.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> Thanks Clara. Here are the
              Wafel Rolls from Shale I told you about.
            </p>
            <p>
              Clara squealed with joy. You and Terran thank Clara and wave
              goodbye, walking toward a parked hover bike parkned under the
              shade of a dragon palm tree.
            </p>
          </div>

          <div className="next2">
            <Link to="eha8">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha8",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="terran">
              <span class="bold1">Terran:</span> Ready to roll? The meetings
              will start soon so let's check you in to your room.
            </p>
            <p>
              You hold on to Terran as the hoverpad flies toward Shellton Hotel.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> I'll wait in the lobby. Make it
              quick will you?
            </p>
            <p>
              You give Terran one of the gifts you arranged for your new project
              collaborators. Terran is surprised. You thank Terran for the ride,
              check yourself in, place your belongings in your room, clean
              yourself up and slap your work clothing on. You make your way back
              to the lobby, hop on the hover bike with Terran outside and zip
              off to a rather upscale side of Eha Island inland. Terran guides
              the hover bike to the last gated area.
            </p>
          </div>

          <div className="next2">
            <Link to="eha9">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha9",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Terran waves at the automaton attendent. The gate opens and Terran
              steers the hover bike along the path, heading further inland among
              Eha forest until you enter a clearing. The grand estate is as you
              expected- grand.
            </p>
            <p>
              Terran parks the hoverbike at the fountain roundabout. A polished
              gentleman opens the large doors of the entrance to the estates,
              greets you, and ushers you and Terran in.
            </p>

            <p class="terran">
              <span class="bold1">Terran:</span> Thank you Filo. Here are the
              keys to my bike. Hope you don't mind parking it closer to the
              entrance. Got a couple errands to run after the meeting.
            </p>

            <p class="filo">
              <span class="bold1">Filo:</span> Of course Terran.
            </p>
          </div>

          <div className="next2">
            <Link to="eha10">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/eha10",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Terran walks the grand hallway, taking a sharp left passing a
              couple guest suites, takes a sharp right passing doors leading to
              what looks like a ballroom and portrait gallery. You struggle to
              keep up with Terran's pace until Terran stops at a front of
              decorated double doors. Terran turns around and faces you.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> Alright- before we go in, know
              this. The boss is in a sour mood. The person you met at the Expo
              was just for show- like Lucky Bamboo. It's not real bamboo, it's
              Lucky bamboo, the kind you keep at home. The real thing is
              something totally different, something wild. Well, ready or not,
              here we come.
            </p>
            <p>
              Terran opens the double doors. You follow Terran through, feeling
              ominous.
            </p>
          </div>

          <div className="next2">
            <Link to="eha11">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha11",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You enter a conference room with a large meeting table seated for
              30. On one wall hangs a map of the world, marking the locations of
              the islands and Anchor Studio's operations in real time. At the
              corner of the conference room, a figure in fine business attire
              slumped back in their seat momentarily raises their head from
              their computer monitor before looking back at it.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> What did I miss boss?
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> For the last time call me Nix-
              I've had it to here with these Astran counsel ass-pulls. We spent
              2 years to gain clearances to build and now they want a summoning
              deck!?
            </p>
          </div>

          <div className="next2">
            <Link to="eha12">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha13",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Nix returns to the computer station and calmly opens a report
              file, reading it while speaking to you.
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> Regarding details of your last
              design for the interior of the sculpture, you neglected to include
              material sources and there are several flaws you failed to
              address.
            </p>
            <p>
              The person you met at the Expo is completely different from the
              one you had encountered before... Nix folds the file and places
              the file on the desk, fingers entwined staring at you with a hard
              look.
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> Anchor Studios is many things for
              many people but it is no place for incompeten-
            </p>
          </div>

          <div className="next2">
            <Link to="eha14">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/eha14",
    body: (
      <div className="oceanblue">
        <div className="crash">
          <div className="noise">-slam-</div>

          <div className="text4">
            <p>The double doors fly open.</p>
            <p class="indent1">
              <span class="bold1">???:</span> WHY ARE OUR CLIENTS REQUESTING A
              SUMMONING DECK NOW!? I SUGGESTED IT TO THEM IN OUR ORIGINAL DESIGN
              BOARD, THEY REJECTED IT, AND NOW THEY WANT IT!? WHO DO THESE GWENS
              THINK THEY ARE MAKING REQUESTS LIKE THIS WITH ONLY A COUPLE WEEKS
              LEFT?
            </p>
            <p>
              A bespectacled woman donning a grey black dress suit clatters in
              with a floating orb behind her. 'Hell hath no fury like woman's
              work scorned and squandered' or so you remember the phrase.
            </p>
            <p class="indent1">
              <span class="bold1">???:</span> 'Relax V, nothing I like more than
              more work', is what I'd say if I wasn't in vacay mode. Didn't even
              get to try the rose malasadas...awww.
            </p>
          </div>

          <div className="goright">
            <Link to="eha15">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha15",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              The person apparently called V is followed by a woman wearing a
              flowery dress - with a bag 3 times her size slung over her
              shoulder as she saunters along.
            </p>
            <p>
              V walks to Nix and berates them, complaining in shouts about the
              lack of workplace boundaries, the materials needed to create the
              summoning deck, etc. The woman with the enormous bag drops it in
              another corner. You feel the earth shake. That bag seems like it
              weighs a ton! What immense strength.
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> Su, can you be a little more
              gentle there?
            </p>
            <p class="su">
              <span class="bold1">Su:</span> Sorry boss! Sure thing.
            </p>
          </div>

          <div className="next2">
            <Link to="eha16">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha18",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Once everyone had settled into their seats, Nix asks you to
              introduce yourself. You were not expecting Anchor to have this
              much intensity in the work place. Your professional life had been
              largely one of a series of mundane work culture. Whether it was
              divining which of your coworkers ate your lunch or who was to be
              promoted (or not promoted), your mind was prepared for typical
              work place dramas. But this... You rise and make your formal
              introduction as a contracted designer and project coordinator. You
              present your gifts from Shale to Su and V, much to their pleasant
              surprise.
            </p>
          </div>

          <div className="next2">
            <Link to="eha19">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha19",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="su">
              <span class="bold1">Su:</span> Let's keep this one.
            </p>

            <p class="v">
              <span class="bold1">V:</span> I second that.
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> You're both easy. Whatever
              happened to work capability as a guiding principle?
            </p>
            <p>Terran seemed rather aloof.</p>
          </div>

          <div className="next2">
            <Link to="eha20">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha20",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="nix">
              <span class="bold1">Nix:</span> Now that introductions are out of
              the way- Su, are those what I think they are?
            </p>
            <p>Nix pointed at the enormous bag hunched in the corner.</p>
            <p class="su">
              <span class="bold1">Su:</span> Yeah, boss. Fresh from the deepsea
              trenches. The Divers we hired had a great haul today.
            </p>
            <p>
              Su opened the bag, picked an object up from inside it and tossed
              it to Nix. Nix caught the object effortlessly. Nix turned over the
              object in hand for a moment, and held it up for the team to see.
              The object was a an azure crystal.{" "}
            </p>
          </div>

          <div className="next2">
            <Link to="eha21">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/eha21",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="nix">
              <span class="bold1">Nix:</span> Perfect. Take a look everyone-
              this is the embodiment of the oceans- True Aqua. This material
              will serve as the foundation of our Expo installation. V - please
              demonstrate.
            </p>
            <p>
              V held the crystal in her hand then threw it up in the air. A wand
              apparated from thin air into V's other hand. With a wave of her
              wand, hundreds of liters of water gushed from the crystal. Not a
              single drop fell from the floating mass of water suspended above
              the conference room.
            </p>
            <p class="v">
              <span class="bold1">V:</span> As you can see, True Aqua is highly
              concentrated mass of purified water imbued with True Ether. Our
              island sea barriers are composed of the stuff- serving as a wall,
              a barrier, a bounded field, and a window into the oceans- all at
              once. There are many practical uses for True Aqua. The clearance
              the Denthal chiefs gave us to use True Aqua for the Expo will be
              designated for the design and construction of the following
              project:
            </p>
          </div>

          <div className="next2">
            <Link to="eha22">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/eha22",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              V's floating orb projected on to the conference room screen
              designs for a floating mass of True Aqua shaped like an oval jewel
              at center of the Expo park.
            </p>
            <p class="v">
              <span class="bold1">V:</span> The Grand Aquarium.
            </p>
            <p>
              Images of Nix's immaculate hand drawn designs featured a habitable
              ecosystem teeming with life in the oceans.
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> There are still yet many
              challenges to ensure this project takes off. Our main priority is
              ensuring the safety of everyone involved. We discussed the
              exhibitionism of life here and deemed it gauche. Instead, The
              Grand Aquarium will host familiars the Denthal chiefs have
              contracted with as a demonstration of our unity of the
              archipelago. It so happens that the covening this year aligns with
              the Expo- bringing the seas to the skies will be the other
              thematic element. Now V, if you can reconcentrate the True Aqua we
              ca-
            </p>
          </div>

          <div className="next2">
            <Link to="eha23">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/eha23",
    body: (
      <div className="oceanblue">
        <div className="crash">
          <div className="noise">-SLAM-</div>

          <div className="text4">
            <p class="nix">
              <span class="bold1">Nix:</span> Oh for crying out lo-
            </p>
            <p>
              Nix's doors flew open, again. The sudden noise catches V off guard
              in surprise, causing her control of the water to release and crash
              down on everyone.
            </p>
            <p>
              <span className="bold2">WHOOSH</span>
            </p>
            <p>
              Before you know it, you are no longer looking at the water, you
              are in it! The water feels warm and pleasant. You start to feel as
              if you could live in it. You catch a glimpse of V activating a
              Rune. The True Aqua gushes toward a single point in V's hand
              leaving a very wet room and 3 people gasping for air..
            </p>
          </div>

          <div className="goright">
            <Link to="eha24">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/eha24",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="indent1">
              <span class="bold1">???:</span> Vapori! Cozori!
            </p>
            <p>
              A voice from beyond the double doors casts spells which collects
              the remaining True Aqua and dries the area off.
            </p>
            <p class="indent1">
              <span class="bold1">???:</span> My my, I must be late to the
              party- aquatic asphyxiation! How- Original. Hohohoho!
            </p>
            <p>
              A tall hour glass figure of a person saunters into the room. The
              smell of fresh cut Aranea flowers and citrus wafts behind this
              person. Donning a wide brimmed hat and a flowing dress whose
              pattern depicts Eha flowers following the course of the Sun's
              path, the figure's face is textbook D E V I O U S.
            </p>
          </div>

          <div className="next2">
            <Link to="eha25">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha25",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>Nix's face darkens and seems to be forcing a smile.</p>
            <p class="nix">
              <span class="bold1">Nix:</span> No Karla, you're actually, quite
              earlyyy. Welcome - please, have a seat. Everyone- this is Karla.
            </p>
            <p class="karla">
              <span class="bold1">Karla:</span> Is that any introduction? Oslo
              dear, please.
            </p>
            <p>
              A strapping guy who's aging has only shown in his powder grey hair
              appears. Wearing a butler outfit, Oslo speaks.
            </p>
            <p class="oslo">
              <span class="bold1">Oslo:</span> Yes, milady. I present to you
              Karla Von Lua, heiress of Von Lua Enterprises, lead designer and
              owner of award winning KVL brand. Island 15's Chief Komua's
              granddaughter. Savior of styles, S rank mage in crafting, blessed
              by the fae, and beloved by all...
            </p>
          </div>

          <div className="next2">
            <Link to="eha26">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha26",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              While Oslo continues extolling Karla's titles, Su whispers in your
              ear.
            </p>
            <p class="su">
              <span class="bold1">Su:</span> This happens all the time. Karla
              and Nix are something like rivals. I still haven't figured out if
              they like each other or not. Whatever you do, please don't
              entertain Karla, we'll be here forever otherwise.
            </p>
            <p class="oslo">
              <span class="bold1">Oslo:</span> Long may she make reigns.
            </p>
            <p class="karla">
              <span class="bold1">Karla:</span> Thank you Oslo.
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> What brings you here Karla?
            </p>
          </div>

          <div className="next2">
            <Link to="eha27">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha27",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Karla lights a long pipe with a snap of her finger. V looks away.
            </p>

            <p class="karla">
              <span class="bold1">Karla:</span> I was rapt with attention in my
              studio toward my latest flagship fantasy, a featherweight fabric
              comprised of Frost Froth fibres financed to ensure friends and
              families faced only a fraction of the factory fees, when imagine
              my surprise, I receive a message from the Astridian counsel. 'We
              regret to inform you your bid was declined' - Forget stepping on
              toes, Nix - you're cutting mine off at this rate, and no amount of
              ability or unrecognized genius will rectify freeing me of this
              long standing fettered fued.
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> I had no idea you made a bid for
              the Expo as well. Milady, if I'd known, surely you would have been
              included in the negotiations.
            </p>
          </div>

          <div className="next2">
            <Link to="eha28">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha28",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>Terran rises abruptly.</p>

            <p class="terran">
              <span class="bold1">Terran:</span> Pardon me boss and Miss Lua-
              I've received a confirmation from Wyv that they are available to
              discuss the fabrications today. We must leave immediately.
            </p>
            <p>Nix's eyes gleam.</p>
            <p class="nix">
              <span class="bold1">Nix:</span> Go in my stead Terran. Please take
              these files with you. Remember what we've discussed. If Wyv gives
              you a hard time- don't be afraid to go for his weakness.
            </p>
          </div>

          <div className="next2">
            <Link to="eha29">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/eha29",
    body: (
      <div className="oceanblue">
        <div className="smalldialogue">
          <div className="dialogue">
            <p class="terran">
              <span class="bold1">Terran:</span> Affirmative boss.
            </p>
            <p>Nix looks at you.</p>
            <p class="nix">
              <span class="bold1">Nix:</span> Now, you have two options. You can
              stay here and learn about our client or gain experience meeting
              our producers. Either way, you will need to learn as much as
              possible with the time we have leading up to the Expo.
            </p>
            <p>You consider your options.</p>
          </div>
          <div className="apples">
            <Link to="/stay1">
              <a className="textlink3"> Stay</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/leave1">
              <a className="textlink3"> Leave</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/stay1",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>You decide to stay. </p>
            <p class="nix">
              <span class="bold1">Nix:</span> Good. Goddess speed Terran.
            </p>
            <p> Terran departs.</p>

            <p class="karla">
              <span class="bold1">Karla:</span> What haphazard idea did you
              concoct that could possibly outdo mine?
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> Client confidentiality. Besides,
              if we did our presentation again, there's a chance you'd get wet.
            </p>
            <p>
              Karla smiles- if others had cards up their sleeves, Karla had them
              hidden everywhere on her person.
            </p>
            <p class="karla">
              <span class="bold1">Karla:</span> Depending on the creativity of
              your proposal, I have an offer you can't refuse...Fabula Lucis.
            </p>
          </div>

          <div className="next2">
            <Link to="stay2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/stay2",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You register shock on Nix's face. Karla, bemused, breathes out
              smoke shaped like hearts.
            </p>

            <p class="karla">
              <span class="bold1">Karla:</span> Ah yes- it took me a great deal
              of effort to find one.
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> V, please go over the Expo again.
            </p>
            <p class="v">
              <span class="bold1">V:</span> Yes Nix...
            </p>
            <p>V seems like she's doing her best to hold back something.</p>
          </div>

          <div className="next2">
            <Link to="stay3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/stay3",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="su">
              <span class="bold1">Su:</span> Can we skip the water part?
            </p>
            <p>
              V discusses the parameter of the project again from the top. You
              wonder what could possibly induce Nix to break
              protocol...competent mage designers were rare but mage architects
              like Nix were rarer still.{" "}
            </p>
            <p>
              After the conclusion of the presentation, Karla inhales one long
              draft from her long pipe then exhales deeply, her smoke tinged
              with green. She looks your way and gives you a wicked smile.
            </p>
          </div>

          <div className="next2">
            <Link to="stay4">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/stay4",
    body: (
      <div className="oceanblue">
        <div className="smalldialogue">
          <div className="dialogue">
            <p class="karla">
              <span class="bold1">Karla:</span> Congratulations Nix, you've
              managed to present art I can stand to suffer. Here's a new offer.
              How about you and your little team anchor yourselves on another
              project? In return for contracting the bid to me as well as
              optioning the rights, I will finance your obsession and compensate
              your team. Oh and I'll throw in a couple of my designs. Rather
              than spend nearly all of your resources, resources you don't have,
              cut your losses and focus on your hunting hobby.
            </p>
            <p>Nix is frozen in silence. V and Su look down.</p>
            <p>
              Karla's imposition caused you to react immediately. There was not
              a moment to waste.{" "}
            </p>
          </div>

          <div className="apples">
            <Link to="/p1a">
              <a className="textlink3"> Choose Karla's proposal.</a>
            </Link>
          </div>
          <div className="bananas">
            <Link to="/p2a">
              <a className="textlink3"> Stick with Nix's proposal.</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/p3a">
              <a className="textlink3"> Present your own proposal.</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/p1a",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You blurt out that though you are new, Karla's offer is the most
              sensible. You consider the feelings of your team, whom you only
              just met. That said, you know exactly what it is like to have a
              venture fold, to see years of labor lead to nothing. With daring
              and ingenuity, you present your case and convince both Sujia and V
              to side with the offer.{" "}
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> Karla, I'll have a new contract
              drafted for you tomorrow.
            </p>
            <p>
              Karla exits with Oslo thoroughly satisfied with outcome. She gives
              you her card.
            </p>
            <p class="karla">
              <span class="bold1">Karla:</span> We could use a person like you
              in our offices. Call me.
            </p>
            <p>
              Su and V leave the conference room in a daze. You're certain you
              made the right decisions to side with Karla.
            </p>
          </div>

          <div className="next2">
            <Link to="p1b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/p1b",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="nix">
              <span class="bold1">Nix:</span> You're fired.
            </p>

            <p> Completely taken aback, you ask why.</p>

            <p class="nix">
              <span class="bold1">Nix:</span> You committed the cardinal sin in
              negotiations: taking the first offer. I'm sure you thought you
              were a genius reasoning out with Karla's offer. That was not your
              call to make. Take this as a lesson for your future development.
              Enjoy your stay on Eha island- now leave.
            </p>
          </div>

          <div className="next2">
            <Link to="p1c">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/p1c",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Nix's words stick with you. The following weeks are rough, and you
              return to Shale bluer than usual. In your depressed state you take
              up sewing.
            </p>
            <p>
              One day, while cleaning out your desk, you find a card, and call
              the number on it.
            </p>
            <p>
              Lady Karla hires you immediately to work in her offices and
              eventually, you enroll in the KVL design academy.
            </p>
          </div>

          <div className="next2">
            <Link to="end1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/p2a",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You reason that any change in the proposal would be disruptive to
              its success and argue for consistency. Giving the project to
              another team requires trust and experience. Seeing that this is
              lacking, you apologize to Karla and say that regardless of
              personal desires, acting on a whim at this moment, would be
              disastrous. Continuing the project with the current team would
              keep it within the time window you have. V and Su side with you in
              agreement. Nix looks pleased.
            </p>
            <p class="karla">
              <span class="bold1">Karla:</span> Karla: Well well, I have to say
              Nix, seems like you found yourself another capable sicophant.
              Hmmph.
            </p>
            <p>
              With that, Karla leaves with Oslo. V rises and makes an
              announcement.
            </p>
            <p class="v">
              <span class="bold1">V:</span> Counselor Fis has arrived.
            </p>
          </div>

          <div className="next2">
            <Link to="p2b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/p3a",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>Your proposal pleases Nix and Karla.</p>
            <p>
              As the chief's familiars are summoned to inhabit the jewel
              aquarium, you suggest to Karla that she design a special series of
              clothing with a pattern of the familiars, commemorating the event.
              The chiefs at the summoning would wear the designs, they'd both
              get what they want and more!
            </p>
            <p>
              Karla signs an NDA and leaves with Oslo completely satisfied and
              ready to work on this project.
            </p>
            <p>Su pages Nix that the meeting with Counselor Fis will begin.</p>
          </div>

          <div className="next2">
            <Link to="p2b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/p2b",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Counselor Fis, representative of the Wings of Astris appears
              before all of you. Fis, one of the last remaing angels on the
              planet is an elder demi-angel. Neither loving or spiteful to
              humanity, perhaps envious...
            </p>
            <p>
              Negotiations begin for the site proposal without a hitch. At first
              you wonder how your team would be able to source the material to
              build a Summoning deck for the Expo. Nix skillfully presents a
              slew of options for Fis to consider while counter-offering in warm
              tones. You are surprised Nix is capable of smiling at all after
              seeing their 'true' self. You and V provide supporting evidence as
              well as research while Su's anecdotes, personal experiences round
              out the pitch.
            </p>
            <p>
              Fis takes a long moment to consider. Angels' quantifying ability
              are first rate.
            </p>
          </div>

          <div className="next2">
            <Link to="p2c">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/p2d",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You follow Nix into an office adjoining the conference room. Nix
              fills two crystal cups with a liquid from a flask and hands one of
              them to you.
            </p>

            <p class="nix">
              <span class="bold1">Nix:</span> I misjudged. You made the most of
              the knowledge before you and scaled your decisions to that end.
              This is the heart of a good negotiator. Karla and I, while we're
              at odds with one another most of the time, have a mutual
              understanding. She and I strive to be known for what we do, not
              our circumstances. I loathe sycophantic antics, and was quick to
              discover that you are the opposite. I apologize.
            </p>
            <p>
              You accept Nix's apology. Nix flashes a genuine smile. It is
              beautiful and you can't help but return the favor.{" "}
            </p>
            <p class="nix">
              <span class="bold1">Nix:</span> A toast to our efforts and your
              joining us - this is only the beginning.
            </p>
          </div>
          <div className="next2">
            <Link to="end1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  /* LEAVE */

  {
    path: "/leave1",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You tell Nix you would prefer to learn more about Anchor's
              production process and excuse yourself from the conference room.
              Part of you feels relieved you've avoided the chaos that is Karla.
            </p>

            <p class="terran">
              <span class="bold1">Terran:</span> Let's go.
            </p>
            <p>
              Terran hands you a helmet. You put it on and follow Terran back to
              the fountain where the bike was parked. Before you hop on behind
              Terran you ask where you are going.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> Eha Art Museum. We have no time
              to waste- the dealer we'll be dealing with is a very fickle
              person.
            </p>
          </div>
          <div className="next2">
            <Link to="leave2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/leave2",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              The hover bike zooms over the lush Eha forest heading back to the
              town area. A flock of paradise birds flies overhead while you spot
              a bull boar family frolick in a flower field. Now over the beach
              town, you fly pass the inn you are stayin at and make a mental
              note to look around the area. Upon reaching the north east part of
              Eha city, the bike enters a controlled descent before a modern
              structure. Instead of walking to the entrance, Terran guides you
              to the side of the building, stopping before a wall.
            </p>

            <p class="terran">
              <span class="bold1">Terran:</span> This is where we enter from.
              Just a moment.
            </p>
            <p>
              Terran looks both ways, verifies something on their Sintax, then
              walks into the wall. You follow suit and find yourself adjusting
              your eyes to the sight before you.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> This is another access point to
              the collections. Our fabrications dealer is something of a
              treasure collector. Follow me.
            </p>
          </div>
          <div className="next2">
            <Link to="leave3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/leave3",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Before you is a dimly lit hallway with two metal doors on each
              side and a stairway down. Terran walks toward the stair way and
              descends, you follow suit. The light from the halway fades as glow
              lights guide you down your path.
            </p>
            <p>
              You walk for what seems like six flights of stairs into the earth
              when you realize the light to your right is pulsing. Hundreds of
              jellies float along the barrier pulse with vibrant bright arrays
              of magenta, reds, yellows.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> We've reached level 2 of Eha
              Island. The collections vault should be this way.
            </p>
            <p>
              You descend a litle further and find yourself at an entryway
              leading inward. You wonder what could be further down those stairs
              while you and Terran walk toward a door. Terran knocks.
            </p>
          </div>
          <div className="next2">
            <Link to="leave4">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/leave4",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>A brusk voice welcomes you in from an intercom.</p>
            <p class="terran">
              <span class="bold1">Terran:</span> Our host is something of an
              eccentric. Please be polite.
            </p>
            <p>
              Through another tunnel like hallway you enter a cavernous space.
              Walls as high as the stairs you climbed down were embanked with an
              aquarium buildout. A gallery? For aquariums? The floor space was
              riddled with a maze of aquariums of various shapes and sizes and
              each one featured various objects from produce floating in an
              aquarium to paintings to precious stones to sculptures.
            </p>
            <p>
              Terran leads you to a door at the end of the pocket space of
              aquariums.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> Alright. Let the negotiations
              begin.
            </p>
          </div>
          <div className="next2">
            <Link to="leave5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/leave5",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>Terran opens the door and ushers you in.</p>

            <p class="terran">
              <span class="bold1">Terran:</span> Wyv! It's been eons. I see
              you've redecorated. Thanks for contacting us. Got here as soon as
              we could.
            </p>
            <p>
              Resting on a cushioned conversation pit built into the floor, a
              slender finger lifts a sleeping mask from their eyes. Wyv, by
              lizardmen standards would be considered exceedingly ugly. You
              however were entranced by their otherworldy beauty. Wearing a fine
              satin robe with slippers and pajama pants, Wyv flicked their
              tongue like a serpent, gently padding the cushions.
            </p>
            <p class="wyv">
              <span class="bold1">Wyv:</span> Make yourself comfortable.
              Pleasse, join me.
            </p>
            <p>
              Terran nods at you. You take off your shoes, and sit across from
              Wyv. Terran joins you, legs folded.
            </p>
          </div>
          <div className="next2">
            <Link to="leave6">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/leave6",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="terran">
              <span class="bold1">Terran:</span> There is only one person we
              know who can pull this feat off. Fifty fabrications to ensure the
              safe delivery and protection of the True Aqua. The Expo, a flight
              of fantasy, a gathering of the world's people, and also a
              lucrative opportunity for one such as yourself Wyv.
            </p>
            <p class="wyv">
              <span class="bold1">Wyv:</span> I don't eat flattery Terran.
              Please, show me the goods. You know forging containers for any
              high grade magics requires an appropriate compensation. I love my
              ssslumber- the sooner we finish, the sooner I can return to
              dreaming again.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> Of course Wyv, please take this
              as a complimentary token.
            </p>
            <p>
              Wyv receives a medallion from Terran and excitedly examines it.
            </p>
            <p>
              Seems like you and Terran are off to a good start. Tit for tat,
              Terran's command of language and financial skill works wonders to
              cajole Wyv into passion. A little push from Terran seems like all
              one needed to accomplish the impossible.
            </p>
          </div>
          <div className="next2">
            <Link to="leave7">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/leave7",
    body: (
      <div className="oceanblue">
        <div className="smalldialogue">
          <div className="dialogue">
            {" "}
            <p class="wyv">
              <span class="bold1">Wyv:</span> Yesss, yesss! This is the work
              I've been waiting to do. I've grown bored of these literal pet
              projects plaguing the museum. Ssstarting today, I will establish a
              contract with Sola and begin the forging! - Is what I would say if
              I was certain about this contract I am looking at.
            </p>
            <p>Wyv is about to close the deal when you are asked a question.</p>
            <p class="wyv">
              <span class="bold1">Wyv:</span> What about you you're pretty quiet
              over there. Should I take this offer?
            </p>
            <p>
              A strange question. You surmise Wyv is being rather shrewd. What
              could they be looking for in your question. You look toward Terran
              who is somewhat mortified.
            </p>
          </div>
          <div className="apples">
            <Link to="/down1">
              <a className="textlink3"> Negotiate down</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/up1">
              <a className="textlink3"> Negotiate Up</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/up1",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="wyv">
              <span class="bold1">Wyv:</span> How disappointing. That just won't
              work for me.
            </p>
            <p>
              You overplay your hand and Wyv decides to retract the agreement.
              The contract is not signed, thanks to your decision to profit off
              of Wyv's forging. You and Terran take the elevator up to the
              museum entrance in silence.{" "}
            </p>

            <p class="terran">
              <span class="bold1">Terran:</span> It's okay- I'll smooth things
              out later.
            </p>
            <p>
              You and Terran return to Nix empty handed- the look of disproval
              upon their face crushes you.
            </p>
          </div>
          <div className="next2">
            <Link to="up2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/up2",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Thankfully Terran has a back up plan and works out a deal that Wyv
              finds satisfactory, ensuring the negotiation's success.
            </p>

            <p>
              Terran, however antagonizes you throughout the planning of the
              Expo. You are undermined at work and Nix promotes Terran, leaving
              you to do much of the menial labor. Eventually, you quit
              prematurely returning to Shale with a lesson learned.
            </p>
          </div>
          <div className="next2">
            <Link to="end1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/down1",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You realize you can move the forging time up and negotiate the
              price of each forge down with a very simple offer. You offer Wyv a
              vending booth and slot at the Expo, adding that their aquarium
              works matches with the thema of the Grand Aquarium. To this, high
              altitude runes would be necessary for visitors to acclimate to the
              Astridian environment. You offer the idea up to Wyv to stockpile
              those as well.
            </p>
            <p class="wyv">
              <span class="bold1">Wyv:</span> I'm in!
            </p>
            <p>
              Wyv guides you to their private elevator in the back of their room
              and heads to the surface with you.
            </p>
            <p class="wyv">
              <span class="bold1">Wyv:</span> I'll get to forging tomorrow right
              away. Tell Nix, they've gotten lucky with the new hires. See you
              in Astris. Goddess speed!
            </p>
            <p>You and Terran say your goodbyes.</p>
          </div>
          <div className="next2">
            <Link to="down2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/down2",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p class="terran">
              <span class="bold1">Terran:</span> It's been a long day. I'll make
              sure to fill Nix in. First, let's take you to your Inn to rest.
              There's a Trader Jan's store nearby should you need victuals.
            </p>
            <p>
              Terran's slowed speed on the hover bike allows you to take in the
              late afternoon sights of Eha. As you hold on to Terran, your arms
              wrapped around their waist, you feel their hand rest on yours, for
              a moment.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> Thank you for your help back
              there. As much as I hate to admit it, you are top rate when it
              comes to communicating company interests with others. There's a
              lot I need to learn. It's frustrating that even at my best- I
              still need others...
            </p>
            <p>
              You reassure Terran. You're certain a time will come when the
              situation is reversed. Besides, without Terran, you would have had
              to live your entire life knowing you were scammed.{" "}
            </p>
          </div>
          <div className="next2">
            <Link to="down3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/down3",
    body: (
      <div className="oceanblue">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Terran's hover bike descends on the roof parking way of the Inn.
              The two of you get off, and enjoy the sunset together. Terran
              chuckles.
            </p>
            <p class="terran">
              <span class="bold1">Terran:</span> I'm so glad we crashed into
              each other back in Shale.
            </p>
            <p>
              When the sun fades into twilight and you are still deep in
              conversation, you decide to continue talking in your room over
              libatons.
            </p>

            <p class="terran">
              <span class="bold1">Terran:</span> It's been a joy and pleasure
              working together. With you around, I can tell the Expo will be
              something special.
            </p>
          </div>
          <div className="next2">
            <Link to="end1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  /*Unrolled Pages*/
];

export function MK4(props) {
  return (
    <div className="oceanblue">
      <div className="smalltext">
        <div className="maintext">
          <p>
            Spacious, you think. You walk the aisles, wide enough to accomodate
            two human sized persons toward your capsule. With a swipe of your
            codex ticket you lock your parcel, valise, and gifts you prepared
            for when you'd meet Nix and your project collaborators.
          </p>
          <p>
            A lot was riding on this meeting- you were certain you had made a
            great impression with Nix at the first site visit in Astris.
            Nonetheless- you start to feel a particle of doubt plant itself in
            the back of your head. The cushy seating comforts you as you recall
            the pleasantries of the Expo site encounter.
          </p>
          <p>
            <i>
              '{props.name} was it? Enid recommended you to me- do your best.'
            </i>
          </p>

          <p>
            Hearing Nix's voice in your head, your doubts subside. Nix's
            demeanor stirred another feeling in you- excitement.{" "}
          </p>
        </div>
        <div className="next2">
          <Link to="mk5">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Eha12(props) {
  return (
    <div className="oceanblue">
      <div className="smalltext">
        <div className="maintext">
          <p class="terran">
            <span class="bold1">Terran:</span> Eh, it's okay to keep your claws
            out boss. This is the new project hire {props.name} remember, from
            the Expo site visit?
          </p>
          <p class="nix">
            <span class="bold1">Nix:</span> Oh yeah. Alo there {props.name}.
          </p>
          <p>
            Nix rises, and approaches, now towering over you. Weary violet grey
            eyes...
          </p>
          <p class="nix">
            <span class="bold1">Nix:</span> Well, are you going to shake it or
            not?
          </p>
          <p>
            You apologize and shake Nix's large firm hand, thanking Nix for the
            opportunity.
          </p>
        </div>
        <div className="next2">
          <Link to="eha13">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Eha16(props) {
  return (
    <div className="oceanblue">
      <div className="smalltext">
        <div className="maintext">
          <p>Su notices you.</p>
          <p class="su">
            <span class="bold1">Su:</span> Who's your new friend Terran?
          </p>{" "}
          <p class="terran">
            <span class="bold1">Terran:</span> We're not..friends- uh this is{" "}
            {props.name}, our new project collaborator for the Expo.
          </p>{" "}
          <p class="su">
            <span class="bold1">Su:</span> Hiya {props.name}, my name's Sujia.
            Call me Su. I'm Anchor Studios' demolition expert, hehe. Hey V, we
            have a new victi- er, hire on board! Don't be rude now!
          </p>{" "}
        </div>
        <div className="next2">
          <Link to="eha17">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Eha17(props) {
  return (
    <div className="oceanblue">
      <div className="smalltext">
        <div className="maintext">
          <p>
            V turns toward you, her finger still pointing directly in Nix's
            nose. Her face goes red. She turns her entire body toward you and
            bows slightly in embarassed respect.
          </p>
          <p class="v">
            <span class="bold1">V:</span> Excuse my rudeness {props.name}- my
            name is Vivian Eastwood. You may call me V, Viv, or Vivi. I am
            Anchor Studios' head of communications and interim operations
            director. I've heard a good deal about your work. I am looking
            forward to making this years' Expo a resounding success with you!
          </p>{" "}
          <p>
            Nix waves a hand and a sound of bells ringing in the conference room
            clears the air.
          </p>
          <p class="nix">
            <span class="bold1">Nix:</span> Settle down, everyone. It's enough
            that we have a fickle client. V, summon Pith. I've received an
            update on the rune adjustments.
          </p>
        </div>
        <div className="next2">
          <Link to="eha18">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function P2C(props) {
  return (
    <div className="oceanblue">
      <div className="smalltext">
        <div className="maintext">
          <p class="fis">
            <span class="bold1">Fis:</span> Well met Negotiator. I look forward
            to seeing the fruition of both efforts. For your hard work, we'd
            like to offer you 20% more financial support. Let this be an Expo to
            remember.
          </p>
          <p>Counselor Fis exits.</p>

          <p class="nix">
            <span class="bold1">Nix:</span> Thank you everyone. This concludes
            today's meetings.
          </p>
          <p>
            A lunch break is called by Nix. Su and V make toward the dining room
            salivating at the thought of resident chef Rani's cooking.
          </p>

          <p class="nix">
            <span class="bold1">Nix:</span> {props.name}, could I have a word?
          </p>
        </div>
        <div className="next2">
          <Link to="p2d">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

// export function Eha12(props) {
//   return (
//     <div className="oceanblue">
//       <div className="smalltext">
//         <div className="maintext"></div>
//         <div className="next2">
//           <Link to="eha13">
//             <img src="cleararrow.png" width="100" height="125"></img>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function Eha12(props) {
//   return (
//     <div className="oceanblue">
//       <div className="smalltext">
//         <div className="maintext"></div>
//         <div className="next2">
//           <Link to="eha13">
//             <img src="cleararrow.png" width="100" height="125"></img>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
