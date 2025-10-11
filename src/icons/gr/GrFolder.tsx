

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFolder = (props: IconProps) => {

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
          <Path d="M2,10 L2,6 L2,2 L10,2 L13,6 L22,6 L22,10 L2,10 Z M2,10 L22,10 L22,22 L2,22 L2,10 Z" fill="none" />
        </G>
      </Svg>
    );
  }

