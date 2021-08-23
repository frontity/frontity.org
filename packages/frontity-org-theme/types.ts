import Analytics from "@frontity/analytics/types";
import Html2React from "@frontity/html2react/types";
import Router from "@frontity/router/types";
import Source from "@frontity/source/types";
import { Action, AsyncAction, MergePackages, Package } from "frontity/types";

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
    theme: React.ElementType;
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
    source?: {
      page: Record<string, PostEntityWithACF>;
    };
  };
  actions: {
    theme: {
      beforeSSR: AsyncAction<Packages>;
      setFlowSectionActiveTab: Action<Packages, { tabNumber: number }>;
      showFixedHeader: Action<Packages>;
      hideFixedHeader: Action<Packages>;
      sendNewsletter: Action<Packages>;
      sendAfterNewsletter: Action<Packages>;
      setAnswer: Action<Packages, { name: string; answer: string }>;
      setNewsletterPropString: Action<
        Packages,
        { name: string; value: string }
      >;
      setNewsletterPropBoolean: Action<
        Packages,
        { name: string; value: boolean }
      >;
      setAfterNewsletterProp: Action<Packages, { name: string; value: string }>;
      setHeroTerminalPosition: Action<Packages>;
      loadHeroBlog: Action<Packages>;
    };
  };
}

export type Packages = MergePackages<
  FrontityOrg,
  Html2React,
  Analytics,
  Source,
  Router
>;

export default FrontityOrg;
