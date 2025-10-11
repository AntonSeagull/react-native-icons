

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartSankey = (props: IconProps) => {

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
          <Path d="M3 6h18" />
          <Path d="M3 8c10 0 8 9 18 9" />
        </G>
      </Svg>
    );
  }

