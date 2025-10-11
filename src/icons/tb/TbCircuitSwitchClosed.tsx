

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircuitSwitchClosed = (props: IconProps) => {

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
          <Path d="M2 12h2" />
          <Path d="M20 12h2" />
          <Path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M8 12h8" />
        </G>
      </Svg>
    );
  }

