

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaStrava = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M 14.179688 2 L 5.9003906 18 L 10.779297 18 L 14.179688 11.619141 L 17.560547 18 L 22.400391 18 L 14.179688 2 z M 22.400391 18 L 20 22.789062 L 17.560547 18 L 13.859375 18 L 20 30 L 26.099609 18 L 22.400391 18 z" />
        </G>
      </Svg>
    );
  }

