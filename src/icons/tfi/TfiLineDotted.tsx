

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLineDotted = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0 7.998h0.5v1h-0.5v-1zM2.383 8.999h0.941v-1h-0.941v1zM5.206 8.999h0.941v-1h-0.941v1zM10.854 9h0.941v-1h-0.941v1zM8.030 8.999h0.94v-0.999h-0.94v0.999zM13.677 9h0.941v-1h-0.941v1zM16.5 8v1h0.5v-1h-0.5z" />
        </G>
      </Svg>
    );
  }

