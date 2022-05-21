import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

import styles from "./App.module.scss";
import Card from "./Component/Card/Card";
import SkeletonLoader from "./Component/SkeletonLoader/SkeletonLoader";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(process.env.REACT_APP_GITHUB_API_URI);
      let requiredData = response.data.items.map((eachData) => {
        let currentDate = moment(new Date());
        let repoCreatedDate = moment(eachData.created_at);

        return {
          repositoryName: eachData.name,
          repositoryDescription: eachData.description,
          stars: eachData.stargazers_count,
          issues: eachData.open_issues_count,
          timeIntervalByOwner: currentDate.diff(repoCreatedDate, "days") + 1,
          ownerAvatar: eachData.owner.avatar_url,
          owner: eachData.owner.login,
        };
      });
      return setApiData(requiredData);
    }
    !!!apiData.length && getData();
  }, [apiData]);

  return (
    <div className={styles.App}>
      {apiData.length ? (
        apiData.map((data, index) => (
          <Card
            key={index}
            repositoryName={data.repositoryName}
            repositoryDescription={data.repositoryDescription}
            stars={data.stars}
            issues={data.issues}
            timeIntervalByOwner={data.timeIntervalByOwner}
            ownerAvatar={data.ownerAvatar}
            owner={data.owner}
          />
        ))
      ) : (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      )}
    </div>
  );
}

export default App;
