

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBleachOff = (props: IconProps) => {

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
          <Path d="M5 19h14m1.986 -1.977a2 2 0 0 0 -.146 -.773l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.815 1.405m-1.488 2.568l-4.797 8.277a2 2 0 0 0 1.75 2.75" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

