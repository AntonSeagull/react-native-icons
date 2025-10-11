

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSyringe = (props: IconProps) => {

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
          <Path d="m18 2 4 4" />
          <Path d="m17 7 3-3" />
          <Path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
          <Path d="m9 11 4 4" />
          <Path d="m5 19-3 3" />
          <Path d="m14 4 6 6" />
        </G>
      </Svg>
    );
  }

