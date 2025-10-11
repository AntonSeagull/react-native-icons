

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPillOff = (props: IconProps) => {

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
          <Path d="M10.495 6.505l2 -2a4.95 4.95 0 0 1 7 7l-2 2m-2 2l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" />
          <Path d="M8.5 8.5l7 7" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

