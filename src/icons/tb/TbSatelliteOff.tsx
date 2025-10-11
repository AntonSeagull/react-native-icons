

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSatelliteOff = (props: IconProps) => {

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
          <Path  d="M7.707 3.707l5.586 5.586m-1.293 2.707l-1.293 1.293a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414l1.293 -1.293" />
          <Path  d="M6 10l-3 3l3 3l3 -3" />
          <Path  d="M10 6l3 -3l3 3l-3 3" />
          <Path  d="M12 12l1.5 1.5" />
          <Path  d="M14.5 17c.69 0 1.316 -.28 1.769 -.733" />
          <Path  d="M15 21c1.654 0 3.151 -.67 4.237 -1.752m1.507 -2.507a6 6 0 0 0 .256 -1.741" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

