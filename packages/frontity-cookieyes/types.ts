import { Package } from "frontity/types";

interface CookieYes extends Package {
  name: "frontity-cookieyes";
  roots: {
    cookieyes: React.ElementType;
  };
  state: {
    cookieyes: {
      id?: string;
    };
  };
}

export type Packages = CookieYes;

export default CookieYes;
