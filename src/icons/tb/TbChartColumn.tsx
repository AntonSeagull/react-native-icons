

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartColumn = (props: IconProps) => {

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
          <Path d="M4 20h3" />
          <Path d="M17 20h3" />
          <Path d="M10.5 20h3" />
          <Path d="M4 16h3" />
          <Path d="M17 16h3" />
          <Path d="M10.5 16h3" />
          <Path d="M4 12h3" />
          <Path d="M17 12h3" />
          <Path d="M10.5 12h3" />
          <Path d="M4 8h3" />
          <Path d="M17 8h3" />
          <Path d="M4 4h3" />
        </G>
      </Svg>
    );
  }

