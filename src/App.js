import React, { useState } from "react";
import { Tab, Box } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";

import UseEffectNotes from "./components/UseEffect";
import UseStateNotes from "./components/UseState";
import UseRefNotes from "./components/UseRef";
import UseContextNotes from "./components/UseContext";
import UseMemoNotes from "./components/UseMemo";
import UseReducerNotes from "./components/UseReducer";

const TABS = [
  {
    element: Home,
    name: "Home",
  },
  {
    element: UseStateNotes,
    name: "useState",
  },
  {
    element: UseEffectNotes,
    name: "useEffect",
  },
  {
    element: UseRefNotes,
    name: "useRef",
  },
  {
    element: UseMemoNotes,
    name: "useMemo",
  },
  {
    element: UseContextNotes,
    name: "useContext",
  },
  {
    element: UseReducerNotes,
    name: "useReducer",
  },
];

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <TabContext value={selectedTab}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          onChange={(event, newValue) => setSelectedTab(newValue)}
          aria-label="Tabs"
        >
          {TABS.map((e, i) => (
            <Tab key={i} label={e.name} value={i} />
          ))}
        </TabList>
      </Box>
      {TABS.map((e, i) => (
        <TabPanel value={i}>
          <e.element />
        </TabPanel>
      ))}
    </TabContext>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
