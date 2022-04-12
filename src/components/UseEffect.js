import React, { useEffect, useState } from "react";
import {
  Paper,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CodeBlock } from "react-code-blocks";

const UseEffectNotes = () => {
  return (
    <div>
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
          <Typography
            variant="h5"
            style={{ marginLeft: "5px", marginTop: "5px" }}
          >
            Clean up function in useEffect() ?
          </Typography>
          <Typography style={{ marginLeft: "5px" }}>
            The <b>Clean Up</b>
          </Typography>
          <Typography>
            <i style={{ marginLeft: "5px", color: "grey" }}>
              React performs the cleanup when the component unmounts. However,
              as we learned earlier, effects run for every render and not just
              once. <br />
              This is why React also cleans up effects from the previous render
              before running the effects next time.
            </i>
          </Typography>
          <Typography>
            A good example of needing a clean up can be unmounting the event
            listeners The given below code attaches a listener and then as a
            cleanup removes it.
          </Typography>
          <ImplementationP2 />
          <Source2 />
        </Paper>
      </Stack>
    </div>
  );
};

export default UseEffectNotes;

const Notes = () => {
  return (
    <p>
      <Typography variant="h5" style={{ marginLeft: "5px" }}>
        Overview
      </Typography>
      <ul>
        <li>
          <i>
            <a
              href={"https://reactjs.org/docs/hooks-effect.html"}
              target={"_blank"}
              rel="noreferrer"
            >
              Source :- https://reactjs.org/docs/hooks-effect.html
            </a>
          </i>
        </li>
        <li>
          The <i>Effect Hook</i> lets you perform <b> side effects </b> in
          function components
        </li>
        <li>
          useEffect takes a function as first argument and a second argument
          which can be array or null which help determins the behaviour of
          useEffect Hook <br />
          <br />
          <hr />
          <Typography>
            Different params in the 2nd argument means differnt things{" "}
          </Typography>
          <CodeBlock
            text={
              `useEffect(() => {}); // this will run every time the render happens` +
              `\nuseEffect(() => {}, []); //only runs when the component is mounted similar to component did mount` +
              `\nuseEffect(() => {}, [resourceType]); //whenever the resource type is changed`
            }
            language={"javascript"}
            showLineNumbers={true}
            startingLineNumber={1}
            //theme={dracula}
          />
          <br />
        </li>
      </ul>
    </p>
  );
};

const Implementation = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + resourceType)
      .then((response) => response.json())
      .then((json) => {
        if (json.length > 0) setData(json.slice(0, 5));
      });
  }, [resourceType]);

  return (
    <div>
      <Box display="flex" flexDirection={"row"} margin={"5px"}>
        <button onClick={() => setResourceType("posts")}>POSTS</button>
        <button onClick={() => setResourceType("users")}>USERS</button>
        <button onClick={() => setResourceType("comments")}>COMMENTS</button>
      </Box>
      <Typography style={{ margin: "5px" }}>
        selected resource type {resourceType}
      </Typography>
      <Typography>Data Fetched from API</Typography>
      <List>
        {data.map((e, i) => (
          <ListItem>{JSON.stringify(e)}</ListItem>
        ))}
      </List>
    </div>
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
                const [resourceType, setResourceType] = useState("post");
                const [data, setData] = useState([]);
              
                useEffect(() => {
                  fetch("https://jsonplaceholder.typicode.com/" + resourceType)
                    .then((response) => response.json())
                    .then((json) => setData(json.slice(0, 5)));
                }, [resourceType]);
              
                return (
                  <div>
                    <Box display="flex" flexDirection={"row"} margin={"5px"}>
                      <button onClick={() => setResourceType("posts")}>POSTS</button>
                      <button onClick={() => setResourceType("users")}>USERS</button>
                      <button onClick={() => setResourceType("comments")}>COMMENTS</button>
                    </Box>

                    selected resource type {resourceType}<br/>Data Fetched from API
                    <List>
                      {data.map((e, i) => (
                        <ListItem>{JSON.stringify(e)}</ListItem>
                      ))}
                    </List>
                  </div>
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

const ImplementationP2 = () => {
  const [width, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // this line will run as clean up text when the useEffect is unmounted
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography style={{ margin: "5px" }}>
        the width of the screen is {width}
      </Typography>
    </div>
  );
};

const Source2 = () => {
  return (
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
          text={`const ImplementationP2 = () => {
        const [width, setScreenWidth] = useState(window.innerWidth);
    
        const handleResize = () => setScreenWidth(window.innerWidth);
      
        useEffect(() => {
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize); // this line will run as clean up text when the useEffect is unmounted
        }, []);
      
        return (
          <div> the width of the screen is {width}</div>
        );
      };`}
          language={"javascript"}
          showLineNumbers={true}
          startingLineNumber={1}
        />
      </AccordionDetails>
    </Accordion>
  );
};
