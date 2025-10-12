

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPintGlassThin = (props: IconProps) => {

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
          <Path  d="M203,29.35A4,4,0,0,0,200,28H56a4,4,0,0,0-4,4.48l23.15,193A12,12,0,0,0,87.1,236h81.8a12,12,0,0,0,11.92-10.57L204,32.48A4,4,0,0,0,203,29.35ZM195.49,36l-3.84,32H64.35L60.51,36ZM172.87,224.48a4,4,0,0,1-4,3.52H87.1a4,4,0,0,1-4-3.52L65.31,76H190.69Z" />
        </G>
      </Svg>
    );
  }

