import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 15px;
  width: 62px;
  height: 41px;
  color: rgb(156, 155, 152);
  background: rgb(231, 213, 210);
  border: 1px solid rgb(83, 81, 81);
  border-radius: 0px 6px 6px 0px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgb(35, 214, 242) !important;
  }
  &:enabled {
    color: rgb(0, 0, 0);
    font-weight: 700;
    background: rgb(76, 174, 79);
  }
`;

const Input = styled.input`
  width: 325px;
  height: 9px;
  background-color: rgb(231, 213, 210);
  border-radius: 6px 0px 0px 6px;
  padding: 15px;
  border: 0px solid rgb(83, 81, 81);
  margin-right: 1px;
  &:hover {
    border: 1px solid rgb(35, 214, 242) !important;
  }
`;

function InputForm(props) {
    return (
        <form className="new-value" onSubmit={props.submit}>
            <Input placeholder="add a new todo..." value={props.value} onChange={(event) => props.onValueChange(event.target.value)} />
            <Button disabled={props.disabled}> Add </Button>
        </form>
    )
}

export default InputForm;