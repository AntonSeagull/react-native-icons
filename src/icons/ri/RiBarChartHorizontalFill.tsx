

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiBarChartHorizontalFill = (props: IconProps) => {

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
          <Path d="M12 3V7H3V3H12ZM16 17V21H3V17H16ZM22 10V14H3V10H22Z" />
        </G>
      </Svg>
    );
  }

