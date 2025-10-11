

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoStatsChartSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M128,496H48V304h80Z" />
          <Path  d="M352,496H272V208h80Z" />
          <Path  d="M464,496H384V96h80Z" />
          <Path  d="M240,496H160V16h80Z" />
        </G>
      </Svg>
    );
  }

