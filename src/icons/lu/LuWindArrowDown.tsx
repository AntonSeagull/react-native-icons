

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuWindArrowDown = (props: IconProps) => {

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
          <Path d="M10 2v8" />
          <Path d="M12.8 21.6A2 2 0 1 0 14 18H2" />
          <Path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
          <Path d="m6 6 4 4 4-4" />
        </G>
      </Svg>
    );
  }

