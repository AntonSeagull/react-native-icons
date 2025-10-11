

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowUpFromArc = (props: IconProps) => {

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
          <Path d="M12 9v12" />
          <Path d="M8 17l4 4l4 -4" />
          <Path d="M21 12a9 9 0 0 0 -18 0" />
        </G>
      </Svg>
    );
  }

