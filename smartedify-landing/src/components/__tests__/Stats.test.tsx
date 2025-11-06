/// <reference types="vitest/globals" />
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Stats } from '../Stats';

describe('Stats component', () => {
  test('renderiza las métricas principales', () => {
    render(<Stats />);
    expect(screen.getByText(/Servicios Operativos Integrados/i)).toBeInTheDocument();
    expect(screen.getByText(/Disponibilidad Garantizada/i)).toBeInTheDocument();
    expect(screen.getByText(/Cumplimiento Normativo/i)).toBeInTheDocument();
    expect(screen.getByText(/Soporte Empresarial/i)).toBeInTheDocument();
    // check numbers
    expect(screen.getByText(/8/)).toBeInTheDocument();
    expect(screen.getByText(/99.95%/)).toBeInTheDocument();
    expect(screen.getByText(/100%/)).toBeInTheDocument();
    expect(screen.getByText(/24\/7/)).toBeInTheDocument();
  });
});
