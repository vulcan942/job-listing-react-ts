import "./App.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import ListElement from "./components/ListElement";
import FilterContainer from "./components/FilterContainer";
import { JobService } from "./services/job.service";
import { useEffect, useState } from "react";
import { Job } from "./models/Job.model";
function App() {
  const [jobs, setJobs] = useState([] as Job[]);
  const [filters, setFilters] = useState([] as string[]);

  useEffect(() => {
    if (jobs.length === 0) {
      const results = JobService.getJobs([]);
      setJobs([...results]);
    }
  });

  useEffect(() => {
    if (filters.length) {
      const results = JobService.getJobs(filters);
      setJobs([...results]);
    }
  }, [filters]);

  const clearHandler = () => {
    setFilters([]);
    const results = JobService.getJobs([]);
    setJobs([...results]);
  };

  const filterHandler = (tag: string, event: any) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  };

  return (
    <ChakraProvider>
      <div className="main-container">
        <div className="header">
          <Flex
            flexDirection="column"
            alignItems={"center"}
            position={"relative"}
            bottom={-110}
          >
            <FilterContainer
              filters={filters}
              clearHandler={clearHandler}
            ></FilterContainer>
          </Flex>
        </div>
        <div className="app-content">
          <Flex my={20} flexDirection="column">
            {jobs.map((job) => (
              <ListElement
                key={job.id}
                job={job}
                filterHandler={filterHandler}
              ></ListElement>
            ))}
          </Flex>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
