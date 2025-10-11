

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbViewportShort = (props: IconProps) => {

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
          <Path d="M12 3v7l3 -3" />
          <Path d="M9 7l3 3" />
          <Path d="M12 21v-7l3 3" />
          <Path d="M9 17l3 -3" />
          <Path d="M18 9h1a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-1" />
          <Path d="M6 9h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1" />
        </G>
      </Svg>
    );
  }

