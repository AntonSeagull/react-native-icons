

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPintGlassBold = (props: IconProps) => {

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
          <Path  d="M209,24a12,12,0,0,0-9-4H56A12,12,0,0,0,44.09,33.43l23.15,193A20,20,0,0,0,87.1,244h81.8a20,20,0,0,0,19.86-17.62L211.91,33.43A12,12,0,0,0,209,24ZM186.47,44l-1.92,16H71.45L69.53,44ZM165.35,220H90.65L74.33,84H181.67Z" />
        </G>
      </Svg>
    );
  }

