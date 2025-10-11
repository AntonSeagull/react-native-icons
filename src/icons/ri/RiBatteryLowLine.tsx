

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiBatteryLowLine = (props: IconProps) => {

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
          <Path d="M4 7V17H18V7H4ZM3 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5ZM5 8H9V16H5V8ZM21 9H23V15H21V9Z" />
        </G>
      </Svg>
    );
  }

