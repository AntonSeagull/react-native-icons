

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandUnity = (props: IconProps) => {

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
          <Path d="M14 3l6 4v7" />
          <Path d="M18 17l-6 4l-6 -4" />
          <Path d="M4 14v-7l6 -4" />
          <Path d="M4 7l8 5v9" />
          <Path d="M20 7l-8 5" />
        </G>
      </Svg>
    );
  }

