

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPexels = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12 5C12.7111 5 13.3875 5.14845 14 5.41604C15.7659 6.1876 17 7.94968 17 10C17 12.0503 15.7659 13.8124 14 14.584C13.3875 14.8516 12.7111 15 12 15V19H6V5H12ZM8 7V17H10V13H12L12.0032 12.9988C13.6427 13.0303 15.0746 11.6934 15.0443 9.95469L15.0375 9.56529C15.0121 8.10183 13.7882 6.94549 12.3257 7.00299L12.0203 7.00762L12 7H8Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

