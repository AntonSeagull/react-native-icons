

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiQuickSlash = (props: IconProps) => {

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
          <Path d="M270.877 444.542C576.857 496.618 318.44 29.007 23.097 25.68 447.57-7.506 696.864 640.745 270.878 444.54z" fill="#000" />
        </G>
      </Svg>
    );
  }

