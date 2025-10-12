

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCylinderThin = (props: IconProps) => {

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
          <Path  d="M128,20C89.87,20,60,37.57,60,60V196c0,22.43,29.87,40,68,40s68-17.57,68-40V60C196,37.57,166.13,20,128,20Zm0,8c32.52,0,60,14.65,60,32s-27.48,32-60,32S68,77.35,68,60,95.48,28,128,28Zm60,168c0,17.35-27.48,32-60,32s-60-14.65-60-32V79.11C79.35,91.65,101.71,100,128,100s48.65-8.35,60-20.89Z" />
        </G>
      </Svg>
    );
  }

