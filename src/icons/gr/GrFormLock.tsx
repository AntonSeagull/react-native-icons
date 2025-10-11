

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFormLock = (props: IconProps) => {

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
          <Path d="M9,11 C9,11 9,8 9,8 C9,6.34314575 10.3431458,5 12,5 C13.6568542,5 15,6.34314575 15,8 L15,11 M12,13 L12,16 M17,18 L17,11 L7,11 L7,18 L17,18 Z" fill="none" />
        </G>
      </Svg>
    );
  }

