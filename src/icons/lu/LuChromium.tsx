

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuChromium = (props: IconProps) => {

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
          <Path d="M10.88 21.94 15.46 14" />
          <Path d="M21.17 8H12" />
          <Path d="M3.95 6.06 8.54 14" />
        </G>
      </Svg>
    );
  }

