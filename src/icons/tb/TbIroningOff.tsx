

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIroningOff = (props: IconProps) => {

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
          <Path d="M10 6h6.459a3 3 0 0 1 2.959 2.507l.577 3.464l.804 4.821l.007 .044m-2.806 1.164h-15a7 7 0 0 1 7 -7h1m4 0h4.8" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

