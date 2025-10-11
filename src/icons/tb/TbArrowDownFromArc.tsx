

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowDownFromArc = (props: IconProps) => {

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
          <Path d="M12 15v-12" />
          <Path d="M16 7l-4 -4l-4 4" />
          <Path d="M3 12a9 9 0 0 0 18 0" />
        </G>
      </Svg>
    );
  }

