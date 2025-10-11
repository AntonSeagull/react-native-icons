

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRemoveFormatting = (props: IconProps) => {

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
          <Path d="M4 7V4h16v3" />
          <Path d="M5 20h6" />
          <Path d="M13 4 8 20" />
          <Path d="m15 15 5 5" />
          <Path d="m20 15-5 5" />
        </G>
      </Svg>
    );
  }

