

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaGripLinesSolid = (props: IconProps) => {

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
          <Path d="M 3 11 L 3 13 L 29 13 L 29 11 L 3 11 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z" />
        </G>
      </Svg>
    );
  }

