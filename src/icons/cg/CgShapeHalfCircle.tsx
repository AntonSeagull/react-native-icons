

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgShapeHalfCircle = (props: IconProps) => {

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
          <Path d="M16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20V17C13.2386 17 11 14.7614 11 12C11 9.23858 13.2386 7 16 7V4Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

