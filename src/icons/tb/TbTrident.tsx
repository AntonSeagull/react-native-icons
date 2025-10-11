

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTrident = (props: IconProps) => {

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
          <Path d="M3 6l2 -2v3a7 7 0 0 0 14 0v-3l2 2" />
          <Path d="M12 21v-18l-2 2m4 0l-2 -2" />
        </G>
      </Svg>
    );
  }

