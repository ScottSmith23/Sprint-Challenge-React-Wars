# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

-React JS is a JS Library used to simplify creating interactive user interfaces through a reuseable component based structure

1. What does it mean to think in react?

- the process begins with creating a mockup of the UI, then you break the ui into a component heirarchy, after that you build a static version of the ui in React, then you identify the bare minimum of state changes needed for a fully functional UI, then determine which component owns the states needed, Lastly you add inverse data flow which is when you use callbacks to pass data back up to parent components.

1. Describe state.

- state is used by a component so it can keep track of data in between renders

1. Describe props.

-props are javascript properties that can be passed from one component to another

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

-side effects handle events outside of the scope of the executed component function, side effects can be synced to state and prop changes by using the dependency array which will cause the effect to depend on the state or prop change that takes place before running.