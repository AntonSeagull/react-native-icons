

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSidebarRight = (props: IconProps) => {

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
          <Path d="M3 4H17V20H3V4ZM5 6H15V18H5V6Z" fill="currentColor" />
          <Path d="M21 4H19V20H21V4Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

