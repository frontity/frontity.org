import Html2React from "@frontity/html2react/types";
import Router from "@frontity/router";
import Source from "@frontity/source/types";
import { Action, AsyncAction, Package } from "frontity/types";
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
      flowSectionActiveTab: number;
      isFixedHeaderVisible: boolean;
      zIndices: {
        navBar: number;
        flowSectionButtons: number;
      };
      heroBlogIsLoading: boolean;
      heroTerminalPosition: "top" | "bottom";
    };
    source?: Source["state"]["source"] & {
      page: Record<string, PostEntityWithACF>;
    };
    router?: Router["state"]["router"];
  };
  actions: {
    source?: Source["actions"]["source"];
    theme: {
      beforeSSR: AsyncAction<FrontityOrg>;
      setFlowSectionActiveTab: Action<FrontityOrg, { tabNumber: number }>;
      showFixedHeader: Action<FrontityOrg>;
      hideFixedHeader: Action<FrontityOrg>;
      loadHeroBlog: Action<FrontityOrg>;
      setHeroTerminalPosition: Action<FrontityOrg>;
    };
  };
  libraries: {
    html2react?: Partial<Html2React["libraries"]["html2react"]>;
  };
}

export default FrontityOrg;
