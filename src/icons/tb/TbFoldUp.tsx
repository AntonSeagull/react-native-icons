

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFoldUp = (props: IconProps) => {

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
          <Path d="M12 13v-8l-3 3m6 0l-3 -3" />
          <Path d="M9 17l1 0" />
          <Path d="M14 17l1 0" />
          <Path d="M19 17l1 0" />
          <Path d="M4 17l1 0" />
        </G>
      </Svg>
    );
  }

