import { renderHook } from '@testing-library/react-hooks';
import useSessionStorage from '../../src/hooks/useSessionStorage';

describe('useSessionStorage', () => {
  it('is callable', () => {
    const { result } = renderHook(() => useSessionStorage('foo', 'bar'));
    expect(result.current).toBeDefined();
  });

  it('sets value', () => {
    renderHook(() => useSessionStorage('foo', 'bar'));
    expect(window.sessionStorage.getItem('foo')).toEqual('"bar"');
  });
});
