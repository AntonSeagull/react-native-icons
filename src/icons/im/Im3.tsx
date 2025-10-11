

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Im3 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M2.381 0.758l-0.537 2.686h10.934l-0.342 1.735h-10.94l-0.53 2.686h10.933l-0.61 3.063-4.406 1.46-3.819-1.46 0.261-1.329h-2.686l-0.639 3.224 6.316 2.417 7.281-2.417 2.403-12.066z" fill="#000000" />
        </G>
      </Svg>
    );
  }

