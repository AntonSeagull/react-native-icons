

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBookmarksOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M128,80V64a48.14,48.14,0,0,1,48-48H400a48.14,48.14,0,0,1,48,48V432l-80-64" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M320,96H112a48.14,48.14,0,0,0-48,48V496L216,368,368,496V144A48.14,48.14,0,0,0,320,96Z" fill="none" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

