

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrShield = (props: IconProps) => {

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
          <Path d="M12,22 C12,22 3,18 3,5 C3,5 12,2 12,2 C12,2 21,5 21,5 C21,18 12,22 12,22 Z M4,11 L20,11 M12,2 L12,22" fill="none" />
        </G>
      </Svg>
    );
  }

