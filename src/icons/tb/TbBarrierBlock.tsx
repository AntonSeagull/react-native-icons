

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBarrierBlock = (props: IconProps) => {

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
          <Path  d="M4 7m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
          <Path  d="M7 16v4" />
          <Path  d="M7.5 16l9 -9" />
          <Path  d="M13.5 16l6.5 -6.5" />
          <Path  d="M4 13.5l6.5 -6.5" />
          <Path  d="M17 16v4" />
          <Path  d="M5 20h4" />
          <Path  d="M15 20h4" />
          <Path  d="M17 7v-2" />
          <Path  d="M7 7v-2" />
        </G>
      </Svg>
    );
  }

