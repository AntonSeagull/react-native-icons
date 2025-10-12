

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrThreeDEffects = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Polyline  fill="none" points="11 3 13 3 22 6 22 17 12 20.5 2 17 2 6.5 4 6 13 8.5 11 9 2 6.5" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

