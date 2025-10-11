

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBabyBottle = (props: IconProps) => {

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
          <Path d="M5 10h14" />
          <Path d="M12 2v2" />
          <Path d="M12 4a5 5 0 0 1 5 5v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-11a5 5 0 0 1 5 -5z" />
        </G>
      </Svg>
    );
  }

