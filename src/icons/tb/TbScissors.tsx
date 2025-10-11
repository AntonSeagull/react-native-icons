

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScissors = (props: IconProps) => {

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
          <Path d="M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M8.6 8.6l10.4 10.4" />
          <Path d="M8.6 15.4l10.4 -10.4" />
        </G>
      </Svg>
    );
  }

