

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCopyrightOff = (props: IconProps) => {

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
          <Path d="M14 9.75a3.016 3.016 0 0 0 -.711 -.466m-3.41 .596a2.993 2.993 0 0 0 -.042 4.197a3.016 3.016 0 0 0 4.163 .173" />
          <Path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

