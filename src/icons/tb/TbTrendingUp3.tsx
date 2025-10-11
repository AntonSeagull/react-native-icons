

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTrendingUp3 = (props: IconProps) => {

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
          <Path d="M18 5l3 3l-3 3" />
          <Path d="M3 18h2.397a5 5 0 0 0 4.096 -2.133l4.014 -5.734a5 5 0 0 1 4.096 -2.133h3.397" />
        </G>
      </Svg>
    );
  }

