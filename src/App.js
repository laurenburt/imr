import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./App.css";
import "./Indent.css";
import { pages2 } from "./Nuzkar";
import { pages3 } from "./Den";
import { N6 } from "./Nuzkar";
import { OT5 } from "./Nuzkar";
import { Party4 } from "./Nuzkar";
import { MK4 } from "./Den";
import { Eha12 } from "./Den";
import { Eha16 } from "./Den";
import { Eha17 } from "./Den";
import { P2C } from "./Den";

var pages = [
  //title
  {
    path: "/",
    title: "Title Page",
    body: (
      <div className="home">
        <div className="wrapper2">
          <div className="imr1">
            <div className="centered">
              <Link to="/intro1">
                <a className="btn">imr</a>
              </Link>
              {/* <Link to="/intro1">
              <a className="btn2">
                i n {"\u00A0"} m e d i a s {"\u00A0"} r e s
              </a>
            </Link> */}
            </div>
          </div>
          <div className="imr2">
            <div className="centered">
              <Link to="/intro1">
                <a className="btn2">
                  i n {"\u00A0"} m e d i a s {"\u00A0"} r e s
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  //intro 1
  {
    path: "/intro1",
    body: (
      <div className="sunrise">
        <div className="wrapper">
          <div className="lombardic">E</div>{" "}
          <div className="item1">
            arly morning light wades through the bay window onto an amber desk.
            The sounds of hundreds of phoenix herons’ wings murmur throughout
            Shale in their eastward migration, drawing the season to a close.
          </div>
          <div className="item2">
            <div class="gradient-border" id="box"></div>
          </div>
          <div className="item3">
            Their unmistakable calls bring you back to the golden days when you
            met your greatest love and your greatest enemy at the greatest
            showcase on the planet.
          </div>
          <div className="item4">
            <Link to="intro2">
              <img width="100" height="125" src="cleararrow.png"></img>
            </Link>
          </div>
        </div>
        {/* <div className="audiogrid">
          <div className="audioplayer">
            <audio class="audio" align-items="right">
            <source type="audio/mp3" src="imrmix1.mp3" />
            </audio>
          </div>
        </div> */}
      </div>
    ),
    links: [],
  },

  //intro 2
  {
    path: "/intro2",
    body: (
      <div className="sunrise">
        <div className="wrapper">
          <div className="lombardic">Y</div>
          <div className="item1">
            ou were having a wonderful dream, but it’s already slipping away.
            You’re tempted to curl up and see if you can return to that bliss,
            but the waking world is calling you. Aren’t you expecting an
            important message today?
          </div>
          <div className="item2">
            <div class="gradient-border" id="box"></div>
          </div>
          <div className="item3">
            Or was there somebody you meant to call…You lift your head to turn
            on your Sintax-10. The warmth of the sunlight from the window sill
            softly lands on your face as one long vertical line.
          </div>
          <div className="item4">
            <Link to="sintax">
              <img width="100" height="125" src="cleararrow.png"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  //sintax10

  //inbox

  {
    path: "/inbox",
    body: (
      <div className="sunrise">
        <div className="abgrid">
          <div className="text">
            There is a new mail in your inbox from a friend
          </div>

          <div className="left">
            <Link to="/check1">
              <a className="textlink"> Check it now</a>
            </Link>
          </div>
          <div className="right">
            <Link to="/sleep1">
              <a className="textlink"> Go back to sleep</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  // INTRO A - CHECK IT NOW

  //aftermail 1

  {
    path: "/aftermail1",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            Nix is unfailingly tough, yet tender. The message leaves you awash
            in a familiar feeling, of an evening Summer wondering about a dreamy
            cityscape. Running through the streets with a yell in your chest
            that whatever hardship lie ahead, things would be alright- drifting
            in Nix’s voice was comfort. If you could impress them, things could
            really be looking up.
          </div>
          <div className="next2">
            <Link to="sleep2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  //sleep 2

  {
    path: "/sleep2",
    body: (
      <div className="sunrise">
        <div className="abgrid">
          <div className="text">
            Just as you're about to drift off, there's a gentle tapping on the
            window. You see a phoenix heron looking at you intently.
          </div>
          <div className="left">
            <Link to="/ph2">
              <a className="textlink">Ignore it and go back to sleep</a>
            </Link>
          </div>
          <div className="right">
            <Link to="/openwindow2">
              <a className="textlink">Open the window</a>
            </Link>
          </div>
        </div>
      </div>
    ),

    links: [],
  },

  //open2
  {
    path: "/ph2",
    body: (
      <div className="sunrise">
        <div className="crash">
          <div className="noise">p'pippety-chee!</div>
          <div className="text4">
            You've only just drifted off when you are rudely awakened by an
            emphatic bird call. Suddenly, you jump out of bed at the presence of
            the phoenix heron which has apparently materialized through the
            quartz bay window. As the bird calmly perches upon your desk chair,
            you notice the satchel strapped across its elegant frame. The heron
            knowingly presents it to you, and you recognize the writing on the
            letter right away.
          </div>
          <div className="goright">
            <Link to="/letter2">
              <a className="textlink">Read letter </a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  //open window 2

  {
    path: "/openwindow2",
    body: (
      <div className="sunrise">
        <div className="abgrid">
          <div className="text">
            You open the window to find a letter addressed to you in the birds
            satchel.
          </div>
          <div className="right">
            <Link to="/letter2">
              <a className="textlink">Read letter</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  //after letter 2
  {
    path: "/afterletter2",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            You feel flushed, a wave of heat stampedes through your body with
            Em’s star-like eagerness emanating from their invitation. Any
            tiredness you felt earlier was scorched away. <i>*yawn*</i> Well,
            almost. The last time you saw Em was at the Port of Praise
            Festival…Em really did it! The excitement you feel is immediately
            cut by the loud whirring of the terrace mowers below.
          </div>
          <div className="next2">
            <Link to="breakfast">
              <img width="100" height="125" src="cleararrow.png"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  // INTRO B - BACK TO SLEEP

  // sleep 1

  {
    path: "/sleep1",
    body: (
      <div className="sunrise">
        <div className="abgrid">
          <div className="text">
            Just as you're about to drift off, there's a gentle tapping on the
            window. You see a phoenix heron looking at you intently.
          </div>
          <div className="left">
            <Link to="/ph1">
              <a className="textlink">Ignore it and go back to sleep</a>
            </Link>
          </div>
          <div className="right">
            <Link to="/openwindow1">
              <a className="textlink">Open the window</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/ph1",
    body: (
      <div className="sunrise">
        <div className="crash">
          <div className="noise">p'pippety-chee!</div>
          <div className="text4">
            You've only just drifted off when you are rudely awakened by an
            emphatic bird call. Suddenly, you jump out of bed at the presence of
            the phoenix heron which has apparently materialized through the
            quartz bay window. As the bird calmly perches upon your desk chair,
            you notice the satchel strapped across its elegant frame. The heron
            knowingly presents it to you, and you recognize the writing on the
            letter right away.
          </div>
          <div className="goright">
            <Link to="/letter1">
              <a className="textlink">Read letter </a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  //open window 1

  {
    path: "/openwindow1",
    body: (
      <div className="sunrise">
        <div className="abgrid">
          <div className="text">
            You open the window to find a letter addressed to you in the birds
            satchel.
          </div>
          <div className="right">
            <Link to="/letter1">
              <a className="textlink">Read letter</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  //letter 1

  //after letter 1
  {
    path: "/afterletter1",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            You feel flushed, a wave of heat stampedes through your body with
            Em’s star-like eagerness emanating from their invitation. Any
            tiredness you felt earlier was scorched away. <i>*yawn*</i> Well,
            almost. The last time you saw Em was at the Port of Praise
            Festival...Em really did it! The excitement you feel is immediately
            cut by the loud whirring of the terrace mowers below. Your mail
            notification chimes again...
          </div>
          <div className="next2">
            <Link to="check2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  // check 2

  //aftermail 2

  {
    path: "/aftermail2",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            Nix is unfailingly tough, yet tender. The message leaves you awash
            in a familiar feeling, of an evening Summer wondering about a dreamy
            cityscape. Running through the streets with a yell in your chest
            that whatever hardship lie ahead, things would be alright- drifting
            in Nix’s voice was comfort. If you could impress them, things could
            really be looking up.
          </div>
          <div className="next2">
            <Link to="breakfast">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  //BREAKFAST!
  {
    path: "/breakfast",
    body: (
      <div className="sunrise">
        <div className="abgrid">
          <div className="text">
            <p>
              You haven’t gotten up yet and already there are important
              decisions to make. <i>*stomach grumbles*</i> The most pressing is
              what to eat for breakfast. Thinking about traveling set your
              appetite in motion. The dishes from last night’s dinner are
              waiting for you.
            </p>
            <p>
              You could make something at home -your eyes glaze over staring at
              the kitchenette- it looks like a terrifically long distance all
              the way from your bed...or...you could just treat yourself to a
              sweet breakfast at your favorite cafe.
            </p>
          </div>
          <div className="left">
            <Link to="/honeyholes1">
              <a className="textlink">Honeyholes sound divine</a>
            </Link>
          </div>
          <div className="right">
            <Link to="/wafelrols1">
              <a className="textlink">Wafelrols are irresistable</a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  //************HONEYHOLES **************
  // walk to hinks
  {
    path: "/honeyholes1",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You manage to get out of bed- as soon as your feet touch the floor
              you undergo a metamorphosis- no longer a hinter sloth, you’re a
              kirlian shadow chaser ready to dash and dine. You glide toward the
              kitchenette and state <i>-shower if you will-</i> the kitchenette
              comports itself into a bathroom. It took three era’s to implement
              but when the ærth zone’s first biotic plant shelters began to
              root, it meant the advent of transforming modular homes.
            </p>
          </div>

          <div className="next2">
            <Link to="honeyholes2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/honeyholes2",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Your favorite music begins to play as water gushes from the
              ceiling. After a much needed shower, you declare{" "}
              <i>-wardrobe if you will-</i> and what was once a bathroom area
              begins to shift into a modest sized closet space. Layers! The
              phoenix herons heralded layer season. At last- you’ve been waiting
              what seems like eons to don your favorite jacket.
            </p>
          </div>

          <div className="next2">
            <Link to="honeyholes3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/honeyholes3",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You’re afoot. The walk to Hink’s diner is pleasant, it’s
              noticeably chilly outside. Vapors from your breath uncoil as you
              walk along the canal pathway. You're lucky to have found a room in
              the south ward. Your complex lays two blocks from the entrance to
              Naer park, a sprawling centrefold of a biome integrated into Shale
              city. While most of the city’s building structures are living
              innovations, deep within Naer park residents live in the canopy of
              the great Naer trees, stewards of the local life forms.
            </p>
          </div>

          <div className="next2">
            <Link to="honeyholes4">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/honeyholes4",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You glance away from the synaptic reader in your eye lens to take
              in the flower gardens, fields and Naer lake. The phoenix herons’
              amber nests floating atop the marsh at the edge of the lake would
              glow in the evening. With the flight of the pheorons, the nests
              were now a feast for urchin otters, sholes, umbran grits, and Naer
              vixens.
            </p>
          </div>

          <div className="next2">
            <Link to="honeyholes5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/honeyholes5",
    body: (
      <div className="sunrise">
        <div className="crash">
          <div className="noise">...grumble...</div>
          <div className="text4">
            <p>
              Your appreciation for life quickly turns to indignant envy.{" "}
              <i>Oh goddess, so hungry!</i> Before you pop a vein, you spot an
              empty canal covered station stop nearby and duck into it.
              <i>Oracle, if you will, active mode.</i> Your octic clothing
              changes form, the layered outfit’s cells shift into athletic wear,
              and your footwear adjusts for optimal first meal chasing.
            </p>
          </div>
          <div className="goright">
            <Link to="honeyholes6">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/honeyholes6",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Taking a breath, you start jogging to Hink’s, passing by
              neighborhood vendors, school children in uniforms, city officials
              guiding tourists, buskers, Gangreen’s on stoop’s planning their
              next misadventure. You see Hink’s yellow signage six buildings
              away, a welcome beacon. Starting to dash, your eyes fixated and
              nose glued to the wafting smell of Hink’s honeyholes. You're two
              buildings away, Finally!
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  // t meet
  {
    path: "/tmeet1",
    body: (
      <div className="sunrise">
        <div className="crash">
          <div className="noise">*CRASH*</div>
          <div className="text4">
            <p>
              You run into something as solid as space concrete. Your breath
              leaves your body as you fall to your back.
            </p>
            <p class="indent1">
              <span class="bold1">???:</span> Guah! My suit... the honeyholes!
              Hey, do you need help?{" "}
            </p>
          </div>
          <div className="goright">
            <Link to="tmeet1.5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet1.5",
    body: (
      <div className="sunrise">
        <div className="longresponse">
          <div className="text3">
            <p>
              <i>*ungh*</i> You’re on the ground seeing stars. Your sight comes
              back, and you look up and see someone doused in Hink’s honeyholes.
              Custard, glaze, jelly filling and pieces of honeyhole pastry are
              splattered all over this towering figures tailor tight emerald
              trim suited body, their face masked in pastry cream. A comical
              sight except for the terrifying glare coming from the two eye
              holes on Creamface.
            </p>
          </div>
          <div className="top">
            <Link to="/tmeet2a">
              <a className="textlink">
                Sorry I ran into you! Let me help you clean up and get you some
                fresh honeyholes!
              </a>
            </Link>
          </div>
          <div className="bot">
            <Link to="/tmeet2b">
              <a className="textlink">
                I'm fine, but how are you holding up, Creamface?
              </a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  // t meet 2a

  // t meet 2b

  {
    path: "/tmeet2b",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              They appear to be amused. The glare from Creamface softens into a
              gaze. Are you being stared at? It’s hard to tell. Hink’s door
              entrance bell jingles as a spry elderly person wearing a marigold
              apron steps out.
            </p>
            <p>
              <div class="ran">
                <span class="bold1">Ran: </span> What a collision that was!
                Those poor honeyholes. How about you two come inside and I’ll
                fix you up and a fresh batch
              </div>
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet4",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Elder Ran whistles, and a cleaner dog pads from around the counter
              to the window corner where Creamface is standing. Cat paws at
              their shoes then bows its head in a gesture.
            </p>
            <p class="indent1">
              <span class="bold1"> ???: </span> A cleaner dog...I thought they
              were zero’d...
            </p>

            <p class="ran">
              <span class="bold1">Ran: </span>Cat, like my old man Hink, is
              considered a national treasure. He’s 300 cycles old and still has
              gusto.
            </p>
          </div>

          <div className="next2">
            <Link to="tmeet5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet5",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Figures the codger would work a sales pitch in somewhere... For
              all the hustling maneuvers elder Ran tells the truth, well mostly.
            </p>
            <p class="indent1">
              <span class="bold1"> ???: </span> Before my grandparents were
              born, dogs were genetically manufactured to serve as man’s best
              friend AND service. There were actor dogs, guard dogs, guide dogs,
              circus clown dogs, space engineer dogs, chef dogs, poet dogs,
              metal band lead singer dogs, art critic dogs- there were even dog
              dogs!
            </p>
            <p>
              You and Ran both raise your eyebrows. Until now, Creamface barely
              spoke.
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet6">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet6",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Figures the codger would work a sales pitch in somewhere... For
              all the hustling maneuvers elder Ran tells the truth, well mostly.
            </p>
            <p class="indent1">
              <span class="bold1"> ???: </span> Before my grandparents were
              born, dogs were genetically manufactured to serve as man’s best
              friend AND service. There were actor dogs, guard dogs, guide dogs,
              circus clown dogs, space engineer dogs, chef dogs, poet dogs,
              metal band lead singer dogs, art critic dogs- there were even dog
              dogs!
            </p>
            <p>
              You and Ran both raise your eyebrows. Until now, Creamface barely
              spoke.
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet7">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/tmeet7",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p class="ran">
              <span class="bold1">Ran: </span> Seems like someone knows their
              dogs.
            </p>
            <p class="indent1">
              <span class="bold1"> ???: </span> I used to read dog
              picture-pedias when I was little. I can’t believe I’m seeing one.
            </p>
            <p class="ran">
              <span class="bold1">Ran: </span>Is that so? I wouldn’t have marked
              you for a dog lover. You see, Cat is waiting for permission. Would
              you like him to clean you?
            </p>
            <p class="indent1">
              <span class="bold1"> ???: </span>Would I!? Cat, please clean me,
              if you will.
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet8">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet8",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            Kneeling in ceremonial fashion before Cat’s nose, Creamface bows
            toward the canine. With a merry woof, Cat’s pale pink tongue sets to
            work, extending, licking and cleaning in lightning succession.
            Before the genos ban, cleaner dogs were genetically modified to have
            tongues that could extend to great lengths, purify any surface it
            touched, and bodies that were able to process any substance, even
            high grade pollutants. Vanguards of public health, they aided in
            cleansing toxic zones. Their saliva was even said to cure cancers.
            In a matter of moments, Cat’s work is finished.
          </div>
          <div className="next2">
            <Link to="tmeet9">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet9",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              The old dog yips to signal completion and scampers happily back to
              rest in his bedding below the countertop, having had more treats
              than he was expecting. Creamface rises from his bow. The emerald
              suit that was stained is now spotless. In fact it seems to shine
              with a minty luster. Statuesque, as if the suit was carved on
              them, you notice the chiseled and robust features of your new
              acquaintance. They turn toward you, jade iris eyes, a kind smile,
              face carved by the goddesses themselves and all.
            </p>
            <p class="indent1">
              <span class="bold1"> ???: </span>Uhhh, is there something still on
              my face?
            </p>
            <p>You feel the warmth of your cheeks flush.</p>

            <p className="apples">
              <Link to="/tmeet10a">
                <a className="textlink">No, I was admiring the view...</a>
              </Link>
            </p>
            <p className="oranges">
              <Link to="/tmeet10b">
                <a className="textlink">I'm amazed at Cat's paw work!</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet10a",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You drop a power move, your mind racing for a cool thing to say.
              The person's eyes glint and smirks.{" "}
            </p>
            <p class="indent1">
              <span class="bold1"> ???:</span> That's a line from the show 'P.O.
              Boxer' isn't it?
            </p>
            <p>
              Bashful, you confirm that it was. Not many people appreciate or
              recognize your occasional obscure references. When faced with
              someone who does, you're somehow more embarassed.
            </p>
            <p>
              You take a step back to collect yourself and notice a card on the
              floor wedged between your shoe and the floor. You pick it up. Upon
              examination, you realize-
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet11">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet10b",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You say the first thing you can think of. You're feeling flushed-
              it's unusual to feel like a stranger to your own body- What about
              this person is making you feel this way?
            </p>
            <p>
              You notice a card on the floor next to Creamface and pick it up.
              Upon examination, you realize-
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet11">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet11",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You hold the business card in your hand, feeling the smooth
              surface. This logo of a rising anchor is unmistakable. The vivre
              papyrus, a rare material often used to certify professionals
              verifies that it is a genuine Anchor Studios business card, a card
              you hope to earn as a newly hired contractor with the firm.
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet12">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet12",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You read the name Terran Kesstler. Terran... The person standing
              before you...
            </p>
            <p>
              You show the business card to the person you designated as
              Creamface.
            </p>
            <p class="terran">
              <span class="bold1"> Terran:</span> Yes, that's me! You're welcome
              to keep it, as a keep sake.
            </p>
            <p>
              Terran smiles at you, and just as they make for the exit you blurt
              out:
            </p>
            <div className="apples">
              <Link to="/tmeet13">
                <a className="textlink">
                  I look forward to working with you soon!
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet13",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p class="terran">
              <span class="bold1"> Terran:</span> Excuse me- what?
            </p>
            <p>
              You explain to Terran that you are one of the designers referred
              to Anchor Studios. You met Nix at the first Expo site visit for
              the contracted partners in Astris a while ago. Nix left a message
              inviting you to Anchor Studios HQ in Denthalassa. Over your
              explanation you begin to notice Terran growing noticeably
              agitated. Did you say something to offend them? You say to Terran
              that you are looking forward to working together and making the
              Expo a resounding success! However, your enthusiasm is returned
              with silence. Terran looks displeased.
            </p>

            <p class="terran">
              <span class="bold1"> Terran:</span> So you're the new hire...
              Follow me.
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet14">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet14",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You hesitate as Terran leaves Hink's- you collect yourself and go
              after them. Terran leads you to an empty alley on the side of
              Hink's. Terran closes in on you, their head within inches of
              yours, those jade eyes now a dragons flame.
            </p>
            <p class="terran">
              <span class="bold1"> Terran:</span> Whatever strings you pulled to
              get in with the boss, I hope you're prepared. If you're dead
              weight, you will be dropped! What exactly did you do to earn title
              designer?
            </p>
            <p>You try to explain yourself but Terran interjects.</p>
            <p class="terran">
              <span class="bold1"> Terran:</span> Before Terran can get another
              word in, a voice from the sidewalk calls you out.
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet15">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet16",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>A child's voice calls toward Remmy.</p>
            <p class="rhea">
              <span class="bold1"> Rhea:</span> Daddy!
            </p>
            <p>Remmy's smile seemed to come from the depth of his being.</p>{" "}
            <p class="remmy">
              <span class="bold1"> Remmy:</span> Just a moment business
              princess! Well, looks like my boss needs help setting her bicorn
              tricycle. Take care, and do your best!
            </p>
            <p>
              Remmy leaves you and Terran to help a struggling Boss Princess.
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet17">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet17",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Terran seems deep in thought. Their face seems to have softened.
            </p>
            <p class="terran">
              <span class="bold1"> Terran:</span> Hmm, it seems like you aren't
              totally useless after all. Just a heads up- the Boss probably
              neglected to tell you what island Seed estates is on. If you
              accept the invitation, make sure to board a sub to terminal 4 and
              take a skidder from there to terminal 1, Eha island.
            </p>
            <p>
              Terran moves toward a hoverbike stationed at a charging bay on the
              corner of Hink's.
            </p>
            <p class="terran">
              <span class="bold1"> Terran:</span> I look forward to seeing what
              Boss see's in you. Till then- later!
            </p>
          </div>
          <div className="next2">
            <Link to="tmeet18">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/tmeet18",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              With that, your enigmatic and acerbic future coworker flies off.
              You take Terran's useful information as a sign that they've
              somewhat approved of you, if only a little. Still, you know you're
              on thin ice. Maybe you would have felt discouraged if you had
              worked with a personality like Terran's in the past, but for some
              reason, you are fired up and even more excited to learn more about
              Anchor Studios.
            </p>
            <p>
              You go back to Hink's and enjoy a moment with everyone there.
              Wherever you decide to go from here, you know it will be a while
              before you return.
            </p>
          </div>
          <div className="next2">
            <Link to="mk1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  // t meet 3

  //************* WAFELROLS **************
  // walk to hinks
  {
    path: "/wafelrols1",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>Wafelrols, your favorite!</p>
            <p>
              You begin to set at a breakneck dash hoping you are early in the
              queue. Lines are typical at Rosha's Hot Shot Hotcake Shop. For
              those in the 5th ward, when Rosha's doors open, it signals the
              beginning of the neighborhood's enterprises. As you round the
              corner of a building you duck under a low hanging lattice system.
            </p>
          </div>
          <div className="next2">
            <Link to="wafelrols2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/wafelrols2",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You almost collide into a young Kobo pulling a fruit merchant's
              produce.
            </p>
            <p>
              As you weave your way through the morning commotion you almost
              nick yourself running through circus row, an alley famous for its
              resident performers, their animal compatriots, self-avowed freaks
              and roving mystics. The smell of spices and citrus entice you.
            </p>
          </div>
          <div className="next2">
            <Link to="wafelrols3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/wafelrols3",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              <span className="bold2">'Look out!'</span>
            </p>
            <p>
              A juggler's throwing knife grazes your cheek. Without stopping you
              apologize, somewhat embarassed, and continue the duck and cover
              dance through the alley.
            </p>
            <p>
              So close to Rosha's, you turn to look behind you, the runner's
              high now rushing from your toes to the base of your neck. You
              haven't felt this excited in a long while...
            </p>
            <p>
              You look ahead and before you can yell, you are about to crash
              into someone holding a tower of Hotcake boxes.
            </p>
            <p> You take a tumble forward, your luck having run out.</p>
          </div>
          <div className="next2">
            <Link to="gmeet1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet1",
    body: (
      <div className="sunrise">
        <div className="crash">
          <div className="noise">~fwip~</div>
          <div className="text4">
            <p>
              Eyes closed bracing for impact, your sense of suspense fades-
              somehow you aren't dead.
            </p>
            <p class="indent1">
              <span class="bold1">???:</span> It's a good day for a stroll,
              though I'd have chosen a wider street to try those slick tricks of
              yours.
            </p>
          </div>
          <div className="goright">
            <Link to="gmeet1.5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet1.5",
    body: (
      <div className="sunrise">
        <div className="longresponse">
          <div className="text3">
            <p>
              A mellow voice registers, and as the shock of the crash subsides,
              you notice the steely and soft grip of a hand at your waist-
            </p>
            <p>
              <p class="indent1">
                <span class="bold1">???:</span> Let me guess, you thought if you
                ran to Rosha's you'd beat the morning rush? Sorry- you might be
                waiting a little longer. I just bought all of the pastries here.
              </p>
            </p>
            <p>OK, now you open your eyes.</p>
          </div>
          <div className="top">
            <Link to="/gmeet2a">
              <a className="textlink">
                Who in Shale needs that many wafelrols!?
              </a>
            </Link>
          </div>
          <div className="bot">
            <Link to="/gmeet2b">
              <a className="textlink">
                Any chance I can buy a wafelrol from you?
              </a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet2a",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Before you put this stranger on blast, your jaw slacks, your eyes
              in a furious haze crystallize into clear focus- the person holding
              you has their head so close to yours...
            </p>
            <p>Long tufts of hair roll down the sides of an olive tan face.</p>
            <p>
              For a moment, you are startled- an impish smile, sea green eyes,
              and the smell of an apple orchard on the outer rim of Shale's farm
              zone causes you to blush.
            </p>
            <p className="indent1">
              <span className="bold1">???:</span> Hmm, doesn't look like you're
              hurt. You just came from down wind the circus alley didn't you?
              I'd guess that you also live near Naer Park...
            </p>
            <p>They smirk at the look of bewilderment on your face.</p>
          </div>

          <div className="next2">
            <Link to="gmeet3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet2b",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Before you can summon the words to pitch a wafelrol sale, your
              eyes in a mystified haze crystallize into clear focus- the person
              holding you has their head so close to yours...
            </p>
            <p>Long tufts of hair roll down the sides of an olive tan face.</p>
            <p>
              For a moment, you are startled- an impish smile, sea green eyes,
              and the smell of an apple orchard on the outer rim of Shale's farm
              zone stirs wonder in you.
            </p>
            <p className="indent1">
              <span className="bold1">???:</span> Hmm, doesn't look like you're
              hurt. You just came from down wind the circus alley didn't you?
              I'd guess that you also live near Naer Park...
            </p>
            <p>They smirk at the look of bewilderment on your face.</p>
          </div>

          <div className="next2">
            <Link to="gmeet3">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet3",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p className="indent1">
              <span className="bold1">???:</span> I pay attention-that's all
            </p>
            <p>
              The stranger, head still close, helps you upright, pats you on
              your shoulder and puts a hand out with a devilish smile.
            </p>
            <p>
              Red flags. Stranger Danger! No one in Shale is this cool. The
              stranger lifts their fingers in gesture toward you.
            </p>
            <p className="indent1">
              <span className="bold1">???:</span> Sorry to say, but I'm a little
              short on day to enjoy your company. You still want a wafelrol
              right?
            </p>
          </div>
          <div className="next2">
            <Link to="gmeet4">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet4",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              The mysterious figure before you dusts their bowler cap from the
              street floor before flicking it neatly on their head like a
              trickster's coin bet flip against the gods. It registers that they
              are wearing a long platinum grey blue ombre coat-
            </p>
            <p>
              At the mention of wafelrols, you wonder where the Rosha boxes you
              almost crashed into are...Stranger Danger whistles
            </p>
          </div>
          <div className="next2">
            <Link to="gmeet5">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet5",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p className="indent1">
              <span className="bold1">???:</span> Hru, bring 'em down won't you?
            </p>
            <p>
              You hear whirring and feel a light breeze as a shadow descends
              from above.
            </p>
            <p className="hru">
              <span className="bold1">Hru:</span> Hrmm Hrmm- all boxes accounted
              for CO.
            </p>
            <p>
              A Vrnyan automoton hovers above the stranger's shoulder, hotboxes
              in one impossibly high and neat stack floats above its globular
              body in an exlamation point, as if to convey that the person
              beside the machine indeed is a living warning sign.
            </p>
          </div>
          <div className="next2">
            <Link to="gmeet6">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet6",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              {" "}
              You recall your mid level arcstories. Vrnyan technology though
              ancient, is highly advanced- many of the modern innovations made
              throughout the world stem from the inventiveness of the Vrynyans.
              Whatever became of their civilization, their legacy continued in
              forms like the automoton before you whose pattern design, while
              supremely functional, also looked rather cute...
            </p>
          </div>
          <div className="next2">
            <Link to="gmeet7">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet7",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Before you can claim your wafelrol, you hear a short and loud
              beep. Standing in front of the hot cake shop is a waifish woman
              with short parted hair and a demure expression on her face- she
              holds out a cashier's pad in one hand toward the stranger.
            </p>
            <p class="rosha">
              <span class="bold1">Rosha: </span> Don't forgot to sign your key
              receipt.
            </p>
          </div>
          <div className="next2">
            <Link to="gmeet8">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/wink1",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              You address yourself warmly and with a brief moment of eye
              contact, you wink at Gale. Gale's frictionless demeanor suddenly
              and subtly shifts. They turn their head, body slightly stiffened,
              and cough.
            </p>
          </div>
          <div className="next2">
            <Link to="wink2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/wink2",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p className="rosha">
              <span className="bold1">Rosha:</span> You alright Gale? I have
              some lozenges in the shop if you like
            </p>
            <p className="gale">
              <span className="bold1">Gale:</span> No, no...Hru blew in a bit of
              dust my way, I'm fine
            </p>
            <p>Hru hovers between you and Gale with a whisper.</p>

            <p className="hru">
              <span className="bold1">Hru:</span> Hrmm, Hrmm. CO- I received a
              message from SW task force. The entire team is starving. We will
              be placed on filing duty if we don't arrive back to HQ soon.
            </p>
          </div>
          <div className="next2">
            <Link to="gmeet9">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/business2",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Rosha looks at you warmly. Hru hovers between you, Rosha, and
              Gale. Ignoring you and Rosha, Hru quietly speaks to Gale.
            </p>
            <p className="hru">
              <span className="bold1">Hru:</span> Hrmm, Hrmm. CO- I received a
              message from SW task force. The entire team is starving. We will
              be placed on filing duty if we don't arrive back to HQ soon.
            </p>
          </div>
          <div className="next2">
            <Link to="gmeet9">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  {
    path: "/gmeet10",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p class="gale">
              <span class="bold1">Gale: </span> See you around I hope.
            </p>
            <p>
              Gale beaming, nods, turns, and walks a couple steps forward. With
              a flashy motion, an alloy disc drops from out of Gale's trench
              coat's left sleeve and into their hand. Gale drops the disc and
              kicks it. The disc expands and hovers. They hop on and begin
              ascending above the buildings with Hru following in tow. You hear
              Gale faintly in the distance.
            </p>
            <p className="gale">
              <span className="bold1">Gale:</span> I've got the worst luck
              Hru...
            </p>
          </div>
          <div className="next2">
            <Link to="roshas1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/roshas1",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p>
              Your stomach riots in high alert. As the adrenaline from the
              encounter with Gale leaves you, you almost keel over from your
              hunger pangs. You hold your prize wafelrol lovingly and devour it
              on the spot. As you bite into the rol the layered flavors of moon
              wafel, crunchy citric wafer, rich Kobo cream, hot cake, kleechi
              jelly and salted caramel burst in your mouth. You forget your
              troubles for a moment, and as good things most often do, your
              wafelrol ended as quickly as it began... Surprising no one, you
              crave more.
            </p>
          </div>
          <div className="next2">
            <Link to="roshas2">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/roshas3",
    body: (
      <div className="sunrise">
        <div className="smalltext">
          <div className="maintext">
            <p className="rosha">
              <span className="bold1">Rosha:</span> Gale there works for the
              civic enterprise. I got a rush order for some visiting dignitary
              from South Wards' branch officer right before I opened. Almost
              said no to the government, ha! Lucky for them, Gale is incredibly
              persuasive. I'm pretty sure that one can convince day its night.
            </p>
            <p>
              You converse with Rosha at length over Angra tea while she kneads
              and works on a fresh set of rols. Her partner Mik, assistant
              siblings Camas and Shrums' content shuffles and laughter punctuate
              the back kitchen ongoings. After some time, you bid Rosha
              farewell, a bag of fresh rols in hand- this time you walk back the
              way you came.
            </p>
          </div>
          <div className="next2">
            <Link to="redhare1">
              <img src="cleararrow.png" width="100" height="125"></img>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  // functions
].concat(pages2, pages3);
export function Page(props) {
  return (
    <div className="page">
      {props.body}
      {props.links.map((link) => (
        <Link to={link.path}>{link.name}</Link>
      ))}
    </div>
  );
}

// name input/output functions
function Sintax(props) {
  return (
    <div className="sunrise">
      <div className="sintaxgrid">
        <div className="logo">m@il</div>

        <div className="username">
          <div></div>
          <input
            className="sintaxinput"
            onChange={(e) => props.setName(e.target.value)}
          ></input>
        </div>

        <div className="signin">
          <Link to="/inbox">
            <a className="textlink">Sign your name</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
function Check1(props) {
  return (
    <div className="sunrise">
      <div className="bigtext">
        <div className="maintext">
          <p>
            <span className="bold2">
              'Morning {props.name}, are you well? - This is Nix Aarhion.'
            </span>
          </p>
          A voice as crisp as fresh crystal linen weathered by years of smokes
          and long nights poured from the speaker. You can't believe you're
          listening to a message from THE Nix Aarhion - one of the most
          successful mage architects of all time.
          <p>
            <span className="bold2">
              {" "}
              'We met at the Expo site in Astris, and now my colleague Liv has
              recommended you to me. I'd like to invite you to join us for a
              visit at Anchor Studios HQ in Denthalassa. I think you could be a
              valuable addition to our team. I remember you were excited to
              listen to my shieldfish riding stories and took a liking to the
              seaflower snacks I’d bring to meetings. You've never been to Den,
              right? It's a beautiful place - the waters here are warm, every
              block has its own healing pool and there are plenty of beaches to
              relax in while eating freshly grilled egg pearls. Though it’s
              business, there’s nothing wrong with mixing in a little pleasure,
              no? Listen , There’s something else I wa--'Hey boss, the magnus is
              here to see you-''
            </span>
          </p>
          <p>
            -Another voice cuts in. Seems like Nix was calling from the office.
            First to arrive, last to leave- some things never change...
          </p>
          <p>
            <span className="bold2">
              'Just when I was getting to the gull goose. Let’s pick up where we
              left off in Den. See you soon! And, {props.name} ...take it easy,
              but not too easy okay?'
            </span>
          </p>
        </div>
        <div className="next2">
          <Link to="aftermail1">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
{
}

function Check2(props) {
  return (
    <div className="sunrise">
      <div className="bigtext">
        <div className="maintext">
          <p>
            <span className="bold2">
              'Morning {props.name}, are you well? - This is Nix Aarhion.'
            </span>
          </p>
          A voice as crisp as fresh crystal linen weathered by years of smokes
          and long nights poured from the speaker. You can't believe you're
          listening to a message from THE Nix Aarhion - one of the most
          successful mage architects of all time.
          <p>
            <span className="bold2">
              {" "}
              'We met at the Expo site in Astris, and now my colleague Liv has
              recommended you to me. I'd like to invite you to join us for a
              visit at Anchor Studios HQ in Denthalassa. I think you could be a
              valuable addition to our team. I remember you were excited to
              listen to my shieldfish riding stories and took a liking to the
              seaflower snacks I’d bring to meetings. You've never been to Den,
              right? It's a beautiful place - the waters here are warm, every
              block has its own healing pool and there are plenty of beaches to
              relax in while eating freshly grilled egg pearls. Though it’s
              business, there’s nothing wrong with mixing in a little pleasure,
              no? Listen , There’s something else I wa--'Hey boss, the magnus is
              here to see you-''
            </span>
          </p>
          <p>
            -Another voice cuts in. Seems like Nix was calling from the office.
            First to arrive, last to leave- some things never change...
          </p>
          <p>
            <span className="bold2">
              'Just when I was getting to the gull goose. Let’s pick up where we
              left off in Den. See you soon! And, {props.name} ...take it easy,
              but not too easy okay?'
            </span>
          </p>
        </div>

        <div className="next2">
          <Link to="aftermail2">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Letter1(props) {
  return (
    <div className="sunrisescroll">
      <div className="letter">
        <div className="main">
          <p>{props.name}, Hey it’s been a while, hasn’t it?</p>
          <p>
            I hope you got to catch the phoenix heron’s migration from your
            place, though I’m pretty certain you slept through it all. It’s a
            once in a lifetime event but knowing you, you’d be late to your own
            funeral. Remember when we used to sneak out during lunch and explore
            the Angra forest? You’d always miss out on spotting the wild dew
            runners, heh. The other day I saw a baked panna cotta shaped like a
            bouquet of feather ferns. It reminded me of the first day I met
            you…do you remember?
          </p>
          <p>
            I was sleeping underneath a Throne tree when your hydro disc bopped
            me. One of your teammates had the bright idea of playing in the
            abandoned field- I was about to unload my fury on the entire team
            but you arrived right on time. I never met someone who knew so many
            words synonymous with sorry. You gave me your feather fern pin as a
            token...and then I socked you! Those were the days, weren’t they?
          </p>
          <p>Anyway, I wanted to invite you out to my new place!</p>
          <p>
            You teased that I’d be living out of my van the rest of my life
            (almost right) but surprise surprise, I ran into a little bit of
            luck traveling through the outer zones. This isn’t going to any old
            housewarming- this is going to be a Houseflaming! Please say you’ll
            come! No worries about bringing anything, I’ve got everything taken
            care of. All you’ve got to do is say “yes!” I’ve attached train
            tickets if you were concerned about flying. Air traffic has been
            hectic around here lately.
          </p>
          <p>Take care old friend and see you soon.</p>
          <p>season's glow,</p>
          Ember
        </div>
        <div className="next">
          <Link to="afterletter1">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Letter2(props) {
  return (
    <div className="sunrisescroll">
      <div className="letter">
        <div className="main">
          <p>{props.name}, Hey it’s been a while, hasn’t it?</p>
          <p>
            I hope you got to catch the phoenix heron’s migration from your
            place, though I’m pretty certain you slept through it all. It’s a
            once in a lifetime event but knowing you, you’d be late to your own
            funeral. Remember when we used to sneak out during lunch and explore
            the Angra forest? You’d always miss out on spotting the wild dew
            runners, heh. The other day I saw a baked panna cotta shaped like a
            bouquet of feather ferns. It reminded me of the first day I met
            you…do you remember?
          </p>
          <p>
            I was sleeping underneath a Throne tree when your hydro disc bopped
            me. One of your teammates had the bright idea of playing in the
            abandoned field- I was about to unload my fury on the entire team
            but you arrived right on time. I never met someone who knew so many
            words synonymous with sorry. You gave me your feather fern pin as a
            token...and then I socked you! Those were the days, weren’t they?
          </p>
          <p>Anyway, I wanted to invite you out to my new place!</p>
          <p>
            You teased that I’d be living out of my van the rest of my life
            (almost right) but surprise surprise, I ran into a little bit of
            luck traveling through the outer zones. This isn’t going to any old
            housewarming- this is going to be a Houseflaming! Please say you’ll
            come! No worries about bringing anything, I’ve got everything taken
            care of. All you’ve got to do is say “yes!” I’ve attached train
            tickets if you were concerned about flying. Air traffic has been
            hectic around here lately.
          </p>
          <p>Take care old friend and see you soon.</p>
          <p>season's glow,</p>
          Ember
        </div>
        <div className="next">
          <Link to="afterletter2">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Tmeet2a(props) {
  return (
    <div className="sunrise">
      <div className="smalltext">
        <div className="maintext">
          <p>
            Hink’s door entrance bell jingles as a spry elderly person wearing a
            marigold apron steps out.
          </p>
          <p className="ran">
            <span class="bold1">Ran: </span>I saw the commotion- please forgive
            the young bawn here. {props.name} is known for having the world’s
            worst case of tunnel vision!
          </p>
          <p>
            The glare from Creamface softens into a gaze. Are you being stared
            at? It’s hard to tell.
          </p>
        </div>
        <div className="next2">
          <Link to="tmeet3">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
function Tmeet3(props) {
  return (
    <div className="sunrise">
      <div className="smalltext">
        <div className="maintext">
          <p>
            You get up and help pick up the honeyholes scattered about. Hink’s
            is quiet today. Usually, there is hustle and bustle but today it’s
            near empty...star light floods from the window onto the checker
            floor of the pastry section. You peak into the diner wing and there
            are the usual suspects. Mags reading her payper’s near the window, a
            sage pipette in hand, Charlee and Tanu exchanging banter between
            shift duty…
          </p>
          <p class="ran">
            <span class="bold1">Ran: </span>Typical {props.name}. I don’t see
            you in a while and already you’re causing a stir. Cat dodo, it’s
            time for a snack!
          </p>
        </div>
        <div className="next2">
          <Link to="tmeet4">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}

function Tmeet15(props) {
  return (
    <div className="sunrise">
      <div className="smalltext">
        <div className="maintext">
          <p class="remmy">
            <span class="bold1">Remmy: </span>
            {props.name}, is that you? It's Remmy!
          </p>
          <p>
            Short, squat and kindly, Remmy arrived right on time. You use
            Rummy's appearance to your advantage and make an introduction
            between he and Terran.
          </p>
          <p class="remmy">
            <span class="bold1">Remmy: </span>Please take good care of{" "}
            {props.name}. Back when I founded my first lens crafting company, I
            struggled to find an ounce of support. {props.name}'s designs really
            helped seal the deal with my first pitches. Five years later and
            I've got my hands full with my business, my sweet angel Phia and my
            starlight of a daughter Rhea. I used to be something of a shark
            before those two came into my life. Having something precious to me,
            something I cannot ever replace, changed the nature of my work. It's
            important to remember why we do what we do.
          </p>
        </div>
        <div className="next2">
          <Link to="tmeet16">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}

function Gmeet8(props) {
  return (
    <div className="sunrise">
      <div className="smalldialogue">
        <div className="dialogue">
          <p class="indent1">
            <span class="bold1">???: </span> Ahaha- And I almost left too! Well,
            turns out our little accident here was a happy one.
          </p>
          <p class="rosha">
            <span class="bold1">Rosha: </span> Hey there {props.name}. I'm
            really sorry. I sold my morning batch to this miscreant here out of
            civic duty but if you don't mind waiting a parsec, I can whip up a
            couple pastries. I saw the the whole thing from my shop window. Have
            to say, smooth moves Gale. Do you two know one another?
          </p>
          <p class="indent1">
            <span class="bold1">???: </span> We do now. Forgive my rudeness- my
            name is Gale. And you are?
          </p>
        </div>
        <p className="apples">
          <Link to="/wink1">
            <a className="textlink">Give your name with a wink!</a>
          </Link>
        </p>

        <p className="oranges">
          <Link to="/business1">
            <a className="textlink">State your name and business</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

function Business1(props) {
  return (
    <div className="sunrise">
      <div className="smalltext">
        <div className="maintext">
          <p>You address yourself as formally as you can.</p>
          <p class="gale">
            <span class="bold1">Gale: </span> Ara ara {props.name}.
          </p>
          <p>
            Gale greets you in traditional Shalean. You've never been addressed
            in the honorific tense before. It gives you a sense of pride.
          </p>
          <p class="rosha">
            <span className="bold1">Rosha: </span> {props.name} is a long time
            regular, in fact one of my first customers when I opened two years
            ago. Most of my pastries won't go out unless I've had the approval
            of my loyal taste testers.
          </p>
        </div>
        <div className="next2">
          <Link to="business2">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Gmeet9(props) {
  return (
    <div className="sunrise">
      <div className="smalltext">
        <div className="maintext">
          <p>
            Gale in one fluid motion, bounces against one of Rosha's shop
            pillars, catapults into the air toward the highest hotcake box above
            Hru which they snatch, and lands in an acrobatic flip softly with
            Hru's mysterious ability to manipulate gravity, next to you. Rosha
            whistles.{" "}
          </p>
          <p class="gale">
            <span class="bold1">Gale: </span> Duty calls. Thanks for saving me
            the trouble {props.name}. Next time, I'll spare a couple hot cakes.
            Here's a wafelrol, as promised.
          </p>
          <p>
            Gale hands you a rol with a pink napkin. Your eyes glimmer at the
            sight. You bid them farwell with a shy smile.
          </p>
        </div>
        <div className="next2">
          <Link to="gmeet10">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Roshas2(props) {
  return (
    <div className="sunrise">
      <div className="crash">
        <div className="noise">...grumble...</div>
        <div className="text4">
          <p className="rosha">
            <span className="bold1">Rosha:</span> I know that face, ha! Come in{" "}
            {props.name}. I'll get you fixed up with some more rols.
          </p>
          <p>You walk into the bakery with Rosha</p>
        </div>
        <div className="goright">
          <Link to="roshas3">
            <img src="cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function App() {
  console.log("hello app");
  const [name, setName] = React.useState("");

  return (
    // <div style={{background: this.state.color}} id="main">
    <Router>
      {/* <input onChange={(e) => setName(e.target.value)}></input> */}
      {/* {name == "Lauren" ? "" : name} */}

      <audio class="audio" controls="controls">
        <source type="audio/mp3" src="imrmix1.mp3" />
      </audio>

      <div className="App">
        <Switch>
          {/* <Route path={"/"} exact={true}>
            <div id="home" style={{ width: "100%", height: "100vh" }} />
            <div id="home" />
          </Route> */}

          {pages.map((page) => (
            <Route path={page.path} exact={true}>
              <Page body={page.body} links={page.links}></Page>
            </Route>
          ))}

          <Route path={"/sintax"} exact={true}>
            <Sintax name={name} setName={setName}></Sintax>
          </Route>

          <Route path={"/check1"} exact={true}>
            <Check1 name={name}></Check1>
          </Route>

          <Route path={"/check2"} exact={true}>
            <Check2 name={name}></Check2>
          </Route>

          <Route path={"/letter1"} exact={true}>
            <Letter1 name={name}></Letter1>
          </Route>

          <Route path={"/letter2"} exact={true}>
            <Letter2 name={name}></Letter2>
          </Route>

          <Route path={"/tmeet2a"} exact={true}>
            <Tmeet2a name={name}></Tmeet2a>
          </Route>

          <Route path={"/tmeet3"} exact={true}>
            <Tmeet3 name={name}></Tmeet3>
          </Route>
          <Route path={"/tmeet15"} exact={true}>
            <Tmeet15 name={name}></Tmeet15>
          </Route>
          <Route path={"/gmeet8"} exact={true}>
            <Gmeet8 name={name}></Gmeet8>
          </Route>
          <Route path={"/business1"} exact={true}>
            <Business1 name={name}></Business1>
          </Route>

          <Route path={"/gmeet9"} exact={true}>
            <Gmeet9 name={name}></Gmeet9>
          </Route>

          <Route path={"/roshas2"} exact={true}>
            <Roshas2 name={name}></Roshas2>
          </Route>

          {/* <Route path={"/unrolled"} exact={true}>
            <Unrolled name={name}></Unrolled>
          </Route> */}

          <Route path={"/n6"} exact={true}>
            <N6 name={name}></N6>
          </Route>

          <Route path={"/ot5"} exact={true}>
            <OT5 name={name}></OT5>
          </Route>

          <Route path={"/party4"} exact={true}>
            <Party4 name={name}></Party4>
          </Route>

          <Route path={"/mk4"} exact={true}>
            <MK4 name={name}></MK4>
          </Route>
          <Route path={"/eha12"} exact={true}>
            <Eha12 name={name}></Eha12>
          </Route>
          <Route path={"/eha16"} exact={true}>
            <Eha16 name={name}></Eha16>
          </Route>
          <Route path={"/eha17"} exact={true}>
            <Eha17 name={name}></Eha17>
          </Route>
          <Route path={"/p2c"} exact={true}>
            <P2C name={name}></P2C>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
