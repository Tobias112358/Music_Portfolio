import PropTypes from 'prop-types';
import React from 'react';
import '../../../css/application.css';
interface Synthesizer {
    name: string;
}
declare const FMOscillator: {
    (props: Synthesizer): React.JSX.Element;
    propTypes: {
        name: PropTypes.Validator<string>;
    };
};
export default FMOscillator;
