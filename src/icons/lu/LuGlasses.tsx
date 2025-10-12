

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGlasses = (props: IconProps) => {

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
          <Circle  cx="6" cy="15" r="4" />
          <Circle  cx="18" cy="15" r="4" />
          <Path  d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
          <Path  d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
          <Path  d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
        </G>
      </Svg>
    );
  }

