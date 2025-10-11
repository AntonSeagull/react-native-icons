

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbOvalVerticalFilled = (props: IconProps) => {

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
          <Path d="M12 5c-5.457 0 -10 3.028 -10 7s4.543 7 10 7s10 -3.028 10 -7s-4.543 -7 -10 -7z" />
        </G>
      </Svg>
    );
  }

