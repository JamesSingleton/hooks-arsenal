import { renderHook } from '@testing-library/react-hooks';
import useSessionStorage from '../../src/hooks/useSessionStorage';

describe('useLocalStorage', () => {
  it('is callable', () => {
    const { result } = renderHook(() => useSessionStorage('foo', 'bar'));
    expect(result.current).toBeDefined();
  });
});
