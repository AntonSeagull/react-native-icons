

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgBorderBottom = (props: IconProps) => {

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
          <Path d="M8 8H16V15H19V5H5V15H8V8Z" fill="currentColor" />
          <Path d="M5 17H19V20H5V17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

