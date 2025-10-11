

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWood = (props: IconProps) => {

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
          <Path d="M12 5.5m-6 0a6 2.5 0 1 0 12 0a6 2.5 0 1 0 -12 0" />
          <Path d="M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097 .108l-1.586 1.586v4c0 1.61 -2.54 2.925 -5.725 3l-.275 0c-3.314 0 -6 -1.343 -6 -3v-2l-1.586 -1.586a1.414 1.414 0 0 1 1.586 -2.287v-6.627" />
          <Path d="M10 12.5v1.5" />
          <Path d="M14 16v1" />
        </G>
      </Svg>
    );
  }

