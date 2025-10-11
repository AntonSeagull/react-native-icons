

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrLogin = (props: IconProps) => {

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
          <Path d="M9,15 L9,22 L22,22 L22,2 L9,2 L9,9 M18,12 L0,12 M13,7 L18,12 L13,17" fill="none" />
        </G>
      </Svg>
    );
  }

