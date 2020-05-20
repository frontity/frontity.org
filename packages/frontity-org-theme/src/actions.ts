import FrontityOrg from "../types";

const actions: FrontityOrg["actions"]["theme"] = {
  beforeSSR: async ({ state, actions }) => {
    await Promise.all(
      state.theme.templates.map((slug) =>
        actions.source.fetch(`/blog/wp_template_part/${slug}`)
      )
    );
    // Check if top banner should be visible
    const banner = state.source.get("/blog/wp_template_part/top-banner/");
    const showBanner = banner.isError
      ? null
      : state.source["wp_template_part"][banner.id].acf.visible;
    showBanner === "true" && (state.theme.isTopBannerVisible = true);
  },
  setFlowSectionActiveTab: ({ state }) => ({ tabNumber }) => {
    state.theme.flowSectionActiveTab = tabNumber;
  },
  showFixedHeader: ({ state }) => {
    state.theme.isFixedHeaderVisible = true;
  },
  hideFixedHeader: ({ state }) => {
    state.theme.isFixedHeaderVisible = false;
  },
  sendNewsletter: ({ state, actions }) => {
    state.theme.newsletter.sending.newsletterForm = true;
    const { email } = state.theme.newsletter.newsletterForm;

    actions.analytics.sendEvent({
      event: "newsletter",
      payload: { email, role: "undefined" },
    });

    state.theme.newsletter.sending.newsletterForm = false;
    state.theme.newsletter.sent.newsletterForm = true;
  },

  sendAfterNewsletter: ({ state, actions }) => {
    const { name, answers } = state.theme.newsletter.afterNewsletter;
    state.theme.newsletter.sending.afterNewsletter = true;

    actions.analytics.sendEvent({
      event: "after-newsletter",
      payload: {
        name,
        answers,
      },
    });
    state.theme.newsletter.sending.afterNewsletter = false;
    state.theme.newsletter.sent.afterNewsletter = true;
  },

  setAnswer: ({ state }) => ({ name, answer }) => {
    state.theme.newsletter.afterNewsletter.answers[name] = answer;
  },

  setNewsletterPropString: ({ state }) => ({ name, value }) => {
    state.theme.newsletter.newsletterForm[name] = value;
  },

  setNewsletterPropBoolean: ({ state }) => ({ name, value }) => {
    state.theme.newsletter.newsletterForm[name] = value;
  },

  setAfterNewsletterProp: ({ state }) => ({ name, value }) => {
    state.theme.newsletter.afterNewsletter[name] = value;
  },
  loadHeroBlog: ({ state, actions }) => {
    state.theme.heroBlogIsLoading = !state.theme.heroBlogIsLoading;
    actions.theme.setHeroTerminalPosition();
  },
  setHeroTerminalPosition: ({ state }) => {
    state.theme.heroTerminalPosition =
      state.theme.heroTerminalPosition === "top" ? "bottom" : "top";
  },
};

export default actions;
