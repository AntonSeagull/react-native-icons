

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNumber10Small = (props: IconProps) => {

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
          <Path d="M8 8h1v8" />
          <Path d="M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
        </G>
      </Svg>
    );
  }

