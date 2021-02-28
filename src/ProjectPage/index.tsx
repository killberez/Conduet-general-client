import React, { useEffect, useContext, useState } from "react";
import LoginContext from "../context/LoginContext";
import Axios from "axios";
import ProjectPage from "./ProjectPage";
import { useParams } from "react-router";

const Project = () => {
  const [projectTitle, setProjectTitle] = useState<string | undefined>(
    undefined
  );
  const [settings, setSettings] = useState<any>(undefined);
  const [saving, setSaving] = useState(false);
  const { userData } = useContext(LoginContext);
  // @ts-ignore
  const { projectId } = useParams();
  useEffect(() => {
    const getProjectDetail = async () => {
      const token: string | null = userData.token;
      const project: any = await Axios.get(
        `${process.env.REACT_APP_API_URL}/project/${projectId}`,
        {
          headers: { authorization: token },
        }
      );
      setProjectTitle(project.data.name);
      setSettings(project.data.settings);
    };
    // tslint:disable-next-line: no-floating-promises
    getProjectDetail();
  }, [projectId, userData.token]);
  useEffect(() => {
    const updateProject = async () => {
      const token: string | null = userData.token;
      setSaving(true);
      await Axios.patch(
        `${process.env.REACT_APP_API_URL}/project/${projectId}`,
        {
          name: projectTitle,
          settings,
        },
        {
          headers: { authorization: token },
        }
      );
      setSaving(false);
    };
    // tslint:disable-next-line: no-floating-promises
    updateProject();
  }, [settings, projectTitle, projectId, userData.token]);
  return (
    <>
      {projectTitle && settings ? (
        <ProjectPage
          projectTitle={projectTitle}
          setProjectTitle={setProjectTitle}
          settings={settings}
          setSettings={setSettings}
          saving={saving}
        />
      ) : null}
    </>
  );
};

export default Project;
