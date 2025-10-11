

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrAlert = (props: IconProps) => {

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
          <Path d="M12,17 L12,19 M12,10 L12,16 M12,3 L2,22 L22,22 L12,3 Z" fill="none" />
        </G>
      </Svg>
    );
  }

