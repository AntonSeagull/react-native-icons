

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFileScan = (props: IconProps) => {

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
          <Path  d="M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" />
          <Path  d="M14 2v4a2 2 0 0 0 2 2h4" />
          <Path  d="M16 14a2 2 0 0 0-2 2" />
          <Path  d="M20 14a2 2 0 0 1 2 2" />
          <Path  d="M20 22a2 2 0 0 0 2-2" />
          <Path  d="M16 22a2 2 0 0 1-2-2" />
        </G>
      </Svg>
    );
  }

