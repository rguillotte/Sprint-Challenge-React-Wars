# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JS library for building UIs that are scalable and reusable through components. It allows you to build simple components that can be fed data which then can then be rendered onto the screen. Facebook, who built React, is a good example of what building with React can accomplish. With such a large amount of ever changing data for each user on Facebook, React allows this data to be instantly rendered through its components(e.g comment on a photo, a post on your news feed, your about section on your profile). 

1. What does it mean to think in react?

Thinking in react is the process of thinking about your apps as you build them. For example coming up with a component hierarchy, building a static version, figuring out where to add state, adding data flow, keeping your code DRY, etc.

1. Describe state.

State holds information about the component that determine what gets rendered. It is set from inside the component and can be changed.

1. Describe props.

Props which is short for "properties", are passed to a component from a parent component, and determines what gets rendered.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effec is anything that affects something outside the scope of the function being executed. In order to sync effects in a React component to state or prop changes we can use useEffect and a dependency array.
