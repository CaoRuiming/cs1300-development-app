import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';

import ITEMS, { TRACK, SEMESTER, SORT } from './constants';
import Gallery from './Gallery';
import ViewOptions from './ViewOptions';

function App() {
  const [semesterFilter, setSemesterFilter] = useState(SEMESTER.ALL);
  const [trackFilter, setTrackFilter] = useState(TRACK.ALL);
  const [sortBy, setSortBy] = useState(SORT.DEFAULT);
  const [courseGalleryItems, setCourseGalleryItems] = useState(ITEMS);
  const [cartGalleryItems, setCartGalleryItems] = useState([]);

  // update displayed courses in the course gallery upon filter or sort change
  useEffect(() => {
    // start out with copy of original full course list
    let newCourseGalleryItems = [...ITEMS];

    // apply filters
    newCourseGalleryItems = newCourseGalleryItems
      .filter(x => semesterFilter === SEMESTER.ALL || x.semester === semesterFilter)
      .filter(x => trackFilter === TRACK.ALL || x.track === trackFilter);

    // apply sorting
    if (sortBy !== SORT.DEFAULT) {
      newCourseGalleryItems = newCourseGalleryItems
        .sort((a, b) => {
          return sortBy === SORT.HOURS_ASC
            ? a.weeklyHours - b.weeklyHours
            : b.weeklyHours - a.weeklyHours
        });
    }

    // save new list of course items
    setCourseGalleryItems(newCourseGalleryItems);
  }, [
    semesterFilter,
    trackFilter,
    sortBy,
    setSemesterFilter,
    setTrackFilter,
    setSortBy,
    setCourseGalleryItems,
  ]);

  return (
    <div id="app">
      <header>
        <h1>Brown University Advanced Computer Science Courses</h1>
      </header>
      <main>
        <div id="left-section">
          <ViewOptions
            semesterFilter={semesterFilter}
            trackFilter={trackFilter}
            sortBy={sortBy}
            setSemesterFilter={setSemesterFilter}
            setTrackFilter={setTrackFilter}
            setSortBy={setSortBy}
          />
          <Gallery
            items={courseGalleryItems}
            disabledItems={cartGalleryItems}
            handleButtonClicked={id => {
              // append course card with given id to cart
              const newItem = ITEMS.find(x => x.id === id);
              setCartGalleryItems([...cartGalleryItems, newItem]);
            }}
          />
        </div>
        <div id="right-section">
          <Gallery
            items={cartGalleryItems}
            shoppingCart={true}
            handleButtonClicked={id => {
              // remove course card with given id from cart
              setCartGalleryItems([...cartGalleryItems].filter(x => x.id !== id));
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
