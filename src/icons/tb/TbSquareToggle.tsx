

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSquareToggle = (props: IconProps) => {

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
          <Path d="M12 2l0 20" />
          <Path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
          <Path d="M20 6a2 2 0 0 0 -2 -2" />
          <Path d="M18 20a2 2 0 0 0 2 -2" />
          <Path d="M20 10l0 4" />
        </G>
      </Svg>
    );
  }

