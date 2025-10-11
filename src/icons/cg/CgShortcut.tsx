

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgShortcut = (props: IconProps) => {

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
          <Path d="M16.1925 7.70711C15.8019 7.31658 15.1688 7.31658 14.7782 7.70711L7.70718 14.7782C7.31665 15.1687 7.31665 15.8019 7.70718 16.1924C8.0977 16.5829 8.73087 16.5829 9.12139 16.1924L16.1925 9.12132C16.583 8.7308 16.583 8.09763 16.1925 7.70711Z" fill="currentColor" />
          <Path d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

