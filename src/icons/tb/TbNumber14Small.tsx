

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNumber14Small = (props: IconProps) => {

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
          <Path d="M8 8h1v8" />
          <Path d="M13 8v3a1 1 0 0 0 1 1h3" />
          <Path d="M17 8v8" />
        </G>
      </Svg>
    );
  }

