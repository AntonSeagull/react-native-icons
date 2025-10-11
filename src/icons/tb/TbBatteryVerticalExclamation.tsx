

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBatteryVerticalExclamation = (props: IconProps) => {

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
          <Path d="M17 12v-5c0 -1.105 -.895 -2 -2 -2h-.5c-.276 0 -.5 -.224 -.5 -.5s-.224 -.5 -.5 -.5h-3c-.276 0 -.5 .224 -.5 .5s-.224 .5 -.5 .5h-.5c-1.105 0 -2 .895 -2 2v11c0 1.105 .895 2 2 2h6" />
          <Path d="M19 16v3" />
          <Path d="M19 22v.01" />
        </G>
      </Svg>
    );
  }

