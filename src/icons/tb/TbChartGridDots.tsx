

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartGridDots = (props: IconProps) => {

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
          <Path  d="M18 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M8 18h8" />
          <Path  d="M18 20v1" />
          <Path  d="M18 3v1" />
          <Path  d="M6 20v1" />
          <Path  d="M6 10v-7" />
          <Path  d="M12 3v18" />
          <Path  d="M18 8v8" />
          <Path  d="M8 12h13" />
          <Path  d="M21 6h-1" />
          <Path  d="M16 6h-13" />
          <Path  d="M3 12h1" />
          <Path  d="M20 18h1" />
          <Path  d="M3 18h1" />
          <Path  d="M6 14v2" />
        </G>
      </Svg>
    );
  }

