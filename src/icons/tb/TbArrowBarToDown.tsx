

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowBarToDown = (props: IconProps) => {

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
          <Path d="M4 20l16 0" />
          <Path d="M12 14l0 -10" />
          <Path d="M12 14l4 -4" />
          <Path d="M12 14l-4 -4" />
        </G>
      </Svg>
    );
  }

