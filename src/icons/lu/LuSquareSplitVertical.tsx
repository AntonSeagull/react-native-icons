

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSquareSplitVertical = (props: IconProps) => {

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
          <Path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" />
          <Path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" />
        </G>
      </Svg>
    );
  }

