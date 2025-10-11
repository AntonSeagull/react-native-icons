

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrIntegration = (props: IconProps) => {

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
          <Path d="M5,21 L23,21 L23,9 L5,9 M19,15 L1,15 L1,3 L19,3" fill="none" />
        </G>
      </Svg>
    );
  }

