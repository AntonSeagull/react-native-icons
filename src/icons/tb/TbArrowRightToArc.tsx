

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRightToArc = (props: IconProps) => {

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
          <Path d="M3 12h12" />
          <Path d="M11 8l4 4l-4 4" />
          <Path d="M12 21a9 9 0 0 0 0 -18" />
        </G>
      </Svg>
    );
  }

