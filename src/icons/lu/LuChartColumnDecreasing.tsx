

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuChartColumnDecreasing = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M13 17V9" />
          <Path  d="M18 17v-3" />
          <Path  d="M3 3v16a2 2 0 0 0 2 2h16" />
          <Path  d="M8 17V5" />
        </G>
      </Svg>
    );
  }

