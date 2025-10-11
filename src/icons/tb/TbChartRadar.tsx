

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartRadar = (props: IconProps) => {

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
          <Path d="M12 3l9.5 7l-3.5 11h-12l-3.5 -11z" />
          <Path d="M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z" />
          <Path d="M2.5 10l9.5 3l9.5 -3" />
          <Path d="M12 3v10l6 8" />
          <Path d="M6 21l6 -8" />
        </G>
      </Svg>
    );
  }

