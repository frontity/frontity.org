import { connect, styled } from "frontity";
import React from "react";

const Question = ({ name, state, actions }) => {
  const { label, options } = state.theme.newsletter.afterNewsletter.questions[
    name
  ];
  const Question = styled.label`
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: ${state.theme.colors.primary};
  `;

  const Label = styled.label`
    display: block;
    position: relative;
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0;
  `;

  const Input = styled.input`
    margin-right: 8px;
  `;
  return (
    <>
      <Question>{label}</Question>
      {options.map((item) => (
        <Label key={item.label}>
          <Input
            type="radio"
            name={name}
            value={item.value}
            onChange={(event) =>
              actions.theme.setAnswer({
                name,
                answer: event.target.value,
              })
            }
          />
          {item.label}
        </Label>
      ))}
    </>
  );
};

export default connect(Question);
