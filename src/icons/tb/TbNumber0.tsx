

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNumber0 = (props: IconProps) => {

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
          <Path d="M16 16v-8" />
          <Path d="M12 20a4 4 0 0 0 4 -4v-8a4 4 0 1 0 -8 0v8a4 4 0 0 0 4 4z" />
        </G>
      </Svg>
    );
  }

