

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgVercel = (props: IconProps) => {

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
          <Path d="M17.9923 17.0225L11.9806 6.97729L6.00775 17.0225H17.9923Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

