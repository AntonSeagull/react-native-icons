

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDoorExit = (props: IconProps) => {

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
          <Path d="M13 12v.01" />
          <Path d="M3 21h18" />
          <Path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />
          <Path d="M14 7h7m-3 -3l3 3l-3 3" />
        </G>
      </Svg>
    );
  }

