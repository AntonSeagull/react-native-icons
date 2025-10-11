

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaExclamationSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 13 4 L 13 20 L 19 20 L 19 4 Z M 15 6 L 17 6 L 17 18 L 15 18 Z M 13 22 L 13 28 L 19 28 L 19 22 Z M 15 24 L 17 24 L 17 26 L 15 26 Z" />
        </G>
      </Svg>
    );
  }

