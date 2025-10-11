

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHash = (props: IconProps) => {

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
          <Path d="M5 9l14 0" />
          <Path d="M5 15l14 0" />
          <Path d="M11 4l-4 16" />
          <Path d="M17 4l-4 16" />
        </G>
      </Svg>
    );
  }

