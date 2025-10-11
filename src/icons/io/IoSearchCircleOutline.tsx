

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoSearchCircleOutline = (props: IconProps) => {

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
          <Line  x1="283.64" y1="283.64" x2="336" y2="336" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M232,160a72,72,0,1,0,72,72A72,72,0,0,0,232,160Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

