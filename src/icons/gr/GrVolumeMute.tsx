

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrVolumeMute = (props: IconProps) => {

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
          <Path d="M1,8 L1,16 L6.09901951,16 L12,21 L12,3 L6,8 L1,8 Z M15,9 L21,15 M21,9 L15,15" fill="none" />
        </G>
      </Svg>
    );
  }

