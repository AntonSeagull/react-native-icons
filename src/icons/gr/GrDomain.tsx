

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDomain = (props: IconProps) => {

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
          <Path d="M13,3 L13,7 L13,3 Z M9,3 L9,7 L9,3 Z M5,3 L5,7 L5,3 Z M1,7 L23,7 L1,7 Z M1,21 L23,21 L23,3 L1,3 L1,21 Z" fill="none" />
        </G>
      </Svg>
    );
  }

