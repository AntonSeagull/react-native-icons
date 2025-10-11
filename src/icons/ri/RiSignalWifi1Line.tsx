

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiSignalWifi1Line = (props: IconProps) => {

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
          <Path d="M12.0005 3C16.2849 3 20.2196 4.49683 23.3104 6.99607L12.0005 21L0.689941 6.99671C3.78078 4.49709 7.71583 3 12.0005 3ZM12.0005 15C11.3072 15 10.6331 15.1174 10.0002 15.3409L12.0005 17.8169L13.9999 15.34C13.3705 15.12 12.6939 15 12.0005 15ZM12.0005 5C8.97296 5 6.07788 5.84185 3.57997 7.39179L8.68885 13.7155C9.69799 13.256 10.8194 13 12.0005 13C13.1818 13 14.3032 13.256 15.3123 13.7155L20.4204 7.39132C17.9226 5.84167 15.0278 5 12.0005 5Z" />
        </G>
      </Svg>
    );
  }

