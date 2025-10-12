

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRobotOff = (props: IconProps) => {

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
          <Path  d="M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2m-4 0h-4a2 2 0 0 1 -2 -2v-4" />
          <Path  d="M12 2v2" />
          <Path  d="M9 12v9" />
          <Path  d="M15 15v6" />
          <Path  d="M5 16l4 -2" />
          <Path  d="M9 18h6" />
          <Path  d="M14 8v.01" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

