

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsLeft = (props: IconProps) => {

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
          <Path d="M3 7l18 0" />
          <Path d="M6 20l-3 -3l3 -3" />
          <Path d="M6 4l-3 3l3 3" />
          <Path d="M3 17l18 0" />
        </G>
      </Svg>
    );
  }

