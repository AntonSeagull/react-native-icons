

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrGrow = (props: IconProps) => {

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
          <Path d="M12,16 L12,7 M12.0000002,11 C12,8 12,5 5,5 C5,8 5,11 12.0000002,11 Z M4,16 L20,16 M18,16 L16,23 L8,23 L6,16 L6,16 M12,7 C12,4 12,1 19,1 C19,4 19,7 12,7 Z" fill="none" />
        </G>
      </Svg>
    );
  }

