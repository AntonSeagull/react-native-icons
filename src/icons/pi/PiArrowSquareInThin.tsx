

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowSquareInThin = (props: IconProps) => {

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
          <Path  d="M124,136v64a4,4,0,0,1-8,0V145.66L42.83,218.83a4,4,0,0,1-5.66-5.66L110.34,140H56a4,4,0,0,1,0-8h64A4,4,0,0,1,124,136ZM208,36H80A12,12,0,0,0,68,48V96a4,4,0,0,0,8,0V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4V176a4,4,0,0,1-4,4H160a4,4,0,0,0,0,8h48a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Z" />
        </G>
      </Svg>
    );
  }

