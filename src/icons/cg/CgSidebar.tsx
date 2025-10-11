

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSidebar = (props: IconProps) => {

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
          <Path d="M21 20H7V4H21V20ZM19 18H9V6H19V18Z" fill="currentColor" />
          <Path d="M3 20H5V4H3V20Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

