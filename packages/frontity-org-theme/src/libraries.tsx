type DataLayer = {
  event: string;
  [key: string]: any;
};

declare global {
  interface Window {
    dataLayer: DataLayer[];
  }
}

export const dataLayer = window.dataLayer || [];
