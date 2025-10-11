

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartCovariate = (props: IconProps) => {

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
          <Path d="M18 11h.009" />
          <Path d="M14 15h.009" />
          <Path d="M12 6h.009" />
          <Path d="M8 10h.009" />
          <Path d="M3 21l17 -17" />
          <Path d="M3 3v18h18" />
        </G>
      </Svg>
    );
  }

