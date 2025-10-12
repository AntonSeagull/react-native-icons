

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoSwapVerticalSharp = (props: IconProps) => {

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
          <Polyline  points="464 208 352 96 240 208" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Polyline  points="48 304 160 416 272 304" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="352" y1="113.13" x2="352" y2="416" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="160" y1="398" x2="160" y2="96" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

