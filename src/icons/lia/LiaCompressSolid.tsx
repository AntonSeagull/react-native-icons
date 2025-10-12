

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaCompressSolid = (props: IconProps) => {

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
          <Path  d="M 11 4 L 11 11 L 4 11 L 4 13 L 13 13 L 13 4 L 11 4 z M 19 4 L 19 13 L 28 13 L 28 11 L 21 11 L 21 4 L 19 4 z M 4 19 L 4 21 L 11 21 L 11 28 L 13 28 L 13 19 L 4 19 z M 19 19 L 19 28 L 21 28 L 21 21 L 28 21 L 28 19 L 19 19 z" />
        </G>
      </Svg>
    );
  }

