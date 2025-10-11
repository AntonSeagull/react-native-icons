

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBicycleOutline = (props: IconProps) => {

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
          <Path  d="M388,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M124,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M320,136a31.89,31.89,0,0,0,32-32.1A31.55,31.55,0,0,0,320.2,72a32,32,0,1,0-.2,64Z" />
        </G>
      </Svg>
    );
  }

