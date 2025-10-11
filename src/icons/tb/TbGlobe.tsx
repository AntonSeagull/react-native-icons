

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGlobe = (props: IconProps) => {

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
          <Path  d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <Path  d="M5.75 15a8.015 8.015 0 1 0 9.25 -13" />
          <Path  d="M11 17v4" />
          <Path  d="M7 21h8" />
        </G>
      </Svg>
    );
  }

