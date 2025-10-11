

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaAlignCenterSolid = (props: IconProps) => {

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
          <Path d="M 3 7 L 3 9 L 29 9 L 29 7 Z M 7 11 L 7 13 L 25 13 L 25 11 Z M 3 15 L 3 17 L 29 17 L 29 15 Z M 7 19 L 7 21 L 25 21 L 25 19 Z M 3 23 L 3 25 L 29 25 L 29 23 Z" />
        </G>
      </Svg>
    );
  }

