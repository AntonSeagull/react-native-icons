

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrNewWindow = (props: IconProps) => {

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
          <Path d="M11,9 L19,9 M15,13 L15,5 M17,17 L17,23 L1,23 L1,7 L1,7 L7,7 M7,1 L23,1 L23,17 L7,17 L7,1 Z" fill="none" />
        </G>
      </Svg>
    );
  }

