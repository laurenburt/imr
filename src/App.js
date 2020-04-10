import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

var pages = [
  //title
  {
    path: "/",
    title: "Title Page",
    body: (
      <div className="home">
        <div className="wrapper2">
          <div className="imr1">
            <Link to="/intro1">
              <a className="btn">imr</a>
            </Link>
            {/* <Link to="/intro1">
              <a className="btn2">
                i n {"\u00A0"} m e d i a s {"\u00A0"} r e s
              </a>
            </Link> */}
          </div>
          <div className="imr2">
            <Link to="/intro1">
              <a className="btn2">
                i n {"\u00A0"} m e d i a s {"\u00A0"} r e s
              </a>
            </Link>
          </div>
        </div>
      </div>
    ),
    links: [
      // <div className="home"></div>,
      // {
      //   path: "/intro1",
      //   name: (
      //     <div className="home">
      //       <a className="btn">imr</a>
      //       <a className="btn2">
      //         i n {"\u00A0"} m e d i a s {"\u00A0"} r e s
      //       </a>
      //     </div>
      //   )
      // }
    ],
  },
  //intro 1
  {
    path: "/intro1",
    body: (
      <div className="wrapper">
        <div className="item1">
          <span className="lombardic">E</span>
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
    ),
    links: [],
  },

  //intro 2
  {
    path: "/intro2",
    body: (
      <div className="wrapper">
        <div className="item1">
          <span className="lombardic">Y</span>
          ou were having a wonderful dream, but it’s already slipping away.
          You’re tempted to curl up and see if you can return to that bliss, but
          the waking world is calling you. Aren’t you expecting an important
          message today?
        </div>
        <div className="item2">
          <div class="gradient-border" id="box"></div>
        </div>
        <div className="item3">
          Or was there somebody you meant to call…You lift your head to turn on
          your Sintax-10. The warmth of the sunlight from the window sill softly
          lands on your face as one long vertical line.
        </div>
        <div className="item4">
          <Link to="sintax">
            <img width="100" height="125" src="cleararrow.png"></img>
          </Link>
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
      <div className="abgrid">
        <div className="text">
          There is a new mail in your inbox from a friend
        </div>

        <div className="left">
          <Link to="/check1">
            <a className="textlink"> check it now</a>
          </Link>
        </div>
        <div className="right">
          <Link to="/sleep1">
            <a className="textlink"> go back to sleep</a>
          </Link>
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
      <div className="bigtext">
        <div className="maintext">
          Nix as usual, is unfailingly tough and tender. The last time you spoke
          was before the Expo. The message leaves you awash in a familiar
          feeling, of an evening Summer wondering about a dreamy cityscape.
          Running through the streets with a yell in your chest that whatever
          hardship lie ahead, things would be alright- drifting in Nix’s voice
          was comfort. While Nix was the last person you want to know about the
          Expo incident, rather than the torture of embarrassment, you feel
          solace.
        </div>
        <div className="next2">
          <Link to="/sleep2">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  //sleep 2

  {
    path: "/sleep2",
    body: (
      <div className="abgrid">
        <div className="text">
          Just as you're about to drift off, there's a gentle tapping on the
          window. You see a phoenix heron looking at you intently.
        </div>
        <div className="left">
          <Link to="/crash2">
            <a className="textlink">ignore it and go back to sleep</a>
          </Link>
        </div>
        <div className="right">
          <Link to="/openwindow2">
            <a className="textlink">open the window</a>
          </Link>
        </div>
      </div>
    ),

    links: [],
  },

  //crash 2
  {
    path: "/crash2",
    body: (
      <div className="bird">
        <div className="birdsong">p'pippety-chee!</div>
        <div className="text4">
          You've only just drifted off when you are rudely awakened by an
          emphatic bird call. Suddenly, you jump out of bed at the presence of
          the phoenix heron which has apparently materialized through the quartz
          bay window. As the bird calmly perches upon your desk chair, you
          notice the satchel strapped across its elegant frame. The heron
          knowingly presents it to you, and you recognize the writing on the
          letter right away.
        </div>
        <div className="goright">
          <Link to="/letter2">
            <a className="textlink">read letter </a>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  //open window 2

  {
    path: "/openwindow2",
    body: (
      <div className="abgrid">
        <div className="text">
          You open the window to find a letter addressed to you in the birds
          satchel.
        </div>
        <div className="right">
          <Link to="/letter2">
            <a className="textlink">read letter</a>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  //after letter 2
  {
    path: "/afterletter2",
    body: (
      <div className="bigtext">
        <div className="maintext">
          You feel flushed, a wave of heat stampedes through your body with Em’s
          star-like eagerness emanating from their invitation. Any tiredness you
          felt earlier was scorched away. *Yawn* Well, almost. The last time you
          saw Em was at the Port of Praise Festival…Em really did it! The
          excitement you feel is immediately cut by the loud whirring of the
          terrace mowers below.
        </div>
        <div className="next2">
          <Link to="/breakfast">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
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
      <div className="abgrid">
        <div className="text">
          Just as you're about to drift off, there's a gentle tapping on the
          window. You see a phoenix heron looking at you intently.
        </div>
        <div className="left">
          <Link to="/crash1">
            <a className="textlink">ignore it and go back to sleep</a>
          </Link>
        </div>
        <div className="right">
          <Link to="/openwindow1">
            <a className="textlink">open the window</a>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/crash1",
    body: (
      <div className="bird">
        <div className="birdsong">p'pippety-chee!</div>
        <div className="text4">
          You've only just drifted off when you are rudely awakened by an
          emphatic bird call. Suddenly, you jump out of bed at the presence of
          the phoenix heron which has apparently materialized through the quartz
          bay window. As the bird calmly perches upon your desk chair, you
          notice the satchel strapped across its elegant frame. The heron
          knowingly presents it to you, and you recognize the writing on the
          letter right away.
        </div>
        <div className="goright">
          <Link to="/letter1">
            <a className="textlink">read letter </a>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  //open window 1

  {
    path: "/openwindow1",
    body: (
      <div className="abgrid">
        <div className="text">
          You open the window to find a letter addressed to you in the birds
          satchel.
        </div>
        <div className="right">
          <Link to="/letter1">
            <a className="textlink">read letter</a>
          </Link>
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
      <div className="bigtext">
        <div className="maintext">
          You feel flushed, a wave of heat stampedes through your body with Em’s
          star-like eagerness emanating from their invitation. Any tiredness you
          felt earlier was scorched away. *Yawn* Well, almost. The last time you
          saw Em was at the Port of Praise Festival…Em really did it! The
          excitement you feel is immediately cut by the loud whirring of the
          terrace mowers below. Your mail notification chimes again...
        </div>
        <div className="next2">
          <Link to="/check2">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
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
      <div className="bigtext">
        <div className="maintext">
          Nix as usual, is unfailingly tough and tender. The last time you spoke
          was before the Expo. The message leaves you awash in a familiar
          feeling, of an evening Summer wondering about a dreamy cityscape.
          Running through the streets with a yell in your chest that whatever
          hardship lie ahead, things would be alright- drifting in Nix’s voice
          was comfort. While Nix was the last person you want to know about the
          Expo incident, rather than the torture of embarrassment, you feel
          solace.
        </div>
        <div className="next2">
          <Link to="/breakfast">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  //BREAKFAST!
  {
    path: "/breakfast",
    body: (
      <div className="abgrid">
        <div className="text">
          You haven’t gotten up yet and already there are important decisions to
          make. *stomach grumbles* The most pressing is what to eat for
          breakfast. Thinking about traveling set your appetite in motion. The
          dishes from last night’s dinner are waiting for you.
          <br></br>
          <br></br>
          You could make something at home -your eyes glaze over staring at the
          kitchenette- it looks like a terrifically long distance all the way
          from your bed...or...you could just treat yourself to a sweet
          breakfast at your favorite cafe.
          <br></br>
          <br></br>
        </div>
        <div className="left">
          <Link to="/honeyjacks">
            <a className="textlink">honeyjax are irresistable</a>
          </Link>
        </div>
        <div className="right">
          <Link to="/wafelrols">
            <a className="textlink">wafelrols sound divine</a>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  //************* HONEYJACKS **************
  // walk to hinks
  {
    path: "/honeyjacks",
    body: (
      <div className="bigtext">
        <div className="maintext">
          You manage to get out of bed- as soon as your feet touch the floor you
          undergo a metamorphosis- no longer a hinter sloth, you’re a kirlian
          shadow chaser ready to dash and dine. You glide toward the
          kitchenette, and say “shower if you will”. The kitchenette comports
          itself into a bathroom. It took three era’s to implement but when the
          earth zone’s first biotic plant shelters began to root, it meant the
          advent of transforming modular homes. Your favorite music begins to
          play as water gushes from the ceiling. After a much needed shower, you
          say “wardrobe if you will” and what was once a bathroom area begins to
          shift into a modest sized closet space. Layers! The phoenix herons
          heralded layer season. At last- you’ve been waiting what seems like
          eons to don your favorite jacket.
          <br></br>
          <br></br>
          You’re afoot. The walk to Hink’s diner is pleasant... It’s noticeably
          chilly outside. Vapors from your breath uncoil as you walk along the
          canal pathway. You're lucky to have found a room in the south ward.
          Your complex lays two blocks from the entrance to Naer park, a
          sprawling centrefold of a biome integrated into Shale city. While most
          of the city’s building structures are living innovations, deep within
          residents of Naer park live in the canopy of the great Naer trees,
          stewards of the local life forms. You glance away from the synaptic
          reader in your eye lens to take in the flower gardens, fields and Naer
          lake. The phoenix herons’ amber nests floating atop the marsh at the
          edge of the lake would glow in the evening. With the flight of the
          ‘pheorons’, the nests were now a feast for urchin otters, shole’s,
          umbran grits, and Naer vixens.
          <br></br>
          <br></br>*stomach grumbles* Your appreciation for life quickly turns
          to indignant envy. ‘Oh goddess, so hungry!’ Before you pop a vein, you
          spot an empty canal covered station stop nearby and duck into it.
          ‘Oracle, if you will, active mode.’ Your octic clothing changes form,
          the layered outfit’s cells shift into athletic wear, and your footwear
          adjusts for optimal first meal chasing. Taking a breath, you start
          jogging to Hink’s, passing by neighborhood vendors, school children in
          uniforms, city officials guiding tourists, buskers, Gangreen’s on
          stoop’s planning their next misadventure. You see Hink’s yellow
          signage six buildings away, a welcome beacon. Starting to dash, your
          eyes fixated and nose glued to the wafting smell of Hink’s honey
          hocks. You're two buildings away, Finally!
        </div>

        <div className="next2">
          <Link to="/tmeet">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },
  // t meet
  {
    path: "/tmeet",
    body: (
      <div className="crash">
        <div className="noise">*CRASH*</div>
        <div className="text3">
          You run into something as solid as space concrete. Your breath leaves
          your body as you fall to your back.
          <br></br>
          <br></br>
          <div class="indent1">
            <span class="bold1">???:</span> Guah! My suit... the honey holes!
            Hey, do you need help?{" "}
          </div>
          <br></br>
          *ungh* You’re on the ground seeing stars. Your sight comes back, and
          you look up and see someone doused in Hink’s honey hole’s. Custard,
          glaze, jelly filling and pieces of honey hole pastry are splattered
          all over this towering figures tailor tight emerald trim suited body,
          their face masked in pastry cream. A comical sight except for the
          terrifying glare coming from the two eye holes on ‘cream face’.
        </div>
        <div className="top">
          <Link to="/tmeet2a">
            <a className="textlink">
              Sorry I ran into you! Let me help you clean up and get you some
              fresh honey holes!
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
    ),
    links: [],
  },
  // t meet 2a

  // t meet 2b

  {
    path: "/tmeet2b",
    body: (
      <div className="bigtext">
        <div className="maintext">
          They appear to be amused. The glare from Creamface softens into a
          gaze. Are you being stared at? It’s hard to tell. Hink’s door entrance
          bell jingles as a spry elderly person wearing a marigold apron steps
          out.
          <br></br>
          <br></br>
          <div class="ran">
            <span class="bold1">Ran: </span> What a collision that was! Those
            poor honey holes. How about you two come inside and I’ll fix you up
            and a fresh batch
          </div>
        </div>
        <div className="next2">
          <Link to="/tmeet3">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  // t meet 3

  //************* WAFELROLS **************
  // walk to hinks
  {
    path: "/wafelrols",
    body: (
      <div className="bigtext">
        <div className="maintext">
          Wafel rolls, your favorite!
          <br></br>
          You begin to set at a breakneck dash hoping you are early in the
          queue. Lines are typical at Rosha's Hot Shot Hotcake Shop. For those
          in the 5th ward, when Rosha's doors open, it signals the beginning of
          the neighborhood's enterprises. As you round the corner of a building
          you duck under a low hanging lattice system.
          <br></br>
          You almost collide into a young Kobo pulling a fruit merchant's
          produce.
          <br></br>
          As you weave your way through the morning commotion you almost nick
          yourself running through circus row, an alley famous for its resident
          performers, their animal compatriots, self-avowed freaks and roving
          mystics. The smell of spices and citrus entice you.
          <br></br>
          {/* <div class="indent1">
            <span class="bold1">???:</span> Look out!
          </div> */}
          "Look out!"
          <br></br>A juggler's throwing knife grazes your cheek. Without
          stopping you apologize, somewhat embarassed, and continue the duck and
          cover dance through the alley.
          <br></br>
          So close to Rosha's, you turn to look behind you, the runner's high
          now rushing from your toes to the base of your neck. You haven't felt
          this excited in a long while...
          <br></br>
          You look ahead and before you can yell, you are about to crash into
          someone holding a tower of Hotcake boxes.
          <br></br>
          You take a tumble forward, your luck having run out.
        </div>
        <div className="next2">
          <Link to="/gmeet">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet",
    body: (
      <div className="crash">
        <div className="noise">~fwip~</div>
        <div className="text3">
          Eyes closed bracing for impact, your sense of suspense fades- somehow
          you aren't dead.
          <br></br>
          {/* <br></br> */}
          <div class="indent1">
            <span class="bold1">???:</span> It's a good day for a stroll, though
            I'd have chosen a wider street to try those slick tricks of yours.
          </div>
          A mellow voice registers, and as the shock of the crash subsides, you
          notice the steely and soft grip of a hand at your waist-
          {/* <br></br> */}
          <br></br>
          <div class="indent1">
            <span class="bold1">???:</span> Let me guess, you thoughts if you
            ran to Rosha's you'd beat the morning rush? Sorry- you might be
            waiting a little longer. I just bought all of the pastries here.
            <br></br>
            {/* <br></br> */}
          </div>
          OK, now you open your eyes.
        </div>
        <br></br>
        <br></br>
        <div className="top">
          <Link to="/gmeet2a">
            <a className="textlink">
              'Who in Shale needs that many wafel rolls!?'
            </a>
          </Link>
        </div>
        <div className="bot">
          <Link to="/gmeet2b">
            <a className="textlink">
              "Any chance I can buy a wafel roll from you?"
            </a>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet2a",
    body: (
      <div className="bigtext">
        <div className="maintext">
          Before you put this stranger on blast, your jaw slacks, your eyes in a
          furious haze crystallize into clear focus- the person holding you has
          their head so close to yours...
          <br></br>
          Long tufts of hair roll down the sides of an olive tan face.
          <br></br>
          For a moment, you are startled- an impish smile, sea green eyes, and
          the smell of an apple orchard on the outer rim of Shale's farm zone
          causes you to blush.
          <br></br>
          <br></br>
          <div className="indent1">
            <span className="bold1">???:</span> Hmm, doesn't look like you're
            hurt. You just came from down wind the circus alley didn't you? I'd
            guess that you also live near Naer Park...
          </div>
          <br></br>
          Gale smirks at the look of bewilderment on your face.
          <br></br>
          <br></br>
          <div className="indent1">
            <span className="bold1">???:</span> I pay attention-that's all
          </div>
          <br></br>
          The stranger, head still close, helps you upright, pats you on your
          shoulder and puts a hand out with a devilish smile.
        </div>
        <div className="next2">
          <Link to="/strangerdanger">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/gmeet2b",
    body: (
      <div className="bigtext">
        <div className="maintext">
          Before you can summon the words to pitch a wafel roll sale, your eyes
          in a mystified haze crystallize into clear focus- the person holding
          you has their head so close to yours...
          <br></br>
          Long tufts of hair roll down the sides of an olive tan face.
          <br></br>
          For a moment, you are startled- an impish smile, sea green eyes, and
          the smell of an apple orchard on the outer rim of Shale's farm zone
          stirs wonder in you.
          <br></br>
          <br></br>
          <div className="indent1">
            <span className="bold1">???:</span> Hmm, doesn't look like you're
            hurt. You just came from down wind the circus alley didn't you? I'd
            guess that you also live near Naer Park...
          </div>
          <br></br>
          Gale smirks at the look of bewilderment on your face.
          <br></br>
          <br></br>
          <div className="indent1">
            <span className="bold1">???:</span> I pay attention-that's all
          </div>
          <br></br>
          The stranger, head still close, helps you upright, pats you on your
          shoulder and puts a hand out with a devilish smile.
        </div>
        <div className="next2">
          <Link to="/strangerdanger">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/strangerdanger",
    body: (
      <div className="bigtext">
        <div className="maintext">
          Red flags. Stranger Danger! No one in Shale is this cool. The stranger
          lifts their fingers in gesture toward you.
          <br></br>
          <br></br>
          <div className="indent1">
            <span className="bold1">???:</span> Sorry to say, but I'm a little
            short on day to enjoy your company. You still want a wafel roll
            right?
            <br></br>
            <br></br>
          </div>
          The danger stranger before you dusts their bowler cap from the street
          floor before flicking it neatly on their head like a trickster's coin
          bet flip against the gods. It registers that they are wearing a long
          platinum grey blue ombre coat-
          <br></br>
          You get the sense that they...
          <br></br>
          At the mention of wafel rolls, you wonder where the Rosha boxes you
          almost crashed into are...Stranger Danger whistles
          <br></br>
          <br></br>
          <div className="indent1">
            <span className="bold1">???:</span> Hru, bring 'em down won't you?
          </div>
          <br></br>
          You hear whirring and feel a light breeze as a shadow descends from
          above.
          <br></br>
          <br></br>
          <div className="hru">
            <span className="bold1">Hru:</span> Hrmm Hrmm- all boxes accounted
            for CO.
          </div>
          <br></br>A Vrnyan automoton hovers above the strangers' shoulder,
          hotboxes in one impossibly high and neat stack floats above its
          globular body in an exlamation point, as if to convey that the person
          beside the machine indeed is a living warning sign.
          <br></br>
          You recall your mid level arcstories. Vrnyan technology though
          ancient, is highly advanced- many of the modern innovations made
          throughout the world stem from the inventiveness of the Vrynyan's.
          Whatever became of their civilization, their legacy continued in forms
          like the automoton before you whose pattern design, while supremely
          functional, also looked rather cute...
        </div>
        <div className="next2">
          <Link to="/gmeet3">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  {
    path: "/wink",
    body: (
      <div className="bigtext">
        <div className="maintext">
          You address yourself warmly and with a brief moment of eye contact,
          you wink at Gale. Gale's frictionless demeanor suddenly and subtly
          shifts. They turn their head, body slightly stiffened, and cough.
          <br></br>
          <br></br>
          <div className="rosha">
            <span className="bold1">Rosha:</span> You alright Gale? I have some
            lozenges in the shop if you like
          </div>
          <br></br>
          <div className="gale">
            <span className="bold1">Gale:</span> No, no...Hru blew in a bit of
            dust my way, I'm fine
          </div>
          <br></br>
          Gale lifts their head and returns another wink.
          <br></br>
          This time you blush. Hru hovers between you and Gale with a whisper.
          <br></br>
          <br></br>
          <div className="hru">
            <span className="bold1">Hru:</span> Hrmm, Hrmm. CO- I received a
            message from SW task force. The entire team is starving. We will be
            placed on filing duty if we don't arrive back to HQ soon.
          </div>
        </div>
        <div className="next2">
          <Link to="gmeet4">
            <img src="/cleararrow.png" width="100" height="125"></img>
          </Link>
        </div>
      </div>
    ),
    links: [],
  },

  // functions
];
function Page(props) {
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
          <a className="textlink">sign in </a>
        </Link>
      </div>
    </div>
  );
}
function Check1(props) {
  return (
    <div className="bigtext">
      <div className="maintext">
        <br></br>
        “Morning {props.name} Are you well?” A voice as crisp as fresh crystal
        linen weathered by years of smokes and long nights poured from the
        speaker. It was Nix. “I heard a little about what went down at the Expo-
        I hope you’re alright... I called to share some news with you and
        thought it would be great to do so in person. I know I’ve mentioned to
        you briefly about my homeland Denthalassa. You were excited to listen to
        my shieldfish riding stories and took a liking to the seaflower snacks
        I’d bring to meetings. Rather than telling you more about my home, I
        thought I’d show you. So how about it? Will you come visit? I’ve
        reserved a ferry seat for you. The waters here are warm, every block has
        its own healing pool and there are plenty of beaches to relax in while
        eating freshly grilled egg pearls. Though it’s business, there’s nothing
        wrong with mixing in a little pleasure, no? Listen , There’s something
        else I wa- “Hey boss, the magnus is here to see you-” - Another voice
        cuts in. Seems like Nix was calling from their office. First to arrive,
        last to leave- some things never change... “Just when I was getting to
        the gull goose. Let’s pick up where we left off in Den. See you soon!
        And, ...take it easy, but not too easy okay?”
      </div>

      <div className="next2">
        <Link to="/aftermail1">
          <img src="/cleararrow.png" width="100" height="125"></img>
        </Link>
      </div>
    </div>
  );
}

function Check2(props) {
  return (
    <div className="bigtext">
      <div className="maintext">
        <br></br>
        “Morning {props.name} Are you well?” A voice as crisp as fresh crystal
        linen weathered by years of smokes and long nights poured from the
        speaker. It was Nix. “I heard a little about what went down at the Expo-
        I hope you’re alright... I called to share some news with you and
        thought it would be great to do so in person. I know I’ve mentioned to
        you briefly about my homeland Denthalassa. You were excited to listen to
        my shieldfish riding stories and took a liking to the seaflower snacks
        I’d bring to meetings. Rather than telling you more about my home, I
        thought I’d show you. So how about it? Will you come visit? I’ve
        reserved a ferry seat for you. The waters here are warm, every block has
        its own healing pool and there are plenty of beaches to relax in while
        eating freshly grilled egg pearls. Though it’s business, there’s nothing
        wrong with mixing in a little pleasure, no? Listen , There’s something
        else I wa- “Hey boss, the magnus is here to see you-” - Another voice
        cuts in. Seems like Nix was calling from their office. First to arrive,
        last to leave- some things never change... “Just when I was getting to
        the gull goose. Let’s pick up where we left off in Den. See you soon!
        And, ...take it easy, but not too easy okay?”
      </div>

      <div className="next2">
        <Link to="/aftermail2">
          <img src="/cleararrow.png" width="100" height="125"></img>
        </Link>
      </div>
    </div>
  );
}

function Letter1(props) {
  return (
    <div className="letter">
      <div className="main">
        {props.name}, Hey it’s been a while, hasn’t it?
        <br></br>
        <br></br>I hope you got to catch the phoenix heron’s migration from your
        place, though I’m pretty certain you slept through it all. It’s a once
        in a lifetime event but knowing you, you’d be late to your own funeral.
        Remember when we used to sneak out during lunch and explore the Angra
        forest? You’d always miss out on spotting the wild dew runners, heh. The
        other day I saw a baked panna cotta shaped like a bouquet of feather
        ferns. It reminded me of the first day I met you…do you remember?
        <br></br>
        <br></br>I was sleeping underneath a Throne tree when your hydro disc
        bopped me. One of your teammates had the bright idea of playing in the
        abandoned field- I was about to unload my fury on the entire team but
        you arrived right on time. I never met someone who knew so many words
        synonymous with sorry. You gave me your feather fern pin as a
        token...and then I socked you! Those were the days, weren’t they?
        <br></br>
        <br></br>
        Anyway, I wanted to invite you out to my new place!
        <br></br>
        <br></br>
        You teased that I’d be living out of my van the rest of my life (almost
        right) but surprise surprise, I ran into a little bit of luck traveling
        through the outer zones. This isn’t going to any old housewarming- this
        is going to be a Houseflaming! Please say you’ll come! No worries about
        bringing anything, I’ve got everything taken care of. All you’ve got to
        do is say “yes!” I’ve attached train tickets if you were concerned about
        flying. Air traffic has been hectic around here lately.
        <br></br>
        <br></br>
        Take care old friend and see you soon.
        <br></br>
        <br></br>
        season's glow,
        <br></br>
        <br></br>
        Ember
      </div>
      <div className="next">
        <Link to="/afterletter1">
          <img src="/cleararrow.png" width="100" height="125"></img>
        </Link>
      </div>
    </div>
  );
}

function Letter2(props) {
  return (
    <div className="letter">
      <div className="main">
        {props.name}, Hey it’s been a while, hasn’t it?
        <br></br>
        <br></br>I hope you got to catch the phoenix heron’s migration from your
        place, though I’m pretty certain you slept through it all. It’s a once
        in a lifetime event but knowing you, you’d be late to your own funeral.
        Remember when we used to sneak out during lunch and explore the Angra
        forest? You’d always miss out on spotting the wild dew runners, heh. The
        other day I saw a baked panna cotta shaped like a bouquet of feather
        ferns. It reminded me of the first day I met you…do you remember?
        <br></br>
        <br></br>I was sleeping underneath a Throne tree when your hydro disc
        bopped me. One of your teammates had the bright idea of playing in the
        abandoned field- I was about to unload my fury on the entire team but
        you arrived right on time. I never met someone who knew so many words
        synonymous with sorry. You gave me your feather fern pin as a
        token...and then I socked you! Those were the days, weren’t they?
        <br></br>
        <br></br>
        Anyway, I wanted to invite you out to my new place!
        <br></br>
        <br></br>
        You teased that I’d be living out of my van the rest of my life (almost
        right) but surprise surprise, I ran into a little bit of luck traveling
        through the outer zones. This isn’t going to any old housewarming- this
        is going to be a Houseflaming! Please say you’ll come! No worries about
        bringing anything, I’ve got everything taken care of. All you’ve got to
        do is say “yes!” I’ve attached train tickets if you were concerned about
        flying. Air traffic has been hectic around here lately.
        <br></br>
        <br></br>
        Take care old friend and see you soon.
        <br></br>
        <br></br>
        season's glow,
        <br></br>
        <br></br>
        Ember
      </div>
      <div className="next">
        <Link to="/afterletter2">
          <img src="/cleararrow.png" width="100" height="125"></img>
        </Link>
      </div>
    </div>
  );
}

function Tmeet2a(props) {
  return (
    <div className="bigtext">
      <div className="maintext">
        Hink’s door entrance bell jingles as a spry elderly person wearing a
        marigold apron steps out.
        <br></br>
        <br></br>
        <div class="ran">
          <span class="bold1">Ran: </span>I saw the commotion- please forgive
          the young bawn here. {props.name} is known for having the world’s
          worst case of tunnel vision!
        </div>
        <br></br>
        The glare from Creamface softens into a gaze. Are you being stared at?
        It’s hard to tell.
      </div>
      <div className="next2">
        <Link to="/tmeet3">
          <img src="/cleararrow.png" width="100" height="125"></img>
        </Link>
      </div>
    </div>
  );
}
function Tmeet3(props) {
  return (
    <div className="bigdialogue">
      <div className="dialogue">
        You get up and help pick up the honey hole’s scattered about. Hink’s is
        quiet today. Usually, there is hustle and bustle but today it’s near
        empty...star light floods from the window onto the checker floor of the
        pastry section. You peak into the diner wing and there are the usual
        suspects. Mags reading her payper’s near the window, a sage pipette in
        hand, Charlee and Tanu exchanging banter between shift duty…
        <br></br>
        <br></br>
        <div class="ran">
          <span class="bold1">Ran: </span>Typical {props.name}. I don’t see you
          in while’s and already you’re causing a stir. Cat dodo, it’s time for
          a snack!
        </div>
        <br></br>
        Elder Ran whistles, and a cleaner dog pads from around the counter to
        the window corner where Creamface is standing. Cat paws at their shoes
        then bows its head in a gesture.
        <br></br>
        <br></br>
        <div class="indent1">
          <span class="bold1"> ???: </span> A cleaner dog...I thought they were
          zero’d...
        </div>
        <br></br>
        <div class="ran">
          <span class="bold1">Ran: </span>Cat, like my old man Hink, is
          considered a national treasure. He’s 300 cycles old and still has
          gusto
        </div>
        <br></br>
        Figures the codger would work a sales pitch in somewhere... For all the
        hustling maneuvers elder Ran tells the truth, well mostly.
        <br></br>
        <br></br>
        <div class="indent1">
          <span class="bold1"> ???: </span> Before my grandparents were born,
          dogs were genetically manufactured to serve as man’s best friend AND
          service. There were actor dogs, guard dogs, guide dogs, circus clown
          dogs, space engineer dogs, chef dogs, poet dogs, metal band lead
          singer dogs, art critic dogs- there were even dog dogs!
        </div>
        <br></br>
        You and Ran both raise your eyebrows. Until now, Creamface barely spoke.
        <br></br>
        <br></br>
        <div class="ran">
          <span class="bold1">Ran: </span> Seems like someone knows their dogs.
        </div>
        <br></br>
        <div class="indent1">
          <span class="bold1"> ???: </span> I used to read dog picture-pedias
          when I was little. I can’t believe I’m seeing one.
        </div>
        <br></br>
        <div class="ran">
          <span class="bold1">Ran: </span>Is that so? I wouldn’t have marked you
          for a dog lover. You see, Cat is waiting for permission. Would you
          like him to clean you?
        </div>
        <br></br>
        <div class="indent1">
          <span class="bold1"> ???: </span>Would I!? Cat, please clean me, if
          you will
        </div>
        <br></br>
        They knelt in ceremonial fashion before Cat’s nose, creamed head bowed
        toward the canine. With a merry woof, Cat’s pale pink tongue set to
        work, extending, licking and cleaning in lightning succession. Before
        the genetic ban, cleaner dogs were genetically modified to have tongues
        that could extend to great lengths, purify any surface it touched, and
        bodies that were able to process any substance, even high grade
        pollutants. Vanguards of public health, they aided in cleansing toxic
        zones. Their saliva was even said to cure cancers. In a matter of
        moments, Cat’s work was finished. The old dog yipped to signal
        completion and scampered happily back to rest in his bedding below the
        countertop, having had more treats than he was expecting. ‘Creamface’
        rose from his bow. The emerald suit that was stained was now spotless.
        In fact it seemed to shine with a minty luster. Statuesque, as if the
        suit was carved on them, you notice the chiseled and robust features of
        your new acquaintance. They turn toward you, jade iris eyes, a kind
        smile, face carved by the goddesses themselves and all.
        <br></br>
        <br></br>
        <div class="indent1">
          <span class="bold1"> ???: </span>Uhhh, is there something still on my
          face?
        </div>
        <br></br>
        You feel the warmth of your cheeks flushed.
        <br></br>
        <br></br>
      </div>
      <div className="apples">
        <Link to="/number">
          <a className="textlink">No, I was admiring the view...</a>
        </Link>
      </div>
      <br></br>
      <br></br>
      <div className="oranges">
        <Link to="/pawwork">
          <a className="textlink">I'm amazed at Cat's paw work!</a>
        </Link>
      </div>
    </div>
  );
}

function Gmeet3(props) {
  return (
    <div className="bigdialogue">
      <div className="dialogue">
        Before you can claim your wafelrol, you hear a short and loud beep.
        Standing in front of the hot cake shop is a waifish woman with short
        parted hair and a demure expression on her face- she holds out a
        cashiers pad in one hand toward the stranger.
        <br></br>
        <br></br>
        <div class="rosha">
          <span class="bold1">Rosha: </span> You forgot to sign your key receipt
          Gale.
        </div>
        <br></br>
        <div class="gale">
          <span class="bold1">Gale: </span> Ahaha- And I almost left too! Well,
          turns out our little accident here was a happy one.
        </div>
        <br></br>
        <div class="rosha">
          <span class="bold1">Rosha: </span> Hey there {props.name}. I'm really
          sorry. I sold my morning batch to this miscreant here out of civic
          duty but if you don't mind waiting a parsec, I can whip up a couple
          pastries. I saw the the whole thing from my shop window. Have to say,
          smooth moves Gale. Do you two know one another?
        </div>
        <br></br>
        <div class="gale">
          <span class="bold1">Gale: </span> We do now. Forgive my rudeness- my
          name is Gale. And you are?
        </div>
        <br></br>
        <br></br>
      </div>
      <div className="apples">
        <Link to="/wink">
          <a className="textlink">Give your name with a wink!</a>
        </Link>
      </div>
      <br></br>
      <br></br>
      <div className="oranges">
        <Link to="/business">
          <a className="textlink">State your name and business</a>
        </Link>
      </div>
    </div>
  );
}

function Business(props) {
  return (
    <div className="bigtext">
      <div className="maintext">
        You address yourself as formally as you can.
        <br></br>
        <br></br>
        <div class="gale">
          <span class="bold1">Gale: </span> Ara ara {props.name}.
        </div>
        <br></br>
        Gale greets you in traditional Shalean. You've never been addressed as
        an adult before. It gives you a sense of pride.
        <br></br>
        <br></br>
        <div class="rosha">
          <span class="bold1">Rosha: </span> {props.name} is a long time
          regular, in fact one of my first customers when I opened two years
          ago. Most of my pastries won't go out unless I've had the approval of
          my loyal taste testers.
        </div>
        <br></br>
        Rosha looks at you warmly. Hru hovers between you, Rosha, and Gale.
        Ignoring you and Rosha, Hru quietly speaks to Gale.
        <br></br>
        <br></br>
        <div className="hru">
          <span className="bold1">Hru:</span> Hrmm, Hrmm. CO- I received a
          message from SW task force. The entire team is starving. We will be
          placed on filing duty if we don't arrive back to HQ soon.
        </div>
      </div>
      <div className="next2">
        <Link to="/gmeet4">
          <img src="/cleararrow.png" width="100" height="125"></img>
        </Link>
      </div>
    </div>
  );
}

function Gmeet4(props) {
  return (
    <div className="bigtext">
      <div className="maintext">
        Gale in one fluid motion, bounces against one of Rosha's shop pillars,
        catapults into the air toward the highest hotcake box above Hru which
        they snatch, and lands in an acrobatic flip softly with Hru's mysterious
        ability to manipulate gravity, next to you. Rosha whistles. <br></br>
        <br></br>
        <div class="gale">
          <span class="bold1">Gale: </span> Duty calls. Thanks for saving me the
          trouble {props.name}. Next time, I'll spare a couple hot cakes. Here's
          a wafel roll, as promised.
        </div>
        <br></br>
        Gale hands you a wafel with a pink napkin. Your eyes glimmer at the
        sight. You bid them farwell with a shy smile.
        <br></br>
        <br></br>
        <div class="gale">
          <span class="bold1">Gale: </span> See you around I hope.
        </div>
        <br></br>
        Gale beaming, nods, turns, and walks a couple steps forward. With a
        flashy motion, an alloy disc drops from out of Gale's trench coat's left
        sleeve and into their hand. Gale drops the disc and kicks it. The disc
        expands and hovers. They hop on and begin ascending above the buildings
        with Hru following in tow. You hear Gale faintly in the distance.
        <br></br>
        <br></br>
        <div className="gale">
          <span className="bold1">Gale:</span> I've got the worst luck Hru
        </div>
      </div>
      <div className="next2">
        <Link to="/roshas">
          <img src="/cleararrow.png" width="100" height="125"></img>
        </Link>
      </div>
    </div>
  );
}

function Roshas(props) {
  return (
    <div className="bird">
      <div className="birdsong">...grumble~grumble...</div>
      <div className="text4">
        Your stomach riots in high alert. As the adrenaline from the encounter
        with Gale leaves you, you almost keel over from your hunger pangs. You
        hold your prize wafel roll lovingly and devour it on the spot. As you
        bite into the roll the layered flavors of moon wafel, crunchy citric
        wafer, rich Kobo cream, hot cake, kleechi jelly and salted caramel burst
        in your mouth. You forget your troubles for a moment, and as good things
        most often do, your wafel roll ended as quickly as it began...
        Surprising no one, you crave more.
        <br></br>
        <br></br>
        <div className="rosha">
          <span className="bold1">Rosha:</span> I know that face, haha! Come in{" "}
          {props.name}. I'll get you fixed up with some more rols.
        </div>
        <br></br>
        You walk into the bakery with Rosha
        <br></br>
        <br></br>
        <div className="rosha">
          <span className="bold1">Rosha:</span> Gale there works for the civic
          enterprise. I got a rush order for some visiting dignitary from South
          Wards branch officer right before I opened. Almost said no to the
          government, ha! Lucky for them, Gale is incredibly persuasive. I'm
          pretty sure that one can convince day its night.
        </div>
        <br></br>
        You converse with Rosha at length over Angra tea while she kneads and
        works on a fresh set of rolls. Her partner Mik, assistant siblings Camas
        and Shrum's content shuffles and laughter punctuate the back kitchen
        ongoings. After some time, you bid Rosha farewell, a bag of fresh rolls
        in hand- this time you walk back the way you came.
      </div>
      <div className="goright">
        <Link to="/afterroshas">
          <img src="/cleararrow.png" width="100" height="125"></img>
        </Link>
      </div>
    </div>
  );
}

function App() {
  console.log("hello app");
  const [name, setName] = React.useState("");

  return (
    <Router>
      {/* <input onChange={(e) => setName(e.target.value)}></input> */}
      {/* {name == "Lauren" ? "great god" : name} */}

      <div className="App">
        <Switch>
          {/* <Route path={"/"} exact={true}>
            <div id="title" style={{ width: "100%", height: "100vh" }} />
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
          <Route path={"/gmeet3"} exact={true}>
            <Gmeet3 name={name}></Gmeet3>
          </Route>
          <Route path={"/business"} exact={true}>
            <Business name={name}></Business>
          </Route>

          <Route path={"/gmeet4"} exact={true}>
            <Gmeet4 name={name}></Gmeet4>
          </Route>

          <Route path={"/roshas"} exact={true}>
            <Roshas name={name}></Roshas>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
