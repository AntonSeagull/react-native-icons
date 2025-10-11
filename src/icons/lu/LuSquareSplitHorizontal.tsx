

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSquareSplitHorizontal = (props: IconProps) => {

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
          <Path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" />
          <Path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" />
        </G>
      </Svg>
    );
  }

