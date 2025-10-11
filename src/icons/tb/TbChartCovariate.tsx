

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartCovariate = (props: IconProps) => {

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
          <Path  d="M18 11h.009" />
          <Path  d="M14 15h.009" />
          <Path  d="M12 6h.009" />
          <Path  d="M8 10h.009" />
          <Path  d="M3 21l17 -17" />
          <Path  d="M3 3v18h18" />
        </G>
      </Svg>
    );
  }

