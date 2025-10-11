

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrHost = (props: IconProps) => {

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
          <Path d="M17,4 L18,4 L18,5 L17,5 L17,4 Z M3,1 L21,1 L21,23 L3,23 L3,1 Z M3,13 L21,13 L3,13 Z M3,18 L21,18 L3,18 Z M3,8 L21,8 L3,8 Z" fill="none" />
        </G>
      </Svg>
    );
  }

