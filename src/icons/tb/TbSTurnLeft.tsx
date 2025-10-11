

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSTurnLeft = (props: IconProps) => {

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
          <Path d="M19 7a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" />
          <Path d="M17 5h-9.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7h-13.5" />
          <Path d="M6 16l-3 3l3 3" />
        </G>
      </Svg>
    );
  }

