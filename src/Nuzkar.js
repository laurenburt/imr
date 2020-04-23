import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Media, Player, controls } from "react-media-player";
import ReactDOM, { render } from "react-dom";
import "./App.css";
import { App, Page } from "./App";

export var pages2 = [
  //intro 1
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
      <div className="sunrise">
        <div className="bigdialogue">
          <div className="dialogue">
            <p>
              You sit at the window side of the train car, gazing at the
              mountains ahead of the Merchant’s corridor.
            </p>
            <p>
              You think that if there’s someone who’s actually stepped foot on
              these lands terrains, bets would be on Em.
            </p>
            <p>
              A minor wearing a black treanchcoat walks by your aisle and they
              remind you of your encounter with Gale a couple days ago.
            </p>
            <p>A strange egg that one, you think while smiling broadly.</p>
            <p>
              <i>Ding</i>
            </p>
            <p>
              The porter in your section seals the entrance with a wave of their
              hand. A voice on the intercom speaks gruffly.
            </p>

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
              <a className="textlink"> Read a book</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/nap">
              <a className="textlink"> Take a nap</a>
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
      <div className="sunrise">
        <div className="bigtext">
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
      <div className="sunrise">
        <div className="bigtext">
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
      <div className="sunrise">
        <div className="bigdialogue">
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
              <a className="textlink"> The restroom window!</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/caboose">
              <a className="textlink"> The caboose!</a>
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
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p>
              You enter the restroom by scanning your card. Your preset
              automatically sets the temperature and mutes the sound.
            </p>
            <p>
              Strange, you wonder why the room is bathed in warm orange light-
            </p>
            <p>until you draw closer to the restroom window.</p>
            <p>
              Ascending en masse, hundreds of the lustrous phoenix herons rise
              from the ravine along the train path, their flame tails coloring
              the light of the setting sun in a brilliant kaleidoscope of
              warmth.
            </p>
            <p>
              You watch for what seems like an hour until the last phoenix heron
              trails into the distance.
            </p>
            <p>
              The last time you watched the herons, you were with Em - how
              exactly did you meet?
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
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p>
              You enter the caboose and hurry to the balcony, your hands on the
              rail, hand on your travelers cap.
            </p>
            <p>
              A rush of gentle heat covers you as you hear what sounds like
              thousands of fans.
            </p>
            <p>
              Ascending en masse, hundreds of the lustrous phoenix herons rise
              from the ravine along the train path, their flame tails coloring
              the light of the setting sun in a brilliant kaleidoscope of
              warmth.
            </p>
            <p>
              You watch for what seems like an hour until the last phoenix heron
              trails into the distance.
            </p>
            <p>
              The last time you watched the herons, you were with Em - how
              exactly did you meet?
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
      <div className="sunrise">
        <div className="flashback">
          <div className="back">(outside the expo site)</div>
          <div className="text4">
            <p>The rain had resided- you were drenched and listless.</p>
            <p>
              Why didn't Virgil tell you И would be working on this project too?
              Wasn't the reason why you left the company in the first place so
              you could try to move on?
            </p>
            <p>
              One 'hey' from И was enough to crumble any composure you had
              remaining- excusing yourself so abruptly from the survey meeting
              put a dent on your glowing reputation in the firm -that you could
              be sure.
            </p>
            <p> It's not like you to run away from your problems but...</p>
            <p>
              {" "}
              A faint sound catches your ear. Intrigued, you head toward the
              plaza a block away from the Expo site.
            </p>
          </div>
          <div className="goright">
            <Link to="/emeet">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/emeet",
    body: (
      <div className="sunrise">
        <div className="bigdialogue">
          <div className="dialogue">
            <p>This was your first visit to Astris.</p>
            <p>
              Visitors to the City in the Skies require an extensive medical
              examination and a thorough description of your reasons for a visa
              to permit traveling. Getting clearance to travel here was just as
              difficult as getting to Astris it seems. You should be happy,
              privileged to be marveling at the glorious architecture and beauty
              of this floating city, but...
            </p>
            <p>
              As you draw closer to the plaza, the music you hear rings through
              your body. You have never heard anything quite like it- the sound
              is so new to you that you are not sure if you like or hate it.
            </p>
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
              <a className="textlink"> Give change</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/nochange">
              <a className="textlink"> Do not give change</a>
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
      <div className="sunrise">
        <div className="bigdialogue">
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
              <a className="textlink"> That was amazing!</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/something">
              <a className="textlink"> That was something</a>
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
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p>You put in Em's hat a chunk of change.</p>
            <p class="em">
              <span class="bold1">Em:</span> Is that so?
            </p>
            <p>Em beams with a gleeful smile and winks.</p>

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
      <div className="sunrise">
        <div className="bigtext">
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
      <div className="sunrise">
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
            <Link to="redhare4a">
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
      <div className="sunrise">
        <div className="bigdialogue">
          <div className="dialogue">
            <p> You reconsider-</p>
          </div>

          <div className="apples">
            <Link to="/genvo">
              <a className="textlink"> Send credit to Em's Genvo</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/backtowork">
              <a className="textlink"> Get back to work</a>
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
      <div className="sunrise">
        <div className="bigtext">
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
      <div className="sunrise">
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
              treat? It's supposed to be THE karaoke bar in Astris!"
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
            <Link to="redhare4a">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/backtowork",
    body: (
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p>Before you can take a step toward the Expo site, you hear Em.</p>
            <p class="em">
              <span class="bold1">Em:</span> Would it hurt you to support the
              arts just a little?
            </p>
            <p>Em flashes a wicked smile.</p>
            <p>You immediately regret being so stingy-</p>
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
            <Link to="/redhare4b">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/redhare4b",
    body: (
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p className="harcartt">
              <span class="bold1">Harcartt:</span> Good evening passengers, we
              are now arriving to Nuzkar
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
    path: "/redhare4a",
    body: (
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p className="harcartt">
              <span class="bold1">Harcartt:</span> Good evening passengers, we
              are now arriving to Nuzkar
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
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p>
              As you dial your luggage codex and set it to Hover and Follow
              mode, you hear a soft whir.
            </p>

            <p className="automaton">
              <span class="bold1">Automaton:</span> Σας ευχαριστούμε που
              οδηγήσατε μαζί μας. Καλώς ήλθατε στο Νούζκαρος - HEAT HAVEN CITY
              OF EVERLASTING FLAMES!
            </p>

            <p>
              You thank the Automaton for the courtesy and step down to the
              first floor of the train, the luggage following you like an
              obedient spiral duckling.
            </p>
            <p>
              Steam emitting from the exhaust below clears and you see Nuzkaros.
            </p>
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
      <div className="sunrise">
        <div className="bigtext">
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

            <p>
              The city lamps of Nuzkaros lights your way like soft stars. You're
              nearing the neighborhood Em lives in via thermal tram. You watch
              all manner of life as the tram moves toward your destination.
            </p>
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
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p>
              Some stray phoenix herons have nested on lampposts, others on the
              roofs of buildings. People in traditional Nuzkari garb walk the
              streets in sandals alongside those wearing the latest Denthalassan
              fashions.{" "}
            </p>

            <p>
              The thermal tram's windowless feature allows you to feel the ether
              rich air, cool at night, yet always warm.
            </p>

            <p>Your digital guide notifies you to get off the next station.</p>
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
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p>a bell chimes</p>
            <p className="automaton">
              <span class="bold1">Automaton:</span> ΕΞΩΤΕΡΙΚΟ ΔΙΑΚΟΣΜΗΤΙΚΟ 130
              ΕΠΑΡΧΙΑ
            </p>
            <p>You get off the station platform-</p>
            <p>The thermal tram departs, taking its warmth with it.</p>
            <p>
              Looking up, you see the Vesti constellation and the Northern node.
            </p>
            <p>
              Strange- your retinal scan and digital guide isn't working. You
              head forward into district 13, walking along the side paths,
              luggage quietly in tow.
            </p>
            <p>Something seems 'off' - It's eerily quiet in the outer rim.</p>
            <p>
              You make it no further than 4 blocks down the pathway when you
              stop abruptly, glancing furtively from home to home.
            </p>
            <p>Not one light is on.</p>
            <p>The streets are empty.</p>
            <p>What exactly is going on here?</p>
            <p>What is that ahead?</p>
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
      <div className="sunrise">
        <div className="bigtext">
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
              terror.
            </p>
            <p>Your body screams for movement but it won't budge.</p>
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
    path: "/n7",
    body: (
      <div className="sunrise">
        <div className="bigtext">
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
      <div className="sunrise">
        <div className="bigdialogue">
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
              <a className="textlink">I don't know...</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/inb">
              <a className="textlink">I've never been</a>
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
      <div className="sunrise">
        <div className="bigdialogue">
          <div className="dialogue">
            <p>
              You thank the two of them and explain you don't want to hold up
              Gale from work. Besides, you've never rideen on a disc board
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
              <a className="textlink">Refuse</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/ot1">
              <a className="textlink">Okay then!</a>
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
      <div className="sunrise">
        <div className="bigdialogue">
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
              <a className="textlink">Okay then!</a>
            </Link>
          </div>
          <div className="oranges">
            <Link to="/ref1">
              <a className="textlink">Refuse</a>
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
      <div className="sunrise">
        <div className="bigtext">
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
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p>Oh right...that Galedream. And now this nightmare.</p>
            <p>
              It's the Nuzkari rehabilitation doctor, Aiz. He's been seeing you
              every week since you've been in rehab after your arrest. After
              being found guilty, you were ordered to do a 2 year house
              arrest...you never did make it to see Em. After the events of that
              night with Gale, you never will. Thankfully, Rosha still visits
              you with a batch of Wafel rolls from time to time. It's the only
              thing you can look forward to since being let go from the Expo
              project.
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
      <div className="wrapper2">
        <div className="imr1">
          <div className="centered">
            <span className="end">End</span>
          </div>
        </div>
        <div className="imr2">
          <div className="centered">
            <span className="the">ad meliora</span>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ot1",
    body: (
      <div className="sunrise">
        <div className="bigtext">
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
            <p>
              Gale winks and with a whoosh you ascend into the night sky holding
              on to them for dear life. Maybe you were better off with the
              sentinel after all...
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
      <div className="sunrise">
        <div className="bigtext">
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
            <p className="gale">
              <span class="bold1">Gale:</span> Purdy, isn't it?
            </p>

            <p>
              You nod. Gale's eyes glimmer all the green hues in the world. You
              are hard put to answer back- there are definitely pretty things to
              see here...
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
      <div className="sunrise">
        <div className="bigtext">
          <div className="maintext">
            <p>Hru quietly steers the disc, heading to Em's home.</p>

            <p className="gale">
              <span class="bold1">Gale:</span> Since this is your first time, I
              wanted you to see what the Nuzkari see. I'm glad I get to be the
              first person to take you to this spot. Here- This is my call card.
              Let me know if you find yourself in a bind or want to be in one.
            </p>
            <p>Gale chuckles.</p>
            <p className="gale">
              <span class="bold1">Gale:</span> That was a joke!
            </p>
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
            <p>
              As the disc gently descends into the neighborhood you begin to
              make out a bright cherry wavy fringe. Unmistakably Em!
            </p>
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

export function N6(props) {
  return (
    <div className="sunrise">
      <div className="bigtext">
        <div className="maintext">
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
        <div className="next2">
          <Link to="/n7">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function OT4(props) {
  return (
    <div className="sunrise">
      <div className="bigtext">
        <div className="maintext">
          <p className="gale">
            <span class="bold1">Gale:</span> So that's your friend? Cool hair.
          </p>
          <p>
            You nod in approval and get off the disc, thanking both Gale and Hru
            for everything.
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
          <p>
            And with that, the detective and partner fly off into the distance
            again.
          </p>
          <p>You're sure this isn't the last time you'll see Gale.</p>

          <p>
            You run over toward Em. You call Em's name. Like a porpoise wolf
          </p>

          <p class="em">
            <span class="bold1">Em:</span> {props.name}! I was worried you
            wouldn't make it!
          </p>
        </div>
        <div className="next2">
          <Link to="/ref3">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
