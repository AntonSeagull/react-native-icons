

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaOutdentSolid = (props: IconProps) => {

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
          <Path  d="M 3 7 L 3 9 L 16 9 L 16 7 Z M 3 11 L 3 13 L 23 13 L 23 11 Z M 25 11 L 25 21 L 30 16 Z M 3 15 L 3 17 L 23 17 L 23 15 Z M 3 19 L 3 21 L 23 21 L 23 19 Z M 3 23 L 3 25 L 16 25 L 16 23 Z" />
        </G>
      </Svg>
    );
  }

