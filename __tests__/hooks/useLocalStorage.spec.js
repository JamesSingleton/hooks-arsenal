import { renderHook } from '@testing-library/react-hooks';
import useLocalStorage from '../../src/hooks/useLocalStorage';

describe('useLocalStorage', () => {
  it('is callable', () => {
    const { result } = renderHook(() => useLocalStorage('foo', 'bar'));
    expect(result.current).toBeDefined();
  });

  it('sets value', () => {
    renderHook(() => useLocalStorage('foo', 'bar'));
    expect(window.localStorage.getItem('foo')).toEqual('"bar"');
  });
});
