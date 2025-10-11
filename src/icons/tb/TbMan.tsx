

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMan = (props: IconProps) => {

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
          <Path d="M10 16v5" />
          <Path d="M14 16v5" />
          <Path d="M9 9h6l-1 7h-4z" />
          <Path d="M5 11c1.333 -1.333 2.667 -2 4 -2" />
          <Path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2" />
          <Path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        </G>
      </Svg>
    );
  }

