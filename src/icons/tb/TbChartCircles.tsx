

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartCircles = (props: IconProps) => {

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
          <Path  d="M9.5 9.5m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0" />
          <Path  d="M14.5 14.5m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0" />
        </G>
      </Svg>
    );
  }

