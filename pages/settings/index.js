import React, { useEffect, useState } from "react";
import Head from "next/head";
import Settings from "components/Settings/Settings";
import dynamic from "next/dynamic";
import { useLocationHash } from "hooks/useLocationHash";

const allowedRoutes = ["#practice-profile", "#subscription", "#team"];

const Team = dynamic(() => import("components/Settings/Team/Team"), {
  loading: () => <p>Loading caused by client page transition ...</p>,
});

const Profile = dynamic(() => import("components/Settings/Profile/Profile"), {
  loading: () => <p>Loading caused by client page transition ...</p>,
});

const index = () => {
  const hashpath = useLocationHash();
  const [value, setValue] = useState(hashpath);

  const isTeam = hashpath == allowedRoutes[2];
  const isSub = hashpath == allowedRoutes[1];
  const isProfile = hashpath == allowedRoutes[0] || hashpath == "";

  const getDefaultTab = () => {
    if (isSub) return 1;
    if (isTeam) return 2;
    return 0;
  };

  useEffect(() => {
    setValue((e) => getDefaultTab());
  }, [hashpath]);

  return (
    <section>
      <Head>
        <title>Settings</title>
      </Head>
      <Settings value={value}>
        <div className="uk-margin">
          {!!isProfile && <Profile />}

          {!!isSub && <div>Lorem ipsum dolor sit amet consectetur adipisi</div>}

          {!!isTeam && <Team />}
        </div>
      </Settings>
    </section>
  );
};

export default index;
