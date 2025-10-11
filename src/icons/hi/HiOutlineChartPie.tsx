

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiOutlineChartPie = (props: IconProps) => {

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
          <Path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <Path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </G>
      </Svg>
    );
  }

