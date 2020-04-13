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
  sendNewsletter: ({ state, libraries }) => {
    state.theme.newsletter.sending.newsletterForm = true;
    //   libraries.dataLayer.push({
    //     event: "newsletter",
    //     ...state.newsletter,
    //   });
    state.theme.newsletter.sending.newsletterForm = false;
    state.theme.newsletter.sent.newsletterForm = true;
  },

  sendAfterNewsletter: ({ state, libraries }) => {
    const { name, answers } = state.theme.newsletter.afterNewsletter;
    state.theme.newsletter.sending.afterNewsletter = true;
    // libraries.dataLayer.push({
    //   event: "after-newsletter",
    //   name,
    //   answers,
    // });
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
};

export default actions;
