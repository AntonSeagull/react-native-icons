

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPulseThin = (props: IconProps) => {

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
          <Path  d="M236,128a4,4,0,0,1-4,4H202.47l-38.89,77.79A4,4,0,0,1,160,212h-.2a4,4,0,0,1-3.54-2.58l-60.59-159-36,79.28A4,4,0,0,1,56,132H24a4,4,0,0,1,0-8H53.42L92.36,38.35a4,4,0,0,1,7.38.23L160.5,198.06l35.92-71.85A4,4,0,0,1,200,124h32A4,4,0,0,1,236,128Z" />
        </G>
      </Svg>
    );
  }

