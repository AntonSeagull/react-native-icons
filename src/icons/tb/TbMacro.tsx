

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMacro = (props: IconProps) => {

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
          <Path d="M6 15a6 6 0 1 0 12 0" />
          <Path d="M18 15a6 6 0 0 0 -6 6" />
          <Path d="M12 21a6 6 0 0 0 -6 -6" />
          <Path d="M12 21v-10" />
          <Path d="M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5z" />
        </G>
      </Svg>
    );
  }

