

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNumber70Small = (props: IconProps) => {

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
          <Path d="M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
          <Path d="M6 8h4l-2 8" />
        </G>
      </Svg>
    );
  }

