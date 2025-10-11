

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFlipVertical2 = (props: IconProps) => {

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
          <Path  d="m17 3-5 5-5-5h10" />
          <Path  d="m17 21-5-5-5 5h10" />
          <Path  d="M4 12H2" />
          <Path  d="M10 12H8" />
          <Path  d="M16 12h-2" />
          <Path  d="M22 12h-2" />
        </G>
      </Svg>
    );
  }

