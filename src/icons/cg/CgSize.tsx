

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSize = (props: IconProps) => {

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
          <Path d="M12 6V4H20V20H12V18H8V16H4V8H8V6H12ZM14 6H18V18H14V6ZM12 8H10V16H12V8ZM8 10V14H6V10H8Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

