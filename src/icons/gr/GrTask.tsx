

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrTask = (props: IconProps) => {

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
          <Path d="M12,20 L24,20 M12,12 L24,12 M12,4 L24,4 M1,19 L4,22 L9,17 M1,11 L4,14 L9,9 M9,1 L4,6 L1,3" fill="none" />
        </G>
      </Svg>
    );
  }

