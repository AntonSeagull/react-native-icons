

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrPin = (props: IconProps) => {

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
          <Path d="M16,3 L10,9 C10,9 6,8 3,11 C3,11 13,21 13,21 C16,18 15,14 15,14 L21,8 L16,3 Z M1,23 L8,16 M14,1 L23,10" fill="none" />
        </G>
      </Svg>
    );
  }

