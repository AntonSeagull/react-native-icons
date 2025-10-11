

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuQrCode = (props: IconProps) => {

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
          <Path d="M21 16h-3a2 2 0 0 0-2 2v3" />
          <Path d="M21 21v.01" />
          <Path d="M12 7v3a2 2 0 0 1-2 2H7" />
          <Path d="M3 12h.01" />
          <Path d="M12 3h.01" />
          <Path d="M12 16v.01" />
          <Path d="M16 12h1" />
          <Path d="M21 12v.01" />
          <Path d="M12 21v-1" />
        </G>
      </Svg>
    );
  }

