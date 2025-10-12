

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiRepeat = (props: IconProps) => {

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
          <Polyline  points="17 1 21 5 17 9" />
          <Polyline  points="7 23 3 19 7 15" />
          <Path  d="M3 11V9a4 4 0 0 1 4-4h14" />
          <Path  d="M21 13v2a4 4 0 0 1-4 4H3" />
        </G>
      </Svg>
    );
  }

