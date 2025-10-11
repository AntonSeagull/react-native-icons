

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLadderThin = (props: IconProps) => {

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
          <Path  d="M211.76,214.63,160.26,73,170.8,44H184a4,4,0,0,0,0-8H88a4,4,0,0,0,0,8H98.29l-62,170.63a4,4,0,0,0,2.39,5.13A4.16,4.16,0,0,0,40,220a4,4,0,0,0,3.76-2.63L54.44,188h55.49l-9.69,26.63a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,104,220a4,4,0,0,0,3.76-2.63L127.17,164h57.66l19.41,53.37A4,4,0,0,0,208,220a4.16,4.16,0,0,0,1.37-.24A4,4,0,0,0,211.76,214.63ZM130.29,132H74.8L89.35,92h55.48Zm32-88L147.74,84H92.26L106.8,44ZM57.35,180l14.54-40h55.49l-14.55,40Zm72.72-24L156,84.7,181.92,156Z" />
        </G>
      </Svg>
    );
  }

