import { Search } from '@mui/icons-material';
import { InputAdornment, TextField, styled, css, Box } from '@mui/material';
import React from 'react';
import P from 'prop-types';
import { theme } from '../utils/theme';

const Container = styled(Box)(
  () => css`
    padding: 2rem 0;
  `,
);

const Input = styled(TextField)(
  ({ width }) => css`
    background-color: ${theme.colors.auxiliar};
    border: 0.5px solid;
    border-color: ${theme.colors.darkBlue};
    border-radius: 5px;
    padding: 0.2rem 0.2rem 0.2rem 0.5rem;
    outline: none;
    transition: 200ms all ease-in-out;
    width: ${width}%;
    align-self: center;
    margin: 0 auto;
    display: block;

    & label {
      margin-left: 1rem;
    }

    & label.Mui-focused {
      margin-left: 1rem;
      transition: 200ms all ease-in-out;
      color: ${theme.colors.darkBlue};
    }
  `,
);

const Icon = styled(InputAdornment)(
  () => css`
    cursor: pointer;
  `,
);

export const InputWithSearchIcon = ({
  width,
  value,
  onChange,
  onClick,
  onKeyPress,
}) => {
  return (
    <Container>
      <Input
        onKeyPress={onKeyPress}
        id="input-with-icon-textfield"
        label="Pesquisar"
        type="text"
        width={width}
        value={value}
        onChange={onChange}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <Icon position="end">
              <Search sx={{ fontSize: 30 }} onClick={onClick} />
            </Icon>
          ),
        }}
        inputProps={{ maxLength: 6 }}
        variant="standard"
      />
    </Container>
  );
};

InputWithSearchIcon.propTypes = {
  width: P.number,
  value: P.string,
  onChange: P.func,
  onClick: P.func,
  onKeyPress: P.func,
};
