

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiStarFourThin = (props: IconProps) => {

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
          <Path  d="M228.13,116.77,162.94,93.06,139.23,27.87a11.95,11.95,0,0,0-22.46,0L93.06,93.06,27.87,116.77a11.95,11.95,0,0,0,0,22.46l65.19,23.71,23.71,65.19a11.95,11.95,0,0,0,22.46,0l23.71-65.19,65.19-23.71a11.95,11.95,0,0,0,0-22.46Zm-2.73,15-67,24.34a4,4,0,0,0-2.39,2.39l-24.34,67a4,4,0,0,1-7.44,0l-24.34-67a4,4,0,0,0-2.39-2.39L30.6,131.72a4,4,0,0,1,0-7.44L97.55,99.94a4,4,0,0,0,2.39-2.39L124.28,30.6a4,4,0,0,1,7.44,0l24.34,66.95a4,4,0,0,0,2.39,2.39l67,24.34a4,4,0,0,1,0,7.44Z" />
        </G>
      </Svg>
    );
  }

