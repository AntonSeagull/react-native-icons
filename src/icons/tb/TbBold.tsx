

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBold = (props: IconProps) => {

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
          <Path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
          <Path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
        </G>
      </Svg>
    );
  }

