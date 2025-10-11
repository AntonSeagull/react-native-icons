

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrTip = (props: IconProps) => {

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
          <Path d="M16.0073529,18 L22,18 L22,2 L2,2 L2,18 L8.24264706,18 L12.125,22 L16.0073529,18 Z" fill="none" />
        </G>
      </Svg>
    );
  }

