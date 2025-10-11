

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaIndentSolid = (props: IconProps) => {

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
          <Path  d="M 3 7 L 3 9 L 29 9 L 29 7 Z M 3 11 L 3 13 L 22 13 L 22 11 Z M 29 11 L 24 16 L 29 21 Z M 3 15 L 3 17 L 22 17 L 22 15 Z M 3 19 L 3 21 L 22 21 L 22 19 Z M 3 23 L 3 25 L 29 25 L 29 23 Z" />
        </G>
      </Svg>
    );
  }

