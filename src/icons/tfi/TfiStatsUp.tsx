

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiStatsUp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M17 16v1h-17v-1h17zM5.203 7.976l4.204 3.026 5.593-6.251v2.284h1v-4.035h-4.036v1h2.366l-5.070 5.665-4.129-2.974-4.372 3.956 0.671 0.741 3.773-3.412z" fill="#000000" />
        </G>
      </Svg>
    );
  }

