

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCastle = (props: IconProps) => {

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
          <Path d="M10 5V3" />
          <Path d="M14 5V3" />
          <Path d="M15 21v-3a3 3 0 0 0-6 0v3" />
          <Path d="M18 3v8" />
          <Path d="M18 5H6" />
          <Path d="M22 11H2" />
          <Path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" />
          <Path d="M6 3v8" />
        </G>
      </Svg>
    );
  }

