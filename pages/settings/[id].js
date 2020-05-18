import React, { useEffect } from "react";
import Head from "next/head";
import Settings from "components/Settings/Settings";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const allowedRoutes = ["practice-profile", "subscription", "team"];

const Team = dynamic(() => import("components/Settings/Team/Team"), {
  loading: () => <p>Loading caused by client page transition ...</p>,
});

const settings = () => {
  const router = useRouter();
  const { id } = router.query;

  const isTeam = id == allowedRoutes[2];
  const isSub = id == allowedRoutes[1];
  const isProfile = id == allowedRoutes[0];

  const getDefaultTab = () => {
    if (isProfile) return 0;
    if (isSub) return 1;
    return 2;
  };

  return (
    <section>
      <Head>
        <title>Settings</title>
      </Head>
      <Settings value={getDefaultTab()}>
        <div id="tab-content" className="uk-margin">
          {!!isProfile && <div>tathioasdioioasnao</div>}

          {!!isSub && <div>Lorem ipsum dolor sit amet consectetur adipisi</div>}

          {!!isTeam && <Team />}
        </div>
      </Settings>
    </section>
  );
};

export default settings;
