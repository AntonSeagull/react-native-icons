

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPushChevronUp = (props: IconProps) => {

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
          <Path d="M5 16.929L6.41421 18.3432L12.0711 12.6863L17.7279 18.3432L19.1421 16.929L12.0711 9.85789L5 16.929Z" fill="currentColor" />
          <Path d="M19 8H5V6H19V8Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

