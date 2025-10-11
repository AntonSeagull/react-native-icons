

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSplit = (props: IconProps) => {

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
          <Path d="M16 3h5v5" />
          <Path d="M8 3H3v5" />
          <Path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
          <Path d="m15 9 6-6" />
        </G>
      </Svg>
    );
  }

