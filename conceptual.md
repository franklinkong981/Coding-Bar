### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

The purpose of React Router is to provide an easy way of implementing client-side routing in React, where users can perform actions such as clicking on a button to be taken to a new URL without needing the server to return a response object. Client-side routing can be a more efficient way of showing/hiding content based on what actions a user has performed rather than going through a full request-response cycle via the server each time the user clicks on a link, button, etc. to be taken to a new page.

- What is a single page application?

Single page applications are apps that use client-side routing throughout the entire app. The server is only used once: To load to the initial page, usually the home page. From there, each time you go to a new URL, it's done through client-side routing. You can still bookmark different URLs and use the back button, but all the routing is handled on the client side aka the browser, the server isn't needed after the initial render of the app.

- What are some differences between client side and server side routing?
  
The main difference is that server-side routing sends a request to the server every time a new URL is loaded while client-side routing doesn't, it's all handled on the client-side aka the browser. In addition, when the user is taken to a new URL in server-side routing, the entire page is reloaded. Meanwhile in client-side routing, when you are taken to a new URL it usually loads faster because a whole page reload isn't required. In React Router, certain components are re-rendered when a new URL is reached but the whole page isn't reloaded.

- What are two ways of handling redirects with React Router? When would you use each?
  
One way of handling redirects is with the useNavigate hook. You call useNavigate() and assign that to a variable, then whenever you want to redirect, you call that variable as a function, passing in the URL you want to redirect to. Another way is to use the Navigate component, passing in a redirect URL as the "to" prop. You use useNavigate when the user is done performing an action at the current URL and is allowed to visit the current URL. Thus, when using useNavigate, the user can use the back button to go from the redirected URL back to the current URL if they wish. You use the Navigate component when the user is NOT supposed to be at the current URL (they aren't authorized to access the current URL, for example) and need to redirect the user to another URL. In these cases, the user won't be able to use the back button to go back to the current URL.

- What are two different ways to handle page-not-found user experiences using React Router? 
  
One way is to declare a Route component in the BrowserRouter component that redirects the user to another page (most often the homepage) if they try to access a route that doesn't match any of the other routes listed in the other Route components aka an invalid route. This is done by passing in an asterisk as the path prop for the Route component and then including a Navigate component as the Route's element prop, which contains the URL to redirect users to whenever they try to access an invalid URL. Another way is to create a NotFound component that usually contains a link to go back to the home page. You include a route that renders the NotFound component whenever the user tries to access an invalid URL.

- How do you grab URL parameters from within a component using React Router?
  
By using the useParams hook. First you need to create a Route component and pass in the URL parameter as a prop with the name of the URL parameters being preceded by the colon, and include the component you're going to render at that URL in the Route's element component. Then, in that component, you call useParams() and it will return to you to the URL parameters in the URL in which this component will be rendered.

- What is context in React? When would you use it?
  
Context is a tool you can use in React that would allow you to share data between components without having to pass them from component to component as props. You would want to use context when you want to share a value initialized in component A with another component F that is nested deep inside component A. Without context in this case, you would have to do prop drilling, where you pass the value initialized in component A to component B as a prop, then in component B pass this same value into component C as a prop, etc. until you pass it down from component E to component F as a prop. If components B to E don't need to use the prop other than passing it down all the way to component F, using context in this case would prevent you having to duplicate your code by keep passing the value initialized in component A all the way to component F.

- Describe some differences between class-based components and function
  components in React.

Class-based components are written using classes while functional components are written using functions. In class-based components, the props are initialized in the constructor while in functional components, the props are listed as parameters. In class-based components, JSX is returned in the render method, while in functional components the JSX is the return value of the function itself. In class-based components, each method needs to be binded to "this", in functional components we don't need to bind the functions defined inside. In class-based components, all state variables are to be defined in a single object called this.state and you must call this.setState whenever you want to update any piece of state. In function-based components, you can define each piece of state separately using the useState hook, and you can update each piece of state via a different function. In class-based components, you must use lifecycle methods whenever you want to run side effects such as componentDidMount() and componentDidUpdate(). In functional components, this can all be achieved through the useEffect hook.

- What are some of the problems that hooks were designed to solve?
  
As larger companies started to use React, they found that class-based components were limiting in that code was often required to be repeated when multiple lifecycle methods were needed for a single component and it was difficult to share code between different components. Hooks offered a way to solve these problems without being too complicated to understand and did not lead to much code cluttering like other suggested solutions like render props or higher order components.