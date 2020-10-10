import { act, renderHook } from '@testing-library/react-hooks';
import useDarkMode from '../../src/hooks/useDarkMode';

describe('useDarkMode', () => {
  beforeEach(() => {
    window.localStorage.removeItem('dark-mode-active')
  });
  it('is callable', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current).toBeDefined();
    expect(window.localStorage.getItem('dark-mode-active')).toEqual("false");
  });

  it('sets dark mode value', () => {
    renderHook(() => useDarkMode(true));
    expect(window.localStorage.getItem('dark-mode-active')).toEqual("true");
  });
  
  it('can toggle dark mode value', async () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current[0]).toEqual(false);
    expect(window.localStorage.getItem('dark-mode-active')).toEqual("false");

    act(() => result.current[1](true));
    
    expect(result.current[0]).toEqual(true);
    expect(window.localStorage.getItem('dark-mode-active')).toEqual("true");

    act(() => result.current[1](false));
    
    expect(result.current[0]).toEqual(false);
    expect(window.localStorage.getItem('dark-mode-active')).toEqual("false");
  });
});
