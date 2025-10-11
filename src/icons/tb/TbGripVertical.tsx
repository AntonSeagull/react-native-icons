

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGripVertical = (props: IconProps) => {

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
          <Path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </G>
      </Svg>
    );
  }

