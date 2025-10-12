

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Impbox = (props: IconProps) => {

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
          <Path  d="M11.5 0.5l-3.5 3 4.5 3 3.5-3z" />
          <Path  d="M8 3.5l-3.5-3-4.5 3 3.5 3z" />
          <Path  d="M12.5 6.5l3.5 3-4.5 2.5-3.5-3z" />
          <Path  d="M8 9l-4.5-2.5-3.5 3 4.5 2.5z" />
          <Path  d="M11.377 13.212l-3.377-2.895-3.377 2.895-2.123-1.179v1.467l5.5 2.5 5.5-2.5v-1.467z" />
        </G>
      </Svg>
    );
  }

