

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTableOptions = (props: IconProps) => {

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
          <Path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
          <Path d="M3 10h18" />
          <Path d="M10 3v18" />
          <Path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M19.001 15.5v1.5" />
          <Path d="M19.001 21v1.5" />
          <Path d="M22.032 17.25l-1.299 .75" />
          <Path d="M17.27 20l-1.3 .75" />
          <Path d="M15.97 17.25l1.3 .75" />
          <Path d="M20.733 20l1.3 .75" />
        </G>
      </Svg>
    );
  }

