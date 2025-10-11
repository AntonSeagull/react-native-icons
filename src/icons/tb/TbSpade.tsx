

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSpade = (props: IconProps) => {

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
          <Path d="M12 3l4.919 4.5c.61 .587 1.177 1.177 1.703 1.771a5.527 5.527 0 0 1 .264 6.979c-1.18 1.56 -3.338 1.92 -4.886 .75v1l1 3h-6l1 -3v-1c-1.54 1.07 -3.735 .772 -4.886 -.75a5.527 5.527 0 0 1 .264 -6.979a30.883 30.883 0 0 1 1.703 -1.771a1541.72 1541.72 0 0 1 4.919 -4.5z" />
        </G>
      </Svg>
    );
  }

