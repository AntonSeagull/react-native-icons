

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaWindowMaximize = (props: IconProps) => {

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
          <Path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 9 10 L 9 22 L 23 22 L 23 10 Z M 11 12 L 21 12 L 21 14 L 11 14 Z M 11 16 L 21 16 L 21 20 L 11 20 Z" />
        </G>
      </Svg>
    );
  }

