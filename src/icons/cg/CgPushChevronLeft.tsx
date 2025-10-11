

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPushChevronLeft = (props: IconProps) => {

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
          <Path d="M16.929 5L18.3432 6.41421L12.6863 12.0711L18.3432 17.7279L16.929 19.1421L9.85789 12.0711L16.929 5Z" fill="currentColor" />
          <Path d="M8 19V5H6V19H8Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

