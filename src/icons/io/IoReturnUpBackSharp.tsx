

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoReturnUpBackSharp = (props: IconProps) => {

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
          <Polyline  points="112 160 48 224 112 288" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Polyline  points="64 224 464 224 464 352" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

