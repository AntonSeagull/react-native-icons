

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMenu = (props: IconProps) => {

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
          <Line  x1="88" y1="152" x2="424" y2="152" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48px" />
          <Line  x1="88" y1="256" x2="424" y2="256" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48px" />
          <Line  x1="88" y1="360" x2="424" y2="360" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48px" />
        </G>
      </Svg>
    );
  }

