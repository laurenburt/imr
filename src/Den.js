import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM, { render } from "react-dom";
import "./App.css";
import { App, Page } from "./App";

export var pages3 = [
  //intro 1
  {
    path: "/den",
    body: (
      <div className="sunset">
        <div className="wrapper">
          <div className="lombardic">W</div>
          <div className="item1">elcome to Denthalassa.</div>
          <div className="item2">
            <div class="gradient-border" id="box"></div>
          </div>
          <div className="item3">A beautiful island nation.</div>
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
    path: "/endn",
    body: (
      <div className="theend">
        <div className="wrapper2">
          <div className="imr1">
            <div className="centered">
              <span className="end">eNd</span>
            </div>
          </div>
          <div className="imr2">
            <div className="centered">
              <span className="the">ad meliora</span>
            </div>
          </div>
        </div>
      </div>
    ),
    links: [],
  },
  /* Unrolled pages */
];

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
