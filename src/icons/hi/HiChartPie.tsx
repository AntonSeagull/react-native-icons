

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiChartPie = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 20 20"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <Path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </G>
      </Svg>
    );
  }

