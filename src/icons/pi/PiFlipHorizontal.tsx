

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFlipHorizontal = (props: IconProps) => {

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
          <Path  d="M107.18,24.33a15.86,15.86,0,0,0-17.92,9.45l-.06.14-64,159.93A16,16,0,0,0,40,216h64a16,16,0,0,0,16-16V40A15.85,15.85,0,0,0,107.18,24.33ZM104,200H40l.06-.15L104,40Zm126.77-6.15-64-159.93-.06-.14A16,16,0,0,0,136,40V200a16,16,0,0,0,16,16h64a16,16,0,0,0,14.78-22.15ZM152,200V40l63.93,159.84.06.15Z" />
        </G>
      </Svg>
    );
  }

