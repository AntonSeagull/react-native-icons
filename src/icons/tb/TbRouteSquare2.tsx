

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRouteSquare2 = (props: IconProps) => {

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
          <Path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
          <Path d="M3 17h4v4h-4z" />
          <Path d="M17 3h4v4h-4z" />
        </G>
      </Svg>
    );
  }

