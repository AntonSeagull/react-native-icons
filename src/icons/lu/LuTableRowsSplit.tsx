

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTableRowsSplit = (props: IconProps) => {

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
          <Path d="M14 10h2" />
          <Path d="M15 22v-8" />
          <Path d="M15 2v4" />
          <Path d="M2 10h2" />
          <Path d="M20 10h2" />
          <Path d="M3 19h18" />
          <Path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" />
          <Path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" />
          <Path d="M8 10h2" />
          <Path d="M9 22v-8" />
          <Path d="M9 2v4" />
        </G>
      </Svg>
    );
  }

