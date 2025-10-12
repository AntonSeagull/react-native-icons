

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLessThanOrEqualDuotone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M200,48V160L48,104Z" opacity="0.2" />
          <Path  d="M40,104a8,8,0,0,1,5.23-7.5l152-56a8,8,0,0,1,5.53,15L71.14,104l131.62,48.49A8,8,0,0,1,200,168a8.13,8.13,0,0,1-2.77-.49l-152-56A8,8,0,0,1,40,104Zm160,88H48a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16Z" />
        </G>
      </Svg>
    );
  }

