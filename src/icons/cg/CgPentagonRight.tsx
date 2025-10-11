

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPentagonRight = (props: IconProps) => {

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
          <Path d="M8 12L6 7H16L18 12L16 17H6L8 12ZM8.95407 15L10.1541 12L8.95407 9H14.6459L15.8459 12L14.6459 15H8.95407Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

