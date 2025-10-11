

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBoldOff = (props: IconProps) => {

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
          <Path d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204m-3.222 .796h-5v-5" />
          <Path d="M17.107 17.112a3.5 3.5 0 0 1 -3.107 1.888h-7v-7" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

