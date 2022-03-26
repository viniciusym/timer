import { render, screen } from '@testing-library/react';
import App from './App';

describe('testa stopwatch', () => {
  it('testa se ao abrir a pagina o relogio esta em "00:00:00"', () => {
    render(<App />);
  
    const clock = screen.getByRole('heading', {name: '00:00:00'})
  
    expect(clock).toBeInTheDocument();
  });
  it('testa se inputs para digitar o tempo sao renderizados', () => {
    render(<App />);

    const inputs = screen.getAllByTestId('time-input')

    expect(inputs).toHaveLength(3)
  })
  it('testa se botoes para iniciar, pausar e retomar o stopwatch sao renderizados', () => {
    render(<App />);

    const button = screen.getAllByRole('button');

    expect(button).toHaveLength(3)
  })
})
