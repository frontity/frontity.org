import Html2React from "@frontity/html2react/types";
import Router from "@frontity/router";
import Source from "@frontity/source/types";
import { Package } from "frontity/types";
import { ReactType } from "react";

type PostEntityWithACF = {
  acf: {
    background_triangles: {
      position?: string;
      top?: string;
      top_triangle_opacity?: string;
    };
  };
};

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
        white: string;
      };
      templates: string[];
    };
    source?: Source["state"]["source"] & {
      page: Record<string, PostEntityWithACF>;
    };
    router?: Router["state"]["router"];
  };
  actions: {
    theme: {};
  };
  libraries: {
    html2react?: {
      processors: Html2React["libraries"]["html2react"]["processors"];
      Component: Html2React["libraries"]["html2react"]["Component"];
    };
  };
}

export default FrontityOrg;
