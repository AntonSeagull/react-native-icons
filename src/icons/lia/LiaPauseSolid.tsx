

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaPauseSolid = (props: IconProps) => {

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
          <Path d="M 10 6 L 10 26 L 12 26 L 12 6 Z M 20 6 L 20 26 L 22 26 L 22 6 Z" />
        </G>
      </Svg>
    );
  }

