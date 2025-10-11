

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrBriefcase = (props: IconProps) => {

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
          <Path d="M1,6 L23,6 L23,21 L1,21 L1,6 Z M6,6 L6,21 M18,6 L18,21 M8,6 L8,3 L16,3 L16,6" fill="none" />
        </G>
      </Svg>
    );
  }

