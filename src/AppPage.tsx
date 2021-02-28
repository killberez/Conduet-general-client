import React from "react";
import ProjectList from "./ProjectList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Project from "./ProjectPage";

const AppPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={ProjectList} />
        <Route path="/:projectId" component={Project} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppPage;
