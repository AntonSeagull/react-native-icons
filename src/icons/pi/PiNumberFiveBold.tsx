

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberFiveBold = (props: IconProps) => {

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
          <Path  d="M180,160A60,60,0,0,1,80,204.72a12,12,0,1,1,16-17.88,36,36,0,1,0,.69-54.28,12,12,0,0,1-19.54-11.49L92.23,45.65A12,12,0,0,1,104,36h64a12,12,0,0,1,0,24H113.84l-8.36,41.79A60,60,0,0,1,180,160Z" />
        </G>
      </Svg>
    );
  }

