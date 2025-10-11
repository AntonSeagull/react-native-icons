

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrLock = (props: IconProps) => {

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
          <Path d="M19,23 L19,11 L5,11 L5,23 L19,23 Z M12,15 L12,19 M17,11 L17,7 C17,4 17,1 12,1 C7,1 7,4 7,7 L7,11" fill="none" />
        </G>
      </Svg>
    );
  }

