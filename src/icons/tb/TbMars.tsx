

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMars = (props: IconProps) => {

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
          <Path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <Path d="M19 5l-5.4 5.4" />
          <Path d="M19 5l-5 0" />
          <Path d="M19 5l0 5" />
        </G>
      </Svg>
    );
  }

