

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDirections = (props: IconProps) => {

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
          <Path d="M17,11 L22,6 L17,1 M22,6 L18,6 C14.686,6 12,8.686 12,12 L12,24 M7,6 L2,11 L7,16 M2,11 L6,11 C9.314,11 12,13.686 12,17 L12,24" fill="none" />
        </G>
      </Svg>
    );
  }

