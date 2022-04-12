import React, { useState, useMemo } from "react";
import {
  Paper,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CodeBlock } from "react-code-blocks";

const UseMemoNotes = () => {
  return (
    <Stack>
      <Paper elevation={2}>
        <Notes />
      </Paper>
      <span style={{ marginBottom: "5px" }}></span>
      <Paper elevation={2}>
        <Typography variant="h5" style={{ marginLeft: "5px" }}>
          Code Implementation
        </Typography>
        <Implementation />
        <Source />
      </Paper>
    </Stack>
  );
};

export default UseMemoNotes;

const Notes = () => {
  return (
    <p>
      <Typography variant="h5" style={{ marginLeft: "5px" }}>
        Overview
      </Typography>
      <ul>
        <li>Allows us to memoize the function </li>
        <li>
          Return the value of the slow function, and takes 2 arguments a. slow
          function and b. dependency array. <br />
          <br />
          <CodeBlock
            text={`useMemo(() => {
              return slowFunction(dependency);
            }, [dependency]);`}
            language={"javascript"}
            showLineNumbers={true}
            startingLineNumber={1}
            //theme={dracula}
          />
          <br />
        </li>
        <li>
          If no array is provided, a new value will be computed on every render.
        </li>
        <li>
          We can encapsulate the slow function that we have so that on every re
          -render it does not re - run the SLOW function
        </li>
      </ul>
    </p>
  );
};

const Implementation = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  return (
    <Box display="flex" flexDirection={"column"} margin={"5px"}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={(e) => setDark(!dark)}>Change Theme</button>
      <div
        style={{
          background: dark ? "black" : "white",
          color: dark ? "white" : "black",
        }}
      >
        {doubleNumber}
      </div>
    </Box>
  );
};

const slowFunction = (n) => {
  for (let i = 0; i <= 1000000000; i++) {}
  return n * 2;
};

const Source = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Source Code</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CodeBlock
            text={`
             const [number, setNumber] = useState(0);
             const [dark, setDark] = useState(false);
          
            const doubleNumber = slowFunction(number); //slow function is called at every re-render even when theme is changed
            return (
              
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(parseInt(e.target.value))}
                />
                <button onClick={(e) => setDark(!dark)}>Change Theme</button>
                <div
                  style={{
                    background: dark ? "black" : "white",
                    color: dark ? "white" : "black",
                  }}
                >
                  {doubleNumber}
                </div>
               
            );`}
            language={"javascript"}
            showLineNumbers={true}
            startingLineNumber={1}
            //theme={dracula}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
