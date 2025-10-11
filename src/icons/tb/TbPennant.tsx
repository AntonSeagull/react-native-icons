

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPennant = (props: IconProps) => {

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
          <Path d="M8 21l4 0" />
          <Path d="M10 21l0 -18" />
          <Path d="M10 4l9 4l-9 4" />
        </G>
      </Svg>
    );
  }

