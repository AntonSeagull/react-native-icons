

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDesktop = (props: IconProps) => {

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
          <Path d="M1,1 L23,1 L23,19 L1,19 L1,1 Z M5,23 L19,23 L5,23 Z M10,19 L10,23 L10,19 Z M14,19 L14,23 L14,19 Z" fill="none" />
        </G>
      </Svg>
    );
  }

