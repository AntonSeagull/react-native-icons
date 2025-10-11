

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbParentheses = (props: IconProps) => {

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
          <Path d="M7 4a12.25 12.25 0 0 0 0 16" />
          <Path d="M17 4a12.25 12.25 0 0 1 0 16" />
        </G>
      </Svg>
    );
  }

