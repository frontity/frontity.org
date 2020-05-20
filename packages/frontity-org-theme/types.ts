import Analytics from "@frontity/analytics/types";
import Html2React from "@frontity/html2react/types";
import Router from "@frontity/router/types";
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
      isTopBannerVisible: boolean;
      isFixedHeaderVisible: boolean;
      headerHeight: number;
      heroBlogIsLoading: boolean;
      heroTerminalPosition: "top" | "bottom";
      zIndices: {
        navBar: number;
        flowSectionButtons: number;
      };
      newsletter: {
        newsletterForm: {
          email: string;
          hasAgreed: boolean;
        };
        afterNewsletter: {
          name: string;
          questions: {
            [name: string]: {
              label: string;
              options: {
                label: string;
                value: string;
              }[];
            };
          };
          answers: {
            [name: string]: string | undefined;
          };
        };
        sending: {
          newsletterForm: boolean;
          afterNewsletter: boolean;
        };
        sent: {
          newsletterForm: boolean;
          afterNewsletter: boolean;
        };
      };
    };
    source?: Source["state"]["source"] & {
      page: Record<string, PostEntityWithACF>;
    };
    router?: Router["state"]["router"];
  };
  actions: {
    theme: {
      beforeSSR: AsyncAction<FrontityOrg>;
      setFlowSectionActiveTab: Action<FrontityOrg, { tabNumber: number }>;
      showFixedHeader: Action<FrontityOrg>;
      hideFixedHeader: Action<FrontityOrg>;
      sendNewsletter: Action<FrontityOrg>;
      sendAfterNewsletter: Action<FrontityOrg>;
      setAnswer: Action<FrontityOrg, { name: string; answer: string }>;
      setNewsletterPropString: Action<
        FrontityOrg,
        { name: string; value: string }
      >;
      setNewsletterPropBoolean: Action<
        FrontityOrg,
        { name: string; value: boolean }
      >;
      setAfterNewsletterProp: Action<
        FrontityOrg,
        { name: string; value: string }
      >;
      setHeroTerminalPosition: Action<FrontityOrg>;
      loadHeroBlog: Action<FrontityOrg>;
    };
    analytics?: Analytics["actions"]["analytics"];
    source?: Source["actions"]["source"];
  };
  libraries: {
    html2react?: Partial<Html2React["libraries"]["html2react"]>;
  };
}

export default FrontityOrg;
