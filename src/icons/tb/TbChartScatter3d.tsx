

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartScatter3d = (props: IconProps) => {

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
          <Path  d="M3 20l9 -7" />
          <Path  d="M12 3v10l9 7" />
          <Path  d="M17 12v.015" />
          <Path  d="M17 4.015v.015" />
          <Path  d="M21 8.015v.015" />
          <Path  d="M12 19.015v.015" />
          <Path  d="M3 12.015v.015" />
          <Path  d="M7 8.015v.015" />
          <Path  d="M3 4.015v.015" />
        </G>
      </Svg>
    );
  }

