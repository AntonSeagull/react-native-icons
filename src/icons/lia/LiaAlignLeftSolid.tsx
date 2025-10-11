

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaAlignLeftSolid = (props: IconProps) => {

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
          <Path d="M 3 7 L 3 9 L 29 9 L 29 7 Z M 3 11 L 3 13 L 21 13 L 21 11 Z M 3 15 L 3 17 L 29 17 L 29 15 Z M 3 19 L 3 21 L 21 21 L 21 19 Z M 3 23 L 3 25 L 29 25 L 29 23 Z" />
        </G>
      </Svg>
    );
  }

