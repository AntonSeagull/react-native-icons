

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNumber41Small = (props: IconProps) => {

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
          <Path d="M15 8h1v8" />
          <Path d="M6 8v3a1 1 0 0 0 1 1h3" />
          <Path d="M10 8v8" />
        </G>
      </Svg>
    );
  }

