

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircleArrowRight = (props: IconProps) => {

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
          <Path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
          <Path d="M16 12l-4 -4" />
          <Path d="M16 12h-8" />
          <Path d="M12 16l4 -4" />
        </G>
      </Svg>
    );
  }

