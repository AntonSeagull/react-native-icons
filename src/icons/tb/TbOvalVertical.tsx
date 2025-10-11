

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbOvalVertical = (props: IconProps) => {

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
          <Path d="M3 12c0 -3.314 4.03 -6 9 -6s9 2.686 9 6s-4.03 6 -9 6s-9 -2.686 -9 -6z" />
        </G>
      </Svg>
    );
  }

