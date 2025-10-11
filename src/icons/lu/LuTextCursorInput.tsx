

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTextCursorInput = (props: IconProps) => {

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
          <Path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" />
          <Path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
          <Path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
          <Path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" />
          <Path d="M9 6v12" />
        </G>
      </Svg>
    );
  }

