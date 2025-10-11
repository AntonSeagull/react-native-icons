

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartArrows = (props: IconProps) => {

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
          <Path  d="M3 18l14 0" />
          <Path  d="M9 9l3 3l-3 3" />
          <Path  d="M14 15l3 3l-3 3" />
          <Path  d="M3 3l0 18" />
          <Path  d="M3 12l9 0" />
          <Path  d="M18 3l3 3l-3 3" />
          <Path  d="M3 6l18 0" />
        </G>
      </Svg>
    );
  }

