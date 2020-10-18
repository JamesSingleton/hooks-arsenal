import { renderHook } from '@testing-library/react-hooks';
import localMemoryHookFactory from '../../src/utils/localMemoryHookFactory';

['localStorage', 'sessionStorage'].forEach((storageType) => {
  describe(`local memory storage hook (${storageType})`, () => {
    const hookUnderTest = localMemoryHookFactory(storageType);
    const TEST_KEY = 'foo';
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const jsonStringifyActual = JSON.stringify;

    const errorThrower = (message = 'oh no') => {
      throw new Error(message);
    };
    beforeEach(() => {
      consoleErrorSpy.mockReset();
      JSON.stringify = jsonStringifyActual;
      window.localStorage.removeItem(TEST_KEY);
      window.sessionStorage.removeItem(TEST_KEY);
    });

    it('is callable', () => {
      const { result } = renderHook(() => hookUnderTest(TEST_KEY, 'bar'));
      expect(result.current).toBeDefined();
    });

    it('sets value', () => {
      renderHook(() => hookUnderTest(TEST_KEY, 'bar'));
      expect(window[storageType].getItem(TEST_KEY)).toEqual('"bar"');
    });

    it('logs the error when an error occurs', () => {
      JSON.stringify = errorThrower;
      renderHook(() => hookUnderTest(TEST_KEY, 'bar'));
      expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('returns the stored value if present', () => {
      const previouslyStoredValue = 'the previously stored value';
      window[storageType].setItem(TEST_KEY, previouslyStoredValue);
      const { result } = renderHook(() => hookUnderTest(TEST_KEY, 'some other value', true));
      expect(result.current[0]).toEqual(previouslyStoredValue);
    });

    it('returns the initial value if an error occurs while setting state', () => {
      const unparseableValue = 'a value that can not be parsed';
      const initialValue = 'initialize value';
      window[storageType].setItem(TEST_KEY, unparseableValue);
      const { result } = renderHook(() => hookUnderTest(TEST_KEY, initialValue));
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(result.current[0]).toEqual(initialValue);
    });

    it('coerces the value to a string before setting the value', () => {
      renderHook(() => hookUnderTest(TEST_KEY, 10, true));
      expect(window[storageType].getItem(TEST_KEY)).toEqual('10');
    });
  });
});
