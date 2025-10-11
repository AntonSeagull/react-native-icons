

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgBorderRight = (props: IconProps) => {

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
          <Path d="M8 16V8H15V5L5 5L5 19H15L15 16H8Z" fill="currentColor" />
          <Path d="M17 19L17 5L20 5L20 19H17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

