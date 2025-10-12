

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaSignSolid = (props: IconProps) => {

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
          <Path  d="M 6 4 L 6 6 L 4 6 L 4 8 L 6 8 L 6 28 L 8 28 L 8 8 L 28 8 L 28 6 L 8 6 L 8 4 L 6 4 z M 10 10 L 10 22 L 26 22 L 26 10 L 10 10 z M 12 12 L 24 12 L 24 20 L 12 20 L 12 12 z" />
        </G>
      </Svg>
    );
  }

