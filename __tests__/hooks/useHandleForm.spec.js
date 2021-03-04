import { renderHook, act } from '@testing-library/react-hooks';
import useFormSubmissionHandling from '../../src/hooks/useHandleForm';

// eslint-disable-next-line max-params
const simulateEvent = (name, value, type, checked) => ({
  preventDefault: jest.fn(),
  target: {
    value,
    type,
    name,
    checked,
  },
});

describe('useFormSubmissionHandling', () => {
  const submitFunctionMock = jest.fn();
  const mockEvent = simulateEvent();
  const mockFormValue = { greeting: 'hello!' };

  beforeEach(() => submitFunctionMock.mockReset());

  it('should update formValue on event changes', () => {
    const { result } = renderHook(() => useFormSubmissionHandling());
    const { handleUpdate } = result.current;
    act(() => handleUpdate(simulateEvent('greeting', 'hello!')));
    expect(result.current.formValues).toEqual(mockFormValue);
  });

  it('can update formValue from checkbox changes', () => {
    const { result } = renderHook(() => useFormSubmissionHandling());
    const { handleUpdate } = result.current;
    act(() => handleUpdate(simulateEvent('checkboxTime', null, 'checkbox', true)));
    expect(result.current.formValues).toEqual({ checkboxTime: true });
  });

  it('calls the provided function when the form is submitted with the form values', async () => {
    expect.assertions(2);
    const { result, waitForNextUpdate } = renderHook(() =>
      useFormSubmissionHandling({
        submitFunction: submitFunctionMock,
        initialValue: mockFormValue,
      })
    );
    const { handleSubmit } = result.current;
    act(() => {
      handleSubmit(mockEvent);
    });
    await waitForNextUpdate();
    expect(submitFunctionMock.mock.calls[0][0]).toEqual(mockFormValue);
    expect(submitFunctionMock).toHaveReturned();
  });

  it('updates the state on submit correctly', async () => {
    expect.assertions(4);
    const { result, waitForNextUpdate } = renderHook(() =>
      useFormSubmissionHandling({
        submitFunction: submitFunctionMock,
        initialValue: mockFormValue,
      })
    );
    const { handleSubmit } = result.current;
    act(() => {
      handleSubmit(mockEvent);
    });
    const { isSubmitting, experiencedError } = result.current;
    expect(isSubmitting).toEqual(true);
    expect(experiencedError).toEqual(false);
    expect(result.current.submitResult).toEqual(null);
    await waitForNextUpdate();
    expect(result.current.isSubmitting).toEqual(false);
  });

  it('updates the error state correctly', async () => {
    expect.assertions(2);
    const errorMock = jest.fn(() => Promise.reject(new Error('error time')));
    const { result, waitForNextUpdate } = renderHook(() =>
      useFormSubmissionHandling({
        submitFunction: errorMock,
      })
    );
    act(() => {
      result.current.handleSubmit(mockEvent);
    });
    await waitForNextUpdate();
    const { isSubmitting, experiencedError } = result.current;
    expect(isSubmitting).toBe(false);
    expect(experiencedError).toBe(true);
  });
});
