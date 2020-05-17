# Tailwindcss-gym
A gym to develop in isolation HTML components with TailwindCSS and visualize them with Storybook

## How to run the gym
* Run `npm install` the root folder
* Run `npm run storybook` in the root folder
* Enjoy!

## How to develop components
This gym allow you to develop in isolation small, medium and large components in HTML.
It's use Storybook with a custom webpack configuration to use Tailwindcss as CSS framework. 

In the **src** folder there is a components folder. In this folder you could add and develop your custom components. 
Every components must have: 
1. A story 
2. A template 

The story is necessary for Storybook to build and run your components and show them in the well-organized dashboard. 
You could see and review in isolation every components. Every story must reference the components's template. 

I encourage you to use a story for each components or organize them in groups, for example: if you have two or more buttons you 
could load all buttons in one story.

It's up to you, but I suggest you to have one components for one story
