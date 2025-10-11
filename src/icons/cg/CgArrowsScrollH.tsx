

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowsScrollH = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M15.3052 12L18.1299 9.17526L16.7157 7.76105L13.891 10.5858L13.8873 10.5821L12.4731 11.9963L12.4768 12L12.4731 12.0037L13.8873 13.4179L13.891 13.4142L16.7157 16.239L18.1299 14.8248L15.3052 12Z" fill="currentColor" />
          <Path  d="M10.1091 10.5858L10.1128 10.5821L11.527 11.9963L11.5233 12L11.527 12.0037L10.1128 13.4179L10.1091 13.4142L7.28433 16.239L5.87012 14.8248L8.69487 12L5.87012 9.17526L7.28433 7.76105L10.1091 10.5858Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

