

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartDots3 = (props: IconProps) => {

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
          <Path d="M5 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M16 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M6 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M9 17l5 -1.5" />
          <Path d="M6.5 8.5l7.81 5.37" />
          <Path d="M7 7l8 -1" />
        </G>
      </Svg>
    );
  }

