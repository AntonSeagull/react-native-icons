

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPerfume = (props: IconProps) => {

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
          <Path d="M10 6v3" />
          <Path d="M14 6v3" />
          <Path d="M5 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
          <Path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M9 3h6v3h-6z" />
        </G>
      </Svg>
    );
  }

