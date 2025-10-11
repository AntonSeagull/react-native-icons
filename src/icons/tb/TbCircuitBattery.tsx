

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircuitBattery = (props: IconProps) => {

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
          <Path d="M2 12h4" />
          <Path d="M18 12h4" />
          <Path d="M18 5v14" />
          <Path d="M14 9v6" />
          <Path d="M10 5v14" />
          <Path d="M6 9v6" />
        </G>
      </Svg>
    );
  }

