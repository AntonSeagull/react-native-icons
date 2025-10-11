

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCodeAsterisk = (props: IconProps) => {

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
          <Path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
          <Path d="M12 11.875l3 -1.687" />
          <Path d="M12 11.875v3.375" />
          <Path d="M12 11.875l-3 -1.687" />
          <Path d="M12 11.875l3 1.688" />
          <Path d="M12 8.5v3.375" />
          <Path d="M12 11.875l-3 1.688" />
          <Path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
        </G>
      </Svg>
    );
  }

