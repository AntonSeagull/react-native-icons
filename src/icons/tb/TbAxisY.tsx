

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAxisY = (props: IconProps) => {

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
          <Path d="M11 20h-.01" />
          <Path d="M15 20h-.01" />
          <Path d="M19 20h-.01" />
          <Path d="M4 7l3 -3l3 3" />
          <Path d="M7 20v-16" />
        </G>
      </Svg>
    );
  }

