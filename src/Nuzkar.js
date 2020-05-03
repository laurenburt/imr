import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM, { render } from "react-dom";
import "./App.css";
import { App, Page } from "./App";

export var pages2 = [
  //array of pages
  {
    path: "/redhare1",
    body: (
      <div className="sunset">
        <div className="wrapper">
          <div className="lombardic">T</div>
          <div className="item1">
            he whistlechime of The Red Hare sounds off as the train porter scans
            the ticket on your coda locket. The faint smell of qurros wafts from
            the car ahead. Families leaving the city are festooned with mementos
            to commemorate their trips together.
          </div>
          <div className="item2">
            <div class="gradient-border" id="box"></div>
          </div>
          <div className="item3">
            In vogue this year: Astris' latest sky visors, wearables on the head
            that changed shape and hue according to the climate. Children
            running about the platform swap cosma bangles, an item popular among
            youth worn around the wrist.
          </div>
          <div className="item4">
            <Link to="redhare2">
              <img width="100" height="125" src="cleararrow.png"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/redhare2",
    body: (
      <div className="sunset">
        <div className="wrapper">
          <div className="lombardic">S</div>

          <div className="item1">
            hale City platform overlooked the eastern part of the Aionian gulch.
            For centuries researchers and lay person alike marveled at the
            improbable nature of this terrain. Smooth green sand stretched
            outward from the city’s edge for 3 square tetrameters.
          </div>
          <div className="item2">
            <div class="gradient-border" id="box"></div>
          </div>
          <div className="item3">
            Surrounding this enigmatic area was the Merchant’s corridor, a great
            and vast expanse of aeturnian trees bordering the central and outer
            zones. Considered both a sacred and geographically rare site, became
            a protected zone. This lush desolation was known as Ea’s Landing.
          </div>
          <div className="item4">
            <Link to="redhare3">
              <img width="100" height="125" src="cleararrow.png"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/redhare3",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You sit at the window side of the train car, gazing at the
              mountains ahead of the Merchant’s corridor. You think that if
              there’s someone who’s actually stepped foot on these lands
              terrains, bets would be on Em.
            </p>
            <p>
              A minor wearing a black trenchcoat walks by your aisle and they
              remind you of your encounter with Gale a couple days ago. A
              strange egg that one, you think while smiling broadly.
            </p>
            <p>
              <i>Ding</i>
            </p>
            <p>
              The porter in your section seals the entrance with a wave of their
              hand. A voice on the intercom speaks gruffly.
            </p>
          </div>
          <div className="next2">
            <Link to="redhare4">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/redhare4",
    body: (
      <div className="sunset">
        <div className="smalldialogue">
          <div className="dialogue">
            <p class="harcartt">
              <span class="bold1">Harcartt:</span> This is yer train captain
              Harcartt speaking. We are set to arrive to Nuzkaros on schedule
              late afternoon. Conductors will be passing through to collect a
              donation of alms in gratitude to our protector, И. Kindly consider
              an offering. Victuals can be bought in the automoton tendants'
              central conduit. Okie, that's it fer me. Enjoy the ride.
            </p>
            <p>
              Two conductors donning ceremonial hats enter the compartment as
              soon as Captain Harcartt's voice cuts off. Bearing a large
              charcoal black woven basket inlaid with a silver colored alloy,
              you hear the clink of coins passengers offer as they approach.
            </p>
            <p>
              It dawns on you that you haven't left Shale in 12 years... a trip
              with Em during your school days. Before you have another thought a
              passing automoton tendant's brakes creak and you feel the motion
              of the greater wheel's axis.
            </p>
          </div>

          <div className="apples">
            <Link to="/read">
              <a className="textlink2"> Read a book</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/nap">
              <a className="textlink2"> Take a nap</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/read",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>You read a book to pass the time.</p>
            <p>
              Rosha gifted you a copy of Mercurial Delights, a series of
              writings about incredibly sad people in the field of comedy. You
              get the feeling while reading that sadness is almost a
              prerequisite for being funny- a prerequisite, not an option...
            </p>
          </div>
          <div className="next2">
            <Link to="flight">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/nap",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              It takes you a minute, but eventually, with the aid of Shale honey
              lozenges and a vanta black eye cover, you fall asleep...
            </p>
          </div>
          <div className="next2">
            <Link to="flight">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/flight",
    body: (
      <div className="sunset">
        <div className="smalldialogue">
          <div className="dialogue">
            <p class="harcartt">
              <span class="bold1">Harcartt:</span> <i>ahem-hem</i> ...What yer
              about to see is a rare sight. To the right wing, yew'll eye the
              last of the phoenix herons' flight.
            </p>
            <p>
              Aglow, you overslept and missed the migration of the phoenix
              herons while in Shale, this time you were not going to miss them
              again!!!
            </p>
            <p>
              Passengers from the left compartment rush over to the right
              passenger seats of the train in excitement. You rush to find a
              view to glimpse the herons but all of the window views are blocked
              by onlookers.
            </p>
            <p>A moment of inspiration hits you.</p>
          </div>

          <div className="apples">
            <Link to="/restroom">
              <a className="textlink2"> The restroom window!</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/caboose">
              <a className="textlink2"> The caboose!</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/restroom",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You enter the restroom by scanning your card. Your preset
              automatically sets the temperature and mutes the sound. Strange,
              you wonder why the room is bathed in warm orange light- until you
              draw closer to the restroom window.
            </p>
            <p>
              Ascending en masse, hundreds of the lustrous phoenix herons rise
              from the ravine along the train path, their flame tails coloring
              the light of the setting sun in a brilliant kaleidoscope of
              warmth.
            </p>
            <p>
              You watch for what seems like an hour until the last phoenix heron
              trails into the distance. The last time you watched the herons,
              you were with Em - how exactly did you meet?
            </p>
            <p>Your reminiscence takes you back...</p>

            <p></p>
          </div>
          <div className="next2">
            <Link to="back">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/caboose",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You enter the caboose and hurry to the balcony, your hands on the
              rail, hand on your travelers cap. A rush of gentle heat covers you
              as you hear what sounds like thousands of fans.
            </p>
            <p>
              Ascending en masse, hundreds of the lustrous phoenix herons rise
              from the ravine along the train path, their flame tails coloring
              the light of the setting sun in a brilliant kaleidoscope of
              warmth.
            </p>
            <p>
              You watch for what seems like an hour until the last phoenix heron
              trails into the distance. The last time you watched the herons,
              you were with Em - how exactly did you meet?
            </p>
            <p>Your reminiscence takes you back...</p>

            <p></p>
          </div>
          <div className="next2">
            <Link to="back">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/back",
    body: (
      <div className="flashbackground">
        <div className="crash">
          <div className="back">(outside the expo site)</div>
          <div className="text4">
            <p>The rain had resided- you're drenched and listless.</p>
            <p>
              Why didn't Virgil tell you И would be working on this project too?
              Wasn't the reason why you left the company in the first place so
              you could try to move on?
            </p>
            <p>
              One 'hey' from И was enough to crumble any composure you had
              remaining- excusing yourself so abruptly from the survey meeting
              put a dent on your glowing reputation in the firm -that you could
              be sure. It's not like you to run away from your problems but...
            </p>
          </div>
          <div className="goright">
            <Link to="/emeet1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/emeet1",
    body: (
      <div className="flashbackground">
        <div className="smalltext">
          <div className="maintext">
            <p>
              A faint sound catches your ear. Intrigued, you head toward the
              plaza a block away from the Expo site.
            </p>
            <p>
              This was your first visit to Astris. Visitors to the City in the
              Skies require an extensive medical examination and a thorough
              description of your reasons for a visa to permit traveling.
              Getting clearance to travel here was just as difficult as getting
              to Astris it seems. You should be happy, privileged to be
              marveling at the glorious architecture and beauty of this floating
              city, but...
            </p>
            <p>
              As you draw closer to the plaza, the music you hear rings through
              your body. You have never heard anything quite like it- the sound
              is so new to you that you are not sure if you like or hate it.
            </p>
          </div>
          <div className="next2">
            <Link to="emeet2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/emeet2",
    body: (
      <div className="flashbackground">
        <div className="smalldialogue">
          <div className="dialogue">
            <p>
              You see a lone figure busking among a growing throng of people.
            </p>
            <p>This person is clearly talented-</p>
            <p>
              You listen in on the song. At the end of it, the figure gives a
              rather flamboyant bow.
            </p>
            <p class="em">
              <span class="bold1">Em:</span> Thank you. Thank you! My name's Em
              and it's been great playing for you wonderful Astridians! If you
              like what you heard, send credits to @EmsEmpire on Genvo. I also
              take hat tips!
            </p>
            <p>
              The busker musician Em flicks a hat off into the sky and catches
              it with the other hand while bowing.
            </p>
          </div>

          <div className="apples">
            <Link to="/change">
              <a className="textlink2"> Give change</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/nochange">
              <a className="textlink2"> Do not give change</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/change",
    body: (
      <div className="flashbackground">
        <div className="smalldialogue">
          <div className="dialogue">
            <p>The crowd dwindles until you are the only person left.</p>
            <p>
              Everyone had either sent their credits on their device links or
              decided Em's music was not to their liking.
            </p>
            <p>You approach Em.</p>
          </div>

          <div className="apples">
            <Link to="/amazing">
              <a className="textlink2"> That was amazing!</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/something">
              <a className="textlink2"> That was something</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/amazing",
    body: (
      <div className="flashbackground">
        <div className="smalltext">
          <div className="maintext">
            <p>You put in Em's hat a chunk of change.</p>
            <p class="em">
              <span class="bold1">Em:</span> Is that so?
            </p>
            <p>Em squeals with a gleeful smile.</p>

            <p class="em">
              <span class="bold1">Em:</span> You're the first person who has
              thrown change into my hat. I'm so stoked! I knew today would be
              special. This marks a career mile mark!
            </p>

            <p>It finally dawns on you...</p>
          </div>
          <div className="next2">
            <Link to="hot">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/something",
    body: (
      <div className="flashbackground">
        <div className="smalltext">
          <div className="maintext">
            <p>You put in Em's hat some coins.</p>
            <p class="em">
              <span class="bold1">Em:</span> Is that so?
            </p>
            <p>Em sheepishly grins.</p>
            <p class="em">
              <span class="bold1">Em:</span> You're the first person who has
              thrown change into my hat. You should be honored!
            </p>
            <p>It finally dawns on you...</p>
          </div>
          <div className="next2">
            <Link to="hot">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/hot",
    body: (
      <div className="flashbackground">
        <div className="bigtext">
          <div className="maintext">
            <p>
              {/* Em is...<span className="bold2">HOT!</span> */}
              Em is...HOT!
            </p>
            <p>
              Tawny eyes flecked with gold, Em struck you as the kind of person
              whose facial expressions were only ever a palette of smiles. If
              imp had an image in the holo-records, Em would be it.
            </p>

            <p class="em">
              <span class="bold1">Em:</span> I've been traveling the world and
              here on Astris above the clouds, I've made my mark!
            </p>
            <p>
              Massive. That's the word to describe how much energy Em has.
              You've never experience someone literally somersault and dance
              around you.
            </p>
            <p>Are you part of Em's show?</p>
            <p>You fall on the floor in wonderment.</p>
            <p class="em">
              <span class="bold1">Em:</span> Whoa there!
            </p>

            <p>Em flips into a neat seated position next to you.</p>

            <p class="em">
              <span class="bold1">Em:</span> Now, to whom do I owe the pleasure
              of thanking for my career milestone in my journey to rockstar
              divinity!?
            </p>
            <p>Em says your name as if sampling a novel wine.</p>
            <p>You catch yourself hoping Em likes the taste of your name-</p>
            <p class="em">
              <span class="bold1">Em:</span> Your name has a ring to it!
            </p>
          </div>
          <div className="next2">
            <Link to="redhare5a">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/nochange",
    body: (
      <div className="flashbackground">
        <div className="abgrid">
          <div className="text">
            <p> You reconsider-</p>
          </div>

          <div className="left">
            <Link to="/genvo">
              <a className="textlink2"> Send credit to Em's Genvo</a>
            </Link>
          </div>
          <div className="right">
            <Link to="/backtowork1">
              <a className="textlink2"> Get back to work</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/genvo",
    body: (
      <div className="flashbackground">
        <div className="smalltext">
          <div className="maintext">
            <p>You send Em some credit and turn to leave.</p>
            <p>Before you turn around you notice Em packing</p>
            <p>It dawns on you...</p>
          </div>

          <div className="next2">
            <Link to="/cute">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/cute",
    body: (
      <div className="flashbackground">
        <div className="bigtext">
          <div className="maintext">
            <p>
              {/* Em is...<span className="bold2">HOT!</span> */}
              Em is...CUTE!
            </p>
            <p>
              Lithe with Tawny eyes flecked with gold, Em struck you as the kind
              of person whose facial expressions were only ever a palette of
              smiles. If imp had an image in the holo-records, Em would be it.
            </p>
            <p class="em">
              <span class="bold1">Em:</span> Well I guess I oughtta consider
              monetizing myself- the way you're staring.
            </p>
            <p>You're rather sheepish but Em manages to get you to talk.</p>
            <p class="em">
              <span class="bold1">Em:</span> This is my first time in Astris
              too! How'd you like to celebrate my performance at Solo's, your
              treat? It's supposed to be THE karaoke bar in Astris!
            </p>
            <p>You were so distraught earlier.</p>
            <p>One look from Em and you're right as- rain?</p>
            <p>That's right- you're soaking wet.</p>
            <p class="em">
              <span class="bold1">Em:</span> You look a little soggy, eh? Here,
              let me help.
            </p>
            <p>
              Em waves a finger and immdiately you feel as if the air around you
              is lifting you up. Your clothes, damp and wet all over, are now
              dry, as if you'd never walked through the rain.
            </p>{" "}
            <p>Em puts a finger to the lips and winks.</p>
            <p class="em">
              <span class="bold1">Em:</span> Trade secret! Now, how about that
              bar?
            </p>
            <p>How could you have have forgotten your sadness?</p>
            <p>
              This person, Em, works wonders. You're in rapture- yet, you feel
              somehow ashamed.
            </p>
            <p>A chill runs down your spine-</p>
          </div>
          <div className="next2">
            <Link to="redhare5a">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/backtowork1",
    body: (
      <div className="flashbackground">
        <div className="smalltext">
          <div className="maintext">
            <p>Before you can take a step toward the Expo site, you hear Em.</p>
            <p class="em">
              <span class="bold1">Em:</span> Would it hurt you to support the
              arts just a little?
            </p>
            <p>Em flashes a wicked smile.</p>
            <p>You immediately regret being so stingy-</p>
          </div>

          <div className="next2">
            <Link to="/backtowork2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/backtowork2",
    body: (
      <div className="flashbackground">
        <div className="smalltext">
          <div className="maintext">
            <p>How could you refuse this beautiful person!?</p>
            <p>
              {" "}
              Lithe with Tawny eyes flecked with gold, Em struck you as the kind
              of person whose facial expressions were only ever a palette of
              smiles. If imp had an image in the holo-records, Em would be it.
            </p>

            <p class="em">
              <span class="bold1">Em:</span> If you liked my show a smidge, how
              about helping me pack as a thank you.
            </p>
          </div>

          <div className="next2">
            <Link to="/redhare5b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/redhare5b",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="harcartt">
              <span class="bold1">Harcartt:</span> Good evening passengers, we
              are now arriving to Nuzkar.
            </p>
            <p>
              While thinking of your chance encounter with Em, the sunset faded
              into twilight.
            </p>
            <p>
              You wonder what Em's life has been like since settling in Nuzkar.
            </p>
            <p>
              Known as the heat haven, nesting grounds for the phoenix herons,
              home of the furnace guardian and its caretakers, Nuzkar is home to
              the oldest known civilization on land. The cities of Nuzkar were
              built on plateaus, great bridges connecting each pleateau to the
              great city center, Nuzkaros.
            </p>
          </div>

          <div className="next2">
            <Link to="/redhare6b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/redhare6b",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>There near the outskirts of Nuzkaros, Em found fortune.</p>
            <p>You are almost there-</p>
            <p>
              A lot of the details of your encounter with Em escape you
              unfortunately.
            </p>
            <p>Curiousity draws you to Em.</p>
            <p>Tonight is no different.</p>
          </div>

          <div className="next2">
            <Link to="/n1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/redhare5a",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="harcartt">
              <span class="bold1">Harcartt:</span> Good evening passengers, we
              are now arriving to Nuzkar.
            </p>
            <p>
              While reminiscing of your chance encounter with Em, the sunset
              faded into twilight.
            </p>
            <p>
              You wonder what Em's life has been like since settling in Nuzkar.
            </p>
            <p>
              Known as the heat haven, nesting grounds for the phoenix herons,
              home of the furnace guardian and its caretakers, Nuzkar is home to
              the oldest known civilization on land. The cities of Nuzkar were
              built on plateaus, great bridges connecting each pleateau to the
              great city center, Nuzkaros.
            </p>
          </div>

          <div className="next2">
            <Link to="/redhare6a">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/redhare6a",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>There near the outskirts of Nuzkaros, Em found fortune.</p>
            <p>You are almost there-</p>
            <p>
              What was it Em wanted to tell you back then and what does Em want
              to tell you now?
            </p>
            <p>Excitement you can't contain bursts within.</p>
            <p>Soon you will find out...</p>
          </div>

          <div className="next2">
            <Link to="/n1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n1",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              As you dial your luggage codex and set it to Hover and Follow
              mode, you hear a soft whir.
            </p>

            <span class="bold2">
              'Σας ευχαριστούμε που οδηγήσατε μαζί μας. Καλώς ήλθατε στο
              Νούζκαρος - HEAT HAVEN CITY OF EVERLASTING FLAMES!'
            </span>

            <p>
              You thank the Automaton for the courtesy and step down to the
              first floor of the train, the luggage following you like an
              obedient spiral duckling.
            </p>
            <p>
              Steam emitting from the exhaust below clears and you see Nuzkaros.
            </p>
          </div>

          <div className="next2">
            <Link to="/n2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n2",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Radiant at night, the city of Nuzkaros glimmers ruby and carnelian
              lights, giving the impression that it is aflame. Ancient towers
              and temples dedicated to the guardian and their protector, the
              Obsidianites blend with the more modern architecture while
              residents conduct day to day life living in ancient dwellings or
              recently constructed homes- however old the civilization is,
              Nuzkari tend to pragmatic ways of living.
            </p>
            <p>
              'If the spirit isn't broken, does it need fixing?' is a popular
              phrase among Nuzkari.
            </p>
            <p>You know this because Em would always recite it. </p>
          </div>

          <div className="next2">
            <Link to="/n3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n3",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              After your first encounter with Em, you began to hang out
              together, wandering around the flyways of Astris.
            </p>

            <p>
              It was Em who inspired you to pursue going back to grand academy.
              Up until that time, you had worked nearly all of your life. The
              encounter with И had shaken you when you saw you'd be working
              together again at the Expo... Em's council proved to be
              convincing, your feelings even more.
            </p>
          </div>
          <div className="next2">
            <Link to="/n4">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n4",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You could play Em's patters like reruns in your mind - 'Looks like
              you're running up against yourself and hitting a bunch of walls.
              When I feel closed up, I get frustrated- that's not cute, not cute
              at all! I have to do somethin-about, so if one way doesn't work
              out, I try another. I call it, 'Em's 1000 Worlds!' Seems like what
              you need is more experiences - what kind I have no idea. Okay, now
              watch me do a hand stand on this railing.'
            </p>

            <p>
              You shudder to remember how whimsical and terrifying Em could be.
            </p>
          </div>
          <div className="next2">
            <Link to="/n5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n5",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              The city lamps of Nuzkaros lights your way like soft stars. You're
              nearing the neighborhood Em lives in via thermal tram. You watch
              all manner of life as the tram moves toward your destination.
            </p>
            <p>
              Some stray phoenix herons have nested on lampposts, others on the
              roofs of buildings. People in traditional Nuzkari garb walk the
              streets in sandals alongside those wearing the latest Denthalassan
              fashions.{" "}
            </p>

            <p>
              The thermal tram's windowless feature allows you to feel the ether
              rich air, cool at night, yet always warm. Your Sintax guide
              notifies you to get off the next station.
            </p>
          </div>
          <div className="next2">
            <Link to="/n6">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n6",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>A bell chimes</p>
            <span class="bold1">
              {" "}
              'ΕΞΩΤΕΡΙΚΟ ΔΙΑΚΟΣΜΗΤΙΚΟ 130 ΕΠΑΡΧΙΑ'
            </span>{" "}
            <p>
              You get off the station platform- the thermal tram departs, taking
              its warmth with it. Looking up, you see the Vesti constellation
              and the Northern node.
            </p>
            <p>
              Strange- your retinal scan and digital guide isn't working. You
              head forward into district 13, walking along the side paths,
              luggage quietly in tow.
            </p>
          </div>
          <div className="next2">
            <Link to="/n7">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n7",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>Something seems 'off' - It's eerily quiet in the outer rim.</p>
            <p>
              You make it no further than 4 blocks down the pathway when you
              stop abruptly, glancing furtively from home to home.
            </p>
            <p>Not one light is on- the streets are empty.</p>
            <p>What exactly is going on here?</p>
            <p>What is that ahead?</p>
          </div>
          <div className="next2">
            <Link to="/n8">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n8",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>You feel a chill run down your spine.</p>

            <p>
              The air pressure somehow lowered between your last breath and the
              one you dare not make. The homely quiet before, now pierces
              through you like shards of dread.
            </p>

            <p>
              A lone figure ahead stands underneath a lamp post, their back
              facing you.
            </p>

            <p>Who- what - is that?</p>
          </div>
          <div className="next2">
            <Link to="/n9">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n9",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>The figure turns its head, making the sound of crushed bone.</p>

            <p>
              Then it turns its head a full 360 degree toward you, with no
              regard to the laws of humanoid biology.
            </p>

            <p>
              It wears a mask with a moon crescent smile and two eye holes
              filled with pitch dark.
            </p>

            <p>
              Whatever clothing it wore, was impossible do discern in your
              terror. Your body screams for movement but it won't budge.
            </p>
          </div>
          <div className="next2">
            <Link to="/n10">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n10",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Like a shadow of an eclipse, it walks toward you, each step
              sounding like the felling of great trees.
            </p>

            <p>
              Your luggage that had trailed you, gently nudges you by accident
              in your abrupt stop. This shakes you back into motion. You turn to
              run, but before you can take a step, you feel one long icy finger,
              and another wrap around your neck.
            </p>
          </div>
          <div className="next2">
            <Link to="/n10.5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n11",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="gale">
              <span class="bold1">Gale:</span> Just a usual day at work- I
              happened to spot the Obsidinate sentinel approach you. They're
              normally docile but lately, they've been a handful. I'm afraid I
              can't tell you any more on the matter.
            </p>
            <p>Gale started to trail into think talking.</p>

            <p className="gale">
              <span class="bold1">Gale:</span> They've never resorted to
              outright assaults on non-Nuzkari without a modification of their
              geis. Seems like the situation has escalated - Hru, please
              generate a report and send it to HQ13. We're close.
            </p>

            <p className="hru">
              <span class="bold1">Hru:</span> I'm on it, hrmm
            </p>

            <p className="gale">
              <span class="bold1">Gale:</span> What brings you here?
            </p>
          </div>
          <div className="next2">
            <Link to="/n12">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/n12",
    body: (
      <div className="sunset">
        <div className="smalldialogue">
          <div className="dialogue">
            <p>
              While you describe your trip up until the moment the sentinel
              attacked, Gale nods, listening. Hru remains silent, quietly
              generating details of this report Gale enlisted the robot to do.
            </p>

            <p className="gale">
              <span class="bold1">Gale:</span> I see. Your friend can't be too
              far from here. Why don't I give you a ride on my disc?
            </p>
          </div>

          <div className="apples">
            <Link to="/idk">
              <a className="textlink2">I don't know...</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/inb">
              <a className="textlink2">I've never been</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/idk",
    body: (
      <div className="sunset">
        <div className="smalldialogue">
          <div className="dialogue">
            <p>
              You thank the two of them and explain you don't want to hold up
              Gale from work. Besides, you've never ridden on a disc board
              before. Can two people even fit on one?
            </p>

            <p className="gale">
              <span class="bold1">Gale:</span> You won't be interfering with my
              work at all. I'll escort you there myself.
            </p>
            <p>
              Gale tosses up the disc, signaling 2 fingers. It expands to the
              size of a mattress.
            </p>
          </div>

          <div className="apples">
            <Link to="/ref1">
              <a className="textlink2">Refuse</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/ot1">
              <a className="textlink2">Okay then!</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/inb",
    body: (
      <div className="sunset">
        <div className="smalldialogue">
          <div className="dialogue">
            <p className="gale">
              <span class="bold1">Gale:</span> You'll be alright- trust me. Just
              a moment.
            </p>
            <p>
              Gale tosses up the disc, signaling 2 fingers. It expands to the
              size of a mattress.
            </p>
            <p className="gale">
              <span class="bold1">Gale:</span>You can lock your luggage here.
              Hru, after you're done, set a wind barrier, please. We prepare to
              ride. Alright, how about it?
            </p>
          </div>

          <div className="apples">
            <Link to="/ot1">
              <a className="textlink2">Okay then!</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/ref1">
              <a className="textlink2">Refuse</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ref1",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Gale's face changes. The wistful and dreamy detective's eyes
              intensify.
            </p>
            <p>Flashing a badge and holo ID, Gale grabs your shirt.</p>

            <p className="gale">
              <span class="bold1">Gale:</span> If you had gone with me, I would
              not have suspected you any further. An Obsidianite sentinel would
              never attack without cause. I am Special Agent Gale Scuri, and
              with my Authority, I place you under arrest for suspicion of
              aiding and abetting Guardian egg poachers. Hru, you know what to
              do.
            </p>
            <p className="hru">
              <span class="bold1">Hru:</span> Report finished. Tch. Sure thing
              boss.
            </p>
          </div>
          <div className="next2">
            <Link to="/ref2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ref2",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Your eyelids grow heavy, and you can barely stand. Your body is
              too heavy.
            </p>
            <p>
              Sleep. That's right, sleep. Maybe you've been asleep this whole
              time on The Red Hare? It has to be that. The last thing you see
              before your eyes close totally, is Gale's face, scornful, sad.
            </p>
          </div>
          <div className="next2">
            <Link to="/ref3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ref3",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Oh right...that Galedream again. And now this nightmare. It's the
              Nuzkari rehabilitation doctor, Aiz. He's been seeing you every
              week since you've been in rehab after your arrest. After being
              found guilty, you were ordered to do a 2 year house arrest...you
              never did make it to see Em. After the events of that night with
              Gale, you never will. Thankfully, Rosha still visits you with a
              batch of Wafelrols from time to time. It's the only thing you can
              look forward to since being let go from the Expo project.
            </p>
            <p className="hru">
              <span class="bold1">Aiz:</span> Well, how about we start where we
              left? Tell me about И?
            </p>
            <p>
              You look out your window- at least you got to see the phoenix
              herons migration...
            </p>
          </div>
          <div className="next2">
            <Link to="/end2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot1",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You hop on the elongated floating disc behind Gale. The metal
              feels soft, comfortable.
            </p>

            <p className="gale">
              <span class="bold1">Gale:</span> Alright! Coms devices should be
              working again. Sentinels have the unique ability to glitch all
              tech within many tetrameters- now that it's been unsummoned, your
              retinal scans and guiders should be functioning again.
            </p>
            <p>You set the coordinates and give the okay to Gale.</p>
            <p className="gale">
              <span class="bold1">Gale:</span> I'd say buckle up but there's
              none of that. Hold on to me, alright?
            </p>
          </div>
          <div className="next2">
            <Link to="/ot1.5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot1.5",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Gale smiles wide and with a whoosh you ascend into the night sky
              holding on to them for dear life. Maybe you were better off with
              the sentinel after all...
            </p>
            <p>
              You hold on to Gale's sturdy, firm torso. Your ears crack twice.
            </p>
            <p>
              You wonder how much further you will ascend until you notice that
              the disc has stopped moving.
            </p>
            <p className="gale">
              <span class="bold1">Gale:</span> Take a look. Since this is your
              first time here, I thought you'd like to see this.
            </p>
          </div>
          <div className="next2">
            <Link to="/ot2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot2",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You rub your eyes and notice Gale's goggles perched on the
              detective's forehead.
            </p>
            <p>
              From below you see Nuzkaros gleaming like a red jewel of the
              planet. Around you , Nuzkari couples on floating discs watch, dine
              together, in this light and heights.
            </p>
            <p>
              You make out the phoenix herons' new nesting grounds below, their
              bodies shining with the city adorned blue tiled roofs. You see all
              30 districts, each with their own respective coloration, like a
              sorted treasure box of jewels.
            </p>
          </div>
          <div className="next2">
            <Link to="/ot2.5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot2.5",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="gale">
              <span class="bold1">Gale:</span> Purdy, isn't it?
            </p>

            <p>
              You nod. Gale's eyes glimmer all the green hues in the world. You
              are hard put to answer back- there are definitely pretty things to
              see here...
            </p>
            <p>Hru quietly steers the disc, heading to Em's home.</p>
            <p className="gale">
              <span class="bold1">Gale:</span> Since this is your first time, I
              wanted you to see what the Nuzkari see. I'm glad I get to be the
              first person to take you to this spot. Here- This is my call card.
              Let me know if you find yourself in a bind or want to be in one.
            </p>
          </div>
          <div className="next2">
            <Link to="/ot3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/ot3",
    body: (
      <div className="sunset">
        <div className="bigtext">
          <div className="maintext">
            <p>Gale chuckles at their own joke.</p>

            <p className="hru">
              <span class="bold1">Hru:</span> Gale's laughter success rate is
              20%.
            </p>

            <p className="gale">
              <span class="bold1">Gale:</span> Maybe I should get a new model
              after all!
            </p>
            <p className="hru">
              <span class="bold1">Hru:</span> Gale's proposal success rate for a
              superior model is 2%.
            </p>
            <p className="gale">
              <span class="bold1">Gale:</span> Why you little scrap dust!
            </p>
            <p>You take Gale's card, laughing.</p>
          </div>
          <div className="next2">
            <Link to="/ot4">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot4",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              As the disc gently descends into the neighborhood you begin to
              make out a bright cherry wavy fringe. Unmistakably Em! You get off
              the disc, thanking both Gale and Hru for everything.
            </p>

            <p className="gale">
              <span class="bold1">Gale:</span> Call me sometime, alright?
            </p>
            <p className="hru">
              <span class="bold1">Hru:</span> The Chief is calling Gale. We must
              hurry.
            </p>

            <p className="gale">
              <span class="bold1">Gale:</span> Alright. See you later! Let's go
              Hru.
            </p>
          </div>
          <div className="next2">
            <Link to="/ot5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot6",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Em embraces you. Apart from lengthier hair, you note that not much
              about the busker you met a while back has changed- this comforts
              you.
            </p>
            <p className="em">
              <span class="bold1">Em: </span> I was beginning to think you were
              having too much fun at Nuzkar pavillion. We'll have to go there
              together tomorrow! You've made it right on time for the party.
              Follow me!
            </p>
            <p>
              As you follow Em, you explain what happened after you got on The
              Red Hare. Em's eyes always lit up where action was concerned.{" "}
            </p>

            <p className="em">
              <span class="bold1">Em: </span>That's, that's - AMAZING! You've
              been here less than a day and you've already encountered an
              Obsidianite!? They're protectors of Nuzkari's guardian and this
              city.
            </p>
          </div>
          <div className="next2">
            <Link to="/ot7">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot7",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Em leads you down a main street, then you turn down a road lined
              with Jin trees. You walk until you are stopped by a gated fence.
            </p>
            <p className="em">
              <span class="bold1">Em:</span> Watch this!
            </p>

            <p>
              Em opens the gate with a geis eye scan. You are pleasantly
              suprised. Em really does have a home. Dwellings in Nuzkar could be
              blessings or curses. As the eye is the beholder of beauty, land is
              bound to a person. You had read about land sovereignty bound to
              the eye via a geis system, but to see a land geis in activated in
              person was totally different.
            </p>
          </div>
          <div className="next2">
            <Link to="/ot8">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot8",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="em">
              <span class="bold1">Em:</span>You're the last guest I'm expecting.
              Everyone is already inside.
            </p>
            <p>
              Em beamed with pride. You are still in disbelief that this
              vagabond could ever conceive of a 'home' as destiny.
            </p>

            <p className="em">
              <span class="bold1">Em:</span>I know what you're thinking. That
              face of yours is starting to get on my nerves. I'll have you know
              I worked very hard to barter down this geis.
            </p>
          </div>
          <div className="next2">
            <Link to="/ot8.5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot8.5",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Em grins. With a dramatic bow, Em steps to the side to make way
              for you.
            </p>
            <p className="em">
              <span class="bold1">Em:</span> Here we are.
            </p>
            <p>
              After passing the gate, you move beyond the defensive system's
              boundary camouflage. From outside the gate, you perceived more
              forest and a processing facility. Once through the gate, you see a
              stone pathway leading to a skybridge.
            </p>
          </div>
          <div className="next2">
            <Link to="/ot9">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot9",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Gem, rune, and heat based magecraft powers Nuzkar, a region
              blessed with rich mineral deposits and dense ether in the air- it
              is only here that automatons and Obsidianites could function to
              maintain the standards of living Nuzkari enjoy. While more machina
              and familiars exist in other regions like Shale, Astris and
              Denthalassa- the summoning and alchemic processes stem from modern
              magecraft theory. How the Obsidianites were created eras ago, is
              still a mystery. Your Expo research is paying off you think- but
              what you see beyond the gate, is entirely new to you.
            </p>
          </div>
          <div className="next2">
            <Link to="/ot10">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot10",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="em">
              <span class="bold1">Em:</span> It's beautiful isn't it?
            </p>
            <p>
              You stare in wonderment at the land barge harbored in midair.
              There had been rumors at your old firm of floating pieces of
              foreign land wandering the skies. It was a real estate and
              architecture firms Avalon. That one would serve as the base of
              Em's home foundation made total sense to you now. You look at Em
              knowingly. A part of you hesitates to ask how Em acquired this.
            </p>
          </div>
          <div className="next2">
            <Link to="/ot11">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot11",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="em">
              <span class="bold1">Em:</span> It's a long story- I'll tell you
              later. All you need to know for now is that I earned this bad boy.
              I've got it harbored here for now while I do some work. Don't
              worry- it'll only move when I command it to.
            </p>
            <p>Em grabs your hand and you cross the skybridge together.</p>
          </div>
          <div className="next2">
            <Link to="/party1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/party1",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Em's home in contrast to the ancient floating earth it sat on, was
              modern. Tall windows adorned the two story building, moonlight
              mirages dancedg around the angular structure, cascading party
              lights bejeweling guests raving inside the home, murmurs of music
              blasted inside Em's home made its way to your ear, while more
              guests grilled food on a patio and swam in the intinity pool. This
              was what you expected of Em- a house flaming indeed!
            </p>
          </div>
          <div className="next2">
            <Link to="/party2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/party2",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You stand on the skybridge connecting the Nuzkar plateau and Em's
              domain in awe. After a moment, you notice Em keenly smiles at you.
            </p>
            <p className="em">
              <span class="bold1">Em:</span> Oh, that's only a part of it.
              There's a portal rune at the end of the bridge.
            </p>
            <p>
              Em's gloved fingers points to a boulder and you walk toward it.
              Enscribed on the stone is a rune. Em places a hand on the rune and
              recites:
            </p>
            <p className="em">
              <span class="bold1">Em:</span> By My Hand I Make Thee - Part Ways
              With The World - Brick of the Heavens - To The Lookout
            </p>
          </div>
          <div className="next2">
            <Link to="/party3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/party3",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              The rune, heeding Em's call, glows a sea green hue. You're so
              excited you forget you were holding Em's hand. ... Nothing
              happens. Em's face is sheepish.
            </p>
            <p className="em">
              <span class="bold1">Em:</span> Ehehe, it's really finicky- just a
              mom-
            </p>
            <p>
              Before Em can finish, you find yourself standing on the balcony of
              Em's home.
            </p>
            <p className="em">
              <span class="bold1">Em:</span>-ent. Right on! Took me a minute to
              remember all the activation spells here. Well, how about this
              view? I know you've been to the heights but this is something else
              too, innit?
            </p>
          </div>
          <div className="next2">
            <Link to="/party3.5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/party3.5",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Beyond the land barge, you see the vast reaches of land you had
              traveled through via train. The earth below while devoid of plant
              life, presented another kind of lushness. As if reflecting the
              cosmos, the land twinkled.
            </p>

            <p className="em">
              <span class="bold1">Em:</span> There is so much star ore deposits
              here, I decided it might be best to try and survey the land.
            </p>
          </div>
          <div className="next2">
            <Link to="/party4">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/party4.5",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="indent1">
              <span class="bold1">???:</span> Ember! We've been looking all over
              for you! Drya tried activating the warming rune in the sauna and
              it's going nuts! We're so sorry, can you help?
            </p>
            <p>Em looks at you apologetically.</p>
            <p className="em">
              <span class="bold1">Em:</span> I hate to leave you like this
              without a proper tour. Please, make yourself comfortable. My geis
              is your geis. Don't gamble with Shiar if you meet her, make sure
              not to talk about family around Dain- his mother was spirited
              recently. And Omri will flirt! I'll be back in a moment.
            </p>
          </div>
          <div className="next2">
            <Link to="/party5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/party5",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Alone, you walk toward the corner of the balcony facing the pool
              and deck. Em was always popular- quite the charmer in fact.
              Reluctant to join the party downstairs, you count a dozen guests
              out on the deck and half a dozen more swimming in the infinity
              pool- none of whom you recognize. If you didn't know better, you
              would have mistaken Em's friends for Pipe Gang members... In the
              corner of your eye you notice a few hover bikes anchored on to the
              land barge float, swaying with the light winds. Strange...
            </p>
          </div>
          <div className="next2">
            <Link to="/party6">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/party6",
    body: (
      <div className="sunset">
        <div className="smalldialogue">
          <div className="dialogue">
            <p>
              A rattling sound from behind catches your attention. You hesitate
              and attempt to discover the source of the rattling sound. There!
              You draw closer to the sound- Underneath a large cloth covered
              table you find what looks like a cage in a recess built into the
              floor.
            </p>

            <p>Curious, you...</p>
          </div>

          <div className="apples">
            <Link to="/cage1a">
              <a className="textlink2">Shake cage.</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/cage1b">
              <a className="textlink2">Peer into cage.</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage1a",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>You shake the cage in curiousity - Could this be Em's pet?</p>
            <p>You peer into the cage's gated opening- nothing.</p>
            <p>It might have been your imagination...</p>
            <p>You unlock the cage.</p>
          </div>
          <div className="next2">
            <Link to="/cage2a">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/cage2a",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            {/* <p>
              <b>YOUR FINGER DISAPPEARS. WHAT HAVE YOU DONE?</b>
            </p>
            <p>
              <b>OPENING THE CAGE RELEASED A PHANTASMAL.</b>
            </p>
            <p>
              <b>
                BEFORE YOU CAN SCREAM OR FEEL ANYTHING - YOUR ARM - YOUR LEG -
                YOUR TORSO DISAPPEARS. THE PHANTASMAL RATTLES YOUR HEAD AS IF IN
                MOCKERY.
              </b>
            </p> */}
            <p>
              <b>
                YOUR FINGER DISAPPEARS. WHAT HAVE YOU DONE? OPENING THE CAGE
                RELEASED A PHANTASMAL. BEFORE YOU CAN SCREAM OR FEEL ANYTHING -
                YOUR ARM - YOUR LEG - YOUR TORSO DISAPPEARS. THE PHANTASMAL
                RATTLES YOUR HEAD AS IF IN MOCKERY.
              </b>
            </p>

            <p>
              Em looked all over for you that evening. Life continued on, and a
              precious few remembered your name, wondered- where you went off
              to. The cage underneath the table is still there- empty.
            </p>
          </div>
          <div className="next2">
            <Link to="/end2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage1b",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>You peer into the cage and see- nothing.</p>
            <p>
              You think it best not to disturb whatever is in the cage- your eye
              catches a lumpy object next to it. You pick it up and find that
              it's a stone encased in amber.
            </p>
            <p>
              The cage rattled as soon as you had picked up the stone- maybe
              this stone belongs to whatever is in the cage?
            </p>
          </div>
          <div className="next2">
            <Link to="/cage2b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage2b",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>You peer into the cage and see- nothing.</p>
            <p>
              You think it best not to disturb whatever is in the cage- your eye
              catches a lumpy object next to it. You pick it up and find that
              it's a stone encased in amber.
            </p>
            <p>
              The cage rattled as soon as you had picked up the stone- maybe
              this stone belongs to whatever is in the cage?
            </p>
          </div>
          <div className="next2">
            <Link to="/cage3b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage3b",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You tip the stone into the opening of the cage and it disappears
              into the shadows of the container. Your ears ring when you hear a
              sound.
            </p>

            <span className="bold2">'ευχαριστώ...'</span>
            <p>
              What? You are alarmed at this voice, as if it was speaking to you
              from all sides, from above and beneath your feet. Whatever is in
              the cage spoke. Something feels off- you sense no malice... As
              unsure about things in your life since the Expo- you know you
              won't regret your next action.
            </p>
            <p>You unlock the cage.</p>
          </div>
          <div className="next2">
            <Link to="/cage4b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage4b",
    body: (
      <div className="sunset">
        <div className="bigdialogue">
          <div className="dialogue">
            <p>A strong wind blows from the cage.</p>
            <p>Light streams from the shadows, so bright you look away.</p>
            <p>
              You hear the table turn over with the force of the wind as you
              cover your eyes.
            </p>

            <span class="bold2">
              {" "}
              'Σας ευλογώ, παιδί του Ρεν. αιώνια φλόγα - χορεύει μαζί σου!'
            </span>
            <p>
              A flash brightens the sky for a moment and the immense heat
              emanating from the cage gradually lingers into a comforting
              warmth.
            </p>

            <p className="indent1">
              <span class="bold1">???:</span> YOU!
            </p>
            <p>
              {" "}
              An aggressive voice snaps you out of the novel sensory happening.
              A towering figure is scowling and pointing right at you.{" "}
            </p>
            <p className="indent1">
              <span class="bold1">???:</span> I been searching for the pindo who
              stole our catch. You're gonna pay for letting go all our keeps!
              Gut 'em Kis!
            </p>
            <p>
              Some of the party goers you noticed from the balcony were now over
              you on the hover bikes you noted earlier. One of the tattoed guys
              wearing a vest jacket jumps off the back of a bike, dagger in
              mouth. He takes the dagger out of his mouth, licks it menacingly
              and begins to stalk slowly toward you.
            </p>
            <p>
              Your mind races attempting to catch any opening you can escape to-
              behind you is drop into the twilit chasm. There! You notice a
              ledge you can jump on to next to the attacker. Before you can make
              your next move, the assailant barrels toward you and leaps into
              the air with a knife.
            </p>
            <p>
              As you brace for impact, a moment passes and you open your eyes-
              you begin to register that the attacker is sprawled right in front
              of you on the floor of the balcony.
            </p>
            <p className="em">
              <span class="bold1">Em:</span> Ah, looks like my guests have
              arrived. Hate to break it to you Sodi, but the deals off. I knew
              you and your petty poachers couldn't resist my offer.
            </p>
            <p>
              Em! You shout Em's name in awe. Taking one glove off, Em points to
              gang leader Sodi - Em's arm transforms, reconfiguring into an arm
              cannon. Showoff.
            </p>

            <p className="em">
              <span class="bold1">Em:</span> I'm sorry to get you involved in
              this. Wasn't sure I'd make it beyond tonight. You did me a huge
              favor releasing the Guardian's offspring.
            </p>
            <p className="sodi">
              <span class="bold1">Sodi:</span> EM!? I've heard that name before-
              you're that animal rights activist killing my business!!! Fellas,
              give this carfass a cheese special- I want a million holes in the
              snitch! GO!
            </p>
          </div>
          <div className="kiwis">
            <Link to="/cage5b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage5b",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              All of you pause- a noise coming from the entrance of Em's place
              suddenly grows into a cacophony. Shalean helipads appear from
              seemingly nowhere. Flood lights turn on, blinding Sodi and his
              gang. The long shadows cast on you by the gang hovering above you
              make it possible for you to barely make out what is going on among
              the chaos. You hear shouting- sounds of vehicles flying off.
            </p>
            <p>A voice on a speaker rings.</p>

            <p className="indent1">
              <span class="bold1">???:</span> This is Special Agent Scuri
              speaking. As 3rd Marshal and Lead Specialist Investigator, Sodi
              and the Uum gang- you are all under arrest!
            </p>
          </div>
          <div className="next2">
            <Link to="/cage6b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage6b",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="sodi">
              <span class="bold1">Sodi:</span> Damn! The FEDs are here- fellas,
              party's over- let's break for it. Em you bastard, this ain't the
              last you'll see'a me. Watch your back! Tch. Let's go!
            </p>
            <p>
              Sodi and the gang rev their hover bikes and take off like comets
              in the sky, leaving the gang member sprawled on the floor behind.
              Three of the helipads fly off in pursuit.
            </p>

            <p>
              One of the helipads descends. You make out what looks like Agent
              Scuri's silhouette hanging to the side of the helipad. Agent Scuri
              hops off and smoothly lands, takes the first step and trips toward
              you.
            </p>
          </div>
          <div className="next2">
            <Link to="/cage7b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage7b",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="hru">
              <span class="bold1">Hru:</span> Smooth landing success rate
              95.023%. Almost made it boss. Commendable effort.
            </p>
            <p>Hru? Hru descends from the helipad from behind Agent Scuri.</p>
            <p className="gale">
              <span class="bold1">Gale:</span> You're trying for a demotion Hru,
              aren't you?
            </p>
            <p>
              Gale! You are officially in a daze. Once again, Gale aka Special
              Agent Scuri saves the day. You begin to wonder if Nuzkar life is
              as dramatic as the day you've had...
            </p>
            <p className="gale">
              <span class="bold1">Gale:</span> Long time no see, eh? Nice work,
              Em! Don't worry, those cads won't get very far- at all.
            </p>
          </div>
          <div className="next2">
            <Link to="/cage8b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage8b",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>Gale tosses a pouch at Em, whom catches it with a finger.</p>

            <p>
              As investigators pour into Em's home and search for evidence- you,
              Em, Hru, and Gale gather around Em's deck table and sip warm
              cider. Em, ever the consummate conversationalist, tells a tale.
            </p>
          </div>
          <div className="next2">
            <Link to="/cage8.5b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage8.5b",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="em">
              <span class="bold1">Em:</span> A while before I met you, I started
              taking on side hustles to help pay for my music lessons. One of
              those jobs happened to be a passion of mine- protecting and
              safeguarding endangered organisms. I've always had a soft spot for
              bio-organisms as a cyborg myself. Busting poachers as a bounty
              hunter seemed like a perfect fit. I'd busk during the day and do
              my own detective work at night. I got so good at it people would
              call me the 'The Poacher Bounty Busker'. Cool, right? Well, my
              streak couldn't last forever. One of those busts didn't turn out
              so well so I quit the business altogether. I originally came to
              Nuzkar to research the glyphs at the foot of the Guardian's
              sanctum about half a year ago. That's when I met Hru, and Gale.
            </p>
          </div>
          <div className="next2">
            <Link to="/cage9b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/cage9b",
    body: (
      <div className="sunset">
        <div className="bigdialogue">
          <div className="dialogue">
            <p className="em">
              <span class="bold1">Gale:</span> As a Specialist Agent, I visit
              areas of mystery and maintain functions that promote those founts.
              Sometimes my assignment takes me outside of Shale. In this case,
              it was Nuzkar. I was performing one of my yearly check-ups with
              the Guardian when Hru's bio scan revealed that the Guardians' egg
              had gone missing. Who ever had stolen the egg- must have been
              Nuzkari. Only someone with a deep knowledge of the sanctum, the
              Obsidianites, and the Guardian could infiltrate without notice so
              this theory narrowed down the list of suspects. I'd heard a very
              talented poacher hunter settled in Nuzkar so I tried finding them.
              Turns out this great poacher bounty busker had retired. The
              urgency to recover a future Guardian and my caseload was at an all
              time high so I did the only logical thing to do.
            </p>

            <p className="em">
              <span class="bold1">Em:</span> And that was to cast a geis on me
              to obey your primary command- help find the Guardians' egg.
            </p>
            <p>Em looks non-plussed, then bemused. Gale grins.</p>
            <p className="em">
              <span class="bold1">Em:</span> You know, if you had just asked, I
              would have gone with you anyway...
            </p>
            <p className="gale">
              <span class="bold1">Gale:</span> Maybe...
            </p>

            <p className="hru">
              <span class="bold1">Hru:</span> Hru detects inconsistencies.
            </p>

            <p className="gale">
              <span class="bold1">Gale:</span> Gale detects oblivion.
            </p>

            <p className="em">
              <span class="bold1">Em:</span> I'm really sorry to ring you in to
              this _____. When a geis is cast, especially from those with
              powerful magecraft abilities, it's nearly impossible to disobey.
              Well, I eventually wanted to help find the egg myself. I had
              always intended to invite you here but under more laid back
              circumstances.
            </p>
            <p className="hru">
              <span class="bold1">Hru:</span> The reason you are 'here' is
              because of your work with the upcoming Expo.
            </p>
            <p className="gale">
              <span class="bold1">Gale:</span> That's right- Em and I gathered
              enough evidence to conclude that a major heist will take place at
              the Expo- we don't know who or how but with your help, we can
              prevent unwarranted deaths, and protect our most vulnerable.
            </p>
            <p className="em">
              <span class="bold1">Em:</span> This is my last job- well, my last
              volunteer gig since I'm really not about to let people like Sodi
              have their way with the world.
            </p>
            <p>
              Em and Gale look at one another and then simultaneously turn their
              gazes to you.
            </p>
            <p className="gale">
              <span class="bold1">Gale:</span> So...
            </p>
            <p className="em">
              <span class="bold1">Em:</span> How about it?
            </p>

            <p>
              Still in a daze, you ask for a moment alone to think about your
              answer. Gale and Em enter the home to help with investigations.
              Heist? Poachers? Gang? The world you entered in Nuzkar was filled
              to the brim with the excitement, perhaps overwhelmingly so.
              Remembering the empty cage, you try to find Em and Gale-
            </p>
          </div>
          {/* <div className="next2">
            <Link to="/cage7b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div> */}
          <div className="apples">
            <Link to="/findgale1">
              <a className="textlink2">Find Gale.</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/findem1">
              <a className="textlink2">Find Em.</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/findgale1",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>You find Gale on the balcony, once again.</p>
            <p>
              Gale signals you over to hop on to the hover pad while Hru
              initiates a scan.
            </p>
            <p>
              You describe to Gale that the Guardian egg had already hatched-
              you can't explain it fully but you know when it spoke to you that
              it gave you something...you point to the events that transpired
              below you, how even though you have many doubts, you can't bring
              yourself to reject that experience of helping another living being
              survive.
            </p>
          </div>
          <div className="next2">
            <Link to="/findgale2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/findgale2",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="gale">
              <span class="bold1">Gale:</span> It's not exactly in your job
              description but I would have earnestly respected any answer you
              gave- is how I felt before meeting you- at first. To be honest, a
              part of me would have felt crushed if you had bowed out... From
              the moment I met you, Wafelrol, I had the impression you were
              sticking around... I wanted to see you again... But, at what cost?
              Can you forgive me for wanting to see you again? I'm starting to
              forget myself- it's embarassing...
            </p>
            <p>
              You nod. What's there to forgive? Gale's eyes glisten- It appears
              you said some magic words.
            </p>
            <p className="gale">
              <span class="bold1">Gale:</span> Congratulations, cadet- you're
              the first to make a hard boiled detective tear up.
            </p>
            <p>You kiss.</p>
          </div>
          <div className="next2">
            <Link to="/end1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/findem1",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You find Em in her bedroom cleaning. Em notices you enter and pads
              her bed. You sit beside one another.
            </p>
            <p>
              You describe to Em that the Guardian egg had already hatched- you
              can't explain it fully but you know when it spoke to you that it
              gave you something...
            </p>
          </div>
          <div className="next2">
            <Link to="/findem2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/findem2",
    body: (
      <div className="sunset">
        <div className="smalltext">
          <div className="maintext">
            <p className="em">
              <span class="bold1">Em:</span> The day I quit the bounty hunting
              business was the day I met you, actually. Human, animal, plant,
              phantasmal, spirit, machine- what matters most to me is sentience,
              mutual respect, and care. These are things I see in you that
              remind me of my humanity. ...I can't promise things will go as
              planned but I can make this oath- that no matter what happns, I'll
              look out for you the way you look out for me. Will you really join
              us?
            </p>
            <p>You nod. More than ever, you want to know, understand Em.</p>
            <p>Em's hand joins yours.</p>
            <p>
              You kiss, the surface of your lips heating up, poised to remember
              this night with Em for a long while.
            </p>
          </div>
          <div className="next2">
            <Link to="/end1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/end1",
    body: (
      <div className="end1">
        <div className="wrapper2">
          <div className="imr1">
            <div className="centered">
              <span className="end1text">eNd</span>
            </div>
          </div>
          <div className="imr2">
            <div className="centered">
              <span className="end1textb">ad meliora</span>
            </div>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/end2",
    body: (
      <div className="end2">
        <div className="wrapper2">
          <div className="imr1">
            <div className="centered">
              <span className="end2text">eNd</span>
            </div>
          </div>
          <div className="imr2">
            <div className="centered">
              <span className="end2textb">ad meliora</span>
            </div>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  /* Unrolled pages */
];

// export function Unrolled(props) {
//   return (
//     <div className="bigtext">
//       <div className="next2">
//         <div>hey there {props.name}</div>
//         <Link to="unrolled">
//           <img src="cleararrow.png" width="100" height="125"></img>
//         </Link>
//       </div>
//     </div>
//   );
// }

export function N105(props) {
  return (
    <div className="sunset">
      <div className="bigdialogue">
        <div className="dialogue">
          <p> You try to scream but are unable to make a sound.</p>
          <p className="indent1">
            <span class="bold1">???:</span> ΠΕΡΙΟΧΗ ΚΡΟΝΟΣ ΚΛΙΡΩΝΟΜΙΑ!
          </p>
          <p>
            A familiar voice thunders a call and from above, a halo of light
            surrounds you. Beneath you, a circle of symbols glows and
            disappears.
          </p>

          <p>
            The ice like grip on your neck fades to warmth as the voice
            continues-
          </p>
          <p className="indent1">
            <span class="bold1">???:</span> ΓΑΙΑ ΥΓΕΙΑ!
          </p>
          <p>
            Your body feels light, the terror that froze you in place turns into
            an upward breeze.
          </p>
          <p className="indent1">
            <span class="bold1">???:</span> Didn't expect to see you here
            Wafelrol!
          </p>

          <p>Descending from a disc with a smile- Gale!</p>

          <p className="gale">
            <span class="bold1">Gale:</span> One more moment and that
            Obsidianite sentinel would have made you into a sacrifice.
          </p>
          <p className="hru">
            <span class="bold1">Hru:</span> Bzzt I calculated a 34% likelihood
            of the Obsidianiate sentinel's success rate.
          </p>
          <p className="gale">
            <span class="bold1">Gale:</span> {props.name} has been through
            enough Hru. Please contact the D13 HQ. We have cleared the area.
          </p>
          <p className="hru">
            <span class="bold1">Hru:</span> Contacting District 13 Head
            Quarters.:.:.:.:.:.:.:.:.:.:.:.:.Contact Successful - District
            Primary Power Activating - Lifting LVL 5 Restrictions to LVL 3.
          </p>
          <p>
            The dark and empty streets flood with activity from inside the homes
            surrounding you. Like a lid off the skies, the air pressure suddenly
            changes. You take what seems like your first breath since you
            encountered the sentinel.
          </p>
        </div>
        <div className="kiwis">
          <Link to="/n11">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function OT5(props) {
  return (
    <div className="sunset">
      <div className="smalltext">
        <div className="maintext">
          <p>
            And with that, the detective and partner fly off into the distance
            again.
          </p>
          <p>You're sure this isn't the last time you'll see Gale.</p>

          <p>
            You run over toward Em. You call Em's name like a porpoise wolf.
          </p>

          <p class="em">
            <span class="bold1">Em:</span> {props.name}! I was worried you
            wouldn't make it!
          </p>
        </div>
        <div className="next2">
          <Link to="/ot6">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Party4(props) {
  return (
    <div className="sunset">
      <div className="smalltext">
        <div className="maintext">
          <p>Em cuts themself short.</p>
          <p class="em">
            <span class="bold1">Em:</span> {props.name} - I am really glad you
            made it. Tonight wouldn't be the same at all without you. I -
          </p>
          <p>
            Before Em could finish, a couple guests from the party run toward
            Em.
          </p>
        </div>
        <div className="next2">
          <Link to="/party4.5">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
