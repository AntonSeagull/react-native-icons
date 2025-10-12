

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuChromium = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="10" />
          <Circle  cx="12" cy="12" r="4" />
          <Path  d="M10.88 21.94 15.46 14" />
          <Path  d="M21.17 8H12" />
          <Path  d="M3.95 6.06 8.54 14" />
        </G>
      </Svg>
    );
  }

