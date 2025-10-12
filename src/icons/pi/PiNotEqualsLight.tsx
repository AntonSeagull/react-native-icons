

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNotEqualsLight = (props: IconProps) => {

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
          <Path  d="M222,160a6,6,0,0,1-6,6H101.56L52.44,220A6,6,0,1,1,43.56,212l41.79-46H40a6,6,0,0,1,0-12H96.25l47.28-52H40a6,6,0,0,1,0-12H154.44l49.12-54A6,6,0,1,1,212.44,44L170.65,90H216a6,6,0,0,1,0,12H159.75l-47.28,52H216A6,6,0,0,1,222,160Z" />
        </G>
      </Svg>
    );
  }

