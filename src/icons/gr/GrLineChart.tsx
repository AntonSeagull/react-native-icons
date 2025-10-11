

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrLineChart = (props: IconProps) => {

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
          <Path d="M1,16 L8,9 L13,14 L23,4 M0,22 L23.999,22 M16,4 L23,4 L23,11" fill="none" />
        </G>
      </Svg>
    );
  }

