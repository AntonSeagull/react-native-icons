

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartAreaLine = (props: IconProps) => {

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
          <Path d="M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
          <Path d="M4 12l3 -4l4 2l5 -6l4 4" />
        </G>
      </Svg>
    );
  }

