import { css } from "frontity";

const buttons = {
  test: ({ node }) =>
    node.type === "element" &&
    (node.component === "a" ||
      node.props.className?.split(/ /).includes("wp-block-button")),

  processor: ({ node, state }) => {
    // if we have a regular link, just give it a color
    if (node.component === "a") {
      node.props.css = css`
        ${node.props.css}
        color: ${state.theme.colors.frontity};
      `;
    }

    if (node.props.className?.split(/ /).includes("wp-block-button")) {
      node.props.css = css`
        height: 40px;
        width: 140px;
        background-color: ${state.theme.colors.frontity};
        color: white;
        padding: auto 16px auto 38px;
        font-size: 16px;
        line-height: 16px;
        &::before {
          border-radius: 8px;
          box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
            0 1px 4px 0 rgba(12, 17, 43, 0.16);
        }
      `;
    }

    return node;
  }
};

export default buttons;
