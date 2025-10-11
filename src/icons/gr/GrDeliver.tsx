

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDeliver = (props: IconProps) => {

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
          <Path d="M3,18 L1,18 L1,3 L14,3 L14,17 M14,18 L9,18 M6,21 C7.65685425,21 9,19.6568542 9,18 C9,16.3431458 7.65685425,15 6,15 C4.34314575,15 3,16.3431458 3,18 C3,19.6568542 4.34314575,21 6,21 Z M17,21 C18.6568542,21 20,19.6568542 20,18 C20,16.3431458 18.6568542,15 17,15 C15.3431458,15 14,16.3431458 14,18 C14,19.6568542 15.3431458,21 17,21 Z M14,8 L19,8 L23,13 L23,18 L20,18" fill="none" />
        </G>
      </Svg>
    );
  }

