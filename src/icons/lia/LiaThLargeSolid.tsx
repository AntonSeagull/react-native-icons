

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaThLargeSolid = (props: IconProps) => {

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
          <Path  d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 15 7 L 15 15 L 7 15 Z M 17 7 L 25 7 L 25 15 L 17 15 Z M 7 17 L 15 17 L 15 25 L 7 25 Z M 17 17 L 25 17 L 25 25 L 17 25 Z" />
        </G>
      </Svg>
    );
  }

