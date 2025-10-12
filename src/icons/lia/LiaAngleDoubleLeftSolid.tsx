

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaAngleDoubleLeftSolid = (props: IconProps) => {

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
          <Path  d="M 15.90625 4.78125 L 4.6875 16 L 15.90625 27.21875 L 17.3125 25.78125 L 7.53125 16 L 17.3125 6.21875 Z M 22.90625 4.78125 L 11.6875 16 L 22.90625 27.21875 L 24.3125 25.78125 L 14.53125 16 L 24.3125 6.21875 Z" />
        </G>
      </Svg>
    );
  }

