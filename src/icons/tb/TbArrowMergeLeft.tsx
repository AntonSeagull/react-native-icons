

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowMergeLeft = (props: IconProps) => {

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
          <Path d="M8 8l4 -4l4 4" />
          <Path d="M12 20v-16" />
          <Path d="M6 18c4 -1.333 6 -4.667 6 -10" />
        </G>
      </Svg>
    );
  }

