

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNumber8 = (props: IconProps) => {

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
          <Path d="M12 8m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path d="M12 16m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        </G>
      </Svg>
    );
  }

