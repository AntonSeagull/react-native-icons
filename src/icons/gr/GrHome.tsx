

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrHome = (props: IconProps) => {

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
          <Path d="M1,11 L12,2 L23,11 M15,23 L15,15 L15,15 L9,15 L9,23 M4,23 L4,9 M20,23 L20,9" fill="none" />
        </G>
      </Svg>
    );
  }

