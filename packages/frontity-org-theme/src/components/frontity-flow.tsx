import { connect } from "frontity";
import { Connect } from "frontity/types";
import React, { useState } from "react";

import FrontityOrg from "../../types";

interface Props {
  rendered: string;
}

const Flow: React.FC<Connect<FrontityOrg, Props>> = ({
  libraries,
  rendered,
}) => {
  const Html2React = libraries.html2react.Component;

  const [activeTab, setActiveTab] = useState(0);

  // Match a part of html tree
  // Return a part of the
  const CreateButton = match("div.createButton", rendered);
  const ConnectButton = match("div.connectButton", rendered);

  const Content = ({ children }) => <section>{children}</section>;

  return (
    <Html2React html={rendered}>
      <CreateButton onClick={() => setActiveTab(0)} />
      <ConnectButton onClick={() => setActiveTab(1)} />
      <StyleButton onClick={() => setActiveTab(2)} />
      <DeployButton onClick={() => setActiveTab(3)} />

      <Content>
        <h4> Some title </h4>
        <Html2React html={} />
      </Content>
    </Html2React>
  );
};

export default connect(Flow);
