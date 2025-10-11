

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuilding = (props: IconProps) => {

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
          <Path d="M3 21l18 0" />
          <Path d="M9 8l1 0" />
          <Path d="M9 12l1 0" />
          <Path d="M9 16l1 0" />
          <Path d="M14 8l1 0" />
          <Path d="M14 12l1 0" />
          <Path d="M14 16l1 0" />
          <Path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
        </G>
      </Svg>
    );
  }

