

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiPulse = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M14.33 8l-1.876-4.377-3.438 9.783-4.015-13.11-2.37 7.704h-2.631v1h3.369l1.63-5.296 3.95 12.903 3.597-10.23 1.124 2.623h3.33v-1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

