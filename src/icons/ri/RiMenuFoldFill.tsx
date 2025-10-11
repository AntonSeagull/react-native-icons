

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiMenuFoldFill = (props: IconProps) => {

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
          <Path d="M21 17.9996V19.9996H3V17.9996H21ZM7 3.5V13.5L2 8.49955L7 3.5ZM21 10.9996V12.9996H12V10.9996H21ZM21 3.99955V5.99955H12V3.99955H21Z" />
        </G>
      </Svg>
    );
  }

