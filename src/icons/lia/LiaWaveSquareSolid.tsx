

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaWaveSquareSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 8 6 L 8 15 L 2 15 L 2 17 L 10 17 L 10 8 L 15 8 L 15 26 L 24 26 L 24 17 L 30 17 L 30 15 L 22 15 L 22 24 L 17 24 L 17 6 L 8 6 z" />
        </G>
      </Svg>
    );
  }

