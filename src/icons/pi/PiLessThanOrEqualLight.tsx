

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLessThanOrEqualLight = (props: IconProps) => {

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
          <Path  d="M42,104a6,6,0,0,1,3.93-5.63l152-56a6,6,0,1,1,4.15,11.26L65.36,104l136.71,50.37A6,6,0,0,1,200,166a6.09,6.09,0,0,1-2.08-.37l-152-56A6,6,0,0,1,42,104Zm158,90H48a6,6,0,0,0,0,12H200a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }

