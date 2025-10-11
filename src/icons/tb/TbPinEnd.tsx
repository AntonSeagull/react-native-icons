

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPinEnd = (props: IconProps) => {

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
          <Path d="M21 11v-5a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
          <Path d="M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M10 13v-4h4" />
          <Path d="M14 13l-4 -4" />
        </G>
      </Svg>
    );
  }

