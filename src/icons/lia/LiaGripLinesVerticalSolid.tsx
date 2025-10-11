

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaGripLinesVerticalSolid = (props: IconProps) => {

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
          <Path d="M 11 3 L 11 29 L 13 29 L 13 3 L 11 3 z M 19 3 L 19 29 L 21 29 L 21 3 L 19 3 z" />
        </G>
      </Svg>
    );
  }

