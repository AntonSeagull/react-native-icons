

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuChartBarDecreasing = (props: IconProps) => {

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
          <Path d="M3 3v16a2 2 0 0 0 2 2h16" />
          <Path d="M7 11h8" />
          <Path d="M7 16h3" />
          <Path d="M7 6h12" />
        </G>
      </Svg>
    );
  }

