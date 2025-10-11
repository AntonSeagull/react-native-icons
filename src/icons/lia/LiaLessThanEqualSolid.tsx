

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaLessThanEqualSolid = (props: IconProps) => {

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
          <Path  d="M 26 5 L 6 13.21875 L 6 14.78125 L 26 23 L 26 20.84375 L 9.46875 14 L 26 7.15625 Z M 6 25 L 6 27 L 26 27 L 26 25 Z" />
        </G>
      </Svg>
    );
  }

