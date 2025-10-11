

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRouteX2 = (props: IconProps) => {

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
          <Path d="M3 17l4 4" />
          <Path d="M7 17l-4 4" />
          <Path d="M17 3l4 4" />
          <Path d="M21 3l-4 4" />
          <Path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
        </G>
      </Svg>
    );
  }

