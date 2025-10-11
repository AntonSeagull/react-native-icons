

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSnowflake = (props: IconProps) => {

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
          <Path  d="m10 20-1.25-2.5L6 18" />
          <Path  d="M10 4 8.75 6.5 6 6" />
          <Path  d="m14 20 1.25-2.5L18 18" />
          <Path  d="m14 4 1.25 2.5L18 6" />
          <Path  d="m17 21-3-6h-4" />
          <Path  d="m17 3-3 6 1.5 3" />
          <Path  d="M2 12h6.5L10 9" />
          <Path  d="m20 10-1.5 2 1.5 2" />
          <Path  d="M22 12h-6.5L14 15" />
          <Path  d="m4 10 1.5 2L4 14" />
          <Path  d="m7 21 3-6-1.5-3" />
          <Path  d="m7 3 3 6h4" />
        </G>
      </Svg>
    );
  }

