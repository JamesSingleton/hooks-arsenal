import { renderHook, act } from '@testing-library/react-hooks';
import useWindowDimensions from '../../src/hooks/useWindowDimensions';

// TODO: Add Tests for other Hooks
describe('useWindowDimensions', () => {
  const resize = (width, height) => {
    const resizeEvent = document.createEvent('Event');
    resizeEvent.initEvent('resize', true, true);

    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(resizeEvent);
  };

  beforeEach(() => resize(1920, 1080));

  it('should return the current window dimensions', () => {
    expect.assertions(2);
    const { result } = renderHook(() => useWindowDimensions());
    const { width, height } = result.current;
    expect(width).toBe(1920);
    expect(height).toBe(1080);
  });

  it('should handle changes in window size', () => {
    expect.assertions(2);
    const { result } = renderHook(() => useWindowDimensions());
    expect(result.current.height).toBe(1080);
    act(() => resize(1920, 500));
    expect(result.current.height).toBe(500);
  });

  it('cleans up its event listener', () => {
    const removeMock = jest.fn();
    window.removeEventListener = removeMock;
    const { unmount } = renderHook(() => useWindowDimensions());
    unmount();
    expect(removeMock).toHaveBeenCalled();
  });
});
