

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCompass = (props: IconProps) => {

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
          <Path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
          <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path d="M12 3l0 2" />
          <Path d="M12 19l0 2" />
          <Path d="M3 12l2 0" />
          <Path d="M19 12l2 0" />
        </G>
      </Svg>
    );
  }

