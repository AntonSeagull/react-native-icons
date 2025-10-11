

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCandle = (props: IconProps) => {

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
          <Path d="M9 21h6v-10a1 1 0 0 0 -1 -1h-4a1 1 0 0 0 -1 1z" />
          <Path d="M12 2l1.465 1.638a2 2 0 1 1 -3.015 .099z" />
        </G>
      </Svg>
    );
  }

