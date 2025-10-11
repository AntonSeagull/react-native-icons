

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartDots2 = (props: IconProps) => {

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
          <Path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M13 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M21 3l-6 1.5" />
          <Path d="M14.113 6.65l2.771 3.695" />
          <Path d="M16 12.5l-5 2" />
        </G>
      </Svg>
    );
  }

