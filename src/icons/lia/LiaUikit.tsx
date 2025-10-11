

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaUikit = (props: IconProps) => {

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
          <Path d="M22.2 6.7L17.9 9.2 23 12.1 23 19.9 16 24 9 19.9 9 14.4 5 12 5 22.5 16 29 27 22.5 27 9.5zM20.2 5.5L16 3 11.8 5.5 16 8z" />
        </G>
      </Svg>
    );
  }

