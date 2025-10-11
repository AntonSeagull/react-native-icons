

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRotateClockwise2 = (props: IconProps) => {

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
          <Path  d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
          <Path  d="M5.63 7.16l0 .01" />
          <Path  d="M4.06 11l0 .01" />
          <Path  d="M4.63 15.1l0 .01" />
          <Path  d="M7.16 18.37l0 .01" />
          <Path  d="M11 19.94l0 .01" />
        </G>
      </Svg>
    );
  }

