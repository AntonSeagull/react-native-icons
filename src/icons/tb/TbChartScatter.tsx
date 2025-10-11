

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartScatter = (props: IconProps) => {

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
          <Path  d="M3 3v18h18" />
          <Path  d="M8 15.015v.015" />
          <Path  d="M16 16.015v.015" />
          <Path  d="M8 7.03v.015" />
          <Path  d="M12 11.03v.015" />
          <Path  d="M19 11.03v.015" />
        </G>
      </Svg>
    );
  }

