

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaLevelUpAltSolid = (props: IconProps) => {

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
          <Path  d="M 17 4 L 16.28125 4.6875 L 7.78125 13.1875 L 9.21875 14.626953 L 16 7.84375 L 16 26 L 6 26 L 6 28 L 16 28 L 18 28 L 18 7.84375 L 24.78125 14.625 L 26.21875 13.1875 L 17.71875 4.6875 L 17 4 z" />
        </G>
      </Svg>
    );
  }

