

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHierarchyOff = (props: IconProps) => {

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
          <Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M17.585 17.587a2 2 0 0 0 2.813 2.843" />
          <Path d="M6.5 17.5l5.5 -4.5l5.5 4.5" />
          <Path d="M12 7v1m0 4v1" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

