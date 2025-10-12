

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoRepeatSharp = (props: IconProps) => {

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
          <Polyline  points="320 120 368 168 320 216" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Polyline  points="352 168 64 168 64 264" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Polyline  points="192 392 144 344 192 296" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Polyline  points="160 344 448 344 448 248" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

