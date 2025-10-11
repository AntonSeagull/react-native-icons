

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSeparatorHorizontal = (props: IconProps) => {

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
          <Path d="m16 16-4 4-4-4" />
          <Path d="M3 12h18" />
          <Path d="m8 8 4-4 4 4" />
        </G>
      </Svg>
    );
  }

