import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RenderWithProvider from './RenderWIthProvider';
import RenderWithMockProvider from './RenderWIthMockProvider';
import App from '../App';

describe('Testa Aplicação"', () => {
  it('Testa com Provider:', () => {
    RenderWithProvider(<App />);
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /filtrar/i,
    })).toBeEnabled();
  });

  it('Testa com Mock Provider:', () => {
    RenderWithMockProvider(<App />);
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /filtrar/i,
    })).toBeEnabled();
  });




  /*
  it('Testa se o botão habilida quando satisfeitos os requisitos:', () => {
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const enterBtn = screen.getByRole('button', {
      name: /enter/i,
    });

    userEvent.type(emailInput, 'alguem@email.com');
    userEvent.type(passwordInput, '1234567');

    expect(enterBtn).not.toBeDisabled();
  });
  it('Testa se ao clicar no login redireciona para página de receitas', () => {
    const emailInputs = screen.getByTestId(EMAIL_INPUT);
    const passwordInputs = screen.getByTestId(PASSWORD_INPUT);
    const enterBtns = screen.getByRole('button', {
      name: /enter/i,
    });

    userEvent.type(emailInputs, 'alguem@email.com');
    userEvent.type(passwordInputs, '1234567');
    userEvent.click(enterBtns);
  });
  */
});
