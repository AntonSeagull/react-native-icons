

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNavigationSouth = (props: IconProps) => {

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
          <Path d="M10 8.25c0 .414 .336 .75 .75 .75h2.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h2.25a.75 .75 0 0 1 .75 .75" />
          <Path d="M16 21l-4 -8l-4 8l4 -2z" />
        </G>
      </Svg>
    );
  }

