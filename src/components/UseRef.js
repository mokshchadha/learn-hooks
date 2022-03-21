import React, { useState } from "react";
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

const UseRefNotes = () => {
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

      <span style={{ marginBottom: "5px" }}></span>
      <Paper>
        <Typography variant="h5" style={{ marginLeft: "5px" }}>
          Passing a function in useState() ?
        </Typography>
        <Typography style={{ marginLeft: "5px" }}>
          Yes, you can pass a function to the useState hook. Which is only ran
          <b> once </b> when the function is <i>rendered for the first time</i>
        </Typography>
        <CodeBlock
          text={`const [first, setFirst] = useState(() => {
            return 3;
          });`}
          language={"javascript"}
          showLineNumbers={true}
          startingLineNumber={1}
          //theme={dracula}
        />
      </Paper>
    </Stack>
  );
};

export default UseRefNotes;

const Notes = () => {
  return (
    <p>
      <Typography variant="h5" style={{ marginLeft: "5px" }}>
        Overview
      </Typography>
      <ul>
        <li>
          useRef returns a mutable ref object whose .current property is
          initialized to the passed argument (initialValue).
        </li>
        <li>
          The returned object will persist for the full lifetime of the
          component.
          <br />
          <br />
          <CodeBlock
            text={` const refContainer = useRef(initialValue);`}
            language={"javascript"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
          <br />
        </li>
        <li></li>
      </ul>
    </p>
  );
};

const Implementation = () => {
  const [count, setCount] = useState(0);
  return (
    <Box display="flex" flexDirection={"row"} margin={"5px"}>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <span style={{ marginRight: "15px" }}></span>
      <div>{count}</div>
      <span style={{ marginLeft: "15px" }}></span>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </Box>
  );
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
            text={`const Implementation = () => {
                const [count, setCount] = useState(0);
                return (
                  <>
                    <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                    <div>{count}</div>
                    <button onClick={() => setCount((prev) => prev - 1)}>-</button>
                  </>
                );
              };`}
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
