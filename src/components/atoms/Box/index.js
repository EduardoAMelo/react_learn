import styled from 'styled-components';
import MUIbox from '@mui/material/Box';

import {
    colorProps,
    colorPropsTypes,
    flexProps,
    flexPropsTypes,
    marginProps,
    marginPropsTypes,
    paddingProps,
    paddingPropsTypes,
    sizeProps,
    sizePropsTypes,
} from '@styles/styleProps';

const Box = styled(MUIbox)`
    ${sizeProps}
    ${flexProps}
    ${colorProps}
    ${paddingProps}
    ${marginProps}
`;

Box.propTypes = {
    ...sizePropsTypes,
    ...flexPropsTypes,
    ...colorPropsTypes,
    ...paddingPropsTypes,
    ...marginPropsTypes,
};

export default Box;