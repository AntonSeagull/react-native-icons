

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrBladesVertical = (props: IconProps) => {

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
          <Path  d="M17 3v4m0 3v4m0 3v4m4-17v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1zm0 7v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h16a1 1 0 011 1zm0 7v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h16a1 1 0 011 1z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

