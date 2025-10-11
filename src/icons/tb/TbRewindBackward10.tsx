

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRewindBackward10 = (props: IconProps) => {

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
          <Path d="M7 9l-3 -3l3 -3" />
          <Path d="M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11" />
          <Path d="M6 14v6" />
          <Path d="M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
        </G>
      </Svg>
    );
  }

