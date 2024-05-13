---
title: "Particle simulation"
date: "2024-05-02"
subtitle: "A simple particle simulation. There is still a lot of work to be done..."
tags:
---

# Interactions between particles and with the environment.

Computer graphics is a fascinating fild of computer science. Who would have thought that with a couple of functions and basic physics, we could create fairly accurate simulations of real-world natural systems? I'm by no means an expert in this field, but I would like to become one in the future. This is my first attempt at graphics programming. I hope you find this project useful or interesting, at least. Enjoy!


## What is this proyect about?

My goal with this project was learning OpenGL basics. I used C++ to create a particle simulation, which has three main parts:
* **Entry point:** It is the main function, which contains an *"infinite"* loop to execute each step of the simulation.
* **Particles:** Each particle is an instance of the same particle object. They have velocity, acceleration, position, color, mass, amorg others.
* **Collision handler:** Its function is detecting collisions between particles and with the environment and modifying the particle's position, velocity, and acceleration accordingly.

Additionally, I'll add gravity acceleration to make the particles fall to the ground and an elastic collision constant so the system loses kinetic force with each impact.

## Development process:

## Things to improve:

## Conclutions:
