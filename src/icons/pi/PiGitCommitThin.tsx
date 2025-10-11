

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGitCommitThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M248,124H179.83a52,52,0,0,0-103.66,0H8a4,4,0,0,0,0,8H76.17a52,52,0,0,0,103.66,0H248a4,4,0,0,0,0-8ZM128,172a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,172Z" />
        </G>
      </Svg>
    );
  }

