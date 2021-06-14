import React from 'react';
import { Formik } from 'formik';
import styled from '@emotion/styled';

const FormContainer = styled.div`
  position: fixed;
  top: 150px;
  left: 200px;
  background-color: white;
  border-radius: 15px;
  width: 400px;
  height: 500px;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  /* &:hover { 
    cursor: pointer;
  }  */
`;

const ConfirmButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
`;

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 20px;
`;

const NameForm = () => {
  return (
    <FormContainer>
      <h1>Enter your nickname</h1>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <StyledInput
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <ButtonContainer>
              <ConfirmButton type="submit">Submit</ConfirmButton>
            </ButtonContainer>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default NameForm;
