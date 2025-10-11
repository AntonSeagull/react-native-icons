

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCopyleftOff = (props: IconProps) => {

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
          <Path d="M13.303 9.3a3.01 3.01 0 0 1 1.405 1.406m-.586 3.413a3.016 3.016 0 0 1 -4.122 .131" />
          <Path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

