import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Badge,
  Divider,
  Stack,
  Tag,
  Flex,
} from "@chakra-ui/react";
import "./ListElement.css";
import { Job } from "../models/Job.model";

const ListElement = ({
  job,
  filterHandler,
}: {
  job: Job;
  filterHandler: any;
}) => {
  return (
    <Card
      borderLeft={job.featured ? "4px solid hsl(180, 29%, 50%);" : "none"}
      className="job-card"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mt={4}
      p="6"
      width="80vw"
    >
      <Image
        objectFit="contain"
        height="auto"
        width="100px"
        src={`${process.env.PUBLIC_URL}/${job.logo}`}
        alt={job.logo}
      />
      <Stack width="100%">
        <CardHeader py={0}>
          <span className="job-company">{job.company}</span>
          {job.new ? (
            <Badge m="1" colorScheme="green">
              New!
            </Badge>
          ) : null}
          {job.featured ? (
            <Badge m="1" colorScheme="blackAlpha">
              Featured
            </Badge>
          ) : null}
        </CardHeader>
        <CardBody width="100%" py={0}>
          <Flex width="100%" flexDirection="row" justifyContent="space-between">
            <span>
              <b>{job.position}</b>
            </span>
            <div>
              {[job.role, job.level, ...job.languages, ...job.tools].map(
                (item, index) => (
                  <Tag
                    key={index}
                    size="md"
                    mx={2}
                    variant="subtle"
                    colorScheme="cyan"
                    onClick={(e) => filterHandler(item, e)}
                  >
                    {item}
                  </Tag>
                )
              )}
            </div>
          </Flex>
        </CardBody>
        <CardFooter py={0}>
          <span className="job-footer-details" style={{ marginRight: "10px" }}>
            {job.postedAt}
          </span>
          <Divider orientation="vertical" />
          <span className="job-footer-details" style={{ margin: "0px 10px" }}>
            {job.contract}
          </span>
          <Divider orientation="vertical" />
          <span className="job-footer-details" style={{ marginLeft: "10px" }}>
            {job.location}
          </span>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ListElement;
