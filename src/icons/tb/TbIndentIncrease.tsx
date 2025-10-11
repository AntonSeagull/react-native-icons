

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIndentIncrease = (props: IconProps) => {

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
          <Path d="M20 6l-11 0" />
          <Path d="M20 12l-7 0" />
          <Path d="M20 18l-11 0" />
          <Path d="M4 8l4 4l-4 4" />
        </G>
      </Svg>
    );
  }

