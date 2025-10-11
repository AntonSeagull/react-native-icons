

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCheckboxSelected = (props: IconProps) => {

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
          <Path d="M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6" fill="none" />
        </G>
      </Svg>
    );
  }

