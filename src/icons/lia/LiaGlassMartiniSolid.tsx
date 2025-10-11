

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaGlassMartiniSolid = (props: IconProps) => {

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
          <Path  d="M 5 5 L 5 6.3398438 L 15 19.339844 L 15 26 L 10 26 L 10 28 L 22 28 L 22 26 L 17 26 L 17 19.339844 L 27 6.3398438 L 27 5 L 5 5 z M 8.03125 7 L 23.96875 7 L 22.429688 9 L 11.919922 9 L 13.458984 11 L 20.892578 11 L 16 17.359375 L 8.03125 7 z" />
        </G>
      </Svg>
    );
  }

