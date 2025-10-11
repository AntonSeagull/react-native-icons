

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSpaceOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4 10v3a1 1 0 0 0 1 1h9m4 0h1a1 1 0 0 0 1 -1v-3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

