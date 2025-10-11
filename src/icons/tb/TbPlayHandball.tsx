

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlayHandball = (props: IconProps) => {

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
          <Path d="M13 21l3.5 -2l-4.5 -4l2 -4.5" />
          <Path d="M7 6l2 4l5 .5l4 2.5l2.5 3" />
          <Path d="M4 20l5 -1l1.5 -2" />
          <Path d="M15 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path d="M9.5 5a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

