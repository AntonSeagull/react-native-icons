

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
          <Path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
          <Path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </G>
      </Svg>
    );
  }

