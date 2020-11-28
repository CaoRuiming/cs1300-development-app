# cs1300 Development Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application itself is a simple "Shopping Cart" implementation themed around 1000-level computer science (CS) courses offered at Brown University. All course information in this repository were pulled from the Courses@Brown website and [The Critical Review](https://thecriticalreview.org/). 

The goal of this application is to help users pick and choose from a set of 1000-level CS courses at Brown while also keeping track of the estimated weekly commitment required in hours.

Users can view a set of 12 CS courses and choose which ones to add to their "course shopping cart". The cart adds together the total weekly hours of each added course and conveniently displays the number to the user.

## Project Overview

This section outlines the architecture of this project and includes the following details:
- Organization of components
- How data is passed down through components
- How user interactions can trigger changes in the state of components

### Component Organization/Hierarchy

When going into this project, I wanted my code to have a relatively flat structure to stay as concise and easy to understand.

There are 3 main components:
- **App**: the root component of the app; contains all logic involving user interaction (i.e. sorting, filtering, and adding/removing items)
- **Gallery**: a component that displays a list of courses as a collection of cards; this component is used for both displaying all avaiable courses as well as displaying all items in the user's shopping cart
- **ViewOptions**: a component that contains buttons that allow the user to filter and sort the items in the course selection gallery (not shopping cart)

The hierarchy is as follows:
- `App`
  - left section div
    - `ViewOptions`
    - `Gallery` (Course Selection)
  - right section div
    - `Gallery` (Shopping Cart)

### Flow of Data Between Components

`App` holds all of the state values and state-setting functions. The state values and setters are shown below:

```js
const [semesterFilter, setSemesterFilter] = useState(SEMESTER.ALL);
const [trackFilter, setTrackFilter] = useState(TRACK.ALL);
const [sortBy, setSortBy] = useState(SORT.DEFAULT);
const [courseGalleryItems, setCourseGalleryItems] = useState(ITEMS);
const [cartGalleryItems, setCartGalleryItems] = useState([]);
```

`App` only passes the necessary values and functions to its child components:
- `ViewOptions` receives the values and setters for both filters and sortBy as props from `App`
- `Gallery` (Course Selection) receives courseGalleryItems and a function for adding courses to the shopping cart as props from `App`
- `Gallery` (Cart Selection) receives cartGalleryItems and a function for removing courses from the shopping cart as props from `App`

### Triggering Actions Through User Interactions

UI changes are all triggered by the setter functions: setSemesterFilter, setTrackFilter, setSortBy, setCourseGalleryItems, and setCartGalleryItems.

#### `ViewOptions`
Whenever the user clicks on a filter or sort method in `ViewOptions`, the corresponding setter function is called, triggering a `useEffect` hook in `App` to filter, sort, and update courseGalleryItems. This updated list of items is then passed into the `Gallery` (Course Selection) component to update the displayed course cards.

#### `Gallery` (Course Selection)
When the user clicks on the add button for any course card, it triggers a callback function that appends that course item to cartGalleryItems in `App`, which then is sent to `Gallery` (Cart Selection) to update the items displayed in the cart.

#### `Gallery` (Cart Selection)
When the user clicks on the remove button for any item in the shopping cart, it triggers a callback function that removes that course item from cartGalleryItems in `App`, which is sent back to `Gallery` (Cart Selection) to update the items displayed in the cart.

## Available Scripts For Running the Project

In the project directory (`src`), you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

**Project will fail current tests.**

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
