interface NamespacedTypes {
  [actionType: string]: string;
}

/**
 * Returns the action types nested under the provided namespace.
 *
 * @param {string} namespace Namespace for the actions.
 * @param {string[]} actionTypes Names of the actions.
 *
 * @returns {Object} Action types.
 */
function namespacedTypes(namespace: string, actionTypes: string[]) {
  return actionTypes.reduce((actions: NamespacedTypes, actionType: string) => {
    actions[actionType] = `${namespace}:${actionType}`;

    return actions;
  }, {});
}

export default namespacedTypes;
