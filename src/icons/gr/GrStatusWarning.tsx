

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrStatusWarning = (props: IconProps) => {

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
          <Path d="M12,3 L22,21 L2,21 L12,3 Z M12,9 L12,15 M12,16 L12,18" fill="none" />
        </G>
      </Svg>
    );
  }

