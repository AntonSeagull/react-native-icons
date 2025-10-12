

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imhpin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M8.5 0l-1.5 1.5 1.5 1.5-3.5 4h-3.5l2.75 2.75-4.25 5.635v0.615h0.615l5.635-4.25 2.75 2.75v-3.5l4-3.5 1.5 1.5 1.5-1.5-7.5-7.5zM7 8.5l-1-1 3.5-3.5 1 1-3.5 3.5z" />
        </G>
      </Svg>
    );
  }

