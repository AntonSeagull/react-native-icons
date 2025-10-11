

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFocus2 = (props: IconProps) => {

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
          <Path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <Path d="M12 3l0 2" />
          <Path d="M3 12l2 0" />
          <Path d="M12 19l0 2" />
          <Path d="M19 12l2 0" />
        </G>
      </Svg>
    );
  }

