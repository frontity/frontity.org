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
      sendNewsletter: Action<FrontityOrg>;
      sendAfterNewsletter: Action<FrontityOrg>;
      setAnswer: Action<FrontityOrg, { name: string; answer: string }>;
      setNewsletterProp: Action<
        FrontityOrg,
        | {
            name: "email";
            value: string;
          }
        | {
            name: "hasAgreed";
            value: boolean;
          }
      >;
      setAfterNewsletterProp: Action<
        FrontityOrg,
        {
          name: "name";
          value: string;
        }
      >;
    };
  };
  libraries: {
    html2react?: {
      processors: Html2React["libraries"]["html2react"]["processors"];
    };
  };
}

export default FrontityOrg;
