

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLinktreeLogoBold = (props: IconProps) => {

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
          <Path  d="M140,164v68a12,12,0,0,1-24,0V164a12,12,0,0,1,24,0Zm68-72H157l35.52-35.51a12,12,0,0,0-17-17L140,75V24a12,12,0,0,0-24,0V75L80.49,39.51a12,12,0,0,0-17,17L99,92H48a12,12,0,0,0,0,24H99L63.51,151.51a12,12,0,0,0,17,17L128,121l47.51,47.52a12,12,0,0,0,17-17L157,116h51a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

