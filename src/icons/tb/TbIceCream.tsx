

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIceCream = (props: IconProps) => {

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
          <Path d="M12 21.5v-4.5" />
          <Path d="M8 17h8v-10a4 4 0 1 0 -8 0v10z" />
          <Path d="M8 10.5l8 -3.5" />
          <Path d="M8 14.5l8 -3.5" />
        </G>
      </Svg>
    );
  }

