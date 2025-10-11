

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFlag = (props: IconProps) => {

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
          <Path d="M2,24 L2,2 C10,-1.5238864 13,6.64375708 22,2 L22,14 C14,18.895222 9,9.89651097 2,14" fill="none" />
        </G>
      </Svg>
    );
  }

