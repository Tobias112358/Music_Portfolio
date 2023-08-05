import PropTypes from 'prop-types';
import React from 'react';
import '../../../../css/application.css';
declare const Keyboard: {
    (props: any): React.JSX.Element;
    propTypes: {
        name: PropTypes.Validator<string>;
        fm: PropTypes.Requireable<any>;
        setFM: PropTypes.Requireable<any>;
        wasm: PropTypes.Requireable<any>;
    };
};
export default Keyboard;
