

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrYoga = (props: IconProps) => {

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
          <Path d="M12,11 L11,14 L12,17 L10.5,17 L9,14 L9.5,9.5 L12,11 Z M13,2 L9,6 L9,11 L9,14 L10,17 L6,17 L3,22 M20.5,22 L15.5,18.5 L12,17 L11,14 L12,11 L15.5,13 L15.5,18.5 M14,8.5 C13.4477153,8.5 13,8.05228475 13,7.5 C13,6.94771525 13.4477153,6.5 14,6.5 C14.5522847,6.5 15,6.94771525 15,7.5 C15,8.05228475 14.5522847,8.5 14,8.5 Z M11,10.5 L10,17 L10,13.5 L11,10.5 Z" fill="none" />
        </G>
      </Svg>
    );
  }

