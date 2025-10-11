

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMaximize2 = (props: IconProps) => {

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
          <Path d="M15 3h6v6" />
          <Path d="m21 3-7 7" />
          <Path d="m3 21 7-7" />
          <Path d="M9 21H3v-6" />
        </G>
      </Svg>
    );
  }

