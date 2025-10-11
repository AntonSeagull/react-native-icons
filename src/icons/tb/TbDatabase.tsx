

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDatabase = (props: IconProps) => {

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
          <Path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
          <Path d="M4 6v6a8 3 0 0 0 16 0v-6" />
          <Path d="M4 12v6a8 3 0 0 0 16 0v-6" />
        </G>
      </Svg>
    );
  }

