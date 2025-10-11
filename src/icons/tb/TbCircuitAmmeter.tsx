

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircuitAmmeter = (props: IconProps) => {

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
          <Path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <Path d="M5 12h-3" />
          <Path d="M19 12h3" />
          <Path d="M10 14v-3c0 -1.036 .895 -2 2 -2s2 .964 2 2v3" />
          <Path d="M14 12h-4" />
        </G>
      </Svg>
    );
  }

