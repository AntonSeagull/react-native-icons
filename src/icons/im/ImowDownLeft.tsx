

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImowDownLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11.5 16l-4-4 8.5-8.5-3.5-3.5-8.5 8.5-4-4v11.5h11.5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

