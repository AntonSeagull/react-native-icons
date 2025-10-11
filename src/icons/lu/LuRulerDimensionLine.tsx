

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRulerDimensionLine = (props: IconProps) => {

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
          <Path d="M12 15v-3.014" />
          <Path d="M16 15v-3.014" />
          <Path d="M20 6H4" />
          <Path d="M20 8V4" />
          <Path d="M4 8V4" />
          <Path d="M8 15v-3.014" />
        </G>
      </Svg>
    );
  }

