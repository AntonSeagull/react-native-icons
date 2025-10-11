

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiMenuUnfoldFill = (props: IconProps) => {

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
          <Path d="M21 17.9996V19.9996H3V17.9996H21ZM17 3.5L22 8.49955L17 13.5V3.5ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z" />
        </G>
      </Svg>
    );
  }

