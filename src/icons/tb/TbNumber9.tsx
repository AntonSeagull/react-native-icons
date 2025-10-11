

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNumber9 = (props: IconProps) => {

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
          <Path d="M16 8a4 4 0 1 0 -8 0v1a4 4 0 1 0 8 0" />
          <Path d="M8 16a4 4 0 1 0 8 0v-8" />
        </G>
      </Svg>
    );
  }

