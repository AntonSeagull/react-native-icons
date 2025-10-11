

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrManual = (props: IconProps) => {

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
          <Path d="M14,9 L14,17 L14,9 Z M10,9 L10,17 L10,9 Z M8,5 C8,7.209 9.791,9 12,9 C14.209,9 16,7.209 16,5 C16,2.791 14.209,1 12,1 C9.791,1 8,2.791 8,5 Z M4,23 L20,23 L20,20 L4,20 L4,23 Z M7,20 L17,20 L17,17 L7,17 L7,20 Z" fill="none" />
        </G>
      </Svg>
    );
  }

