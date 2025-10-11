

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutTabWindow = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 2h-12v14h17v-14h-5zM16 3v2h-4v-2h4zM11 3v2h-5v-2h5zM1 3h4v2h-4v-2zM16 15h-15v-9h15v9z" fill="#000000" />
        </G>
      </Svg>
    );
  }

