// ----------------------------------------------------------------------------
// Copyright (c) 2016-2022, QIIME 2 development team.
//
// Distributed under the terms of the Modified BSD License.
//
// The full license is in the file LICENSE, distributed with this software.
// ----------------------------------------------------------------------------

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'LINK_INPUT_ARTIFACT': {
        const { input, artifacts } = action;
        const newState = {
            ...state
        };
        newState[input] = artifacts;
        return newState;
    }
    case 'CLEAR_JOB_STATE': {
        return initialState;
    }
    default: return state;
    }
};

export default reducer;
