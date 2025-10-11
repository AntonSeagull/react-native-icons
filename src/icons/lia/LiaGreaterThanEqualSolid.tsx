

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaGreaterThanEqualSolid = (props: IconProps) => {

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
          <Path  d="M 6 5 L 6 7.15625 L 22.53125 14 L 6 20.84375 L 6 23 L 26 14.78125 L 26 13.21875 Z M 6 25 L 6 27 L 26 27 L 26 25 Z" />
        </G>
      </Svg>
    );
  }

