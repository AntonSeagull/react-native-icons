

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaFlagSolid = (props: IconProps) => {

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
          <Path d="M 5 5 L 5 29 L 7 29 L 7 19 L 15 19 L 15 22 L 27 22 L 27 8 L 17 8 L 17 5 Z M 7 7 L 15 7 L 15 17 L 7 17 Z M 17 10 L 25 10 L 25 20 L 17 20 Z" />
        </G>
      </Svg>
    );
  }

