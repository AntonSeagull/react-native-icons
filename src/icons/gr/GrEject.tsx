

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrEject = (props: IconProps) => {

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
          <Path d="M21,14 L12,2 L3,14 L21,14 Z M2,22 L22,22 L22,18 L2,18 L2,22 Z" fill="none" />
        </G>
      </Svg>
    );
  }

