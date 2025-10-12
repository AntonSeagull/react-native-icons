

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPictureInPictureBold = (props: IconProps) => {

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
          <Path  d="M216,44H40A20,20,0,0,0,20,64V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44ZM44,68H212v48H136a12,12,0,0,0-12,12v60H44ZM148,188V140h64v48Z" />
        </G>
      </Svg>
    );
  }

