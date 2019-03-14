function createPoll(interval) {
  let timeoutId = null;
  let poller = () => {};

  return fn => {
    window.clearTimeout(timeoutId);

    poller = () => {
      timeoutId = window.setTimeout(poller, interval);

      return fn();
    };

    return poller();
  };
}

function createPollingAction(action, interval) {
  const poll = createPoll(interval);

  return () => (dispatch, getState) => poll(() => action(dispatch, getState));
}

export default createPollingAction;
