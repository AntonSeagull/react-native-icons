

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowForwardCircleOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Line  x1="330.97" y1="256" x2="170" y2="256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

