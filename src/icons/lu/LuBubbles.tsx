

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBubbles = (props: IconProps) => {

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
          <Circle  cx="18.5" cy="8.5" r="3.5" />
          <Circle  cx="7.5" cy="16.5" r="5.5" />
          <Circle  cx="7.5" cy="4.5" r="2.5" />
          <Path  d="M7.2 14.8a2 2 0 0 1 2 2" />
        </G>
      </Svg>
    );
  }

