

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEyeglassOff = (props: IconProps) => {

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
          <Path  d="M5.536 5.546l-2.536 8.454" />
          <Path  d="M16 4h2l3 10" />
          <Path  d="M10 16h4" />
          <Path  d="M19.426 19.423a3.5 3.5 0 0 1 -5.426 -2.923v-2.5m4 0h3v2.5c0 .157 -.01 .312 -.03 .463" />
          <Path  d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

