

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiMerge = (props: IconProps) => {

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
          <Path d="M14 3H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
          <Path d="M21 19v-9a2 2 0 0 0-2-2h-1v8a2 2 0 0 1-2 2H8v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2z" />
        </G>
      </Svg>
    );
  }

