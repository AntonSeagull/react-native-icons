

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscChromeRestore = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3 5v9h9V5H3zm8 8H4V6h7v7z" />
          <Path d="M5 5h1V4h7v7h-1v1h2V3H5v2z" />
        </G>
      </Svg>
    );
  }

