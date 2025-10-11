

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTornado = (props: IconProps) => {

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
          <Path d="M21 4l-18 0" />
          <Path d="M13 16l-6 0" />
          <Path d="M11 20l4 0" />
          <Path d="M6 8l14 0" />
          <Path d="M4 12l12 0" />
        </G>
      </Svg>
    );
  }

