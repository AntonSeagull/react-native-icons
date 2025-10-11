

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlayVolleyball = (props: IconProps) => {

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
          <Path d="M13 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path d="M20.5 10a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" />
          <Path d="M2 16l5 1l.5 -2.5" />
          <Path d="M11.5 21l2.5 -5.5l-5.5 -3.5l3.5 -4l3 4l4 2" />
        </G>
      </Svg>
    );
  }

