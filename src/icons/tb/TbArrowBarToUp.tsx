

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowBarToUp = (props: IconProps) => {

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
          <Path d="M12 10l0 10" />
          <Path d="M12 10l4 4" />
          <Path d="M12 10l-4 4" />
          <Path d="M4 4l16 0" />
        </G>
      </Svg>
    );
  }

