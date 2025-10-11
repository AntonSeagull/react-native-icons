

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartDots = (props: IconProps) => {

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
          <Path d="M3 3v18h18" />
          <Path d="M9 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M19 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M10.16 10.62l2.34 2.88" />
          <Path d="M15.088 13.328l2.837 -4.586" />
        </G>
      </Svg>
    );
  }

