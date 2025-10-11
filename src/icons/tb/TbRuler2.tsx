

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRuler2 = (props: IconProps) => {

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
          <Path d="M17 3l4 4l-14 14l-4 -4z" />
          <Path d="M16 7l-1.5 -1.5" />
          <Path d="M13 10l-1.5 -1.5" />
          <Path d="M10 13l-1.5 -1.5" />
          <Path d="M7 16l-1.5 -1.5" />
        </G>
      </Svg>
    );
  }

