

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowLeftToArc = (props: IconProps) => {

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
          <Path d="M21 12h-12" />
          <Path d="M13 16l-4 -4l4 -4" />
          <Path d="M12 3a9 9 0 1 0 0 18" />
        </G>
      </Svg>
    );
  }

