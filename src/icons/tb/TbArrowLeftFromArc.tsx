

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowLeftFromArc = (props: IconProps) => {

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
          <Path d="M9 12h12" />
          <Path d="M17 16l4 -4l-4 -4" />
          <Path d="M12 3a9 9 0 1 0 0 18" />
        </G>
      </Svg>
    );
  }

