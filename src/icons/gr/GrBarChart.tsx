

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrBarChart = (props: IconProps) => {

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
          <Path d="M0,22 L24,22 M22,2 L18,2 L18,18 L22,18 L22,2 Z M6,6 L2,6 L2,18 L6,18 L6,6 Z M14,18 L10,18 L10,10 L14,10 L14,18 Z" fill="none" />
        </G>
      </Svg>
    );
  }

