

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiPlainArrow = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M130.81 21.785v245.95H43.84L256 489.382l212.158-221.644H381.19V21.786H130.81z" fill="#000" />
        </G>
      </Svg>
    );
  }

