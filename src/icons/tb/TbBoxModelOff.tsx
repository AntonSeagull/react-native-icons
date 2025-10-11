

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBoxModelOff = (props: IconProps) => {

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
          <Path d="M12 8h4v4m0 4h-8v-8" />
          <Path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
          <Path d="M16 16l3.3 3.3" />
          <Path d="M16 8l3.3 -3.3" />
          <Path d="M8 8l-3.3 -3.3" />
          <Path d="M8 16l-3.3 3.3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

