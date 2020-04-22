import FrontityOrg from "../types";

const actions: FrontityOrg["actions"]["theme"] = {
  beforeSSR: async ({ state, actions }) => {
    await Promise.all(
      state.theme.templates.map((slug) =>
        actions.source.fetch(`/wp_template_part/${slug}`)
      )
    );
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
  setHeroTerminalPosition: ({ state }) => {
    state.theme.heroTerminalPosition =
      state.theme.heroTerminalPosition === "top" ? "bottom" : "top";
  },
};

export default actions;
