

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCut = (props: IconProps) => {

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
          <Path d="M23,4 L8,16 L23,4 Z M23,20 L8,8 L23,20 Z M5,9 C6.65685425,9 8,7.65685425 8,6 C8,4.34314575 6.65685425,3 5,3 C3.34314575,3 2,4.34314575 2,6 C2,7.65685425 3.34314575,9 5,9 Z M5,21 C6.65685425,21 8,19.6568542 8,18 C8,16.3431458 6.65685425,15 5,15 C3.34314575,15 2,16.3431458 2,18 C2,19.6568542 3.34314575,21 5,21 Z" fill="none" />
        </G>
      </Svg>
    );
  }

