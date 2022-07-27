import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { FetchNotes } from "./components/FetchNotes";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/fetch-notes',
    element: <FetchNotes />
  }
];

export default AppRoutes;
