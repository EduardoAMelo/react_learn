
import React from 'react';
import PropTypes from 'prop-types';

import {
    colorPropsTypes,
    marginPropsTypes,
    paddingPropsTypes,
    sizePropsTypes,
} from '@styles/styleProps';
import t from '@services/locale';

import BaseText from './styles';

const Text = ({
    children, style, ...props
}) => (
    <BaseText {...props} color={props.color || 'grey.800'} style={{ ...style, fontSize: props.fontSize || 15 }}>>
        {typeof children === 'string'}
    </BaseText>
);

Text.defaultProps = {
    children: undefined,
};

Text.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
        PropTypes.func,
    ])
};

export default Text;