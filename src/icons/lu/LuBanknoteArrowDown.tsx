

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBanknoteArrowDown = (props: IconProps) => {

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
          <Path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
          <Path d="m16 19 3 3 3-3" />
          <Path d="M18 12h.01" />
          <Path d="M19 16v6" />
          <Path d="M6 12h.01" />
        </G>
      </Svg>
    );
  }

