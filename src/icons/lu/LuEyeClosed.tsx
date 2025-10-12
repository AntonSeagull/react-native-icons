

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuEyeClosed = (props: IconProps) => {

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
          <Path  d="m15 18-.722-3.25" />
          <Path  d="M2 8a10.645 10.645 0 0 0 20 0" />
          <Path  d="m20 15-1.726-2.05" />
          <Path  d="m4 15 1.726-2.05" />
          <Path  d="m9 18 .722-3.25" />
        </G>
      </Svg>
    );
  }

