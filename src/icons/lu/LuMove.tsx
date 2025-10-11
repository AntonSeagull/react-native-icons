

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMove = (props: IconProps) => {

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
          <Path d="M12 2v20" />
          <Path d="m15 19-3 3-3-3" />
          <Path d="m19 9 3 3-3 3" />
          <Path d="M2 12h20" />
          <Path d="m5 9-3 3 3 3" />
          <Path d="m9 5 3-3 3 3" />
        </G>
      </Svg>
    );
  }

