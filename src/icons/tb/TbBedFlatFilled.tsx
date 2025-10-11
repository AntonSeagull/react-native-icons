

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBedFlatFilled = (props: IconProps) => {

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
          <Path d="M5 8a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
          <Path d="M18 7a4 4 0 0 1 4 4v2a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1z" />
          <Path d="M21 15a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2z" />
        </G>
      </Svg>
    );
  }

