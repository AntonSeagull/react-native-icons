

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGlass = (props: IconProps) => {

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
          <Path d="M8 21h8" />
          <Path d="M12 16v5" />
          <Path d="M17 5l1 6c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -6" />
          <Path d="M12 5m-5 0a5 2 0 1 0 10 0a5 2 0 1 0 -10 0" />
        </G>
      </Svg>
    );
  }

