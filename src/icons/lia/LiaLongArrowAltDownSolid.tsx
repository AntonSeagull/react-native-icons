

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaLongArrowAltDownSolid = (props: IconProps) => {

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
          <Path  d="M 15 4 L 15 24.0625 L 10.71875 19.78125 L 9.28125 21.1875 L 16 27.90625 L 22.71875 21.1875 L 21.28125 19.78125 L 17 24.0625 L 17 4 Z" />
        </G>
      </Svg>
    );
  }

