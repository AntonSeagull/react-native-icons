

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imu4 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 22 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 11, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0 3h14v3h-14v-3zM0 7h14v3h-14v-3zM0 11h14v3h-14v-3z" />
          <Path  d="M15.5 10l3-3 3 3z" />
        </G>
      </Svg>
    );
  }

