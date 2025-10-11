

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaTrello = (props: IconProps) => {

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
          <Path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 15 7 L 15 21 L 7 21 Z M 17 7 L 25 7 L 25 16 L 17 16 Z" />
        </G>
      </Svg>
    );
  }

