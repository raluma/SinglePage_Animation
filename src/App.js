import React from 'react';
import './App.css';
import { Route } from "wouter"
import Home from "./pages/Home"

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route
          component={Home}
          path="/"
        />
      </section>
    </div>
  )
}
