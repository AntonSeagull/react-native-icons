

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSwipeLeft = (props: IconProps) => {

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
          <Path d="M20 12a4 4 0 1 0 -8 0a4 4 0 0 0 8 0z" />
          <Path d="M12 12h-8" />
          <Path d="M7 15l-3 -3l3 -3" />
        </G>
      </Svg>
    );
  }

