

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSwipeRight = (props: IconProps) => {

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
          <Path d="M4 12a4 4 0 1 1 8 0a4 4 0 0 1 -8 0z" />
          <Path d="M12 12h8" />
          <Path d="M17 15l3 -3l-3 -3" />
        </G>
      </Svg>
    );
  }

