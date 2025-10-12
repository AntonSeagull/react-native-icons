

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBlinds = (props: IconProps) => {

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
          <Circle  cx="4" cy="19" r="2" />
          <Path  d="M3 3h18" />
          <Path  d="M20 7H8" />
          <Path  d="M20 11H8" />
          <Path  d="M10 19h10" />
          <Path  d="M8 15h12" />
          <Path  d="M4 3v14" />
        </G>
      </Svg>
    );
  }

