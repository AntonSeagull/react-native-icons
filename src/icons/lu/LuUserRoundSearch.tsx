

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuUserRoundSearch = (props: IconProps) => {

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
          <Circle  cx="10" cy="8" r="5" />
          <Circle  cx="18" cy="18" r="3" />
          <Path  d="M2 21a8 8 0 0 1 10.434-7.62" />
          <Path  d="m22 22-1.9-1.9" />
        </G>
      </Svg>
    );
  }

