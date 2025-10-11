

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIndentDecrease = (props: IconProps) => {

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
          <Path d="M20 6l-7 0" />
          <Path d="M20 12l-9 0" />
          <Path d="M20 18l-7 0" />
          <Path d="M8 8l-4 4l4 4" />
        </G>
      </Svg>
    );
  }

