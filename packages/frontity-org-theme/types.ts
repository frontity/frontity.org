import React, { ReactType } from "react";
import Source from "@frontity/source/types";
import Router from "@frontity/router";
import { Processor } from "@frontity/html2react/types";
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
  libraries?: {
    html2react: {
      processors?: Processor<React.HTMLProps<HTMLElement>>[];
    };
  };
}

export default FrontityOrg;
