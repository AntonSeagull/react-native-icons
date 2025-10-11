

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imoo = (props: IconProps) => {

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
          <Path d="M8.878 9.203v0c1.759-3.088 4.666-8.125 5.463-9.203-0.35 0.234-0.887 0.353-1.381 0.466l-0.747-0.466c-0.6 1.119-2.813 4.734-4.222 7.050-1.428-2.366-3.119-5.097-4.222-7.050-0.875 0.188-1.237 0.197-2.109 0v0 0c0 0 0 0 0 0v0c1.731 2.606 4.503 7.572 5.447 9.203v0l-0.128 6.797 1.013-0.466v-0.012l1.012 0.478-0.125-6.797z" fill="#000000" />
        </G>
      </Svg>
    );
  }

