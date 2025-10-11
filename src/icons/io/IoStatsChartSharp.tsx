

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoStatsChartSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M128,496H48V304h80Z" />
          <Path d="M352,496H272V208h80Z" />
          <Path d="M464,496H384V96h80Z" />
          <Path d="M240,496H160V16h80Z" />
        </G>
      </Svg>
    );
  }

