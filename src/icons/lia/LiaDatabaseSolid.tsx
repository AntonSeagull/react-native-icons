

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaDatabaseSolid = (props: IconProps) => {

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
          <Path  d="M 6 4 L 6 28 L 26 28 L 26 4 Z M 8 6 L 24 6 L 24 11 L 8 11 Z M 8 13 L 24 13 L 24 19 L 8 19 Z M 8 21 L 24 21 L 24 26 L 8 26 Z" />
        </G>
      </Svg>
    );
  }

