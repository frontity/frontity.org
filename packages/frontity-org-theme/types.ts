import { ReactType } from "react";
import Source from "@frontity/source";
import Router from "@frontity/router";
import { Package } from "frontity/types";

interface FrontityOrg extends Package {
  name: "frontity-org-theme";
  roots: {
    theme: ReactType;
  };
  state: {
    theme: {
      colors: {
        frontity: string;
        primary: string;
        voidblu: string;
        grass: string;
        wall: string;
        purple: string;
        orange: string;
        red: string;
        turqoise: string;
        lightgreen: string;
      };
    };
    source?: Source["state"]["source"];
    router?: Router["state"]["router"];
  };
  actions: {
    theme: {};
  };
}

export default FrontityOrg;
