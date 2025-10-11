

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuUnfoldVertical = (props: IconProps) => {

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
          <Path d="M12 22v-6" />
          <Path d="M12 8V2" />
          <Path d="M4 12H2" />
          <Path d="M10 12H8" />
          <Path d="M16 12h-2" />
          <Path d="M22 12h-2" />
          <Path d="m15 19-3 3-3-3" />
          <Path d="m15 5-3-3-3 3" />
        </G>
      </Svg>
    );
  }

