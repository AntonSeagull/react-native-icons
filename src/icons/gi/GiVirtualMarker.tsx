

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiVirtualMarker = (props: IconProps) => {

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
          <Path d="M256 32L32 224h128l96-80 96 80h128L256 32zm0 176l-52 39H32v18h172l52 39 52-39h172v-18H308l-52-39zM32 288l224 192 224-192H352l-96 80-96-80H32z" fill="#000" />
        </G>
      </Svg>
    );
  }

