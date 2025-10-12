

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPanelLeftRightDashed = (props: IconProps) => {

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
          <Path  d="M15 10V9" />
          <Path  d="M15 15v-1" />
          <Path  d="M15 21v-2" />
          <Path  d="M15 5V3" />
          <Path  d="M9 10V9" />
          <Path  d="M9 15v-1" />
          <Path  d="M9 21v-2" />
          <Path  d="M9 5V3" />
        </G>
      </Svg>
    );
  }

