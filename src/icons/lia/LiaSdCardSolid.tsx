

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaSdCardSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M 9.5 5 L 9.1875 5.40625 L 6 9.65625 L 6 27 L 25 27 L 25 5 Z M 10.5 7 L 23 7 L 23 25 L 8 25 L 8 10.34375 Z M 13 9 L 13 13 L 15 13 L 15 9 Z M 16 9 L 16 13 L 18 13 L 18 9 Z M 19 9 L 19 13 L 21 13 L 21 9 Z M 10 10 L 10 14 L 12 14 L 12 10 Z" />
        </G>
      </Svg>
    );
  }

