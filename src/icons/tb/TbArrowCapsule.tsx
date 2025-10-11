

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowCapsule = (props: IconProps) => {

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
          <Path d="M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2" />
          <Path d="M15 8l3 3l3 -3" />
        </G>
      </Svg>
    );
  }

