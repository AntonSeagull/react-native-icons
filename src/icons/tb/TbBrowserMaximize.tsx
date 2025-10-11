

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrowserMaximize = (props: IconProps) => {

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
          <Path d="M4 8h8" />
          <Path d="M20 11.5v6.5a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6.5" />
          <Path d="M8 4v4" />
          <Path d="M16 8l5 -5" />
          <Path d="M21 7.5v-4.5h-4.5" />
        </G>
      </Svg>
    );
  }

