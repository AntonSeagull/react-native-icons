

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLabelOff = (props: IconProps) => {

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
          <Path d="M7 7h-1a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h10.52a1 1 0 0 0 .394 -.081m1.86 -2.137l2.226 -2.782l-3.7 -4.625a1 1 0 0 0 -.78 -.375h-5.52" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

